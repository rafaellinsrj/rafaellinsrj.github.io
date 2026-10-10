import type {CaseStudy} from "@/lib/case-types";

export const cgm: CaseStudy = {
  slug: "cgm",
  name: "CGM Marcenaria",
  group: "sites",
  category: "Site institucional · Next.js",
  summary:
    "Site institucional de uma marcenaria especializada em shopping centers, com portfólio de obras por categoria, clientes atendidos e contato direto pelo WhatsApp.",
  role: "Desenvolvimento do site e implantação em servidor próprio",
  period: "Março de 2026",
  stage: "Site publicado",
  stageNote: "",
  platforms: ["Web (desktop e celular)", "Área restrita de gestão do portfólio"],
  cover: {
    src: "/images/screens/cgm.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da CGM Marcenaria com o título O preferido pelos shoppings, botões para WhatsApp e portfólio e números de apresentação da empresa.",
    caption: "Página inicial, outubro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/cgm/portfolio.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de portfólio completo com filtros por categoria (reforma administrativa, bancos, playground, balcão e outras) e grade de fotos de obras.",
      caption: "Página de portfólio, outubro de 2026",
    },
    {
      src: "/images/cases/cgm/home-celular.jpg",
      width: 390,
      height: 844,
      alt: "Página inicial em largura de celular, com menu recolhido, título centralizado e botões empilhados.",
      caption: "Página inicial em celular, outubro de 2026",
    },
  ],

  history: {
    audience:
      "Lojistas e administradores de shopping centers que contratam marcenaria para lojas, balcões, áreas administrativas e mobiliário de áreas comuns.",
    problem:
      "A empresa precisava de uma presença on-line que mostrasse obras reais em shoppings e levasse o visitante direto a uma conversa comercial. O volume de fotos por categoria exigia uma forma simples de manter o portfólio atualizado sem editar código.",
    milestones: [
      {when: "27/03/2026", what: "Estrutura inicial do site em Next.js 16 com seções institucionais."},
      {when: "28/03/2026", what: "Portfólio com fotos reais por categoria, logos dos shoppings clientes, página de portfólio completo e área restrita de gestão de fotos."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a separação entre componentes visuais e a camada de acesso aos dados do portfólio, para que a fonte pudesse mudar de JSON para banco sem alterar as páginas.",
      "Escolhi o WhatsApp como único canal de conversão, presente no cabeçalho, no hero, nos serviços, no contato e no rodapé.",
    ],
    direct: [
      "Estruturei o site em Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4, com seções de apresentação, missão, benefícios, serviços, portfólio, clientes e contato.",
      "Implementei o portfólio com filtro por categoria, prévia de oito fotos na página inicial e página dedicada com todas as obras.",
      "Implementei a área restrita com sessão criptografada (iron-session) para enviar fotos por categoria, que são gravadas no servidor e registradas no JSON do portfólio.",
      "Configurei a publicação em servidor próprio com nginx como proxy reverso e certificado Let's Encrypt.",
    ],
    team: [],
    ai: [
      "O site foi desenvolvido por um agente de IA de codificação sob minha direção; eu defini o escopo, revisei e validei as entregas.",
    ],
  },

  architecture: {
    intro:
      "Aplicação Next.js com App Router executada por next start. As páginas são pré-renderizadas no build e servidas do cache do Next.js; o portfólio vem de um arquivo JSON lido por uma camada de acesso própria. O nginx termina o HTTPS e encaminha as requisições ao processo Node.",
    diagram: {
      title: "Arquitetura do site da CGM Marcenaria",
      tiers: [
        {label: "Visitante", nodes: ["Navegador", "WhatsApp"]},
        {label: "Servidor próprio", nodes: ["nginx + HTTPS"]},
        {label: "Next.js 16", nodes: ["Páginas pré-renderizadas", "Área restrita"]},
        {label: "Conteúdo", nodes: ["Arquivo de dados do portfólio", "Fotos das obras"]},
      ],
      links: [
        "O navegador acessa o site por HTTPS no nginx.",
        "O nginx encaminha as requisições ao processo Next.js.",
        "As páginas leem o portfólio pela camada de acesso, a partir do JSON e das fotos locais.",
        "Os botões de contato abrem uma conversa no WhatsApp.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16.2 com App Router, React 19.2, TypeScript e Tailwind CSS 4. Duas rotas públicas: página inicial com as seções institucionais e página de portfólio completo. Componentes por seção (Header, Hero, Sobre, Serviços, Portfólio, Clientes, Contato, Footer) e ícones lucide-react.",
      },
      {
        name: "Conteúdo",
        content:
          "Portfólio em arquivo de dados tipado, acessado por uma camada única de leitura (todos, por categoria, destaques). Cerca de 100 fotos de obras organizadas por categoria.",
      },
      {
        name: "SEO",
        content:
          "Metadados pela Metadata API do Next.js: título, descrição, palavras-chave e Open Graph com locale pt_BR na página inicial e título próprio na página de portfólio. Atributo lang pt-BR. Não há sitemap, robots.txt nem dados estruturados.",
      },
      {
        name: "Desempenho",
        content:
          "Fotos e logos com next/image, que redimensiona e converte para formatos modernos sob demanda; os originais são JPEG de até 1600 x 1200. Fontes Playfair Display e Inter carregadas por next/font, hospedadas com o próprio site e com display swap. Páginas servidas pré-renderizadas.",
      },
      {
        name: "Implantação",
        content:
          "Servidor próprio com nginx como proxy reverso para o processo Next.js, redirecionamento de HTTP para HTTPS e certificado Let's Encrypt gerenciado pelo Certbot.",
      },
    ],
  },

  decisions: [
    {
      title: "Camada de acesso ao portfólio separada dos componentes",
      problem:
        "O portfólio começa com dados estáticos, mas a fonte de dados precisava poder mudar para banco de dados e armazenamento externo de imagens sem refazer as páginas.",
      decision:
        "Concentrar a leitura dos dados em uma camada única e passar os itens aos componentes por propriedades.",
      reason:
        "A troca da fonte de dados fica restrita a um arquivo, sem alterar as páginas nem o componente de portfólio.",
      tradeoff:
        "Enquanto a fonte é um JSON importado, o conteúdo é incorporado no build; atualizar o portfólio depende de um novo build.",
    },
    {
      title: "Gestão de fotos sem banco de dados",
      problem:
        "O cliente precisava incluir fotos de novas obras sem pedir alteração de código, mas uma estrutura de banco e armazenamento externo não se justificava para o volume do portfólio.",
      decision:
        "Criar uma área restrita com sessão criptografada que grava as imagens em pastas por categoria e atualiza o JSON do portfólio.",
      reason:
        "Entrega a autonomia necessária com a infraestrutura que já existe no servidor, sem serviços pagos adicionais.",
      tradeoff:
        "O conteúdo fica acoplado ao disco do servidor e não tem histórico de versões; a publicação das fotos novas depende de reconstruir o site.",
    },
    {
      title: "WhatsApp como canal único de conversão",
      problem:
        "O público é formado por lojistas e administradores que pedem orçamento de forma direta.",
      decision:
        "Usar links para o WhatsApp em todos os pontos de chamada, sem formulário.",
      reason:
        "Remove a etapa de formulário e a necessidade de backend para receber mensagens.",
      tradeoff:
        "O site não registra quantos contatos gera; a medição fica com o próprio WhatsApp.",
    },
  ],

  results: [
    "Site institucional entregue em cgmmarcenaria.com.br: página inicial, página de portfólio com cerca de 100 fotos por categoria e área restrita de gestão de fotos, servidos por HTTPS e pré-renderizados.",
  ],
  limits: [
    "Fotos enviadas pela área restrita dependem de novo build para aparecer no site, porque o JSON é incorporado na compilação.",
    "Próximo passo: sitemap, robots.txt e dados estruturados de empresa local.",
    "Próximo passo: levar o portfólio para banco de dados e armazenamento externo de imagens, aproveitando a camada de acesso já isolada.",
    "Próximo passo: ferramenta de análise de acesso e medição de contatos.",
  ],

  links: [{label: "Visitar site", url: "https://www.cgmmarcenaria.com.br/", kind: "produto"}],

};
