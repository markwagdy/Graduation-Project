import React from 'react';
import './Cutsom-Button.style.scss';

const CustomButton=({children,...otherProps}) => (
    <button className={'CustomButton'}{...otherProps}>{children}</button>
);
export default CustomButton;
