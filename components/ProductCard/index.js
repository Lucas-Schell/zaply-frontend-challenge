import React from 'react';
import classes from '../../styles/Product.module.css'
import ProductImage from './ProductImage';

const Product = (props) => {
  const { id, image, name, categories, price, brand } = props;

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <ProductImage
          loader={({ src, width }) => `${src}?w=${width}`}
          layout={"fixed"}
          src={image}
          alt={name}
          height={150}
          width={150}
          fallbackSrc={'/imgNotFound.svg'}
        />
      </div>
      <h4 className={`${classes.title} ${classes.noMargin}`}>{name}</h4>
      <p className={`${classes.brand} ${classes.noMargin}`}>{brand}</p>
      <div className={classes.test}>
        <h4 className={`${classes.price} ${classes.noMargin}`}>{price}</h4>
        <p className={`${classes.category} ${classes.noMargin}`}>{categories}</p>
      </div>
    </div>
  );
};

export default Product;
