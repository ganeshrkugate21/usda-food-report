import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFoodDetails } from "../api";
import "./BasicReport.css";

interface FoodParams {
  fdcId: string;
}

type FoodNutrients = {
  nutrient: { name: string; unitName: string };
};

export const BasicReport = () => {
  const { fdcId } = useParams<FoodParams | any>();
  const [food, setFood] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        setLoading(true);
        const response = await getFoodDetails(fdcId);
        setFood(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };
    fetchFoodDetails();
  }, [fdcId]);
  return (
    <div className="content">
      <h2 className="titleColor">Food Name & Nutrients</h2>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        food && (
          <Fragment>
            <div>
              <h3>{food.description}</h3>
            </div>
            <div>
              <table>
                <tbody>
                  <th className="headingColor">Nutrient_Name</th>
                  <th className="headingColor">UnitName</th>
                  {food?.foodNutrients?.map(
                    (foodName: FoodNutrients, i: string) => (
                      <tr key={i}>
                        <td>{foodName.nutrient.name}</td>
                        <td>{foodName.nutrient.unitName}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </Fragment>
        )
      )}
    </div>
  );
};
export default BasicReport;
