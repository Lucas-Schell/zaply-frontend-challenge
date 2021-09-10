import { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Input from '../Input';
import Button from '../Button';
import classes from '../../styles/Modal.module.css'

export default function TransitionsModal(props) {
  const {
    productId: productIdP,
    image: imageP,
    name: nameP,
    categories: categoriesP,
    price: priceP,
    brand: brandP,
    onSubmit,
    onDelete,
    onCreate,
    isCreate,
    isOpen,
    closeModal,
    resultRequest
  } = props;

  const [image, setImage] = useState(imageP || '');
  const [name, setName] = useState(nameP || '');
  const [categories, setCategories] = useState(categoriesP || '');
  const [price, setPrice] = useState(priceP || '');
  const [brand, setBrand] = useState(brandP || '');
  const [productId, setProductId] = useState(productIdP || '');
  const [open, setOpen] = useState(!isOpen);
  const [resultEdit, setResultEdit] = useState('');

  useEffect(() => {
    if (isCreate) {
      setImage('');
      setName('');
      setCategories('');
      setPrice('');
      setBrand('');
      setProductId('');
    }
  }, [isCreate]);

  useEffect(() => {
    setOpen((prevState => !prevState));
  }, [isOpen]);

  useEffect(() => {
    setResultEdit(resultRequest);
  }, [resultRequest]);

  const sets = {
    image: setImage,
    name: setName,
    categories: setCategories,
    price: setPrice,
    brand: setBrand,
    productId: setProductId
  }

  const onChange = (event) => {
    sets[event.target.name](event.target.value);
  }

  const handleClose = () => {
    closeModal()
  };

  const handleDelete = () => {
    onDelete(productIdP)
  };

  const handleCreate = () => {
    onCreate({ image, name, categories, price, brand, productId })
  };

  const handleSubmit = () => {
    onSubmit({ productId: productIdP, image, name, categories, price, brand });
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>{isCreate ? 'Adicionar produto' : 'Editar produto'}</h2>
            {isCreate && (
              <>
                <label className={classes.label}>Id </label>
                <Input value={productId} name={'productId'} placeHolder={'Id'} onChange={onChange}/>
              </>
            )}

            <label className={classes.label}>Nome </label>
            <Input value={name} name={'name'} placeHolder={'Nome'} onChange={onChange}/>

            <label className={classes.label}>Marca </label>
            <Input value={brand} name={'brand'} placeHolder={'Marca'} onChange={onChange}/>

            <label className={classes.label}>Categoria </label>
            <Input value={categories} name={'categories'} placeHolder={'Categoria'} onChange={onChange}/>

            <label className={classes.label}>Preço </label>
            <Input value={price} name={'price'} placeHolder={'Preço'} onChange={onChange}/>

            <label className={classes.label}>Link da Imagem </label>
            <Input value={image} name={'image'} placeHolder={'Link da Imagem'} onChange={onChange}/>

            {resultEdit && <p>{resultEdit}</p>}
            {!isCreate && <div className={classes.buttonContainer}>
              <Button type="button" onClick={handleClose} color={'grey'}>
                Fechar
              </Button>
              <Button type="button" onClick={handleDelete} color={'red'}>
                Excluir
              </Button>
              <Button type="button" onClick={handleSubmit}>
                Salvar
              </Button>
            </div>}
            {isCreate && (
              <Button type="button" onClick={handleCreate}>
                Criar
              </Button>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
