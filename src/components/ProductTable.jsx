import ProductRow from './ProductRow';

import React, { Component } from 'react';

export default class ProductTable extends Component {
  render() {

  //  console.log(this.props.products.data);

    return (
      <div>
        <table>
          <thead>
            <tr style={{ display: 'flex' }}>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, i) => (
              <ProductRow
                key={i}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
