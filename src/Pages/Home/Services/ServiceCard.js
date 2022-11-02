import React from "react";

const ServiceCard = ({service}) => {
    const {img, title, price} = service
  return (
    <div className="card card-compact w-96 bg-lime-100 shadow-xl mb-10">
      <figure>
        <img className="p-5" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl font-semibold text-orange-500">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
