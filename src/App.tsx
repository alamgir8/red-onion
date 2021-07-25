import { useEffect, useState } from "react";
import FoodCard from "./components/home/FoodCard";
import Header from "./components/home/Header";
import Navigation from "./components/shared/Navigation";


interface Ifoods {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}


function App() {
  const [foods, setFoods] = useState([] as Ifoods[]);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    let unmounted = false;
    const getFoods = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f&s=${searchText}`
      );
      const data = await res.json();
      if (!unmounted) {
        setFoods(data.meals);
      }
    };

    getFoods();
    return () => {
      unmounted = true;
    };
  }, [searchText]);

  console.log(foods);
  return (
    <div className="min-h-screen font-lato">
      <Navigation />
      <Header searchText={(food) => setSearchText(food) } />
      <div className="container mx-auto">
      <div className="flex flex-wrap overflow-y-scroll h-screen scrollbar-hide">
        {foods.map((food) => (
          <FoodCard
            key={food.idMeal}
            title={food.strMeal}
            image={food.strMealThumb}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
