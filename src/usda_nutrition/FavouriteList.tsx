import React from "react";
import { Link } from "react-router-dom";

export const FavouriteList = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return favorites.length ? (
    <ul>
      {favorites.map((item: string, i: string) => (
        <>
          <li key={i}>
            <Link to={`/basic-report/${item}`}>{item}</Link>
          </li>
        </>
      ))}
    </ul>
  ) : (
    <h4> No Favorites For Now</h4>
  );
};
