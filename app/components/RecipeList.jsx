import Recipe from "./Recipe";
import recipesData from "../lib/db.json";

async function getData() {
  const res = recipesData;

  return res;
}

export default async function RecipeList({ recipes }) {
  const data = await getData();
  return (
    <section className="mt-5 p-5 bg-indigo-600 flex flex-col rounded">
      <p className="text-white font-bold text-lg uppercase text-center m-2">
        Lista de recetas
      </p>
      {data.recetas.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </section>
  );
}
