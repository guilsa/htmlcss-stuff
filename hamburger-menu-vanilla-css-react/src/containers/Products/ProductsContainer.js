import React, { Component } from 'react';
// import './styles.css';

class ProductsContainer extends Component {
  render() {
    // let data = this.props.state.data.products;
    console.log(this.props.data);
    return (
      <main>
        <div>products</div>
        <h1>header</h1>
      </main>
    );
  }
}

export default ProductsContainer;
