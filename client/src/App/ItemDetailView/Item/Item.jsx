import React from 'react';
import Price from '../../Price/Price.jsx';
import style from './style.css';

// This would be tied to a translation feature
const conditions_es = {
  'new': 'Nuevo',
  'used': 'Usado',
};

const unitsSold = (amount) => `${amount} vendido${amount !== 0 ? 's' : ''}`;

const Item = ({ item }) => (
  <div>
    <div className={style.overview}>
      <img className={style.picture} src={item.picture} />
      <div className={style.info}>
        <div>
          <span>{conditions_es[item.condition]}</span> - <span>{unitsSold(item.sold_quantity)}</span>
        </div>
        <div className={style.title}>{item.title}</div>
        <Price className={style.price} price={item.price} />
        <button className={style.buyButton}>Comprar</button>
      </div>
    </div>
    <div className={style.description}>
      <div>Descripción del producto</div>
      <div dangerouslySetInnerHTML={ { __html: item.description }} />
    </div>
  </div>
);


Item.propTypes = {
  item: React.PropTypes.object
};

Item.defaultProps = {
  item: {}
};

export default Item;
