import recipesData from "../../lib/db.json";

const fetchRecipeById = (id) => {
  const recipe = recipesData.recetas.find((recipe) => recipe.id == id);

  return recipe;
};

export default async function page({ params }) {
  const { id } = params;
  const recipe = await fetchRecipeById(id);

  return (
    <article className="flex flex-col bg-indigo-100">
      <h1 className="text-xl font-bold mb-2 text-center p-2">Receta para <span className="text-indigo-700 uppercase">{recipe.nombre}</span></h1>

      <section className="p-5 m-2">
        <h1 className="text-xl font-medium text-indigo-500">Ingredientes</h1>
        {recipe.ingredientes.map(ingrediente => (
            <p>{ingrediente}</p>
        ))}
      </section>

      <section className="p-5 m-2">
        <h1 className="text-xl font-medium text-indigo-500">Preparación</h1>
        {recipe.instrucciones.map(instruccion => (
            <p>{instruccion}</p>
        ))}
      </section>
    </article>
  );
}
