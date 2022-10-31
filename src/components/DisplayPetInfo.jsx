import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function DisplayPetInfo({ pet }) {
  if (!pet) return;
  console.log(pet);

  return (
    <div className="d-flex justify-content-center row m-5">
      <div className="card col-md-8 col-sm-12">
        <img
          className="card-img-top"
          src={pet?.image?.url}
          alt="Card img cap"
        />
        <div className="card-body">
          <h3 className="card-title">Name: {pet.name}</h3>
          <p className="card-text">
            <b>Description: </b>
            {pet.description ? pet.description : "Not Available"}
          </p>
          <p className="card-text">
            <b>origin: </b>
            {pet.origin ? pet.origin : "Not Available"}
          </p>
          <p className="card-text">
            <b>life_span : </b>
            {pet["life_span"]}
          </p>
          <p className="card-text">
            <b>weight : </b>
            {pet["weight"]["imperial"]} imperial
          </p>
          <p className="card-text">
            <b>temperament : </b>
            {pet["temperament"]}
          </p>
        </div>
      </div>
    </div>
  );
}
