import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, seProduct] = useState({});
  const [relatedProducts,setRelatedProduct] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    seProduct(filterProduct[0]);

    const relatedProducts = items.filter((product)=>product.category === product.category)
    setRelatedProduct(relatedProducts)
  }, [id]);
  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary">{product.price} ₹</button>
          <button className="btn btn-warning my-2 m-3">Add To Cart</button>
        </div>
      </div>
      <h1 className="text-center text-success">Related Product</h1>
      <Product items ={relatedProducts} />
    </>
  );
};

export default ProductDetail;
