import React, { useEffect, useState } from 'react';
import './MealInfo.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MealInfo = () => {
  const { mealId } = useParams();
  const [mealInfo, setMealInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getMealInfo = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        setMealInfo(response.data.meals);
      };
      getMealInfo();
    } catch (err) {
      return err;
    }
  }, [mealId]);

  const backToHome = () => {
    navigate('/');
  };

  return (
    <div className='meal-info-container'>
      <button onClick={backToHome} className='meal-info-btn'>
        Back
      </button>

      <section>
        {mealInfo.map(meal => {
          return (
            <div key={meal.idMeal} className='meal-info'>
              <img style={{ width: '500px', borderRadius: '5px', marginRight: '30px' }} src={meal.strMealThumb} alt={meal.strMeal} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <p>Instructions : {meal.strInstructions}</p>
                <p>Meal Name : {meal.strMeal}</p>
                <p>
                  Youtube :<a href={meal.strYoutube}>{meal.strYoutube}</a>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MealInfo;
