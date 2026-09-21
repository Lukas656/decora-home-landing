import { useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Heart,
  Instagram,
  LampDesk,
  Leaf,
  Menu,
  MessageCircle,
  PackageOpen,
  Search,
  Send,
  Sparkles,
  Star,
  Store,
  X,
} from "lucide-react";

const logoPath = "/Decora-Home.png";

const categories = [
  {
    name: "Sala",
    detail: "conforto & presença",
    icon: "✦",
    tone: "terracotta",
  },
  { name: "Quarto", detail: "pausa & aconchego", icon: "◌", tone: "rose" },
  { name: "Cozinha", detail: "beleza funcional", icon: "⌂", tone: "sage" },
  {
    name: "Pequenos espaços",
    detail: "ideias que cabem",
    icon: "↗",
    tone: "sand",
  },
];

const inspirations = [
  {
    category: "Sala",
    eyebrow: "Guia de atmosfera",
    title: "A sala que abraça de volta",
    copy: "Texturas naturais, luz quente e pequenos pontos de cor para mudar a energia do ambiente.",
    image:
      "/D_NQ_NP_2X_665015-MLB86614641003_062025-F-tapete-sala-quarto-200x150-moderno-e-luxuoso-antiderrapante.webp",
    tag: "mais salvo",
    link: "https://meli.la/18h2TSk",
  },
  {
    category: "Quarto",
    eyebrow: "Achadinho da semana",
    title: "Detalhes que fazem o quarto respirar",
    copy: "Peças leves para montar um cantinho mais calmo — sem reforma e sem gastar muito.",
    image: "/D_NQ_NP_2X_947530-MLA118007334527_092026-F.webp",
    tag: "curadoria",
    link: "https://meli.la/2fi3rmG",
  },
  {
    category: "Sala",
    eyebrow: "Mood Decora",
    title: "Terracota, madeira e luz baixa",
    copy: "Uma paleta que deixa qualquer apê mais convidativo e com cara de casa vivida.",
    image: "/inspiration-room_ad352464.webp",
    tag: "inspiração",
    link: "https://seu-terceiro-link-de-afiliado.com",
  },
];

const steps = [
  {
    number: "01",
    title: "Você conta o clima",
    copy: "Escolha o ambiente e o estilo que quer sentir em casa.",
  },
  {
    number: "02",
    title: "A gente garimpa",
    copy: "Filtramos ideias bonitas, úteis e com preço que faz sentido.",
  },
  {
    number: "03",
    title: "Você transforma",
    copy: "Receba os links, salve suas referências e comece pelo seu cantinho.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [email, setEmail] = useState("");

  const filteredInspirations = useMemo(() => {
    if (activeCategory === "Todos") return inspirations;
    return inspirations.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Digite um e-mail válido para entrar na lista.");
      return;
    }
    toast.success("Pronto! Você está na lista de achadinhos.");
    setEmail("");
  }

  function handlePlaceholder(label: string) {
    toast.info(`${label}: link de destino pronto para conectar.`);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f2eb] text-[#2a1b16]">
      <header className="sticky top-0 z-50 border-b border-[#3a2119]/10 bg-[#f7f2eb]/90 backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Voltar ao início"
          >
            <img
              src={logoPath}
              alt="Decora Home"
              className="h-11 w-11 rounded-full object-cover shadow-[0_6px_18px_rgba(81,43,26,0.16)]"
            />
            <div className="leading-none">
              <p className="font-display text-[19px] font-semibold tracking-[-0.04em]">
                Decora <span className="text-[#de5a20]">Home</span>
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#795c4c]">
                decoração que transforma
              </p>
            </div>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium text-[#6f5141] lg:flex"
            aria-label="Navegação principal"
          >
            <a
              className="transition-colors hover:text-[#d95820]"
              href="#curadoria"
            >
              Curadoria
            </a>
            <a
              className="transition-colors hover:text-[#d95820]"
              href="#categorias"
            >
              Ambientes
            </a>
            <a
              className="transition-colors hover:text-[#d95820]"
              href="#comunidade"
            >
              Comunidade
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="icon-button"
              aria-label="Buscar"
              onClick={() =>
                toast.info(
                  "A busca entra aqui quando a vitrine de produtos estiver conectada."
                )
              }
            >
              <Search size={17} />
            </button>
            <a
              href="#comunidade"
              className="button button-dark px-5 py-3 text-xs"
            >
              Entrar na comunidade <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            className="icon-button lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#3a2119]/10 bg-[#f7f2eb] px-5 py-5 lg:hidden">
            <nav
              className="container flex flex-col gap-4 text-sm font-semibold text-[#6f5141]"
              aria-label="Menu móvel"
            >
              <a href="#curadoria" onClick={() => setMenuOpen(false)}>
                Curadoria
              </a>
              <a href="#categorias" onClick={() => setMenuOpen(false)}>
                Ambientes
              </a>
              <a href="#comunidade" onClick={() => setMenuOpen(false)}>
                Comunidade
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative border-b border-[#3a2119]/10">
          <div className="hero-grid container grid min-h-[690px] items-center gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:py-20">
            <div className="relative z-10 max-w-[650px]">
              <div className="eyebrow fade-up">
                <Sparkles size={13} /> inspiração para o lar real
              </div>
              <h1 className="mt-7 max-w-[620px] font-display text-[clamp(3.9rem,8vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#2a1b16] fade-up delay-1">
                Sua casa,
                <br />
                <em>do seu jeito.</em>
              </h1>
              <p className="mt-8 max-w-[500px] text-[17px] leading-8 text-[#795c4c] fade-up delay-2">
                Ideias simples, achadinhos bonitos e escolhas que deixam cada
                cantinho mais aconchegante — sem complicar e sem estourar o
                orçamento.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row fade-up delay-3">
                <a href="#curadoria" className="button button-orange">
                  Descobrir achadinhos <ArrowUpRight size={17} />
                </a>
                <a href="#como-funciona" className="button button-ghost">
                  Como funciona <ChevronRight size={16} />
                </a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#967766] fade-up delay-3">
                <span className="inline-flex items-center gap-2">
                  <Heart size={14} className="text-[#df5b22]" /> selecionados
                  com carinho
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star size={14} className="text-[#df5b22]" /> gastando pouco
                </span>
              </div>
            </div>

            <div className="hero-art relative mx-auto w-full max-w-[560px] lg:justify-self-end">
              <div className="hero-orbit absolute -right-3 top-0 h-24 w-24 rounded-full border border-[#dd5a20]/30 lg:-right-8" />
              <div className="absolute -left-2 top-12 z-20 rounded-[18px] border border-white/70 bg-white/75 px-4 py-3 shadow-[0_18px_40px_rgba(93,49,31,0.13)] backdrop-blur-md lg:-left-8">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bd4e1d]">
                  <span className="h-2 w-2 rounded-full bg-[#e46528]" /> mood do
                  dia
                </div>
                <p className="mt-1 font-display text-[17px] font-semibold tracking-[-0.03em]">
                  casa com alma
                </p>
              </div>
              <div className="relative z-10 ml-auto aspect-square w-[88%] overflow-hidden rounded-[48%_52%_43%_57%/45%_42%_58%_55%] border-[14px] border-[#ed6b26] bg-[#e8c3a8] shadow-[0_28px_70px_rgba(92,48,27,0.2)]">
                <img
                  src={logoPath}
                  alt="Logo Decora Home em um ambiente acolhedor"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-0 z-20 flex max-w-[235px] items-center gap-3 rounded-[18px] border border-[#ecd8c8] bg-[#fffaf5] p-3 shadow-[0_18px_40px_rgba(93,49,31,0.13)] lg:-right-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f5dfcb] text-[#d95820]">
                  <LampDesk size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#aa7d65]">
                    curadoria da vez
                  </p>
                  <p className="mt-1 font-display text-[16px] font-semibold leading-tight">
                    luz quente para mudar tudo
                  </p>
                </div>
              </div>
              <span className="absolute bottom-[9%] left-[2%] h-3 w-3 rounded-full bg-[#d95820] shadow-[0_0_0_8px_rgba(217,88,32,0.12)]" />
              <span className="absolute right-[8%] top-[22%] h-2 w-2 rounded-full bg-[#537365]" />
            </div>
          </div>
          <div className="container pb-8">
            <div className="flex items-center gap-4 text-[#ad8d79]">
              <span className="h-px w-10 bg-[#dd5a20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em]">
                deslize para encontrar seu próximo cantinho favorito
              </span>
              <ArrowDownRight size={16} className="text-[#dd5a20]" />
            </div>
          </div>
        </section>

        <section id="categorias" className="container py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" /> por onde começar
              </div>
              <h2 className="section-title mt-5">
                Um bom ambiente
                <br />
                <em>começa por uma ideia.</em>
              </h2>
            </div>
            <p className="max-w-[330px] text-sm leading-6 text-[#795c4c]">
              Escolha um ambiente e encontre referências para deixar sua casa
              mais parecida com você.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <a
                href="#curadoria"
                key={category.name}
                className={`category-card category-${category.tone} fade-up`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="category-icon">{category.icon}</span>
                  <ArrowUpRight
                    size={18}
                    className="opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div className="mt-16">
                  <p className="font-display text-[26px] font-semibold tracking-[-0.04em]">
                    {category.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] opacity-65">
                    {category.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="curadoria"
          className="border-y border-[#3a2119]/10 bg-[#f0e6da] py-24 lg:py-32"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" /> curadoria decora
                </div>
                <h2 className="section-title mt-5">
                  Bonito, útil
                  <br />
                  <em>e possível.</em>
                </h2>
              </div>
              <div className="flex flex-col gap-6 lg:items-end">
                <p className="max-w-[430px] text-sm leading-6 text-[#795c4c] lg:text-right">
                  A gente garimpa referências e produtos para você decorar com
                  intenção — um detalhe de cada vez.
                </p>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {["Todos", "Sala", "Quarto"].map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`filter-chip ${activeCategory === category ? "filter-chip-active" : ""}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {filteredInspirations.map((item, index) => (
                <article
                  key={item.title}
                  className={`inspiration-card ${index === 0 ? "lg:-translate-y-4" : ""}`}
                >
                  <div className="relative aspect-[1.06/1] overflow-hidden rounded-[24px] bg-[#ceb39e]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#fffaf5]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#734b38] backdrop-blur">
                      {item.tag}
                    </span>
                    <button
                      onClick={() =>
                        toast.success(
                          "Salvo! A referência foi adicionada aos seus favoritos."
                        )
                      }
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#fffaf5]/90 text-[#8d624e] backdrop-blur transition-colors hover:bg-[#de5a20] hover:text-white"
                      aria-label={`Salvar ${item.title}`}
                    >
                      <Heart size={16} />
                    </button>
                  </div>
                  <div className="px-1 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c25423]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-[25px] font-semibold leading-[1.03] tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#795c4c]">
                      {item.copy}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#bf4f20] transition-colors hover:text-[#2a1b16]"
                    >
                      ver seleção <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {filteredInspirations.length === 0 && (
              <div className="rounded-3xl border border-dashed border-[#9d765e]/40 py-12 text-center text-sm text-[#795c4c]">
                Novas referências chegando para este ambiente.
              </div>
            )}
          </div>
        </section>

        <section id="como-funciona" className="container py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" /> do feed para a casa
              </div>
              <h2 className="section-title mt-5">
                Menos rolagem.
                <br />
                <em>Mais inspiração.</em>
              </h2>
              <p className="mt-6 max-w-[350px] text-sm leading-6 text-[#795c4c]">
                A Decora Home existe para tornar mais leve a parte gostosa de
                decorar: descobrir o que combina com você.
              </p>
              <a href="#comunidade" className="button button-dark mt-8">
                Quero receber ideias <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="divide-y divide-[#3a2119]/10 border-y border-[#3a2119]/10">
              {steps.map(step => (
                <div
                  key={step.number}
                  className="grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:items-start"
                >
                  <span className="font-display text-2xl font-semibold text-[#dd5a20]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[24px] font-semibold tracking-[-0.04em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[450px] text-sm leading-6 text-[#795c4c]">
                      {step.copy}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="hidden text-[#bd957d] sm:col-start-2 sm:block"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="comunidade"
          className="relative overflow-hidden bg-[#2a1b16] py-24 text-[#fffaf5] lg:py-32"
        >
          <div className="absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full border border-[#e67239]/25" />
          <div className="absolute -right-12 -top-16 h-[260px] w-[260px] rounded-full border border-[#e67239]/15" />
          <div className="container relative grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <div className="eyebrow eyebrow-light">
                <MessageCircle size={13} /> seu próximo achadinho começa aqui
              </div>
              <h2 className="mt-6 max-w-[650px] font-display text-[clamp(3.2rem,7vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                A casa dos seus sonhos pode começar{" "}
                <em className="text-[#f47c3d]">pequena.</em>
              </h2>
              <p className="mt-7 max-w-[500px] text-[16px] leading-7 text-[#d6bfb1]">
                Entre para receber achadinhos, ideias de ambientes e aquela dose
                de inspiração que faz vontade de arrumar a casa toda.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => handlePlaceholder("Grupo do WhatsApp")}
                  className="button button-orange"
                >
                  Entrar no WhatsApp <MessageCircle size={16} />
                </button>
                <button
                  onClick={() => handlePlaceholder("Canal do Telegram")}
                  className="button button-outline-light"
                >
                  Seguir no Instagram <Instagram size={16} />
                </button>
              </div>
            </div>
            <div className="relative rounded-[28px] border border-white/10 bg-[#fffaf5]/[0.07] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f47c3d] text-white">
                  <Send size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6bfb1]">
                    lista de achadinhos
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold">
                    um e-mail, boas ideias
                  </p>
                </div>
              </div>
              <p className="mt-7 text-sm leading-6 text-[#d6bfb1]">
                Uma curadoria curtinha, só quando valer a pena. Sem spam, só
                coisas bonitas para sua casa.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mt-6 flex flex-col gap-2 sm:flex-row"
              >
                <label className="sr-only" htmlFor="email">
                  Seu melhor e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-sm text-white outline-none placeholder:text-[#bca599] focus:border-[#f47c3d]"
                />
                <button
                  type="submit"
                  className="button button-orange justify-center"
                >
                  Quero receber <ArrowUpRight size={15} />
                </button>
              </form>
              <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#bca599]">
                <PackageOpen size={13} /> você pode sair quando quiser
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e1411] py-10 text-[#d6bfb1]">
        <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoPath}
              alt="Decora Home"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-lg font-semibold text-[#fffaf5]">
                Decora <span className="text-[#f47c3d]">Home</span>
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em]">
                decoração que transforma
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-xs md:items-end">
            <p>Achadinhos e inspirações para o lar real.</p>
            <div className="flex items-center gap-5 font-semibold">
              <button
                onClick={() => handlePlaceholder("Pinterest")}
                className="transition-colors hover:text-[#f47c3d]"
              >
                Pinterest
              </button>
              <button
                onClick={() => handlePlaceholder("Instagram")}
                className="transition-colors hover:text-[#f47c3d]"
              >
                Instagram
              </button>
              <button
                onClick={() => handlePlaceholder("Telegram")}
                className="transition-colors hover:text-[#f47c3d]"
              >
                Telegram
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-8 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.13em] text-[#91776a]">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <span>© 2026 Decora Home</span>
            <span>
              links de afiliado podem gerar comissão sem custo extra para você
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
