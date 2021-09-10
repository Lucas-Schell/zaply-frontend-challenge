import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import classes from '../../styles/SearchBar.module.css'

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [order, setOrder] = useState('asc');
  const { onSearchHandler, categories } = props;

  const onSubmitHandler = () => {
    onSearchHandler(searchValue.trim(), categoryValue, sortValue, order)
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
    setCategoryValue(event.target.value)
    onSearchHandler(searchValue.trim(), event.target.value, sortValue, order)
  }

  const onSortChangeHandler = (event) => {
    setSortValue(event.target.value)
    onSearchHandler(searchValue.trim(), categoryValue, event.target.value, order)
  }

  const onOrderChangeHandler = (event) => {
    setOrder(event.target.value)
    onSearchHandler(searchValue.trim(), categoryValue, sortValue, event.target.value)
  }

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchBar}>
          <Input value={searchValue} onChange={onChangeHandler} onKeyPress={keyPressHandler} placeHolder={'Buscar'}/>
          <Button onClick={onSubmitHandler}>
            Pesquisar
          </Button>
        </div>
      </div>
      <div className={classes.filters}>
        <select className={classes.select} value={categoryValue} onChange={onDropdownChangeHandler}>
          <option value={''}>Filtre por categoria</option>
          {categories.map(item => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
        <select className={classes.select} value={sortValue} onChange={onSortChangeHandler}>
          <option value={''}>Ordem dos itens</option>
          <option value={'name'}>Nome</option>
          <option value={'price'}>Preço</option>
          <option value={'brand'}>Marca</option>
          <option value={'categories'}>Categoria</option>
        </select>
        <select className={classes.select} value={order} onChange={onOrderChangeHandler}>
          <option value={'asc'}>Ordem</option>
          <option value={'asc'}>asc</option>
          <option value={'desc'}>desc</option>
        </select>
      </div>
    </>
  );
};

export default SearchBar;
