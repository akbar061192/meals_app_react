import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      const getMealInfo = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        setCategories(response.data.categories);
      };
      getMealInfo();
    } catch (err) {
      return err;
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '60px', justifyContent: 'center', alignItems: 'center' }}>
      {categories.map(category => {
        return (
          <div
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px' }}
            key={category.idCategory}
          >
            <img style={{ width: '200px' }} src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
