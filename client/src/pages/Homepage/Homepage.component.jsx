import React from 'react';
import './Homepage.style.scss';
import SignIn from '../../components/Sign-In/Sign-In.component';
const HomePage=()=>(
    <div className='homepage'>
        <div className="img" >
        <h2 className="slogan">SLOGAN</h2>
        <div className='right-half'>
        <h1 class="mini-title" >WELCOME</h1>
        <SignIn className='login-form'></SignIn>
        </div>
        </div>
        
    </div>
);

export default HomePage;