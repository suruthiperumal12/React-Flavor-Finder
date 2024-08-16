import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./App.css";
import Fooddetials from "./components/Fooddetials";
import Modal from "./components/Modal";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewRecipe = (id) => {
    setFoodId(id);
    setShowModal(true);
  };
  return (
    <div className="App">
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodId={handleViewRecipe} />
      <Modal show={showModal} setShowModal={setShowModal}>
        <Fooddetials foodId={foodId} />
      </Modal>
    </div>
  );
}

export default App;
