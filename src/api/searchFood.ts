import axios from "axios";
import { apiKey, baseURL } from "./constant";

export async function searchFood(query: string) {
  try {
    const response = await axios.get(`${baseURL}/foods/search`, {
      params: {
        query,
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching foods:", error);
    throw error;
  }
}
