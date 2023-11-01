import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BasicReport, FavouriteList, FoodSearch } from "./usda_nutrition";

export const App = () => {
  const navigate = useNavigate();

  const handleFavourite = () => {
    navigate("/favotite-food");
  };
  return (
    <>
      <div className="App"></div>
      <header className="App-header">
        <h1 className="content"> USDA Food Nutrition App </h1>
        <button className="favorite-button" onClick={handleFavourite}>
          Favourite Food
        </button>
        <div>
          <Routes>
            <Route path="/" element={<FoodSearch />} />
            <Route path="/basic-report/:fdcId" element={<BasicReport />} />
            <Route path="/favotite-food" element={<FavouriteList />} />
          </Routes>
        </div>
      </header>
    </>
  );
};
