// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './Components/RecipeList';
import RecipeDetail from './Components/RecipeDetails';
import SearchBar from './Components/SearchBar';

const sampleRecipes = [
  {
    idMeal: '1',
    strMeal: 'Noodles',
    strMealThumb: 'https://holycowvegan.net/wp-content/uploads/2021/04/indian-style-chili-garlic-noodles-featured-image.jpg',
    strInstructions: 'Step 1: Prepare Noodles Step. 2: Heat oil. 3:Sauté Garlic 4:Add Vegetables and Protein 5:Add Noodles 6:Add Sauces 7:Finish and Serve',
    strIngredients: ['Noodle', 'Water', 'salt','Olive oil or cooking oil (optional)'],
    strCategory: 'Chinese'
  },
  {
    idMeal: '2',
    strMeal: 'Paneer Tikka Masala',
    strMealThumb: 'https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-4.jpg',
    strInstructions: 'Step 1: Marinate Paneer. Step 2: Preparing the Gravy. Step 3:Add Paneer Tikka',
    strIngredients: ['250 grams paneer (cut into cubes)', '1/2 cup yogurt (curd)', '1 tablespoon gram flour (besan)','1 tablespoon ginger-garlic paste','1 teaspoon red chili powder','1 teaspoon turmeric powder','1 teaspoon garam masala', '1 teaspoon coriander powder','1 teaspoon cumin powder','1 teaspoon chaat masala'],
    strCategory: 'Punjabi'
  },
  // Add more sample recipes here
];


const App = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(sampleRecipes);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredRecipes(sampleRecipes.filter(recipe => 
      recipe.strMeal.toLowerCase().includes(lowerCaseQuery)
    ));
  };

  return (
    <Router>
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<RecipeList recipes={filteredRecipes} />} />
        <Route path="/recipe/:idMeal" element={<RecipeDetail recipes={sampleRecipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
