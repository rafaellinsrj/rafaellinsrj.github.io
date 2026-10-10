import type {CaseStudy} from "@/lib/case-types";

export const sitefacil: CaseStudy = {
  slug: "sitefacil",
  name: "Site Fácil",
  group: "sites",
  category: "Site de serviços · Next.js",
  summary:
    "Site de uma oferta de criação de sites, com serviços, portfólio de projetos publicados, catálogo de modelos de código aberto e um formulário de briefing que alimenta um painel interno de acompanhamento.",
  role: "Desenvolvimento do site, do formulário de briefing e do painel interno",
  period: "Março a agosto de 2026",
  stage: "Site publicado",
  stageNote:
    "No ar em sitefacil.pro em outubro de 2026, com a página inicial, o catálogo de modelos e o formulário de briefing acessíveis por HTTPS. O painel interno de briefings existe no código e é restrito por login.",
  platforms: ["Web (desktop e celular)", "Painel interno de briefings"],
  cover: {
    src: "/images/screens/sitefacil.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da Site Fácil em fundo escuro com o título Sua empresa merece um site de verdade, botões Começar agora e Ver modelos e indicadores de apresentação.",
    caption: "Site publicado, outubro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/sitefacil/briefing.jpg",
      width: 1440,
      height: 1000,
      alt: "Formulário de briefing com seções de dados pessoais e tipo de site (landing page, institucional, e-commerce, portfólio, blog), com campos vazios.",
      caption: "Site publicado, formulário de briefing, outubro de 2026",
    },
    {
      src: "/images/cases/sitefacil/modelos.jpg",
      width: 1440,
      height: 1000,
      alt: "Catálogo de modelos com cartões de templates de código aberto, categoria, tecnologias e links para demonstração e repositório.",
      caption: "Site publicado, catálogo de modelos, outubro de 2026",
    },
    {
      src: "/images/cases/sitefacil/home-celular.jpg",
      width: 390,
      height: 844,
      alt: "Página inicial em largura de celular, com menu recolhido, botões empilhados e botão flutuante de WhatsApp.",
      caption: "Site publicado em celular, outubro de 2026",
    },
  ],

  history: {
    audience:
      "Pequenas empresas e profissionais que precisam de site institucional, landing page, e-commerce ou sistema web.",
    problem:
      "A oferta precisava de uma vitrine com projetos reais publicados e de uma forma organizada de receber as informações de cada novo cliente (identidade visual, textos, fotos, referências, prazo e orçamento) antes da primeira conversa.",
    milestones: [
      {when: "28/03/2026", what: "Versão inicial com serviços, portfólio, processo, diferenciais, catálogo de modelos, formulário de briefing e painel interno."},
      {when: "28/05/2026", what: "Inclusão do Autista Social no portfólio."},
      {when: "05/08/2026", what: "Inclusão do site de advocacia Caio Andaluz no portfólio."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o briefing estruturado como etapa de entrada de novos projetos, com acompanhamento por status no painel.",
      "Optei por armazenar os briefings em arquivos no servidor, sem banco de dados, compatível com o volume esperado.",
      "Organizei o catálogo de modelos de código aberto como referência visual para o cliente escolher o estilo do site.",
    ],
    direct: [
      "Estruturei o site em Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4, com componentes por seção e botão flutuante de WhatsApp.",
      "Implementei o formulário de briefing com envio multipart, inclusive fotos, e a rota de API que grava cada briefing com identificador único.",
      "Implementei o painel interno com sessão criptografada (iron-session), lista por status (novo, negociando, fazendo, finalizado) e página de detalhe.",
      "Configurei a publicação em servidor próprio com nginx, HTTPS e cabeçalhos de segurança (HSTS, nosniff, X-Frame-Options, Referrer-Policy).",
    ],
    team: [],
    ai: [
      "O desenvolvimento seguiu o fluxo de trabalho com agentes de IA que eu dirijo, reviso e valido, com instruções formais para os agentes no repositório.",
    ],
  },

  architecture: {
    intro:
      "Aplicação Next.js com build standalone. As páginas públicas são pré-renderizadas; o briefing é a única entrada de dados, recebida por uma rota de API e gravada em arquivos JSON no servidor, lidos depois pelo painel interno.",
    diagram: {
      title: "Arquitetura do site da Site Fácil",
      tiers: [
        {label: "Visitante", nodes: ["Navegador", "WhatsApp"]},
        {label: "Servidor próprio", nodes: ["nginx + HTTPS"]},
        {label: "Next.js 16", nodes: ["Páginas públicas", "API de briefing", "Painel interno"]},
        {label: "Armazenamento", nodes: ["Briefings em JSON", "Fotos enviadas"]},
      ],
      links: [
        "O navegador acessa o site por HTTPS no nginx, que encaminha ao Next.js.",
        "O formulário envia o briefing à rota de API.",
        "A API grava o briefing em JSON e as fotos em disco.",
        "O painel interno lê os briefings e atualiza o status.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16.2 com App Router e output standalone, React 19.2, TypeScript e Tailwind CSS 4. Rotas públicas: página inicial (Hero, Serviços, Portfólio, Processo, Diferenciais, Chamada final), catálogo de modelos e formulário de briefing. Ícones lucide-react.",
      },
      {
        name: "Briefing e painel",
        content:
          "O formulário coleta contato, tipo de site, objetivos, identidade visual (logo, manual, três cores, estilos), conteúdo disponível, redes sociais, referências, prazo, orçamento, descrição e fotos. A rota de API gera um UUID, normaliza nomes de arquivo e grava o JSON. O painel lista por status e permite mudar a etapa de cada pedido.",
      },
      {
        name: "SEO e desempenho",
        content:
          "Título, descrição, palavras-chave e Open Graph com locale pt_BR pela Metadata API; lang pt-BR. Fontes Inter e Plus Jakarta Sans importadas do Google Fonts no CSS. Portfólio com ícones em vez de capturas, o que mantém a página leve. Sem sitemap, robots.txt ou dados estruturados.",
      },
      {
        name: "Implantação",
        content:
          "Servidor próprio com nginx como proxy reverso, redirecionamento para HTTPS, certificado Let's Encrypt e cabeçalhos de segurança definidos no servidor.",
      },
    ],
  },

  decisions: [
    {
      title: "Briefing estruturado antes da conversa comercial",
      problem:
        "Informações de identidade visual, conteúdo e referências chegavam dispersas em mensagens, o que atrasava o início de cada projeto.",
      decision:
        "Criar um formulário único, dividido em blocos, com upload de fotos e campos de prazo e orçamento.",
      reason:
        "Padroniza a entrada de projetos e permite avaliar escopo e preço antes do primeiro contato.",
      tradeoff:
        "Um formulário longo pode reduzir a taxa de preenchimento; por isso o WhatsApp continua disponível como canal alternativo.",
    },
    {
      title: "Armazenamento em arquivos no lugar de banco de dados",
      problem:
        "O volume de briefings é pequeno, e um banco de dados acrescentaria serviço, migrações e custo de operação.",
      decision:
        "Gravar cada briefing como JSON e as fotos em pasta própria, com status mantido no mesmo arquivo.",
      reason:
        "Funciona com a infraestrutura existente e é simples de inspecionar e copiar em backup.",
      tradeoff:
        "Sem consultas, concorrência controlada ou histórico de alterações; o crescimento do volume exigiria migrar para banco de dados.",
    },
  ],

  journey: {
    title: "Envio de um briefing (dados fictícios)",
    steps: [
      "O cliente preenche nome, WhatsApp, tipo Site institucional, estilo Minimalista e anexa duas fotos.",
      "O navegador envia o formulário em multipart para a rota de API.",
      "A API gera um identificador, salva as fotos com nomes normalizados e grava o JSON com a data de criação.",
      "O briefing aparece no painel interno com status Novo e passa para Negociando quando a conversa começa.",
    ],
  },

  dataModel: [
    {entity: "Briefing", fields: "id, criadoEm, status, contato, tipo, objetivos, identidade visual, conteúdo disponível, redes, referências, prazo, orçamento, descrição, fotos"},
  ],

  results: [
    "Outubro de 2026: site acessível em sitefacil.pro, com página inicial, catálogo de modelos e formulário de briefing respondendo por HTTPS.",
    "O portfólio do site lista projetos publicados, entre eles CGM Marcenaria, Arlene Zerbini, Autista Social e Caio Andaluz.",
  ],
  limits: [
    "Briefings em arquivos, sem banco de dados, histórico ou notificação automática de novo pedido.",
    "Sem sitemap, robots.txt e dados estruturados.",
    "A página inicial inteira é um componente de cliente, o que aumenta o JavaScript enviado ao navegador.",
    "Os indicadores exibidos no site (projetos entregues, prazo médio) são texto comercial e não foram verificados neste estudo.",
  ],

  links: [{label: "Site publicado", url: "https://sitefacil.pro/", kind: "produto"}],

};
