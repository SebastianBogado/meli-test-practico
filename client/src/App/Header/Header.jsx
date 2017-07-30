import React from 'react';
import bootstrap from '../../bootstrap.css';
import style from './style.css';
import logo from './Logo_ML.png';
import logo2x from './Logo_ML@2x.png';
import search from './ic_Search.png';
import search2x from './ic_Search@2x.png';

// bootstrap == worst decision ever

class Header extends React.Component {
  submit = (e) => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <div className={style.header}>
        <div className={bootstrap.container}>
          <div className={bootstrap.row}>
            <div className={[
            bootstrap['col-xs-12'],
            bootstrap['col-md-offset-1'],
            bootstrap['col-md-10'],
          ].join(' ')}
            >
              <div className={[
              bootstrap['col-xs-2'],
              bootstrap['col-md-1'],
            ].join(' ')}
              >
                <img src={logo} srcSet={logo2x + ' 2x'} />
              </div>
              <div className={[
              bootstrap['col-xs-10'],
              bootstrap['col-md-11'],
            ].join(' ')}
              >
                <form className={style.search} onSubmit={this.submit}>
                  <input type="text" placeholder="Nunca dejes de buscar"/>
                  <button type="submit">
                    <img src={search} srcSet={search2x + ' 2x'} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;