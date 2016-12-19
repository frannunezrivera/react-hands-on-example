import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value,
            this.superSaleOnlyInput.checked
        );
    }

    render() {
        return (
            <form>
                <input
                    type="text" placeholder="Search..."
                    ref={(input) => this.filterTextInput = input}
                    value={this.props.filterText}
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.superSaleOnly}
                        ref={(input) => this.superSaleOnlyInput = input}
                        onChange={this.handleChange}
                    />
                    {' '}
                    <span className="check-title">Only SUPER SALE products</span>
                </p>
            </form>
        );
    }
}

export default SearchBar;