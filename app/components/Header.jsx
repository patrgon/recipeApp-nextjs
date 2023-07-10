"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation'

const links = [
  {
    label: "Inicio",
    route: "/",
    targetSegment: null,
  },
  {
    label: "Recetas",
    route: "/recipes",
    targetSegment: 'recipes'
  },
];

export default function Header() {
  const activeSegment = useSelectedLayoutSegment()
  return (
    <header className="p-4 border-b border-indigo-400 mb-6 w-full flex items-center justify-center">
      <nav>
        <ul className="flex gap-4 list-none">
          {links.map(({ label, route, targetSegment }) => {
            return (
              <li key={label} className={activeSegment === targetSegment ? 'text-indigo-600 text-lg' : 'text-black text-lg'}>
                <Link href={route}  >{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
