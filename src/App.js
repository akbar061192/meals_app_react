import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import MealInfo from './pages/MealInfo/MealInfo';
import Categories from './pages/Categories/Categories';
import RandomMeal from './pages/RandomMeal/RandomMeal';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mealId' element={<MealInfo />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/random-meal' element={<RandomMeal />} />
      </Routes>
    </div>
  );
};

export default App;
