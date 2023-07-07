import Link from "next/link";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Recetas",
    route: "/recipes",
  },
];

export default function Header() {
  return (
    <header className="p-4 border-b border-indigo-400 mb-6">
      <nav>
        <ul className="flex gap-4 list-none">
          {links.map(({ label, route }) => (
            <li className="hover:text-indigo-400 text-lg ">
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
