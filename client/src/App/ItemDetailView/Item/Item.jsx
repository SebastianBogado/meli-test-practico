import React from 'react';
import Price from '../../Price/Price';
import style from './style.css';

// This would be tied to a translation feature
const conditions = {
  new: 'Nuevo',
  used: 'Usado',
};

const unitsSold = amount => `${amount} vendido${amount !== 0 ? 's' : ''}`;

const Item = ({ item }) => (
  <div>
    <div className={style.overview}>
      <img className={style.picture} src={item.picture} alt="" />
      <div className={style.info}>
        <div>
          <span>{conditions[item.condition]}</span> - <span>{unitsSold(item.sold_quantity)}</span>
        </div>
        <div className={style.title}>{item.title}</div>
        <Price className={style.price} price={item.price} />
        <button className={style.buyButton}>Comprar</button>
      </div>
    </div>
    <div className={style.description}>
      <div>Descripción del producto</div>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  </div>
);


Item.propTypes = {
  item: React.PropTypes.shape({
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    price: React.PropTypes.shape({
      currency: React.PropTypes.string,
      amount: React.PropTypes.number,
      decimals: React.PropTypes.number,
    }),
    picture: React.PropTypes.string,
    condition: React.PropTypes.oneOf(['new', 'used']),
    free_shipping: React.PropTypes.bool,
    sold_quantity: React.PropTypes.number,
    description: React.PropTypes.string,
  }),
};

Item.defaultProps = {
  item: {},
};

export default Item;
