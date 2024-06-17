// src/components/RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css';

const RecipeDetail = ({ recipes }) => {
  const { idMeal } = useParams();
  const recipe = recipes.find((r) => r.idMeal === idMeal);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className={styles.recipeDetail}>
      <h1 className={styles.recipeTitle}>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
      <h2 className={styles.recipeCategory}>Category: {recipe.strCategory}</h2>
      <h3>Ingredients</h3>
      <ul className={styles.ingredientList}>
        {recipe.strIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p className={styles.instructions}>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
