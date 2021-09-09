import React from 'react';
import classes from '../../styles/Button.module.css'

const Button = (props) => {
  const { onClick, children } = props

  return (
    <button className={classes.button} onClick={onClick} type={'button'}>{children}</button>
  );
};

export default Button;
