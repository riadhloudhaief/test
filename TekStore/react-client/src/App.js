import './App.css'
import axios from "axios";
import data from "./data.json"
import Search from './components/Search'
import ProductsList from './components/ProductsList'
import React, { useState } from 'react'
import CartList from './components/CartList'
import productDetails from './components/ProductDetails'

const App = () => {
  const [menuView, setMenuView] = useState(false);
  const[products,setProducts]=useState(data);
  const [view, setView] = useState('productList');
  const[currentProductDetails,setCurrentProductDetails]=useState({});
const[updater,setUpdater]=useState(false);
const[total,setTotal]=useState(0);
const[list,setList]=useState()
const toggleMenu = () => {
  setMenuView(!menuView);
};

const getProductByCategory = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/products/${name}`
    );
    setProducts(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleSearch = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/products/query/${name}`
    );
    setProducts(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleUpdate = async (obj, id) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/products/${id}`,
      obj
    );
    setUpdater(!updater);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );
    setUpdater(!updater);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (body) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/products",
      body
    );
    setUpdater(!updater);
    setView("productList");
  } catch (error) {
    console.log(error);
  }
  console.log("body from create product", body);
};

const switchView = (option) => {
  setView(option);
};

const showDetails = (view, element) => {
  console.log("view", view, element);
  setView(view);
  setCurrentProductDetails(element);
};

const fetch = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }
};

// useEffect(() => {
//   fetch();
// }, [updater]);

return (
  <div className="App">
    <div className="nav">
      <span
        className="logo"
        onClick={() => {
          switchView("productList");
          fetch();
        }}
      >
        TEK STORE
      </span>
      {view === "productList" && <Search handleSearch={handleSearch} />}
      {view === "productList" && (
        <span className="items" onClick={toggleMenu}>
          &#9660; CATEGORIES &#9660;
        </span>
      )}
      <span className="items" onClick={() => switchView("cart")}>
        🛒 CART
      </span>
      <span className="items" onClick={() => switchView("addproduct")}>
        Add Product
      </span>
    </div>
    {menuView && (
      <div className="menu">
        <span className="menu-item" onClick={() => fetch()}>
          All
        </span>
        <span
          className="menu-item"
          onClick={() => getProductByCategory("computers")}
        >
          Computers
        </span>
        <span
          className="menu-item"
          onClick={() => getProductByCategory("phones")}
        >
          Phones
        </span>
        <span
          className="menu-item"
          onClick={() => getProductByCategory("electronics")}
        >
          Electronics
        </span>
      </div>
    )}
    {view === "productList" && (
      <ProductsList
        showDetails={showDetails}
        products={products}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    )}
    {view === "cart" && <CartList />}
    {view === "productDetails" && (
      <productDetails currentProductDetails={currentProductDetails} />
    )}
    {view === "addproduct" && <add createProduct={createProduct} />}
  </div>
);
};

export default App;