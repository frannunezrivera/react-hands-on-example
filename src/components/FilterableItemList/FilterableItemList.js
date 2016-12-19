import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ItemList from '../ItemList/ItemList';

class FilterableItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText   : '',
            superSaleOnly: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterText, superSaleOnly) {
        this.setState({
            filterText   : filterText,
            superSaleOnly: superSaleOnly
        });
    }

    render() {
        return <div>
            <SearchBar
                filterText={this.state.filterText}
                superSaleOnly={this.state.superSaleOnly}
                onUserInput={this.handleUserInput}
            />
            <ItemList
                items={this.props.items}
                filterText={this.state.filterText}
                superSaleOnly={this.state.superSaleOnly}
            />
        </div>;
    }
}

export default FilterableItemList;