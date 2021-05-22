import React from 'react';
import './form-input.style.scss';

const FormInput=({handlChange,label,placeholder,id,type,name,value,...otherProps})=>(
        <div className='unit'>
                
        {label?
        (
                <label className='form-input-label'>{label}  </label>
        ):null
        }
        <input className={`${label?'form2':'form-input'}` } id={`${id}`} onChange={handlChange} placeholder={placeholder} type={type}/>
      
        </div>
      
    
);

export default FormInput;