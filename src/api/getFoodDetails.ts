import axios from "axios";
import { apiKey, baseURL } from "./constant";

export async function getFoodDetails(fdcId: string | undefined) {
  try {
    const response = await axios.get(`${baseURL}/food/${fdcId}`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching food details:", error);
    throw error;
  }
}
