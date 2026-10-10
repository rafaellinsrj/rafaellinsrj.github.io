import type {CaseStudy} from "@/lib/case-types";

export const viamanzoni: CaseStudy = {
  slug: "viamanzoni",
  name: "Via Manzoni",
  group: "sites",
  category: "Site institucional · Next.js",
  summary:
    "Site para uma marca de aluguel de roupas de luxo, com coleções feminina e masculina, página de coleção alimentada por pastas de imagens e formulário que monta a mensagem de atendimento no WhatsApp.",
  role: "Desenvolvimento do site",
  period: "Março de 2026",
  stage: "Versão local",
  stageNote: "",
  platforms: ["Web (desktop e celular)", "Área restrita de gestão da coleção"],
  cover: {
    src: "/images/screens/local-viamanzoni.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da Via Manzoni em fundo escuro com o título Vista-se com a elegância que você merece e botões para agendar, consultar disponibilidade e ver a coleção.",
    caption: "Página inicial",
  },
  gallery: [],

  history: {
    audience:
      "Pessoas que procuram alugar roupas de alto padrão para casamentos e eventos, com atendimento personalizado por agendamento.",
    problem:
      "A marca tinha um site em WordPress e precisava de uma apresentação mais alinhada ao posicionamento de luxo, com a coleção fácil de atualizar e um caminho curto até o atendimento, que acontece pelo WhatsApp.",
    milestones: [
      {when: "28/03/2026", what: "Versão inicial com seções Para elas, Para eles, galeria, como funciona, contato, página de coleção e área restrita."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o formulário de contato sem backend, que transforma os dados do evento em uma mensagem pronta no WhatsApp.",
      "Defini a coleção baseada em pastas de imagens com metadados opcionais, para dispensar banco de dados.",
    ],
    direct: [
      "Estruturei o site em Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4, com componentes por seção.",
      "Implementei a página de coleção, que lê as categorias e imagens do disco e usa um JSON ao lado de cada foto para nome e descrição.",
      "Implementei a área restrita com sessão criptografada (iron-session) para enviar e remover peças da coleção.",
      "Configurei o proxy reverso no nginx para o domínio da marca.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro:
      "Aplicação Next.js com App Router, sem banco de dados. A coleção é derivada da estrutura de pastas de imagens; o contato não envia dados a servidor, apenas abre o WhatsApp com a mensagem montada no navegador.",
    diagram: {
      title: "Arquitetura do site da Via Manzoni",
      tiers: [
        {label: "Visitante", nodes: ["Navegador", "WhatsApp"]},
        {label: "Next.js 16", nodes: ["Página inicial", "Coleção", "Área restrita"]},
        {label: "Conteúdo", nodes: ["Pastas por categoria", "JSON por peça"]},
      ],
      links: [
        "O navegador carrega as páginas servidas pelo Next.js.",
        "A página de coleção lê as pastas de imagens e os metadados de cada peça.",
        "O formulário de contato abre o WhatsApp com a mensagem preenchida.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16.2 com App Router, React 19.2, TypeScript, Tailwind CSS 4 e estilos inline nos componentes. Rotas públicas: página inicial (Hero, Para elas, Para eles, Galeria, Como funciona, Contato) e página de coleção com agrupamento por categoria.",
      },
      {
        name: "Conteúdo",
        content:
          "A coleção é lida da estrutura de pastas: cada pasta é uma categoria e cada imagem (JPG, PNG ou WebP) é uma peça, com nome e descrição opcionais em arquivo de dados ao lado.",
      },
      {
        name: "SEO e desempenho",
        content:
          "Título, descrição e palavras-chave pela Metadata API, lang pt-BR e título próprio na página de coleção. Imagens das seções principais com next/image; fontes Playfair Display e Inter por importação do Google Fonts no CSS. Sem Open Graph, sitemap ou dados estruturados.",
      },
      {
        name: "Implantação",
        content:
          "nginx como proxy reverso para o processo Next.js no domínio da marca, no servidor próprio.",
      },
    ],
  },

  decisions: [
    {
      title: "Formulário que gera mensagem no WhatsApp",
      problem:
        "O atendimento da marca acontece pelo WhatsApp, e um formulário tradicional exigiria backend, armazenamento de dados pessoais e resposta por outro canal.",
      decision:
        "Coletar nome, tipo de evento, data e mensagem no navegador e abrir o WhatsApp com o texto já montado.",
      reason:
        "Leva o visitante direto ao canal em que a venda acontece, sem guardar dados no servidor.",
      tradeoff:
        "Não há registro dos pedidos no site; se o visitante não enviar a mensagem no WhatsApp, o contato se perde.",
    },
    {
      title: "Coleção derivada do sistema de arquivos",
      problem:
        "A coleção muda com frequência e precisava ser mantida sem banco de dados.",
      decision:
        "Usar pastas como categorias e arquivos de imagem como peças, com JSON opcional ao lado de cada foto.",
      reason:
        "A estrutura é simples de entender e funciona tanto com cópia manual quanto com a área restrita de upload.",
      tradeoff:
        "O conteúdo fica preso ao disco do servidor, sem histórico, e a ordem das peças depende do nome dos arquivos.",
    },
  ],

  journey: {
    title: "Pedido de atendimento pelo formulário (dados fictícios)",
    steps: [
      "A visitante preenche nome Maria, evento Casamento, data 12/12 e uma mensagem curta.",
      "Ao enviar, o navegador monta o texto com os quatro campos e o codifica para URL.",
      "Uma nova aba abre o WhatsApp da marca com a mensagem pronta para envio.",
    ],
  },

  results: [],
  limits: [
    "Os rótulos do formulário não estão associados aos campos o que prejudica leitores de tela. Próximo passo: associar rótulos e campos.",
    "Próximo passo: Open Graph, sitemap, robots.txt e HTTPS na configuração do servidor.",
  ],

  links: [],

};
