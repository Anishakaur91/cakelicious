import "./Product.css";
import React from "react";
import { useCart } from "react-use-cart";

// import { Helmet } from "react-helmet-async";

// import cheesecake from "../../Assets/cheesecake.jpeg";
// import chocolatecake from "../../Assets/chocolatecake.jpg";
// import lemoncake from "../../Assets/lemoncake.jpg";
// import raspberrycake from "../../Assets/raspberrycake.jpg";
// import strawberrycake from "../../Assets/strawberrycake.jpg";

export default function Product({
  cakes,
  // handleCakeName,
  // cakename,
  // handleAddCake,
  deleteCake,
  // form,
  // handleChange,
}) {
  const { addItem } = useCart();
  return (
    <>
      <main>
        <div classname="cakes-container" container>
          <section className="cake-container container">
            {/* <Helmet> */}
            <title>Cakelicious product page</title>
            <meta
              name="description"
              content="This is the main page that displays list of cakes."
            />
            <link rel="canonical" href="/products" />
            {/* </Helmet> */}

            {/* return ( */}

            {/* <input
            onChange={handleCakeName}
            value={cakename}
            placeholder="Filter by cakename"
          /> */}
            {cakes.map((cake, index) => {
              return (
                <div key={index}>
                  <h3>{cake.cakename}</h3>
                  <p>Size: {cake.size}</p>
                  <p>Price: £{cake.price}</p>
                  <img className="cakes-img" src={cake.image} />

                  <span onClick={() => deleteCake(cake._id, cake.cakename)}>
                    X
                  </span>
                  <br></br>
                  <button
                    className="addtocart"
                    onClick={() => addItem({ ...cake, id: cake._id })}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
            {/* <h2>Add a Cake</h2>
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
            <button type="submit">Add Cake</button>
          </form>*/}

            {/* ); */}
          </section>
        </div>
      </main>
    </>
  );
}
