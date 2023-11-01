import React, { useEffect, useState } from "react";
import "./FavouriteFood.css";

type foodIdType = {
  fdcId: string;
};
export const FavouriteFood = (props: foodIdType) => {
  const { fdcId } = props;
  const [favourites, setFavourites] = useState<any>([]);

  const toggleFavorite = (foodId: string) => {
    if (favourites.includes(foodId)) {
      const newFavourites = favourites.filter((fav: string) => fav !== foodId);
      setFavourites(newFavourites);
      localStorage.setItem("favorites", JSON.stringify(newFavourites));
    } else {
      const newFavourites = [...favourites, foodId];
      setFavourites(newFavourites);
      localStorage.setItem("favorites", JSON.stringify(newFavourites));
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ).filter(
      (arr: any, index: any, item: string | any[]) =>
        item.indexOf(arr) === index
    );
    setFavourites(storedFavorites);
  }, []);

  return (
    <button className="button-space" onClick={() => toggleFavorite(fdcId)}>
      {favourites.includes(fdcId) ? "Unfavorite" : "Favorite"}
    </button>
  );
};
