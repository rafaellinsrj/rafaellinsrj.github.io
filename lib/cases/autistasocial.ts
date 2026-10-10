import type {CaseStudy} from "@/lib/case-types";

export const autistasocial: CaseStudy = {
  slug: "autistasocial",
  name: "Autista Social",
  group: "sites",
  category: "Landing page · Next.js",
  summary:
    "Landing page de uma comunidade em que famílias avaliam profissionais e clínicas do autismo, com narrativa de problema e solução, divulgação do congresso da iniciativa e dados estruturados para busca.",
  role: "Desenvolvimento da landing page e implantação em servidor próprio",
  period: "Maio a junho de 2026",
  stage: "Site publicado",
  stageNote: "",
  platforms: ["Web (desktop e celular)"],
  cover: {
    src: "/images/screens/autistasocial.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da Autista Social com o título Quem cuida do seu filho também precisa ser avaliado, botões Ver avaliações gratuitamente e Como funciona e cartões de depoimentos com notas em estrelas.",
    caption: "Página inicial",
  },
  gallery: [
    {
      src: "/images/cases/autistasocial/home-celular.jpg",
      width: 390,
      height: 844,
      alt: "Página inicial em largura de celular, com menu recolhido, título em duas cores e botões empilhados.",
      caption: "Página inicial em celular",
    },
  ],

  history: {
    audience:
      "Mães, pais e responsáveis por pessoas com TEA que procuram terapeutas, clínicas e especialistas, e profissionais da área.",
    problem:
      "Famílias escolhem profissionais do autismo com pouca informação comparável. A iniciativa precisava de uma página que explicasse a proposta da comunidade de avaliações, gerasse identificação com o problema e levasse ao cadastro na plataforma.",
    milestones: [
      {when: "Maio de 2026", what: "Briefing de estrutura (hero, dor, solução, como funciona, depoimentos, movimento, chamada final, perguntas) e primeira versão da página."},
      {when: "Maio de 2026", what: "Seção do 2º Congresso Autista Social, com datas, local e fotos do evento."},
      {when: "Junho de 2026", what: "Ajustes no hero, na chamada final, na seção de movimento e na navegação (data dos arquivos)."},
    ],
  },

  responsibility: {
    leadership: [
      "Traduzi o briefing de conteúdo em uma sequência de seções com chamada para cadastro repetida ao longo da página.",
      "Defini a camada de SEO com metadados completos, dados estruturados e arquivos de rastreamento gerados pela aplicação.",
    ],
    direct: [
      "Estruturei a landing em Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4, com componentes por seção.",
      "Implementei animações de entrada por rolagem com Framer Motion e perguntas frequentes em acordeão com Radix UI.",
      "Configurei metadados, JSON-LD, robots, sitemap e manifesto web.",
      "Publiquei a página em servidor próprio com nginx como proxy reverso e HTTPS.",
    ],
    team: [],
    ai: [
      "O desenvolvimento seguiu o fluxo de trabalho com agentes de IA que eu dirijo, reviso e valido, com instruções formais para os agentes no repositório.",
    ],
  },

  architecture: {
    intro:
      "Página única em Next.js com App Router, pré-renderizada e servida pelo processo Next.js atrás de nginx. Os botões de cadastro levam à plataforma da comunidade, que é um sistema separado.",
    diagram: {
      title: "Arquitetura da landing page Autista Social",
      tiers: [
        {label: "Visitante", nodes: ["Navegador", "Buscadores"]},
        {label: "Servidor próprio", nodes: ["nginx + HTTPS"]},
        {label: "Next.js 16", nodes: ["Página pré-renderizada", "robots e sitemap"]},
        {label: "Destino", nodes: ["Plataforma da comunidade"]},
      ],
      links: [
        "Navegador e buscadores acessam o site por HTTPS no nginx.",
        "O nginx encaminha ao Next.js, que entrega a página, o robots.txt e o sitemap.",
        "As chamadas para cadastro levam à plataforma da comunidade.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16.2, React 19.2, TypeScript e Tailwind CSS 4 com tw-animate-css. Componentes por seção (Navbar, Hero, Pain, Solution, HowItWorks, Testimonials, Congress, Movement, FinalCTA, FAQ, Footer), botão no padrão shadcn com class-variance-authority, acordeão Radix UI e ícones lucide-react.",
      },
      {
        name: "SEO",
        content:
          "metadataBase, modelo de título, descrição, palavras-chave, URL canônica, diretivas de robôs, Open Graph e cartão do Twitter com imagem de 1200 x 630. JSON-LD em grafo com WebSite, Organization, WebPage e FAQPage. robots.txt e sitemap.xml gerados no build. Manifesto web com ícones e cor de tema.",
      },
      {
        name: "Desempenho e acessibilidade",
        content:
          "Fonte Inter por next/font, hospedada com o site. Logos e fotos do congresso em PNG e JPEG com a tag img e texto alternativo. Animações de entrada com Framer Motion acionadas ao entrar na tela.",
      },
      {
        name: "Implantação",
        content:
          "Servidor próprio com nginx como proxy reverso para o processo Next.js, redirecionamento para HTTPS e certificado Let's Encrypt gerenciado pelo Certbot.",
      },
    ],
  },

  decisions: [
    {
      title: "Landing separada da plataforma",
      problem:
        "A página de apresentação muda com campanhas e eventos, enquanto a plataforma de avaliações tem outro ciclo de evolução.",
      decision:
        "Manter a landing como projeto próprio, em domínio próprio, com todas as chamadas apontando para o cadastro na plataforma.",
      reason:
        "Permite ajustar texto, seções e SEO sem tocar no sistema de avaliações e sem risco para ele.",
      tradeoff:
        "Dois domínios e duas implantações para manter; a medição da jornada entre a página e o cadastro exige ferramenta de análise própria.",
    },
    {
      title: "SEO completo gerado pela aplicação",
      problem:
        "O público chega por buscas sobre terapias, especialidades e diagnóstico, e a página precisava ser bem interpretada por buscadores e redes sociais.",
      decision:
        "Usar a Metadata API com URL canônica e Open Graph, gerar robots.txt e sitemap por código e publicar um grafo JSON-LD com a FAQ da página.",
      reason:
        "Mantém metadados e dados estruturados no mesmo código da página, sem arquivos manuais desatualizados.",
      tradeoff:
        "As perguntas do JSON-LD são escritas à parte do componente de FAQ e podem divergir se só um dos dois for alterado.",
    },
  ],

  results: [
    "Landing de página única entregue em domínio próprio por HTTPS, com metadados completos, JSON-LD, robots.txt, sitemap.xml e manifesto web gerados pela aplicação.",
  ],
  limits: [
    "Próximo passo: concluir a verificação do Google Search Console nos metadados.",
    "Os depoimentos e indicadores exibidos (por exemplo, número de famílias e de profissionais avaliados) não têm origem documentada no código; próximo passo é documentá-la ou identificá-los como ilustrativos.",
    "Fotos servidas no tamanho original; próximo passo é convertê-las para formatos modernos com tamanhos responsivos.",
    "Próximo passo: adicionar análise de acesso para medir a jornada até o cadastro.",
  ],

  links: [{label: "Visitar site", url: "https://autistasocial.com.br/", kind: "produto"}],

};
