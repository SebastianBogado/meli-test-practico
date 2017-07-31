import React from 'react';
import bootstrap from '../../bootstrap.css';
import style from './style.css';
import logo from './Logo_ML.png';
import logo2x from './Logo_ML@2x.png';
import search from './ic_Search.png';
import search2x from './ic_Search@2x.png';

// bootstrap == worst decision ever

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: props.searchInitialValue };
  }

  componentDidMount() {
    if (this.props.searchInitialValue) this.props.search(this.state.searchValue);
  }

  searchInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.search(this.state.searchValue);
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
                <img src={logo} srcSet={`${logo2x} 2x`} alt="" />
              </div>
              <div className={[
                bootstrap['col-xs-10'],
                bootstrap['col-md-11'],
              ].join(' ')}
              >
                <form className={style.search} onSubmit={this.submit}>
                  <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    value={this.state.searchValue}
                    onChange={this.searchInputChange}
                  />
                  <button type="submit">
                    <img src={search} srcSet={`${search2x} 2x`} alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  search: React.PropTypes.func.isRequired,
  searchInitialValue: React.PropTypes.string,
};

Header.defaultProps = {
  searchInitialValue: '',
};

export default Header;
