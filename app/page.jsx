import Image from "next/image";

export default async function Home() {
  return (
    <main className="container">
      <section className="mt-5 p-5 bg-indigo-500 flex flex-col rounded">
        <h1 className="text-white text-xl font-bold text-center">
          Recetas App
        </h1>
        <p className="p-4 text-center text-white text-lg">
          Aplicación desarrollada con Next.js y Tailwind CSS.
        </p>

        <div className="flex gap-4 items-center justify-center">
          <Image
            src="/next-logo.png"
            width={200}
            height={250}
            priority={true}
            alt="next logo"
          />
          <Image
            src="/tailwind-logo.png"
            width={300} 
            height={200}
            alt="tailwind logo"
          />
        </div>
      </section>
    </main>
  );
}
