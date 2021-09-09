import React from 'react';
import classes from '../../styles/Input.module.css'

const Input = (props) => {
  const { value, onChange, onKeyPress } = props
  return (
    <input className={classes.input} onChange={onChange} value={value} onKeyPress={onKeyPress}/>
  );
};

export default Input;
