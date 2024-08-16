import FoodItem from "./FoodItem";
import Styles from "./foodlist.module.css";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className={Styles.itemcontainer}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
