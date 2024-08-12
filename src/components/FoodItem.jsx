import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemcontainer}>
      <div className={styles.imagecontainer}>
        <img src={food.image} alt={food.title} className={styles.itemimage} />
      </div>
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => setFoodId(food.id)}
          className={styles.itembutton}
        >
          view Recipe
        </button>
      </div>
    </div>
  );
}
