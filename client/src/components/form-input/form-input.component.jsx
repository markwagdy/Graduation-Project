import React from 'react';
import './form-input.style.scss';

const FormInput=({handlChange,label,placeholder,...otherProps})=>(
        <div className='unit'>
        {label?
        (
                <label className='form-input-label'>{label}  </label>
        ):null
        }
        <input className={`${label?'form2':'form-input'}`} onChange={handlChange} placeholder={placeholder}/>
        </div>
      
    
);
export default FormInput;