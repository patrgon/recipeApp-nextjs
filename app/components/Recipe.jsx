import Link from "next/link";
import React from "react";

export default function Recipe({recipe}) {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="bg-white p-5 m-2 rounded-md cursor-pointer hover:bg-teal-500"
    >
      <p className="font-bold uppercase text-teal-950">{recipe.nombre}</p>
    </Link>
  );
}
