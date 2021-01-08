import React from 'react';
import './form-input.style.scss';

const FormInput=({handlChange,placeholder,...otherProps})=>(
        <input className='form-input' onChange={handlChange} placeholder={placeholder}/>
      
    
);
export default FormInput;