import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "./data";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const { productId } = useParams();
  const products = productData.find(
    (product) => product.id === parseInt(productId)
  );
  const { name, img, price } = products;
  return (
    <div>
      <div className="single-product">
        <img src={img} alt="No logo found" />
        <div>
          <h3>{name}</h3>
          <div className="card-badge">
            <span className="badge">${price}</span>
            <button className="buy">Buy</button>
          </div>
        </div>
      </div>
      <Link to="/products" className="btn">
        Back to products
      </Link>
    </div>
  );
};
export default SingleProduct;
