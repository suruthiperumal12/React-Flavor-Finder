import { useEffect, useState } from "react";
import styles from "./fooddetials.module.css";
import Itemlist from "./Itemlist";

export default function Fooddetials({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "af1c2bf17db448b189a39cfe9e333f47";
  useEffect(() => {
    async function fetchfood() {
      try {
        const response = await fetch(URL, {
          headers: {
            "Content-Type": "application/json", // Indicates that the request body is in JSON format Optional for GET request, but fine to include
            "x-api-key": apiKey, // Sends the API key for authentication
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP status error ${response.status}`);
        }
        if (response.status == 402) {
          throw new Error(
            "Payment Required. Daily quota exceeded. Please try again tomorrow or upgrade your plan."
          );
        }
        const data = await response.json();
        console.log(data);
        setFood(data);
        setisLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchfood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} alt={food.title} className={styles.recipeImage} />
        <div className={styles.recipeDetials}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕vegetarian" : "🍖Nonvegetarian"}
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <div className={styles.ingredianth1}>
          <h2>Ingrediants</h2>
        </div>
        <Itemlist food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          {isLoading ? (
            <p>....Loading</p>
          ) : (
            <ol>
              {food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number} className={styles.recipeList}>
                  {step.step}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
