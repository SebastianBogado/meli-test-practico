import React from 'react';
import { Link } from 'react-router';
import Price from '../../Price/Price';
import style from './style.css';
import freeShipping from './ic_shipping.png';
import freeShipping2x from './ic_shipping@2x.png';


const Items = props => (
  <div>
    { props.items.length === 0 && 'No se encontraron resultados' }
    { props.items.map(item => (
      <Link key={item.id} className={style.item} to={`/items/${item.id}`}>
        <img className={style.thumbnail} src={item.picture} alt="" />
        <div className={style.info} >
          <div className={style.priceAndShipping}>
            <Price className={style.price} price={item.price} />
            { item.free_shipping && <img className={style.freeShipping} src={freeShipping} srcSet={`${freeShipping2x} 2x`} alt="" /> }
          </div>
          <div className={style.title}>
            {item.title}
          </div>
        </div>
        <div className={style.city}> {item.seller_city} </div>
      </Link>
    ))}
  </div>
);

Items.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object),
};

Items.defaultProps = {
  items: [],
};

export default Items;
