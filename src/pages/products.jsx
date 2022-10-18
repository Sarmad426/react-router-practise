import React from "react";
import { Link } from "react-router-dom";
import { productData } from "./data";
const Products = () => {
  return (
    <section>
      <div className="products">
        {productData.map((item) => (
          <div key={item.id} className="product">
            <img src={item.img} alt="No Logo found" />
            <h3>{item.name}</h3>
            <Link to={`/products/${item.id}`} className="link">
              more info
            </Link>
          </div>
        ))}
      </div>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};

export default Products;
