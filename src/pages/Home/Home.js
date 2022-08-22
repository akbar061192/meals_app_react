import React, { useState, useContext } from 'react';
import { MealContext } from '../../context/MealContext/MealContext';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [meal, setMeal] = useState('');
  const { meals, fetchUserMeals } = useContext(MealContext);

  const handleMealChange = event => {
    setMeal(event.target.value);
  };

  const searchMeal = event => {
    event.preventDefault();
    fetchUserMeals(meal);
  };

  return (
    <div className='home-container'>
      <form onSubmit={searchMeal} className='home-input'>
        <input type='text' placeholder='Search Meal' className='input' value={meal} onChange={handleMealChange} />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>

      <section className='meals-container'>
        {meals.map(meal => {
          return (
            <Link to={`/${meal.idMeal}`} key={meal.idMeal} className='meal-container'>
              <img style={{ width: '300px', borderRadius: '5px' }} src={meal.strMealThumb} alt={meal.strMeal} />
              <h3 style={{ textAlign: 'center' }}>{meal.strMeal}</h3>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
