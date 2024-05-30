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
        + `https://gmarc27.github.io/LearnIT/ResetPassword?token=${token}\n\n`
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
    studentID: String,
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    age: { type: Number, default: 0 }, // Default value: 0 for age
    birthday: { type: Date, default: new Date('2000-01-01') }, // Default value: January 1, 2000 for birthday
    course: { type: String, default: 'Unknown' }, // Default value: 'Unknown' for course
    school: { type: String, default: 'Unknown' }, // Default value: 'Unknown' for school
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const courseSchema = new mongoose.Schema({
    courseID: Number,
    title: String,
    description: String,
    content: String,
    progress: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // This references the User collection
    }
  });

const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

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
        await User.create({ studentID, email, firstName, lastName, password: hashedPassword });
        res.status(201).json({ message: 'User data inserted successfully' });
    } catch (error) {
        console.error('Error inserting user data:', error);
        res.status(500).json({ error: 'Error inserting user data' });
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

app.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, age, birthday, course, school, bio } = req.body;
    
    try {
      await User.findByIdAndUpdate(userId, { 
        firstName, 
        lastName, 
        age, 
        birthday, 
        course, 
        school, 
        bio 
      });
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
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
        if (user) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
            await User.findByIdAndUpdate(user._id, { password: hashedPassword, resetPasswordToken: null, resetPasswordExpires: null });
            res.json({ message: 'Password reset successfully' });
        } else {
            res.status(400).json({ error: 'Invalid or expired token' });
        }
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
