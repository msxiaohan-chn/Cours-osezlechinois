export function FooterSection() {
  return (
    <footer className="bg-foreground text-background/70 py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs font-light opacity-40 tracking-wide">
          © {new Date().getFullYear()} Han Xiaohan. Tous droits réservés.
        </p>
        <p className="text-xs font-light opacity-30 tracking-wide">
          Cours particuliers de chinois en ligne
        </p>
      </div>
    </footer>
  );
}
