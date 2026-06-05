import { CheckCircle } from 'lucide-react';

const discoveries = [
  'À quoi ressemble la grammaire chinoise',
  'Comment fonctionnent les caractères (écriture chinoise)',
  "Pourquoi cette langue n'est pas aussi difficile qu'on le croit",
];

export function CourseSection() {
  const handleBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="course" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* 区块标题 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 mb-14 text-center">
          <p className="text-xs font-light tracking-[0.25em] text-primary uppercase mb-3">
            Premier cours
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance">
            Vous hésitez à vous lancer
            <br />
            dans le chinois ?
          </h2>
        </div>

        {/* 内容卡片 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-100 border border-border p-8 md:p-12">
          {/* 课程说明 */}
          <p className="text-base font-light text-muted-foreground leading-relaxed mb-8">
            Ce cours d'1 heure{' '}
            <span className="font-medium text-foreground">(offert)</span> n'est
            pas un « ni hao » (bonjour) classique. Je vous fais découvrir :
          </p>

          {/* 发现清单 */}
          <ul className="space-y-4 mb-10">
            {discoveries.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm font-light text-foreground/80 leading-relaxed"
              >
                <CheckCircle
                  size={16}
                  className="text-primary shrink-0 mt-0.5"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* 分隔线 */}
          <div className="border-t border-border my-8" />

          {/* 结果声明 */}
          <p className="font-serif text-lg italic text-foreground leading-relaxed mb-8">
            « Résultat : vous repartez avec une vision claire et la motivation
            pour démarrer. »
          </p>

          {/* CTA */}
          <button
            onClick={handleBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-foreground text-foreground text-sm font-medium px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Réserver ce cours gratuit
          </button>
        </div>
      </div>
    </section>
  );
}
