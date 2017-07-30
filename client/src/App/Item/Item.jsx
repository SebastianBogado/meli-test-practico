import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import style from './style.css';

const conditions_es = {
  'new': 'Nuevo',
  'used': 'Usado',
};

const unitsSold = (amount) => `${amount} vendido${amount !== 0 ? 's' : ''}`;

const Item = ({categories, item}) => (
  <div>
    <Breadcrumbs categories={categories} />
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
  categories: [
    'Electronica, Audio y video',
    'iPod',
    'Reproductores',
    'iPod touch',
    '32 GB'
  ],
  item: {
    id: "MLA603701702",
    title: "Apple Ipod Touch 6ta Gen 16gb Ultima Generacion Caja Sellad",
    price: {
      currency: "ARS",
      amount: 5999,
      decimals: 97
    },
    picture: "http://mla-s1-p.mlstatic.com/977901-MLA20426607586_092015-I.jpg",
    condition: "new",
    free_shipping: false,
    sold_quantity: 155,
    description: '<table width="900" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/header.gif" height="227" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/ipod touch 2016.jpg" height="4000" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/mercado.jpg" height="232" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/envios.gif" height="400" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/facebook.gif" height="425" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/pie.jpg" height="794" width="900" /></td></tr></tbody></table>'
  }
};

export default Item;