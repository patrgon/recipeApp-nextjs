import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto flex flex-col p-4 border-t-2">
            <Link href={'/about'} className="text-cyan-600 font-bold hover:text-cyan-900">Sobre la pagina</Link>
            <Link href={'/contact'} className="text-cyan-600 font-bold hover:text-cyan-900">Contacto</Link>
            <section>
                <p className="font-medium text-sm text-indigo-700">Desarrollador por <span className="font-bold">@patr.wan</span></p>
            </section>
        </footer>
    )
}