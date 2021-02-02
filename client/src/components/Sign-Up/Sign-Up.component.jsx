import React from 'react';
import CustomButton from '../CustomButton/Custom-Button.component';
import FormInput from '../form-input/form-input.component';
import './Sign-Up.style.scss';
const SignUp =()=>(
    
            <div className='sign-up'>
            <div className='student-dr'>
               <button className='btn'>Student</button> 
               <button className='btn1'>Doctor/Ta</button>  
               <form className='form'>
               <FormInput label='Name'  placeholder='Name' id='name'></FormInput>               
               <FormInput label='Id' placeholder='Id' className='id' id='id'></FormInput>               
               <FormInput label='Email' placeholder='Email' id='email' ></FormInput>               
               <FormInput label='password' placeholder='password' type='password' id='password' ></FormInput>               
               <FormInput label='confirm password' placeholder='confirm password' id='password' type='password'></FormInput>               
               <div className='genderUnit'>
                  <label className='genderLabel'>Gender</label>
                  <div className='buttons'>
                  <span className='btnM'>Male</span>
                  <span className='btnF'>Female</span>
                  </div>
               </div> 
               <div className='yourPhoto'>
                  <label className='genderLabel'>Your Photo</label>
                  <div className='dragphoto'>
                     <p className='pa'>Drag file here or</p>
                     <input type="file" className='custom-file-input'></input>
                     <div className='trans'>boom</div>
                  </div>
               </div>
               <CustomButton id='signup'>Sign Up</CustomButton>
               </form>       
              
            
            </div>

            </div>
    
)
export default SignUp;