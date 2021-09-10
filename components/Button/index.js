import React from 'react';
import classes from '../../styles/Button.module.css'

const Button = (props) => {
  const { onClick, children, color } = props

  return (
    <button className={`${classes.button} ${color ? classes[color] : ''}`} onClick={onClick} type={'button'}>{children}</button>
  );
};

export default Button;
