const pillars = [
  {
    num: '01',
    title: 'Prononciation',
    desc: 'Osez parler et maîtrisez les tons sans souffrir',
  },
  {
    num: '02',
    title: 'Écriture',
    desc: 'Déchiffrez les caractères logiquement',
  },
  {
    num: '03',
    title: 'Grammaire',
    desc: 'Comprenez la structure en comparant avec le français',
  },
  {
    num: '04',
    title: 'Syntaxe',
    desc: 'Jouez avec la syntaxe une fois la logique comprise',
  },
];

export function MethodSection() {
  return (
    <section id="method" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6">
        {/* 标题 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 mb-16 md:mb-20 md:max-w-lg">
          <p className="text-xs font-light tracking-[0.25em] text-primary-foreground/70 uppercase mb-3">
            Ma méthode
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground leading-snug text-balance">
            Comprendre plutôt que mémoriser
          </h2>
        </div>

        {/* 两列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* 左列说明 */}
          <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-100">
            <p className="text-base font-light text-primary-foreground/70 leading-relaxed mb-6">
              Je m'adresse à ceux qui ont besoin de saisir la logique d'une
              langue pour progresser.
            </p>
            <p className="text-base font-light text-primary-foreground/70 leading-relaxed">
              Avec mon regard de linguiste, je structure votre apprentissage
              autour de quatre piliers.
            </p>
            <div className="mt-12 border-t border-primary-foreground/10 pt-8">
              <p className="font-serif text-xl italic text-primary-foreground leading-relaxed text-pretty">
                « Un seul but : vous faire aimer le chinois en le rendant
                accessible. »
              </p>
            </div>
          </div>

          {/* 右列四大支柱 */}
          <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-200 space-y-8">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="flex gap-5 group">
                <span className="font-serif text-xs text-primary-foreground/40 mt-1 shrink-0 tracking-widest">
                  {pillar.num}
                </span>
                <div className="border-t border-primary-foreground/10 pt-4 flex-1">
                  <p className="font-serif text-base font-medium text-primary-foreground mb-1">
                    {pillar.title}
                  </p>
                  <p className="text-sm font-light text-primary-foreground/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
