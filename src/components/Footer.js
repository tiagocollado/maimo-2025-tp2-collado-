import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <h2 className="text-xl font-bold">TP Movies</h2>
        <Link
          href="#"
          className="hover:text-sky-400 transition-colors duration-200"
        >
          Términos y Condiciones
        </Link>
        <p className="text-center">
          © {new Date().getFullYear()} TP Movies Online. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
