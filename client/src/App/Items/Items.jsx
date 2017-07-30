import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import style from './style.css';
import freeShipping from './ic_shipping.png';
import freeShipping2x from './ic_shipping@2x.png';

function pedo() {
  console.log('should navigate!');
}

const Items = (props) => (
  <div>
    <Breadcrumbs categories={props.categories} />
    <div className={style.container}>
      { props.items.map( item => (
        <div className={style.item} onClick={pedo}>
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


Items.defaultProps = {
  categories: [
    'Electronica, Audio y video',
    'iPod',
    'Reproductores',
    'isdfgsdfgsdgsdf',
    '3ffffd'
  ],
  items: [{
    id: "MLA603701702",
    title: "Apple Ipod Touch 6ta Gen 16gb Ultima Generacion Caja Sellad",
    price: {
      currency: "ARS",
      amount: 5999,
      decimals: 97
    },
    picture: "http://mla-s1-p.mlstatic.com/977901-MLA20426607586_092015-I.jpg",
    condition: "new",
    free_shipping: false
  }, {
    id: "MLA614828692",
    title: "Ipod Shuffle 2gb",
    price: {
      currency: "ARS",
      amount: 1639,
      decimals: 0
    },
    picture: "http://mla-s1-p.mlstatic.com/12803-MLA20066552976_032014-I.jpg",
    condition: "used",
    free_shipping: true
  }]
};

export default Items;
