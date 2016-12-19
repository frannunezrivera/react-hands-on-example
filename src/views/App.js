import React, {Component} from 'react';

import PRODUCTS from '../static/data/products';
import logo from '../static/images/logo.svg';
import './App.css';

import FilterableItemList from '../components/FilterableItemList/FilterableItemList';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <FilterableItemList items={PRODUCTS}/>
                </p>
            </div>
        );
    }
}

export default App;
