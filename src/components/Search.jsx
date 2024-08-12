import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "af1c2bf17db448b189a39cfe9e333f47";

export default function ({ foodData, setFoodData }) {
  const [query, setQuery] = useState("dessert");
  useEffect(() => {
    async function fetchfood() {
      try {
        const response = await fetch(`${URL}?query=${query}`, {
          headers: {
            "Content-Type": "application/json", // Indicates that the request body is in JSON format Optional for GET request, but fine to include
            "x-api-key": apiKey, // Sends the API key for authentication
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error status:${response.status}`);
        }
        if (response.status === 402) {
          throw new Error(
            "Payment Required. Daily quota exceeded. Please try again tomorrow or upgrade your plan."
          );
        }
        const data = await response.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchfood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}
