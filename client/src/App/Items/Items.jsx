import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import style from './style.css';
import freeShipping from './ic_shipping.png';
import freeShipping2x from './ic_shipping@2x.png';


const Items = (props) => (
  <div>
    <Breadcrumbs />
    <div className={style.container}>
      { props.items.map( item => (
        <div key={item.id} className={style.item} onClick={ () => props.viewItem(item.id) }>
          <img className={style.thumbnail} src={item.picture} />
          <div className={style.info} >
            <div className={style.priceAndShipping}>
              <span className={style.price}>{item.price.amount}</span>
              <img className={style.freeShipping} src={freeShipping} srcSet={freeShipping2x + ' 2x'} />
            </div>
            <div className={style.title}>
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Items.propTypes = {
  viewItem: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array,
  items: React.PropTypes.array,
};

Items.defaultProps = {
  categories: [],
  items: []
};

export default Items;
