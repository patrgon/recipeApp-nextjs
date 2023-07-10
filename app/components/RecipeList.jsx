'use client'
import Recipe from "./Recipe";
import recipesData from "../lib/db.json";
import { useEffect, useState } from "react";

export default function RecipeList({recipesFiltered}) {

  return (
    <section className="mt-5 p-5 bg-indigo-600 flex flex-col rounded">
      <p className="text-white font-bold text-lg uppercase text-center m-2">
        Lista de recetas
      </p>
      {recipesFiltered.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}/>
      ))}
    </section>
  );
}
