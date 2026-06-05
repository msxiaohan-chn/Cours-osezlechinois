const testimonials = [
  {
    stars: 5,
    quote:
      "Parfait ! Elle a une approche très intuitive et se base sur les centres d'intérêt de son élève. Cette approche permet de nourrir ma motivation.",
    name: 'Mickëal',
    role: 'Débutant',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        {/* 标题 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 mb-16 text-center">
          <p className="text-xs font-light tracking-[0.25em] text-primary uppercase mb-3">
            Témoignages
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Ce que disent mes élèves
          </h2>
        </div>

        {/* 评价列表 */}
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="opacity-0 intersect:opacity-100 transition duration-700 delay-100 bg-background border border-border p-8 md:p-10"
            >
              {/* 星级 */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 fill-primary text-primary"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* 引用文字 */}
              <blockquote className="font-serif text-xl md:text-2xl italic font-light text-foreground leading-relaxed mb-6 text-pretty">
                « {t.quote} »
              </blockquote>

              {/* 署名 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-border" />
                <p className="text-sm font-light text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span>
                  {t.role && `, ${t.role}`}
                </p>
              </div>
            </div>
          ))}

          {/* 平台展示截图 */}
          <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bpytt7ubbb40/app-bpytu3gjmzgh/20260518/chinois1.jpg',
                  pad: false,
                },
                {
                  src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bpytt7ubbb40/app-bpytu3gjmzgh/20260518/chinois2.jpg',
                  pad: false,
                },
                {
                  src: 'https://miaoda-conversation-file.cdn.bcebos.com/user-bpytt7ubbb40/app-bpytu3gjmzgh/20260518/WechatIMG1682.jpg',
                  pad: true,
                },
              ].map((item, i) => (
                <div key={i} className="border border-border overflow-hidden bg-background">
                  <img
                    src={item.src}
                    alt={`Cours de calligraphie ${i + 1}`}
                    className={`w-full h-auto object-contain ${item.pad ? 'py-10 md:py-14' : ''}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 未来补充提示 */}
          <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-200 border border-dashed border-border p-6 text-center">
            <p className="text-sm font-light text-muted-foreground italic">
              D'autres témoignages à venir…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
