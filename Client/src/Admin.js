import React from "react";

export default function Admin({
  cakes,
  handleCakeName,
  cakename,
  handleAddCake,
  form,
  handleChange,
  deleteCake,
}) {
  return (
    <div>
      <input
        onChange={handleCakeName}
        value={cakename}
        placeholder="Filter by cakename"
      />
      <div>
        {cakes.map((cake, index) => {
          return (
            <div key={index}>
              <h3>{cake.cakename}</h3>
              <p>Size: {cake.size}</p>
              <p>Price: £{cake.price}</p>
              <img className="cakes-img" src={cake.image} />

              <span onClick={() => deleteCake(cake._id, cake.cakename)}>X</span>
            </div>
          );
        })}
      </div>
      <h2>Add a Cake</h2>
      <form onSubmit={handleAddCake}>
        <input
          name="cakename"
          value={form.cakename}
          onChange={handleChange}
          placeholder="cakename"
        />
        <input
          name="size"
          value={form.size}
          onChange={handleChange}
          placeholder="Size"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="image"
        />
        <button type="submit">Add Cake</button>
      </form>
    </div>
  );
}
