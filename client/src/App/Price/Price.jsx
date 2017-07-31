import React from 'react';
import style from './style.css';


const Item = ({ className, price }) => (
  <span className={className}>
    <span className={style.currency}>{price.currency}</span>
    <span className={style.amount}>{price.amount.toLocaleString('es-AR')}</span>
    { price.decimals !== 0 && <span className={style.decimals}>{price.decimals}</span> }
  </span>
);


Item.propTypes = {
  price: React.PropTypes.object,
  className: React.PropTypes.string,
};


Item.defaultProps = {
  price: { amount: 0 },
  className: '',
};

export default Item;
