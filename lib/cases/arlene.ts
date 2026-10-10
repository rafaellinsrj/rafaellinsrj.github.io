import type {CaseStudy} from "@/lib/case-types";

export const arlene: CaseStudy = {
  slug: "arlene",
  name: "Arlene Zerbini",
  group: "sites",
  category: "Site profissional · Next.js",
  summary:
    "Site de uma psicanalista que atende on-line em todo o Brasil, com apresentação, serviços, etapas do atendimento e agendamento pelo WhatsApp.",
  role: "Desenvolvimento do site e implantação em servidor próprio",
  period: "Março a agosto de 2026",
  stage: "Site publicado",
  stageNote: "",
  platforms: ["Web (desktop e celular)"],
  cover: {
    src: "/images/screens/arlene.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do site de Arlene Zerbini com o título sobre o poder de se compreender pela psicanálise, botão de agendamento e foto da profissional.",
    caption: "Página inicial",
  },
  gallery: [
    {
      src: "/images/cases/arlene/home-celular.jpg",
      width: 390,
      height: 844,
      alt: "Página inicial em largura de celular, com menu recolhido, título em fonte serifada, botões de agendamento e números de apresentação.",
      caption: "Página inicial em celular",
    },
  ],

  history: {
    audience:
      "Pessoas que procuram atendimento psicanalítico on-line e querem conhecer a profissional antes de agendar.",
    problem:
      "A profissional tinha um site em WordPress. A nova versão precisava transmitir acolhimento e sigilo, funcionar bem no celular e levar ao agendamento com o menor número de passos.",
    milestones: [
      {when: "28/03/2026", what: "Versão inicial em Next.js com apresentação, serviços, como funciona, perguntas frequentes e chamada para agendamento."},
      {when: "05/08/2026", what: "Revisão: fotos do site antigo substituídas por imagens locais, seções simplificadas, favicon e imagem de compartilhamento com a foto da profissional."},
    ],
  },

  responsibility: {
    leadership: [
      "Decidi eliminar a dependência do domínio do site antigo, trazendo as fotos para o próprio projeto.",
      "Defini o WhatsApp como canal de agendamento, com botão flutuante presente em toda a página.",
    ],
    direct: [
      "Estruturei o site em Next.js 16 (App Router), React 19 e TypeScript, com componentes por seção (Header, Hero, About, Services, HowItWorks, CTA, Footer).",
      "Configurei metadados, Open Graph com imagem pública da profissional e ícones em vários tamanhos.",
      "Publiquei o site em servidor próprio com nginx como proxy reverso e HTTPS.",
    ],
    team: [],
    ai: [
      "O desenvolvimento seguiu o fluxo de trabalho com agentes de IA que eu dirijo, reviso e valido, com instruções formais para os agentes no repositório.",
    ],
  },

  architecture: {
    intro:
      "Página única em Next.js com App Router, pré-renderizada no build e servida pelo processo Next.js atrás de nginx. Não há backend nem formulário: todas as chamadas levam ao WhatsApp.",
    diagram: {
      title: "Arquitetura do site de Arlene Zerbini",
      tiers: [
        {label: "Visitante", nodes: ["Navegador", "WhatsApp"]},
        {label: "Servidor próprio", nodes: ["nginx + HTTPS"]},
        {label: "Next.js 16", nodes: ["Página pré-renderizada"]},
        {label: "Ativos", nodes: ["Fotos locais", "Ícones e OG"]},
      ],
      links: [
        "O navegador acessa o site por HTTPS no nginx.",
        "O nginx encaminha ao processo Next.js, que entrega a página pré-renderizada.",
        "Fotos e ícones são servidos do próprio projeto.",
        "Os botões de agendamento abrem o WhatsApp.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16.2, React 19.2, TypeScript e Tailwind CSS 4, com estilos majoritariamente inline e paleta própria (tons de sálvia e areia). Componentes por seção e botão flutuante de WhatsApp com aria-label.",
      },
      {
        name: "SEO",
        content:
          "Título, descrição e Open Graph pela Metadata API, com locale pt_BR e imagem de compartilhamento hospedada no próprio domínio; favicons de 16 e 32 px e ícone Apple. Atributo lang pt-BR. Não há sitemap, robots.txt nem dados estruturados.",
      },
      {
        name: "Desempenho",
        content:
          "Três fotos JPEG locais exibidas com a tag img e object-fit. Fontes Cormorant Garamond e Inter importadas do Google Fonts no CSS global, com display swap.",
      },
      {
        name: "Implantação",
        content:
          "Servidor próprio com nginx como proxy reverso para o processo Next.js e HTTPS. A página é servida a partir do cache de pré-renderização do Next.js.",
      },
    ],
  },

  decisions: [
    {
      title: "Fotos hospedadas no próprio projeto",
      problem:
        "A primeira versão exibia fotos a partir do site antigo da profissional, o que deixava as imagens sujeitas a um domínio fora do controle do projeto.",
      decision:
        "Copiar as fotos para public/images, escolher uma imagem por função (hero, retrato principal, contexto de trabalho) e usar URL pública própria na imagem de compartilhamento.",
      reason:
        "O site passa a depender apenas do próprio domínio, e a prévia em redes sociais deixa de quebrar.",
      tradeoff:
        "As fotos são servidas no tamanho original, sem otimização automática por next/image.",
      learning:
        "Ativos de terceiros, mesmo do próprio cliente, devem ser incorporados ao projeto antes da publicação.",
    },
    {
      title: "Página única com um único caminho de ação",
      problem:
        "Em atendimento terapêutico, cada etapa extra entre o interesse e o contato reduz a chance de agendamento.",
      decision:
        "Organizar o conteúdo em uma página com apresentação, serviços e etapas do atendimento, e repetir o agendamento pelo WhatsApp no hero, na chamada final e no botão flutuante.",
      reason:
        "Mantém o site simples de manter e coerente com a forma como a profissional já agenda.",
      tradeoff:
        "Sem páginas por tema, o site tem menos portas de entrada em buscadores.",
    },
  ],

  results: [
    "Site de página única entregue em domínio próprio por HTTPS, servido pré-renderizado, com agendamento pelo WhatsApp em três pontos da página.",
  ],
  limits: [
    "Próximo passo: gerar sitemap, robots.txt e dados estruturados de profissional.",
    "Fotos servidas no tamanho original; próximo passo é convertê-las para formatos modernos com tamanhos responsivos.",
    "Fontes carregadas por importação no CSS, que atrasa a primeira renderização em comparação com next/font.",
    "Próximo passo: adicionar análise de acesso para medir os cliques no agendamento.",
  ],

  links: [{label: "Visitar site", url: "https://psicanalista.arlenezerbini.com/", kind: "produto"}],

};
