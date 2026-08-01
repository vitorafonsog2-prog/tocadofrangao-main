import { createFileRoute } from "@tanstack/react-router";
import { Clock, Flame, Instagram, MapPin, Facebook } from "lucide-react";

import { Reveal } from "../components/Reveal";
import logo from "../assets/logo.webp";
import heroImg from "../assets/hero-frango.jpg";
import historiaImg from "../assets/historia.png";
import produtoAssado from "../assets/produto-assado.png";
import produtoChurrasco from "../assets/produto-churrasco.png";
import produtoFrito from "../assets/produto-frito.png";
import produtoCoxinhas from "../assets/produto-coxinhas.png";

const produtos = [
  {
    nome: "Frango assado com salpicão",
    desc: "Nosso clássico:Assado lentamente na franguera até a pele ficar dourada e crocante acompanhado de um temperado salpicão com frango desfiado.",
    img: produtoAssado,
  },
  {
    nome: "Frango assado com batata",
    desc: "Frango suculento na chapa quente, com ervas frescas e limão. Leve, proteico e cheio de sabor, acompanhado de batatas douradas e suculentas.",
    img: produtoChurrasco,
  },
  {
    nome: "combo supremo",
    desc: "Combo acompanhado com Frango, Salpicão, Batata, Farofa, Arroz e de brinde o famoso e gostoso Ativ Plus!",
    img: produtoFrito,
  },
  {
    nome: "FRANGO NA BRASA",
    desc: "Frango estupidamente saboroso com gostinho de churrasco, vicia!",
    img: produtoCoxinhas,
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.14 1.595 5.945L0 24l6.305-1.654a11.94 11.94 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.945a11.86 11.86 0 00-3.45-8.406" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function IfoodIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/5c/IFood_logo.svg"
      alt="iFood"
      className={className}
    />
  );
}

function NineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20m0 3.2a4.1 4.1 0 011.9 7.7l-2 3.7a1.3 1.3 0 11-2.3-1.2l.8-1.5A4.1 4.1 0 0112 5.2m0 2.5a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HERO */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Frango assado dourado girando na brasa"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-charcoal/75" />
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center sm:py-24">
          <img
            src={logo}
            alt="Logo Toca do Frangão"
            width={1024}
            height={1024}
            className="h-32 w-32 drop-shadow-xl sm:h-44 sm:w-44"
          />
          <h1 className="mt-6 font-display text-5xl leading-none tracking-wide text-cream sm:text-7xl">
            Toca do Frangão
          </h1>
          <p className="mt-2 flex items-center gap-2 font-display text-xl tracking-widest text-flame sm:text-2xl">
            <Flame className="h-5 w-5 shrink-0" /> O melhor frango de são joão de meriti
          </p>
          <p className="mt-5 max-w-xl text-base text-cream/85 sm:text-lg">
            Frango fresquinho, temperado e assado todo dia. Aquele sabor de
            churrasco de domingo — agora a um clique de você.
          </p>
          <a
            href="#peca-agora"
            className="warm-shadow heat-gradient mt-8 inline-flex min-h-14 w-full max-w-xs items-center justify-center rounded-full px-8 font-display text-2xl tracking-widest text-ember-foreground transition-transform duration-200 hover:scale-105 active:scale-95 sm:w-auto"
          >
            Peça agora
          </a>
        </div>
      </header>

      {/* NOSSA HISTÓRIA */}
      <section id="historia" className="px-5 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(280px,360px)_1fr]">
          <Reveal>
            <img
              src={historiaImg}
              alt="Interior aconchegante da Toca do Frangão com forno de rotisseria"
              width={1280}
              height={960}
              loading="lazy"
              className="warm-shadow mx-auto max-h-[360px] w-full max-w-[360px] rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="font-display text-lg tracking-[0.3em] text-ember">Nossa história</span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Tudo começou com uma frangueira e apenas 10 frangos
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Com muito trabalho, fé e dedicação, fomos crescendo um passo de cada vez. Hoje, conseguimos atender muito mais famílias, mas seguimos com o mesmo propósito de sempre: servir um frango assado de qualidade, feito com carinho.
              </p>
              <p>
                Ainda estamos lutando para realizar o nosso grande sonho: transformar a Toca do Frangão em uma loja maior, com mais estrutura e muito mais opções para os nossos clientes. Cada pedido feito aqui nos aproxima um pouquinho desse objetivo.
              </p>
              <p>
                Seja bem-vindo à Toca do Frangão. É uma alegria ter você fazendo parte da nossa história!
              </p>
              <p className="font-semibold text-charcoal">
                {"\n"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NOSSOS FRANGOS */}
      <section id="produtos" className="bg-secondary px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <span className="font-display text-lg tracking-[0.3em] text-ember">O cardápio</span>
            <h2 className="mt-2 font-display text-4xl text-charcoal sm:text-5xl">Nossos frangos</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Escolha o seu favorito — todos saem quentinhos, direto para a sua mesa.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {produtos.map((p, i) => (
              <Reveal key={p.nome} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <img
                    src={p.img}
                    alt={p.nome}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-2xl tracking-wide text-charcoal">{p.nome}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PEÇA AGORA */}
      <section id="peca-agora" className="scroll-mt-4 bg-charcoal px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="font-display text-lg tracking-[0.3em] text-flame">Bateu a fome?</span>
            <h2 className="mt-2 font-display text-4xl text-cream sm:text-6xl">Peça agora</h2>
            <p className="mx-auto mt-3 max-w-lg text-cream/75">
              Escolha o seu canal preferido. É rápido, é quentinho, é Toca do Frangão.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-4">
            <Reveal delay={80}>
              <a
                href={LINK_IFOOD}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-ifood px-6 font-display text-2xl tracking-widest text-cream shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                <IfoodIcon className="h-7 w-7 shrink-0" />
                Peça pelo iFood
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a
                href={LINK_99FOOD}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-nine px-6 font-display text-2xl tracking-widest text-charcoal shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                <NineIcon className="h-7 w-7 shrink-0" />
                Peça pelo 99Food
              </a>
            </Reveal>
            <Reveal delay={240}>
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-whats px-6 font-display text-2xl tracking-widest text-cream shadow-lg transition-transform duration-200 hover:scale-[1.03] active:scale-95"
              >
                <WhatsAppIcon className="h-7 w-7 shrink-0" />
                Peça pelo WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal px-5 pb-10 text-cream/70">
        <div className="mx-auto max-w-6xl border-t border-cream/15 pt-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <img
                src={logo}
                alt="Logo Toca do Frangão"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-16 w-16"
              />
              <p className="mt-3 max-w-xs text-sm">
                Frango fresco, na brasa e no capricho — todos os dias.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                Rua Floriana, 209 - Coelho da Rocha - SJM - RJ
              </p>
              <p className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                Sexta, Sábado e Domingo, das 11:00 às 14:00 horas
              </p>
            </div>

            <div>
              <p className="font-display text-xl tracking-widest text-cream">Siga a gente</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://www.instagram.com/tocadofrangao?igsh=N3dobjI3b216NTRj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Toca do Frangão"
                  className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/1DCH8qCca7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Toca do Frangão"
                  className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@tocadofrangao?_r=1&_t=ZS-98TsuAiFYV0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok da Toca do Frangão"
                  className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-cream/50">
            © {new Date().getFullYear()} Toca do Frangão. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
