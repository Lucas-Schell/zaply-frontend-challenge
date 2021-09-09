import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import classes from '../../styles/SearchBar.module.css'

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const { onSearchHandler, categories } = props;

  const onSubmitHandler = () => {
    onSearchHandler(searchValue.trim(), dropdownValue)
  }

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value)
  }

  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmitHandler()
    }
  }

  const onDropdownChangeHandler = (event) => {
    setDropdownValue(event.target.value)
    onSearchHandler(searchValue.trim(), event.target.value)
  }

  return (
    <>
      <div className={classes.container}>
        <Input value={searchValue} onChange={onChangeHandler} onKeyPress={keyPressHandler}/>
        <Button onClick={onSubmitHandler}>
          Pesquisar
        </Button>
      </div>
      <div className={classes.filters}>
        <label>
          Filtre por categorias:
          <select value={dropdownValue} onChange={onDropdownChangeHandler}>
            <option value={""}>Selecione algum filtro</option>
            {categories.map(item => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
        </label>
      </div>
    </>
  );
};

export default SearchBar;
