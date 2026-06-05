const PHOTO_URL =
  'https://miaoda-conversation-file.cdn.bcebos.com/user-bpytt7ubbb40/app-bpytu3gjmzgh/20260518/WechatIMG35815.jpg';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        {/* 区块标题 */}
        <div className="opacity-0 intersect:opacity-100 transition duration-700 mb-16 md:mb-20">
          <p className="text-xs font-light tracking-[0.25em] text-primary uppercase mb-3">
            À propos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium flex flex-col space-y-4">
            <span className="text-foreground">Osez apprendre le Chinois :</span>
            <span className="text-primary md:pl-6 italic">Ouvrez une fenêtre sur un nouveau monde</span>
          </h2>
        </div>

        {/* 两列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* 左列文字 */}
          <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-100 order-2 md:order-1">
            <div className="space-y-6 text-base font-light leading-relaxed text-foreground/80">
              <p>
                Originaire de Chine, j'enseigne le chinois en cours particuliers
                depuis près de{' '}
                <strong className="font-medium text-foreground">15 ans</strong>.
                Ancienne professeur vacataire à l'université et{' '}
                <strong className="font-medium text-foreground">
                  docteure en linguistique
                </strong>
                , je ne me contente pas de donner des leçons :
              </p>
              <p className="text-lg font-serif italic text-foreground border-l-2 border-primary pl-5 py-1">
                Je vous explique le « pourquoi » derrière chaque règle.
              </p>
              <p>
                Mon approche vous aide à comprendre la logique du chinois (tons,
                caractères, grammaire) par rapport au français – pour apprendre{' '}
                <em className="not-italic font-medium text-foreground">
                  solidement et durablement
                </em>
                .
              </p>
            </div>

            {/* 核心数据 */}
            <div className="mt-10 flex gap-10">
              <div>
                <p className="font-serif text-3xl font-medium text-primary">15</p>
                <p className="text-xs font-light text-muted-foreground tracking-wide mt-1">
                  ans d'expérience
                </p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-3xl font-medium text-primary">Dr.</p>
                <p className="text-xs font-light text-muted-foreground tracking-wide mt-1">
                  en linguistique
                </p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-serif text-3xl font-medium text-primary">100%</p>
                <p className="text-xs font-light text-muted-foreground tracking-wide mt-1">
                  en ligne
                </p>
              </div>
            </div>
          </div>

          {/* 右列照片 */}
          <div className="opacity-0 intersect:opacity-100 transition duration-700 delay-200 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* 装饰框 */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-primary/20" />
              <div className="w-64 md:w-80 aspect-[3/4] overflow-hidden">
                <img
                  src={PHOTO_URL}
                  alt="Han Xiaohan, professeure de chinois"
                  className="w-full h-full object-cover object-top grayscale-[10%]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
