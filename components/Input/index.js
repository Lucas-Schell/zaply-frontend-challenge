import React from 'react';
import classes from '../../styles/Input.module.css'

const Input = (props) => {
  const { value, onChange, onKeyPress, placeHolder, name } = props
  return (
    <input
      name={name}
      className={classes.input}
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
      placeholder={placeHolder}
    />
  );
};

export default Input;
