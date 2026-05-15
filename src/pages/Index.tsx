import { useState } from "react";
import {
  ArrowRight,
  Baby,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  ShoppingBag,
  Sparkles,
  Star,
  SunMedium,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner";

const WHATSAPP_URL =
  "https://wa.me/5515998258128?text=Ol%C3%A1%2C%20Natasha.%20Gostaria%20de%20agendar%20uma%20consulta.";
const CONTACT_RECIPIENT_EMAIL = "contato@natashamoraes.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/nanutri.fertilidade";
const HERO_IMAGE = "/natasha-hero.png";
const PORTRAIT_IMAGE = "/natasha-moraes.png";

const focusAreas = [
  {
    icon: Baby,
    title: "Fertilidade e Preparo para FIV",
    desc: "Estratégias nutricionais para qualidade dos óvulos, preparo metabólico e suporte para reprodução assistida.",
  },
  {
    icon: HeartPulse,
    title: "SOP, Endometriose e Hormônios",
    desc: "Condutas individualizadas para regulação hormonal, sintomas, inflamação e saúde metabólica feminina.",
  },
  {
    icon: Leaf,
    title: "Saúde da Mulher 30+",
    desc: "Cuidado em fases como gestação, pós-parto, climatério e menopausa, com ciência e acolhimento.",
  },
];

const journeySteps = [
  "Avaliação da fase de vida, rotina, exames e objetivos.",
  "Estratégia nutricional clara para fertilidade, hormônios e saúde intestinal.",
  "Acompanhamento com ajustes práticos, sem abandono depois da consulta.",
];

const differentials = [
  {
    icon: Sparkles,
    title: "Estratégia além do plano alimentar",
    desc: "Direcionamento para entender prioridades, exames, rotina e próximos passos.",
  },
  {
    icon: Leaf,
    title: "Ciência com individualidade",
    desc: "Condutas baseadas em evidência, adaptadas ao corpo e ao momento de cada mulher.",
  },
  {
    icon: CalendarCheck,
    title: "Presencial e online",
    desc: "Atendimento em Sorocaba e acompanhamento online para mulheres e casais em todo o Brasil.",
  },
  {
    icon: HeartPulse,
    title: "Foco em fertilidade",
    desc: "Cuidado para casais que desejam engravidar naturalmente ou por reprodução assistida.",
  },
];

const testimonials = [
  {
    quote:
      "Eu não me sinto largada depois da consulta. Ela sabe escutar, entende o momento da gente e orienta com muito carinho.",
    label: "Avaliação Google",
  },
  {
    quote:
      "Profissional maravilhosa, com acolhimento ímpar. Explica o passo a passo com muita sabedoria.",
    label: "Avaliação Google",
  },
  {
    quote:
      "Atendimento humano, seguro e estratégico para um momento muito importante da minha vida.",
    label: "Paciente acompanhada",
  },
];

const productPlaceholders = [
  {
    icon: BookOpen,
    title: "Guia de Fertilidade Nutricional",
    desc: "Espaço reservado para e-book, aula ou protocolo digital.",
  },
  {
    icon: Moon,
    title: "Programa Hormônios em Equilíbrio",
    desc: "Card pronto para infoproduto com checkout, benefícios e bônus.",
  },
  {
    icon: SunMedium,
    title: "Preparação para Gestar",
    desc: "Área preparada para produto futuro, lista de espera ou pré-venda.",
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    moment: "",
    message: "",
  });

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Atuação" },
    { href: "#metodo", label: "Método" },
    { href: "#produtos", label: "Produtos" },
    { href: "#contato", label: "Contato" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Novo agendamento - ${form.name}`;
    const body = [
      "Olá, Natasha. Gostaria de agendar uma consulta.",
      "",
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      `Telefone / WhatsApp: ${form.phone}`,
      `Momento atual: ${form.moment || "Não informado"}`,
      "",
      "Mensagem:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Seu aplicativo de email foi aberto com a mensagem preenchida.");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between">
          <a href="#" className="group flex items-center gap-3" aria-label="Natasha Moraes">
            <span className="h-12 w-12 overflow-hidden rounded-full border border-primary/20 bg-rose-soft">
              <img
                src={PORTRAIT_IMAGE}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl text-primary">Natasha Moraes</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Nutrição feminina
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button asChild className="hidden rounded-full px-6 lg:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar consulta
            </a>
          </Button>

          <button
            className="rounded-full p-2 text-primary lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container mx-auto flex flex-col gap-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="rounded-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[86vh] items-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <img
              src={HERO_IMAGE}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.94)_28%,hsl(var(--background)/0.72)_55%,hsl(var(--background)/0.12)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto py-14 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_0.75fr]">
              <div className="max-w-[21rem] animate-fade-in-up sm:max-w-3xl">
                <span className="inline-block max-w-full rounded-[1.25rem] bg-rose-soft px-4 py-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-primary">
                  Nutrição para fertilidade e saúde da mulher
                </span>
                <h1 className="mt-7 max-w-3xl break-words font-serif text-3xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
                  Cuidado estratégico para o corpo em cada fase da vida.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Atendimento nutricional para mulheres 30+ e casais que desejam
                  engravidar, com foco em fertilidade, preparo para FIV, regulação
                  hormonal, SOP, endometriose, gestação, pós-parto e menopausa.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="h-14 rounded-full px-8 text-base">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      Agendar consulta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-primary/25 bg-background/60 px-8 text-base text-primary hover:bg-rose-soft"
                  >
                    <a href="#areas">Conhecer atuação</a>
                  </Button>
                </div>
                <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {["Presencial em Sorocaba", "Online para todo o Brasil", "Abordagem baseada em ciência"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex min-h-16 items-center gap-3 rounded-full border border-border/80 bg-background/70 px-4 text-sm text-foreground shadow-[var(--shadow-card)] backdrop-blur"
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm animate-fade-in-up lg:max-w-md">
                <div className="absolute -inset-4 rounded-[2rem] bg-rose-soft/80" />
                <div className="relative overflow-hidden rounded-[2rem] border border-background/70 bg-background p-3 shadow-[var(--shadow-elegant)]">
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Nutricionista Natasha Moraes"
                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-5 left-6 right-6 rounded-[1.25rem] border border-border bg-background/90 p-4 shadow-[var(--shadow-card)] backdrop-blur">
                  <p className="font-serif text-xl leading-tight text-primary">Natasha Moraes</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Fertilidade e saúde da mulher
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-background py-24 lg:py-28">
          <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-rose-soft" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-paper shadow-[var(--shadow-elegant)]">
                <div className="relative aspect-[4/5]">
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Natasha Moraes em seu consultório"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-background/60 bg-background/88 p-6 shadow-[var(--shadow-card)] backdrop-blur">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Leaf className="h-5 w-5" />
                      </span>
                      <p className="mt-5 font-serif text-2xl leading-tight text-primary">
                        "Eu não me sinto largada depois da consulta."
                      </p>
                    </div>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Acolhimento, escuta e um plano claro para que a paciente saiba
                        o que fazer antes, durante e depois da consulta.
                      </p>
                      <div className="flex gap-1 text-accent" aria-label="5 estrelas">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Sobre a Natasha
              </span>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                Nutrição feminina com ciência, estratégia e presença.
              </h2>
              <div className="mt-6 h-px w-16 bg-primary/25" />
              <p className="mt-7 leading-relaxed text-muted-foreground">
                Natasha Moraes é nutricionista especialista em saúde da mulher.
                Ela acompanha mulheres em fases como adolescência, fertilidade,
                gestação, pós-parto e menopausa, com foco especial em mulheres
                30+ e casais que desejam engravidar.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A consulta vai além de um plano alimentar: o cuidado considera
                exames, sintomas, rotina, saúde hormonal, qualidade dos óvulos,
                preparo para FIV, SOP, endometriose e infertilidade sem causa
                aparente.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "30+", label: "Mulheres atendidas com foco em fase adulta" },
                  { value: "FIV", label: "Preparo nutricional para reprodução assistida" },
                  { value: "BR", label: "Atendimento online em todo o Brasil" },
                ].map((stat) => (
                  <div key={stat.value} className="border-l border-primary/20 pl-5">
                    <div className="font-serif text-3xl text-primary">{stat.value}</div>
                    <p className="mt-2 text-xs uppercase leading-relaxed tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="areas" className="bg-secondary py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Áreas de atuação
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                Cuidado nutricional para fertilidade, hormônios e saúde feminina.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {focusAreas.map(({ icon: Icon, title, desc }) => (
                <article
                  key={title}
                  className="group rounded-[1.5rem] border border-border bg-background p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-primary py-24 text-primary-foreground lg:py-28">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cream">
                Como funciona
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Um direcionamento claro para cuidar do corpo com intenção.
              </h2>
              <p className="mt-6 leading-relaxed text-white/72">
                A abordagem une ciência, escuta e individualidade. O objetivo é
                transformar informações soltas em uma estratégia possível para a
                fase que você está vivendo.
              </p>
              <Button asChild className="mt-9 rounded-full bg-white px-7 text-primary hover:bg-white/90">
                <a href="#contato">
                  Iniciar acompanhamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-5">
              {journeySteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-5 rounded-[1.25rem] border border-white/12 bg-white/7 p-6 backdrop-blur"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    {index + 1}
                  </div>
                  <p className="self-center leading-relaxed text-white/82">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Diferenciais
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                  A paciente sai com clareza, não só com uma lista de alimentos.
                </h2>
              </div>

              <div className="grid gap-5">
                {differentials.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-5 rounded-[1.25rem] border border-border bg-background p-6 transition-colors hover:bg-rose-soft/70"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-primary">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Depoimentos
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                Acolhimento que aparece nas avaliações.
              </h2>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="mt-14">
              <CarouselContent className="-ml-6">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.quote} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <article className="flex h-full flex-col justify-between rounded-[1.5rem] border border-border bg-background p-8 shadow-[var(--shadow-card)]">
                      <Quote className="h-8 w-8 text-accent" />
                      <p className="mt-6 font-serif text-2xl leading-snug text-primary">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-8 border-t border-border pt-5">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {testimonial.label}
                          </span>
                          <div className="flex gap-1 text-accent">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <Star key={index} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 bg-background text-primary lg:-left-12" />
              <CarouselNext className="-right-2 bg-background text-primary lg:-right-12" />
            </Carousel>
          </div>
        </section>

        <section id="produtos" className="bg-background py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Produtos da nutricionista
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                  Área pronta para infoprodutos, cursos e materiais digitais.
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Esta seção já está preparada para receber cards de venda,
                  checkout, lista de espera ou lançamentos futuros da Natasha.
                </p>
              </div>
              <Button asChild variant="outline" className="rounded-full border-primary/25 px-7">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Entrar na lista
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {productPlaceholders.map(({ icon: Icon, title, desc }) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-dashed border-primary/25 bg-paper p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <div className="mt-7 inline-flex items-center rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Em breve
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-secondary py-24 lg:py-28">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Agendamento
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                Agende sua consulta presencial ou online.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Atendimento presencial em Sorocaba e online para todo o Brasil.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-5">
              <div className="rounded-[1.5rem] bg-background p-7 shadow-[var(--shadow-card)] lg:col-span-3 lg:p-9">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Nome
                    </label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="mt-2 h-12 rounded-full bg-secondary"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Email
                      </label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="mt-2 h-12 rounded-full bg-secondary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        WhatsApp
                      </label>
                      <Input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(15) 99999-9999"
                        className="mt-2 h-12 rounded-full bg-secondary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Momento atual
                    </label>
                    <Input
                      value={form.moment}
                      onChange={(e) => setForm({ ...form, moment: e.target.value })}
                      placeholder="Ex.: tentando engravidar, FIV, SOP, menopausa"
                      className="mt-2 h-12 rounded-full bg-secondary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Conte brevemente o que você procura no acompanhamento"
                      rows={5}
                      className="mt-2 resize-none rounded-[1rem] bg-secondary"
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-12 rounded-full px-9">
                    Abrir email
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="space-y-4 lg:col-span-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-[1.25rem] bg-primary p-6 text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-white/70">
                      Atendimento direto
                    </span>
                    <span className="font-serif text-xl">Falar no WhatsApp</span>
                  </span>
                </a>

                {[
                  { icon: Phone, label: "Telefone", value: "(15) 99825-8128" },
                  {
                    icon: MapPin,
                    label: "Endereço",
                    value:
                      "Condomínio A. Cardoso - R. Sete de Setembro, 287 - Sala 56 - Centro, Sorocaba - SP",
                  },
                  { icon: Mail, label: "Atendimento", value: "Presencial e online para todo o Brasil" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 rounded-[1.25rem] border border-border bg-background p-6">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-soft text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-medium leading-relaxed text-foreground">
                        {value}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground/80">
        <div className="container mx-auto py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="font-serif text-3xl text-white">Natasha Moraes</div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/62">
                Nutricionista especialista em saúde da mulher, fertilidade e cuidado
                estratégico para cada fase da vida.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da Natasha Moraes"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-white/16"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp da Natasha Moraes"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-white/16"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Navegação
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/62 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Contato
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/62">
                <li>(15) 99825-8128</li>
                <li>@nanutri.fertilidade</li>
                <li>seuemail@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/48 sm:flex-row">
            <div>© {new Date().getFullYear()} Natasha Moraes. Todos os direitos reservados.</div>
            <div>Nutrição para fertilidade e saúde da mulher.</div>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
