import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const MealContext = createContext();

export const MealContextProvider = props => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    try {
      const getMealSuggestions = async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
        setMeals(response.data.meals);
      };
      getMealSuggestions();
    } catch (err) {
      return err;
    }
  }, []);

  const fetchUserMeals = meal => {
    try {
      const getUserEnteredMeal = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
        setMeals(response.data.meals);
      };
      getUserEnteredMeal();
    } catch (err) {
      return err;
    }
  };

  return <MealContext.Provider value={{ meals, fetchUserMeals }}>{props.children}</MealContext.Provider>;
};
