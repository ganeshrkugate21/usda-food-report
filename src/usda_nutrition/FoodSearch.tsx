import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchFood } from "../api";
import { FavouriteFood } from "./FavouriteFood";

type foodListType = {
  fdcId: string;
  description: string;
};

export const FoodSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>();

  const handleSearch = async () => {
    try {
      if (searchTerm) {
        setLoading(true);
        const response = await searchFood(searchTerm);
        setData(response.foods);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Food"
        />
        <button onClick={handleSearch}>Search</button>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <ul>
            {data.map((food: foodListType) => (
              <>
                <li key={food.fdcId}>
                  <Link to={`/basic-report/${food.fdcId}`}>
                    {food.description}
                  </Link>
                  <FavouriteFood fdcId={food?.fdcId} />
                </li>
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FoodSearch;
