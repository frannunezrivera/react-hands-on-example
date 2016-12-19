import React, {Component} from 'react';
import Item from '../Item/Item';

class ItemList extends Component {
    render() {
        let items = [];
        this.props.items.forEach((itemObj) => {
            if(itemObj.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 || (!itemObj.superSale && this.props.superSaleOnly)) {
                return;
            }
            items.push(<Item item={itemObj} key={itemObj.name}/>);
        });
        return <ul className="item-list">{items}</ul>;
    }
}

export default ItemList;