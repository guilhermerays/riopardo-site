export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-500 py-8 border-t border-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Copyright © {currentYear} Rio Pardo Embalagens. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
