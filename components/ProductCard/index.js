import React from 'react';
import classes from '../../styles/Product.module.css'
import ProductImage from './ProductImage';
import Modal from '../Modal';

const Product = (props) => {
  const { productId, image, name, categories, price, brand, onClick } = props;

  const onClickHandler = () => {
    onClick({ productId, image, name, categories, price, brand })
  }

  return (
    <div className={classes.container} onClick={onClickHandler}>
      <div className={classes.top}>
        <div className={classes.imageContainer}>
          <ProductImage
            loader={({ src, width }) => `${src}?w=${width}`}
            layout={'fixed'}
            src={image}
            alt={name}
            height={150}
            width={150}
            fallbackSrc={'/imgNotFound.svg'}
          />
        </div>
        <h4 className={`${classes.title} ${classes.noMargin}`}>{name}</h4>
        <p className={`${classes.brand} ${classes.noMargin}`}>{brand}</p>
      </div>
      <div>
        <div className={classes.bottom}>
          <h4 className={`${classes.price} ${classes.noMargin}`}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price)}</h4>
          <p className={`${classes.category} ${classes.noMargin}`}>{categories}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
