import RecipeList from "../components/RecipeList";
import recipesData from "../lib/db.json";

async function getData() {
  const res = recipesData;

  return res;
}

export default async function Recipe() {
  const data = await getData();

  return (
    <main className="container">
      Recetas App
      <section className="mt-5 p-5 bg-indigo-500 flex flex-col rounded">
        <label className="text-white font-bold text-lg uppercase text-center m-2">
          Buscar
        </label>
        <input
          type="text"
          placeholder="Ingrese su busqueda"
          className="p-3 bg-indigo-900 text-white text-lg font-semibold placeholder-indigo-200 border-white border bg-transparent rounded outline-none"
        />
      </section>
      <RecipeList recipes={data.recetas} />
    </main>
  );
}