import React from 'react'

function Product(props){
  return(
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              alt="Sepatu Converse"
              src="https://images.nike.com/is/image/DotCom/PDP_HERO/132170C_001_A_PREM/converse-chuck-taylor-all-star-leather-unisex-high-top-shoe.jpg"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.produk.name}</p>
              <div className="content">
                aman<br />
              </div>
              <h5>{props.produk.price}</h5>
              <button className="button is-primary"
              onClick={(event) => {
                event.preventDefault();
                props.addItemToChartAsAProps(props.produk)
              }}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Product
