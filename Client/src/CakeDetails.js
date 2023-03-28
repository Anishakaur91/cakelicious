import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CakeDetails() {
  const [cake, setCake] = useState({});
  const [form, setForm] = useState({
    cakename: "",
    size: "",
    price: "",
    img: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getCakes();
  }, []);
  async function getCakes() {
    const API = `http://localhost:8081/cakes?_id=${id}`;
    const res = await axios.get(API);
    setCake(res.data[0]);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.cakename]: event.target.value });
  }

  async function handleUpdateCake(event) {
    event.preventDefault();
    const body = {};
    // go through property item in the object
    for (const prop in form) {
      // if the property is not empty, then add it to our body object
      if (form[prop]) {
        body[prop] = form[prop];
      }
    }
    // so we end up with a body object which is only the fields the user has type in
    const API = `http://localhost:8081/cakes/${id}`;
    await axios.put(API, body);

    const newCake = { ...cake, ...body };
    setCake(newCake);
  }

  return (
    <div>
      <h2>{cake.cakename}</h2>
      <p>{cake.size}</p>
      <p>{cake.price}</p>
      <p>{cake.img}</p>
      <h3>Update details of Cake</h3>
      <form onSubmit={handleUpdateCake}>
        <input
          name="cakename"
          value={form.cakename}
          placeholder={cake.cakename}
          onChange={handleChange}
        />
        <input
          name="size"
          value={form.size}
          placeholder={cake.size}
          onChange={handleChange}
        />
        <input
          name="price"
          value={form.price}
          placeholder={cake.price}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
