import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/LoginScreen');
    };


    return (
        <div className='HomePage'>
                <div className='navbar'>
                    <div className='Logo'>.png</div>
                    <div className='center'></div>
                    <div className='Home'>
                        <form onSubmit={handleSubmit} >
                            <button type="submit" className='HomeLoginButton'>Sign In</button>
                        </form>
                    </div>
                </div>

                <div className='TitleName'>
                    {/*<img src='/Logo.png' alt='Title'/>*/}
                    <h1>LearnIT</h1>
                </div>

                <div className='HomepageContainer'>
                    <div className='HomepageConatiner2'>
                        <h1>Explore</h1>
                        <div className='HomeContent'>Content</div>
                    </div>
                    <div className='HomepageConatiner2'>
                        <h1>Select Course</h1>
                        <div className='HomeContent'>Content</div>
                    </div>
                    <div className='HomepageConatiner2'>
                        <h1>More</h1>
                        <div className='HomeContent'>Content</div>
                    </div>
                </div>

        </div>
     
    );
};

export default Login;