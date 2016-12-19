import React, {Component} from 'react';
import './Item.css';

class Item extends Component {
    render() {
        let superSale = this.props.item.superSale ? 'super-sale' : '';
        // There are many ways

        return <li className={"item " + superSale}>
            <span className="name">{this.props.item.name}</span>
            <span className="price">{this.props.item.price}</span></li>;
    }
}

export default Item;