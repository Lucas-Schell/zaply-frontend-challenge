import { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Input from '../Input';
import Button from '../Button';
import classes from '../../styles/Modal.module.css'

export default function TransitionsModal(props) {
  const {
    productId,
    image: imageP,
    name: nameP,
    categories: categoriesP,
    price: priceP,
    brand: brandP,
    onSubmit,
    isOpen,
    closeModal,
    resultEdit: resultEditP
  } = props;

  const [image, setImage] = useState(imageP || '');
  const [name, setName] = useState(nameP || '');
  const [categories, setCategories] = useState(categoriesP || '');
  const [price, setPrice] = useState(priceP || '');
  const [brand, setBrand] = useState(brandP || '');
  const [open, setOpen] = useState(!isOpen);
  const [resultEdit, setResultEdit] = useState('');

  useEffect(() => {
    setOpen((prevState => !prevState));
  }, [isOpen]);

  useEffect(() => {
    setResultEdit(resultEditP);
  }, [resultEditP]);

  const sets = {
    image: setImage,
    name: setName,
    categories: setCategories,
    price: setPrice,
    brand: setBrand
  }

  const onChange = (event) => {
    sets[event.target.name](event.target.value);
  }

  const handleClose = () => {
    closeModal()
  };

  const handleSubmit = () => {
    onSubmit({ productId, image, name, categories, price, brand });
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
            <h2>Editar item</h2>
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
            <div className={classes.buttonContainer}>
              <Button type="button" onClick={handleClose} color={'grey'}>
                Fechar
              </Button>
              <Button type="button" onClick={handleSubmit}>
                Salvar
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
