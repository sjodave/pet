import React, { useEffect, useState } from "react";
import "./App.css";
import DisplayPetInfo from "./components/DisplayPetInfo";
export default function App() {
  // petCategory -> fetch data from url
  const [petCategory, setPetCategory] = useState("");
  const [petList, setPetList] = useState([]);
  const [petInfo, setPetInfo] = useState("");
  useEffect(() => {
    fetch(petCategory)
      .then((resp) => resp.json())
      .then((data) => setPetList(data));
  }, [petCategory]);
  const getPetInfo = (petId) => {
    // eslint-disable-next-line eqeqeq
    const pet = petList.filter((pet) => pet.id == petId.target.value);
    setPetInfo(pet[0]);
  };
  return (
    <div className="App flex">
      <h1 id="title">Pet Viewer</h1>
      <select
        className="form-select w-50"
        onChange={(e) => {
          e.target.value
            ? setPetCategory(
                `https://api.the${e.target.value}api.com/v1/breeds`
              )
            : setPetCategory("");
          setPetInfo("");
        }}
      >
        <option value={""}>Select Pet</option>
        <option value={"cat"} key={"cat"}>
          Cats
        </option>
        <option value={"dog"} key={"dog"}>
          Dogs
        </option>
      </select>
      <>
        {/* if pet category selected then only show select breed dropdown */}
        {petCategory ? (
          <select onChange={getPetInfo} className="form-select w-50">
            <option value={""}>Select breed</option>
            {petList.map((pet) => (
              <option value={pet.id} key={pet.name}>
                {pet.name}
              </option>
            ))}
          </select>
        ) : (
          ""
        )}
      </>
      <DisplayPetInfo pet={petInfo}></DisplayPetInfo>
    </div>
  );
}
