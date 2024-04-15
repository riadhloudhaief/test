import React from "react";
import UpdatedProuduct from "./UpdatedProuduct"
export default function OneProduct(props) {
  return (
    <div className="product-card">
      <img
        src={props.product.imageUrl}
        onClick={() => props.showDetails("productDetails", props.product)}
        alt="No content"
      />

      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <p className="card-item-price">Price: ${props.product.price}</p>
      <p className="card-item-cat">Category:{props.product.categories} </p>
      <div className="product-card-buttons">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >

            
          Update Product
        </button>
        <UpdatedProuduct
          product={props.product}
          handleUpdate={props.handleUpdate}
        />
        <button onClick={() => props.handleDelete(props.product.id)}>
          Delete Product
        </button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}