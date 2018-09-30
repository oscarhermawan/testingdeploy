import React from 'react'

function ShoppingChart(props){
  return (
    <div className="column">
      <h3 className="title is-4">Shopping Cart</h3>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.cartItemAsAProps.map(item => (
            <tr>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="button is-danger is-small" onClick={(event) => {
                  event.preventDefault();
                  props.incrementOrDec(item)
                }}>

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>G
      <h3>Total : Rp 0</h3>
    </div>
  )
}

export default ShoppingChart
