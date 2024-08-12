import styles from "./itemlist.module.css";
export default function Itemlist({ food, isLoading }) {
  return (
    <div className={styles.itemlistcontainer}>
      {" "}
      {isLoading ? (
        <p>....Loading</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div className={styles.itemlistcontainer}>
            <ol>
              <li key={item.id}>
                {item.name} {item.amount} <span>{item.unit}</span>
              </li>
            </ol>
          </div>
        ))
      )}
    </div>
  );
}
