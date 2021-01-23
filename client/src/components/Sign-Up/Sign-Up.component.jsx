import React from 'react';
import FormInput from '../form-input/form-input.component';
import './Sign-Up.style.scss';
const SignUp =()=>(
    
            <div className='sign-up'>
            <div className='student-dr'>
               <button className='btn'>Student</button> 
               <button className='btn1'>Doctor/Ta</button>  
               <form className='form'>
               <FormInput label='Name' className='name' placeholder='Name'></FormInput>               
               <FormInput label='Id' placeholder='Id'></FormInput>               
               <FormInput label='Email' placeholder='Email'></FormInput>               
               <FormInput label='password' placeholder='password'></FormInput>               
               <FormInput label='confirm password' placeholder='confirm password'></FormInput>               
               </form>       
            
            </div>

            </div>
    
)
export default SignUp;