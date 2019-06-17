import React from "react";

const ItemCard = ({ name, description, price }) => {
  return (
    <>
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title"> </h5>
          {name}{" "}
          <span className="badge badge-pill badge-danger">
            <small>Original Price </small>
            <s>{`Rs. ${price} /-`}</s>
          </span>
          {"   "}
          <span className="badge badge-pill badge-primary">
            <small>Discount Price </small>

            <strong>{` Rs. ${price} /-`}</strong>
          </span>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
