import { useEffect, useState } from "react";
import FoodCard from "./components/home/FoodCard";
import Header from "./components/home/Header";
import Navigation from "./components/shared/Navigation";

interface Ifoods {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strInstructions : string;
}

function App() {
  const [foods, setFoods] = useState([] as Ifoods[]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f&s=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [searchText]);

  console.log(searchText, foods);

  console.log(foods);

  return (
    <div className="min-h-screen font-lato">
      <Navigation />
      <Header searchText={(food) => setSearchText(food)} />
      <div className="bg-gray-100">
        <div className="flex flex-wrap overflow-y-scroll h-screen scrollbar-hide">
          {isLoading && (
            <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>
          )}

          {foods === null && (
            <h1 className="text-6xl text-center mx-auto mt-20 text-red-600">
              {error ? error : "Please input a valid recipe name or letter!"}
            </h1>
          )}
          {foods?.map((food) => (
            <FoodCard
              key={food.idMeal}
              title={food.strMeal}
              image={food.strMealThumb}
              description={food.strInstructions}
              ingredient1={food.strIngredient1}
              ingredient2={food.strIngredient2}
              ingredient3={food.strIngredient3}
              ingredient4={food.strIngredient4}
              ingredient5={food.strIngredient5}
              ingredient6={food.strIngredient6}
              ingredient7={food.strIngredient7}
              ingredient8={food.strIngredient8}
              ingredient9={food.strIngredient9}
              ingredient10={food.strIngredient10}

            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
