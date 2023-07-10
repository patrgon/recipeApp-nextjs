"use client";
import React, { useState } from "react";

export default function SearchBar({ recipes, setRecipesFiltered }) {
  const [recipeInput, setRecipeInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var search = recipes.filter(recipe => recipe.nombre.toLowerCase().includes(recipeInput.toLowerCase()));

    setRecipesFiltered(search);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className=" mt-5 p-5 bg-indigo-500 flex rounded"
    >
      <input
        type="text"
        placeholder="Ingrese su busqueda"
        className="p-3 bg-indigo-900 text-white text-lg font-semibold placeholder-indigo-200 border-white border bg-transparent rounded outline-none w-full"
        onChange={(e) => {setRecipeInput(e.target.value)}}
      />
      <input
        type="submit"
        value="Buscar"
        className="p-3 ml-2 bg-slate-50 rounded cursor-pointer uppercase font-bold text-indigo-800 hover:text-indigo-500"
      />
    </form>
  );
}
