import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Product from './Product.js'
import Shopping from './ShoppingCart.js'
import './App.css';

class App extends Component {
  state = {
    products:[],
    cartItem:[]
  }
  componentDidMount(){
    fetch('http://product-list.glitch.me/')
      .then(response => response.json())
      .then(hasil => this.setState({products:hasil}))
      .catch(err => console.log(err))
  }

  addItemToChart = product =>{
    let tmpItem = this.state.cartItem;
    let alreadyExists = this.state.cartItem.some((item) => item.product.id === product.id)
    if(alreadyExists === true){
      this.state.cartItem.map((item) => {
        if(item.product.id === product.id){
          item.quantity = item.quantity + 1;
        }
        return item
      })
    } else {
      tmpItem.push({
        product:product,
        quantity:1,
      })
    }
    this.setState({cartItem:tmpItem})
  }

  incOrDec = product => {
      let tmpItem = this.state.cartItem.filter(item => item.product.id === product.product.id)
  }

  render() {
    return (
      <div className="container">
      <Navbar />
      <div className="columns">
        <div className="column is-two-thirds">
          <div>
            <h3 className="title">Our Products</h3>
            <div className="columns">
              { this.state.products.map(product => (<Product key={product.id} produk={product} addItemToChartAsAProps={this.addItemToChart}/>))}
            </div>
          </div>
        </div>
        <Shopping cartItemAsAProps={this.state.cartItem} incrementOrDec={this.incOrDec}/>
      </div>
      </div>
    );
  }
}

export default App;
