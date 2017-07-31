import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import Item from './Item/Item.jsx';
import style from './style.css';

class ItemDetailView extends React.Component {
  componentWillMount() {
    const { item, currentItemId } = this.props;
    if (currentItemId !== item.id || !item.title) this.props.loadItemDetail(currentItemId);
  }

  render() {
    return (
      <div>
        <Breadcrumbs />
        <div className={style.container}>
          <Item item={this.props.item} />
        </div>
      </div>
    );
  }
}

ItemDetailView.propTypes = {
  loadItemDetail: React.PropTypes.func.isRequired,
  item: React.PropTypes.object,
  currentItemId: React.PropTypes.string,
};

ItemDetailView.defaultProps = {
  item: { id: '' },
  currentItemId: ''
};

export default ItemDetailView;
