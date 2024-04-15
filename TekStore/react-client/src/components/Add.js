import React, { useState } from "react";

export default function Add(props) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    categories: "electronics",
    imageUrl: "",
  });

  const handleSubmit = () => {
    console.log(product);
    props.createProduct(product);
  };

  const handlechange = (event) => {
    const { id, value } = event.target;

    setProduct({
      ...product,
      [id]: value,
    });
  };

  return (
    <div>
      <div className="mb-3">
        <label for="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="name@example.com"
          onChange={handlechange}
        />
      </div>
      <div className="mb-3">
        <label for="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="name@example.com"
          onChange={handlechange}
        />
      </div>
      <div className="mb-3">
        <label for="description" className="form-label">
          description
        </label>
        <textarea
          onChange={handlechange}
          className="form-control"
          id="description"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label for="categories" className="form-label">
          categories
        </label>
        <input
          className="form-control"
          list="datalistOptions"
          id="categories"
          placeholder="categories"
          onChange={handlechange}
        />
        <datalist onChange={handlechange} id="datalistOptions">
          <option value="computers" />
          <option value="phones" />
          <option value="electronics" />
        </datalist>
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">
          Default file input example
        </label>
        <input
          class="form-control"
          type="file"
          id="imageUrl"
          onChange={handlechange}
        />
      </div>
      <button
        onClick={() => handleSubmit()}
        type="button"
        class="btn btn-primary"
      >
        submit
      </button>
    </div>
  );
}