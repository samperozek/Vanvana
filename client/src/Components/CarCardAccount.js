import React, { useEffect, useState } from "react";

function CarCardAccount({carToRender, vanCounter}) {

    const handleDelete = (e) => {
    console.log(e)    
    fetch(`/vans/${e.target.value}`, {method: "DELETE"})
    .then(r => console.log(r))
    .then(vanCounter())
  }

  
  
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
          <br></br>
         <div className="outer">
          {/* <button className="card_button">Update</button> */}
          <br></br>
          <button value = {carToRender.id} className="card_button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CarCardAccount;