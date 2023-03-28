import "./App.css";
import { CartProvider } from "react-use-cart";

import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CakeDetails from "./CakeDetails.js";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Basket from "./Pages/Basket/Basket";
import Product from "./Pages/Product/Product";
import Admin from "./Admin.js";

function App() {
  // we create our front end by using these constructors
  const [cakes, setCakes] = useState([]);
  const [cakename, setCakeName] = useState("");
  const [form, setForm] = useState({
    cakename: "",
    size: "",
    price: "",
    img: "",
  });
  useEffect(() => {
    getCakes();
    console.log(cakename);
  }, [cakename]);

  async function getCakes() {
    let API = "http://localhost:8081/cakes";

    if (cakename !== "") {
      API = API + "?cakename=" + cakename;
    }
    const res = await axios.get(API);
    console.log(res.data);
    setCakes(res.data);
  }
  function handleCakeName(event) {
    setCakeName(event.target.value);
  }
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }
  async function handleAddCake(event) {
    event.preventDefault();
    const API = "http://localhost:8081/cakes";
    const res = await axios.post(API, form);

    //add our new cake to the page
    const newCakesList = [...cakes, res.data];
    setCakes(newCakesList);

    //reset the form
    setForm({
      cakename: "",
      size: "",
      price: "",
      img: "",
    });
  }
  async function deleteCake(id, cakename) {
    const confirmDelete = window.confirm(
      `Are you sure you want to permantently delete ${cakename}?`
    );
    if (confirmDelete) {
      const API = `http://localhost:8081/cakes/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getCakes();
    }
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleCakeName={handleCakeName}
                  cakename={cakename}
                  cakes={cakes}
                  handleAddCake={handleAddCake}
                  deleteCake={deleteCake}
                  form={form}
                  handleChange={handleChange}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/product"
              element={
                <Product
                  cakes={cakes}
                  cakename={cakename}
                  form={form}
                  deleteCake={deleteCake}
                  handleChange={handleChange}
                  handleCakeName={handleCakeName}
                  handleAddCake={handleAddCake}
                />
              }
            />
            <Route path="/cake/:id" element={<CakeDetails />} />
            <Route path="/basket" element={<Basket />} />
            <Route
              path="/admin"
              element={
                <Admin
                  cakes={cakes}
                  cakename={cakename}
                  form={form}
                  deleteCake={deleteCake}
                  handleChange={handleChange}
                  handleCakeName={handleCakeName}
                  handleAddCake={handleAddCake}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
