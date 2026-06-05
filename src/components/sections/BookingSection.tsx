import { Mail, Monitor, GraduationCap } from 'lucide-react';

const features = [
  { icon: Monitor, label: 'Cours en ligne par webcam' },
  { icon: GraduationCap, label: 'Tous niveaux acceptés' },
  { icon: Mail, label: 'Réponse rapide par email' },
];

export function BookingSection() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 mb-16 text-center">
          <p className="text-xs font-light tracking-[0.25em] text-primary uppercase mb-3">
            Tarif & réservation
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Commencez votre apprentissage
          </h2>
        </div>

        {/* 价格展示 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-100 border border-border p-8 md:p-12 mb-8">
          {/* 价格 */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-8 border-b border-border pb-8">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-medium text-foreground">
                  20€
                </span>
                <span className="text-sm font-light text-muted-foreground">
                  / heure
                </span>
              </div>
              <p className="text-sm font-light text-muted-foreground mt-1">
                Cours réguliers
              </p>
            </div>
            <div className="sm:ml-6 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 text-sm font-medium">
              <span>🎓</span>
              <span>Premier cours offert</span>
            </div>
          </div>

          {/* 特色列表 */}
          <ul className="space-y-4 mb-10">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-light text-foreground/80"
              >
                <Icon size={15} className="text-primary shrink-0" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* 联系按钮 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:msxiaohanchn@gmail.com?subject=Réservation%20cours%20de%20chinois&body=Bonjour%20Han%2C%0A%0AJe%20souhaite%20réserver%20un%20premier%20cours%20gratuit.%0A%0ACordialement"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={15} />
              <span>Réserver par email</span>
            </a>
            <a
              href="mailto:msxiaohanchn@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-light hover:bg-muted transition-all duration-300 w-full sm:w-auto"
            >
              msxiaohanchn@gmail.com
            </a>
          </div>
        </div>

        {/* 说明文字 */}
        <p className="opacity-0 intersect:opacity-100 transition duration-700 delay-200 text-xs font-light text-muted-foreground text-center tracking-wide">
          Je réponds généralement dans les 24 heures · Horaires flexibles
        </p>
      </div>
    </section>
  );
}
