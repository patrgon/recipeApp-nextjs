import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <section className="mt-5 p-5 bg-indigo-600 flex flex-col rounded">
      <p className="text-white font-bold text-lg uppercase text-center m-2">
        Lista de recetas
      </p>
      {recipes.map((recipe) => (
        <div className="bg-white p-5 m-2 rounded-md cursor-pointer hover:bg-teal-500">
          <p className="font-bold uppercase text-teal-950">{recipe.nombre}</p>
        </div>
      ))}
    </section>
  );
}
