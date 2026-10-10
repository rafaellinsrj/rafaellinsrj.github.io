import type {CaseStudy} from "@/lib/case-types";

export const linsPayments: CaseStudy = {
  slug: "lins-payments",
  name: "Lins Payments",
  group: "fintech",
  category: "Site de produto · Next.js",
  summary: "Site de apresentação de um gateway de pagamentos para empresas, com métodos de pagamento, vantagens, tabela de taxas, exemplo de integração e perguntas frequentes. É a vitrine comercial do produto; o processamento de pagamentos não faz parte deste código.",
  role: "Desenvolvimento do site e da apresentação do produto",
  period: "Maio de 2026",
  stage: "Site publicado",
  stageNote: "",
  platforms: ["Web"],
  cover: {
    src: "/images/screens/lins-global.jpg",
    width: 1440,
    height: 1000,
    alt: "Topo do site Lins Payments em azul e roxo, com o título Pagamentos simplificados para o seu negócio e um painel ilustrativo de transações",
    caption: "Topo do site em linspayments.com. Números da tela são ilustrativos.",
  },
  gallery: [
    {
      src: "/images/cases/lins-payments/integracao.jpg",
      width: 1440,
      height: 1000,
      alt: "Seção Integração simples e rápida com exemplo de código para criar cobrança Pix, plugins de e-commerce e lista de SDKs",
      caption: "Seção de integração. O código é um exemplo de apresentação.",
    },
  ],

  history: {
    audience: "Empresas que precisam aceitar Pix, cartão, boleto e cripto e comparam taxas e facilidade de integração antes de contratar um gateway.",
    problem: "O produto precisava de uma página que explicasse em sequência o que é oferecido, quanto custa e como integrar, e que levasse o visitante ao contato comercial.",
    constraints: "Prazo curto e escopo de página única, sem backend. A base visual partiu de um modelo de código aberto sob licença MIT, adaptado à marca e ao conteúdo do produto.",
    milestones: [
      {when: "25/05/2026", what: "Landing page completa no repositório, com seções de métodos, vantagens, números, taxas, integração e perguntas frequentes."},
      {when: "28/05/2026", what: "Projeto incluído no portfólio da Site Fácil como site de fintech."},
      {when: "2026", what: "Site em linspayments.com."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a sequência de leitura da página: proposta, métodos de pagamento, vantagens, taxas, integração e dúvidas.",
      "Escolhi partir de um modelo aberto de landing page para concentrar o esforço no conteúdo e na marca.",
    ],
    direct: [
      "Adaptei o modelo ao produto: identidade azul e roxa, logotipos, metadados de SEO e Open Graph em português e tema escuro fixo.",
      "Criei as seções de métodos de pagamento, vantagens, taxas, integração e perguntas frequentes com componentes React e primitivas Radix UI.",
      "Organizei a navegação responsiva com menu móvel e animações com Framer Motion e NumberFlow.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro: "Aplicação Next.js com App Router em uma única rota. A página é composta por seções independentes em React; os componentes de interface seguem o padrão shadcn sobre primitivas Radix UI. Não há chamadas a APIs, banco de dados ou serviços de pagamento.",
    diagram: {
      title: "Arquitetura do site Lins Payments",
      tiers: [
        {label: "Visitante", nodes: ["Navegador"]},
        {label: "Aplicação", nodes: ["Next.js (App Router)", "Página única"]},
        {label: "Seções", nodes: ["Métodos e vantagens", "Taxas e integração", "Perguntas frequentes"]},
        {label: "Interface", nodes: ["Radix UI", "Tailwind CSS 4", "Framer Motion"]},
      ],
      links: [
        "O navegador recebe a página única gerada pelo Next.js.",
        "A página é montada a partir de seções React independentes.",
        "As seções usam componentes Radix UI estilizados com Tailwind CSS e animados com Framer Motion.",
      ],
    },
    layers: [
      {name: "Frontend", content: "Next.js 16.1 com App Router, React 19.2 e TypeScript 5.9. Fonte Inter carregada por next/font."},
      {name: "Componentes", content: "Accordion, diálogo, menu de navegação, menu suspenso, separador e tooltip sobre Radix UI, com class-variance-authority, clsx e tailwind-merge. Ícones Lucide e Radix."},
      {name: "Estilo e movimento", content: "Tailwind CSS 4 com tw-animate-css, Framer Motion para entrada das seções e NumberFlow para contadores."},
      {name: "SEO", content: "Título, descrição, palavras-chave e Open Graph definidos nos metadados da aplicação, idioma pt-BR e imagem de compartilhamento."},
      {name: "Qualidade", content: "ESLint com a configuração do Next.js. Sem testes automatizados."},
    ],
  },

  decisions: [
    {
      title: "Partir de um modelo aberto",
      problem: "A página precisava ficar pronta rápido, com aparência de produto de software e componentes acessíveis.",
      decision: "Usar como base um modelo de landing page SaaS de código aberto (licença MIT) e substituir seções, textos e marca.",
      reason: "O modelo já trazia navegação, tema escuro e componentes Radix testados; o trabalho ficou concentrado na mensagem do produto.",
      tradeoff: "Parte da estrutura e do nome do pacote herdados do modelo, e a obrigação de manter o aviso de licença.",
    },
    {
      title: "Sequência de leitura orientada à decisão",
      problem: "Quem avalia um gateway quer saber primeiro quais meios aceita, quanto custa e quanto trabalho dá integrar.",
      decision: "Ordenar a página em métodos, vantagens, números, taxas, integração e perguntas frequentes, com chamadas para preços e contato no topo.",
      reason: "Cada seção responde a uma objeção comum antes da próxima.",
      tradeoff: "Página longa em celular, compensada pelo menu com âncoras.",
    },
    {
      title: "Site de apresentação sem backend",
      problem: "O processamento de pagamentos exige infraestrutura, contratos e certificações próprias.",
      decision: "Manter o site como frontend de apresentação, sem formulários que coletem dados financeiros e com contato por e-mail.",
      reason: "Separa a comunicação comercial da plataforma transacional e evita expor dados sensíveis num site de marketing.",
      tradeoff: "Os elementos que lembram painel e API são ilustrativos e precisam ser lidos como tal.",
    },
  ],

  results: [
    "Site entregue em linspayments.com.",
    "Página única com sete seções e metadados de SEO em português.",
  ],

  limits: [
    "O escopo é a vitrine comercial: o processamento de pagamentos, a API e o painel transacional ficam fora deste código.",
    "Os números de destaque (empresas, volume processado, disponibilidade e transações) e o painel do topo são ilustrativos e não representam operação.",
    "Próximo passo: testes automatizados e medição de desempenho da página.",
  ],

  links: [
    {label: "Site", url: "https://linspayments.com/", kind: "produto"},
  ],

};
