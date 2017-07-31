import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import style from './style.css';

const conditions_es = {
  'new': 'Nuevo',
  'used': 'Usado',
};

const unitsSold = (amount) => `${amount} vendido${amount !== 0 ? 's' : ''}`;

const Item = ({categories, item}) => (
  <div>
    <Breadcrumbs />
    <div className={style.container}>
      <div className={style.overview}>
        <img className={style.picture} src={item.picture} />
        <div className={style.info}>
          <div>
            <span>{conditions_es[item.condition]}</span> - <span>{unitsSold(item.sold_quantity)}</span>
            <div className={style.title}>{item.title}</div>
            <div className={style.price}>{item.price.amount}</div>
            <div className={style.price}>buy</div>
          </div>
        </div>
      </div>
      <div className={style.description}>
        <div>Descripción del producto</div>
        <div dangerouslySetInnerHTML={ { __html: item.description }} />
      </div>
    </div>
  </div>
);


Item.defaultProps = {
  categories: [],
  item: { price: {} }
};

export default Item;
