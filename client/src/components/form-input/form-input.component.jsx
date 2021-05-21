import React from 'react';
import './form-input.style.scss';

const FormInput=({handlChange,label,placeholder,id,type,name,value,...otherProps})=>(
        <div className='unit'>
                {/* {console.log('label '+label)} */}
        {label?
        (
                <label className='form-input-label'>{label}  </label>
        ):null
        }
        <input className={`${label?'form2':'form-input'}` } id={`${id}`} onChange={handlChange} {...otherProps} value={value} name={name} placeholder={placeholder} type={type}/>
       {
        //        console.log('name        '+name+'        value   '+value)
       
       }
        </div>
      
    
);

export default FormInput;