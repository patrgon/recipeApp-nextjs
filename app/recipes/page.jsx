'use client'
import { useState } from "react";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import db from "../lib/db.json";

export default function Recipe() {
const [recipes, setRecipes] = useState(db.recetas);
const [recipesFiltered, setRecipesFiltered] = useState(db.recetas);

  return (
    <main className="container">
      Recetas App
      <SearchBar recipes={recipes} setRecipesFiltered={setRecipesFiltered}/>
      <RecipeList recipesFiltered={recipesFiltered}/>
    </main>
  );
}