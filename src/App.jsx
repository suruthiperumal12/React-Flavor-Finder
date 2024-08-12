import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import "./App.css";
import Fooddetials from "./components/Fooddetials";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("648798");
  return (
    <div className="App">
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </Innercontainer>
        <Innercontainer>
          <Fooddetials foodId={foodId} />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
