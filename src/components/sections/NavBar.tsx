import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#course', label: 'Cours offert' },
  { href: '#method', label: 'Ma méthode' },
  { href: '#testimonials', label: 'Témoignages' },
  { href: '#booking', label: 'Réserver' },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* 品牌名 */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-serif text-sm font-medium text-foreground hover:text-primary transition-colors shrink-0"
          >
            Cours de chinois – en ligne
          </a>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors shrink-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); handleNavClick('#booking'); }}
              className="text-sm font-medium text-primary hover:underline transition-all shrink-0"
            >
              1er cours offert →
            </a>
          </nav>

          {/* 移动端汉堡 */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16 flex flex-col px-6 py-8 gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-serif text-xl text-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => { e.preventDefault(); handleNavClick('#booking'); }}
            className="mt-4 text-base font-medium text-primary"
          >
            🎓 1er cours offert – Réserver
          </a>
        </div>
      )}
    </>
  );
}
