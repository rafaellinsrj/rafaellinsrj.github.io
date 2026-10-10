import type {CaseStudy} from "@/lib/case-types";

export const vitoria: CaseStudy = {
  slug: "vitoria",
  name: "Dra. Vitória Féo",
  group: "sites",
  category: "Site profissional · Next.js",
  summary:
    "Site de uma médica psiquiatra no Rio de Janeiro, com apresentação, especialidades e os locais de atendimento, cada um com seu próprio canal de agendamento.",
  role: "Desenvolvimento do site",
  period: "Março a julho de 2026",
  stage: "Versão local",
  stageNote:
    "Código versionado em julho de 2026 e configurado no servidor próprio sem domínio público dedicado. Em outubro de 2026 não há URL pública; as telas deste estudo vêm da versão local.",
  platforms: ["Web (desktop e celular)"],
  cover: {
    src: "/images/screens/local-vitoria.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do site da Dra. Vitória Féo com foto da médica ao fundo, nome em fonte serifada, formação e botões de agendamento separados para cada clínica.",
    caption: "Versão local, outubro de 2026",
  },
  gallery: [],

  history: {
    audience:
      "Pacientes que procuram atendimento psiquiátrico no Rio de Janeiro e querem conhecer a formação da médica e onde ela atende.",
    problem:
      "A médica atende em mais de uma clínica, e cada clínica tem seu próprio agendamento. O site precisava apresentar a profissional e encaminhar o paciente ao canal certo de cada local.",
    milestones: [
      {when: "Março de 2026", what: "Preparação das imagens e logotipos usados no site (data dos arquivos)."},
      {when: "31/07/2026", what: "Commit inicial versionado do site em Next.js 16."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a seção Onde atendo com um cartão por clínica e o agendamento direcionado ao canal de cada local.",
    ],
    direct: [
      "Desenvolvi a página em Next.js 16, React 19 e TypeScript, com seções de apresentação, sobre, especialidades, onde atendo e contato.",
      "Criei os ícones em SVG inline e a paleta em variáveis CSS (verde-petróleo, dourado, creme).",
      "Preparei a configuração de nginx e o processo Next.js no servidor próprio.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro:
      "Página única em Next.js com App Router, escrita como componente de cliente (menu móvel e efeito de rolagem) e pré-renderizada no build. Não há backend: todas as ações levam ao WhatsApp ou ao Instagram.",
    diagram: {
      title: "Arquitetura do site da Dra. Vitória Féo",
      tiers: [
        {label: "Visitante", nodes: ["Navegador"]},
        {label: "Next.js 16", nodes: ["Página única (cliente)"]},
        {label: "Ativos", nodes: ["Fotos e logos locais", "Google Fonts"]},
        {label: "Canais", nodes: ["WhatsApp por clínica", "Instagram"]},
      ],
      links: [
        "O navegador carrega a página pré-renderizada pelo Next.js.",
        "Fotos e logos vêm do próprio projeto; as fontes, do Google Fonts.",
        "Cada cartão de clínica leva ao WhatsApp daquele local.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16.1, React 19.2, TypeScript e Tailwind CSS 4 (classes utilitárias pontuais), com a maior parte dos estilos inline e variáveis CSS para a paleta. Seções com âncoras (hero, sobre, especialidades, onde atendo, contato), menu móvel com aria-label e botão flutuante de agendamento.",
      },
      {
        name: "SEO",
        content:
          "Título, descrição, palavras-chave e Open Graph pela Metadata API, com a formação da médica e a cidade de atendimento na descrição. Atributo lang pt-BR. Sem sitemap, robots.txt, URL canônica ou dados estruturados.",
      },
      {
        name: "Desempenho",
        content:
          "Sete imagens locais (cerca de 1,2 MB no total), exibidas com img e como fundo em CSS. Fontes Cormorant Garamond e Lato do Google Fonts com preconnect no head.",
      },
      {
        name: "Implantação preparada",
        content:
          "Processo Next.js no servidor próprio com nginx como proxy reverso, configurado como site padrão do servidor, sem domínio nem HTTPS.",
      },
    ],
  },

  decisions: [
    {
      title: "Agendamento separado por local de atendimento",
      problem:
        "Cada clínica administra a própria agenda; um número único obrigaria a médica a repassar pedidos manualmente.",
      decision:
        "Apresentar um cartão por clínica, com descrição e botão de WhatsApp próprio, além de um contato geral no topo e no rodapé.",
      reason:
        "O paciente chega direto a quem marca a consulta naquele local.",
      tradeoff:
        "Três canais de contato na mesma página podem confundir; a hierarquia visual precisa deixar claro qual usar.",
    },
    {
      title: "Página inteira como componente de cliente",
      problem:
        "O menu móvel e a mudança do cabeçalho ao rolar exigem estado no navegador.",
      decision:
        "Marcar a página inteira com use client, mantendo tudo em um único arquivo.",
      reason:
        "Simplifica a manutenção de um site de uma página só.",
      tradeoff:
        "Todo o conteúdo entra no pacote JavaScript enviado ao navegador; isolar apenas o cabeçalho como componente de cliente reduziria esse custo.",
    },
  ],

  results: [],
  limits: [
    "Sem domínio público em outubro de 2026.",
    "Sem sitemap, robots.txt, URL canônica e dados estruturados de médico ou clínica.",
    "Imagens sem otimização automática; alguns arquivos com extensão PNG são JPEG.",
    "A página inteira roda como componente de cliente.",
  ],

  links: [],

};
