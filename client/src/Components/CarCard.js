import React from "react";

function CarCard({carToRender}) {
  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={carToRender.imageURL}
          alt={carToRender.make}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{carToRender.year} {carToRender.make} {carToRender.model}</div> 
          <div className="card__title">Price: ${carToRender.price}</div>
        </div>
      </div>
    </li>
  );
}

export default CarCard;