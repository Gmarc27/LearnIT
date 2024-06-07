const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const crypto = require('crypto'); // Import the crypto module
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://colladosgmarc06:SqMcSOzTpypuErxf@cluster0.6lpjbrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525, // or 2525 or 465
    auth: {
      user: 'bdcde6b9bbc552',
      pass: 'ccf0548a3b7ed0',
    },
  });
  
  const sendResetEmail = (email, token) => {
    const mailOptions = {
      from: 'LearnIT <support@LearnIT.com>',
      to: email,
      subject: 'Password Reset Request',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n`
        + `Please click on the following link, or paste this into your browser to complete the process:\n\n`
        + `https://gmarc27.github.io/LearnIT/LearnIT/ResetPassword?token=${token}\n\n`
        + `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending reset email:', error);
      } else {
        console.log('Reset email sent:', info.response);
      }
    });
  };
  

// Define MongoDB Schemas
const userSchema = new mongoose.Schema({
    studentID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, default: 0 },
    birthday: { 
        type: Date, 
        default: new Date('2000-01-01'),
        get: function() {
            return this.birthday.toISOString().split('T')[0];
        }
    },
    course: { type: String, default: 'Unknown' },
    school: { type: String, default: 'Unknown' },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const courseSchema = new mongoose.Schema({
    courseID: String,
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    progress: { type: Number, default: 0 },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const membersSchema = new mongoose.Schema({
    membersID: String,
    memberfirstName: String,
    memberlastName: String,
    memberEmail: String
});

courseSchema.index({ title: 1, user: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);
const Members = mongoose.model('Members', membersSchema);


//Get
// Get all members
app.get('/members', async (req, res) => {
    try {
        const members = await Members.find();
        res.json(members);
    } catch (error) {
        console.error('Error fetching members:', error);
        res.status(500).json({ error: 'Error fetching members' });
    }
});

// Add a member
app.post('/memberAdd', async (req, res) => {
    const { memberfirstName, memberlastName, memberEmail } = req.body;
    try {
        await Members.create({ memberfirstName, memberlastName, memberEmail });
        res.status(201).json({ message: 'Member added successfully' });
    } catch (error) {
        console.error('Error adding member:', error);
        res.status(500).json({ error: 'Error adding member' });
    }
});

// Delete a member
app.delete('/memberDelete', async (req, res) => {
    const { memberfirstName, memberlastName } = req.body;
    try {
        const memberToDelete = await Members.findOne({ memberfirstName, memberlastName });

        if (!memberToDelete) {
            return res.status(404).json({ error: 'Member not found' });
        }

        await Members.findByIdAndDelete(memberToDelete._id);

        res.json({ message: 'Member deleted successfully' });
    } catch (error) {
        console.error('Error deleting member:', error);
        res.status(500).json({ error: 'Error deleting member' });
    }
});

// Update a member by email
app.put('/members/:email', async (req, res) => {
    const { memberfirstName, memberlastName, memberEmail } = req.body;
    const memberEmailParam = req.params.email;

    try {
        const memberData = {
            memberfirstName,
            memberlastName,
            memberEmail
        };

        // Make sure not to update the _id field
        delete memberData._id;

        // Find member by email and update with new data
        const updatedMember = await Members.findOneAndUpdate(
            { memberEmail: memberEmailParam },
            memberData,
            { new: true }
        );

        if (!updatedMember) {
            return res.status(404).json({ error: 'Member not found' });
        }

        res.status(200).json({ message: 'Member data updated successfully', member: updatedMember });
    } catch (error) {
        console.error('Error updating member data:', error);
        res.status(500).json({ error: 'Error updating member data' });
    }
});


// Route definitions
app.get('/', (req, res) => {
    res.json("From Backend Side");
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
    }
});

app.get('/course', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Error fetching courses' });
    }
});

app.get('/users/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Error fetching user data' });
    }
});

app.get('/courses/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const courses = await Course.find({ user: userId }); // Assuming the field in the Course schema is named 'user'
        if (courses.length > 0) {
            res.json(courses);
        } else {
            res.status(404).json({ error: 'No courses found for this user' });
        }
    } catch (error) {
        console.error('Error fetching course data:', error);
        res.status(500).json({ error: 'Error fetching course data' });
    }
});
app.get('/course/:courseId', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.findById(courseId);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ error: 'Error fetching course' });
    }
});


app.post('/LoginScreen', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.json({ message: "Login Successfully", userId: user._id });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

app.post('/SignupScreen', async (req, res) => {
    const { studentID, email, firstName, lastName, password } = req.body;
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({ studentID, email, firstName, lastName, password: hashedPassword });
        console.log('User created:', newUser);
        res.status(201).json({ message: 'User data inserted successfully' });
    } catch (error) {
        console.error('Error details:', error);
        if (error.code === 11000) {
            res.status(409).json({ error: 'Duplicate entry detected' });
        } else if (error.name === 'ValidationError') {
            res.status(400).json({ error: 'Validation error' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
app.post('/addcourse', async (req, res) => {
    const { title, description, content, progress, userID } = req.body;
    try {
        await Course.create({ title, description, content, progress, user: userID });
        res.status(201).json({ message: 'Course data inserted successfully' });
    } catch (error) {
        console.error('Error inserting course data:', error);
        res.status(500).json({ error: 'Error inserting course data' });
    }
});

app.delete('/deletecourse', async (req, res) => {
    const { title, user } = req.body;
    try {
        // Find the course to be deleted based on the title and user
        const courseToDelete = await Course.findOne({ title, user });

        if (!courseToDelete) {
            return res.status(404).json({ error: 'Course not found' });
        }

        // Delete the course
        await Course.findByIdAndDelete(courseToDelete._id);

        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ error: 'Error deleting course' });
    }
});

app.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, age, birthday, course, school, bio } = req.body;
    
    try {
      const userData = {
        firstName, 
        lastName, 
        age, 
        birthday, 
        course, 
        school, 
        bio 
      };

      // Exclude the _id field from the update operation
      delete userData._id;

      await User.findByIdAndUpdate(userId, userData);
      res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
      console.error('Error updating user data:', error);
      res.status(500).json({ error: 'Error updating user data' });
    }
});


app.post('/ForgotPassword', async (req, res) => {
    const { email } = req.body;
    const token = crypto.randomBytes(20).toString('hex');
    const expiration = Date.now() + 3600000; // 1 hour from now

    try {
        const user = await User.findOneAndUpdate({ email }, { resetPasswordToken: token, resetPasswordExpires: expiration });
        if (user) {
            sendResetEmail(email, token);
            res.json({ message: 'Password reset email sent' });
        } else {
            res.status(404).json({ error: 'Email not found' });
        }
    } catch (error) {
        console.error('Error setting reset token:', error);
        res.status(500).json({ error: 'Error setting reset token' });
    }
});

// Handle POST requests to /ResetPassword
app.post('/ResetPassword', async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        user.password = hashedPassword;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        res.json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ error: 'Error resetting password' });
    }
});


app.get('/ResetPassword', (req, res) => {
    // Render the password reset page or send a redirect response
    res.sendFile(__dirname + '/path/to/password_reset_page.html');
});

// Start server
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
