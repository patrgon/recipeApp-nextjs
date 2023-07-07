import React from "react";

export default function Recipe({recipe}) {
  return (
    <div
      key={recipe.id}
      className="bg-white p-5 m-2 rounded-md cursor-pointer hover:bg-teal-500"
    >
      <p className="font-bold uppercase text-teal-950">{recipe.nombre}</p>
    </div>
  );
}
