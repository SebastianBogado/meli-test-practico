import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Price from '../Price/Price.jsx';
import style from './style.css';
import freeShipping from './ic_shipping.png';
import freeShipping2x from './ic_shipping@2x.png';


const Items = (props) => (
  <div>
    <Breadcrumbs />
    <div className={style.container}>
      { props.items.length === 0 && 'No se encontraron resultados' }
      { props.items.map( item => (
        <div key={item.id} className={style.item} onClick={ () => props.viewItem(item.id) }>
          <img className={style.thumbnail} src={item.picture} />
          <div className={style.info} >
            <div className={style.priceAndShipping}>
              <Price className={style.price} price={item.price} />
              { item.free_shipping && <img className={style.freeShipping} src={freeShipping} srcSet={freeShipping2x + ' 2x'} /> }
            </div>
            <div className={style.title}>
              {item.title}
            </div>
          </div>
          <div className={style.city}> {item.seller_city} </div>
        </div>
      ))}
    </div>
  </div>
);

Items.propTypes = {
  viewItem: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

Items.defaultProps = {
  items: []
};

export default Items;
