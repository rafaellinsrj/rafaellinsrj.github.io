import type {CaseStudy} from "@/lib/case-types";

export const caio: CaseStudy = {
  slug: "caio",
  name: "Caio Andaluz",
  group: "sites",
  category: "Site institucional · HTML e CSS estáticos",
  summary:
    "Site estático de advocacia criminal e cível em São Paulo, com página inicial, índice e oito páginas por área de atuação, dados estruturados, política de segurança de conteúdo e menu sem JavaScript.",
  role: "Desenvolvimento do site e implantação em servidor próprio",
  period: "Agosto de 2026",
  stage: "Versão local",
  stageNote: "",
  platforms: ["Web (desktop e celular)"],
  cover: {
    src: "/images/cases/caio/home.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial estática com aviso de plantão 24 horas, título sobre advocacia criminal e cível em São Paulo, botões de WhatsApp e áreas de atuação e área para a foto do advogado.",
    caption: "Página inicial",
  },
  gallery: [
    {
      src: "/images/cases/caio/area-atuacao.jpg",
      width: 1440,
      height: 1000,
      alt: "Página da área de prisão em flagrante, com trilha de navegação, título, etiqueta de plantão 24 horas e botões de WhatsApp e ligação.",
      caption: "Página de área de atuação",
    },
    {
      src: "/images/cases/caio/home-celular.jpg",
      width: 390,
      height: 844,
      alt: "Página inicial em largura de celular, com aviso de plantão, menu recolhido em botão e chamada para WhatsApp.",
      caption: "Página inicial em celular",
    },
  ],

  history: {
    audience:
      "Pessoas que precisam de advogado com urgência, em especial em prisão em flagrante, e clientes de causas trabalhistas, previdenciárias e de consumo em São Paulo.",
    problem:
      "Quem procura um advogado criminalista costuma buscar pela situação concreta (flagrante, audiência de custódia, liberdade provisória), muitas vezes de madrugada e pelo celular. O site precisava responder a essas buscas com páginas próprias e levar ao contato imediato.",
    constraints:
      "Publicidade na advocacia segue o Código de Ética da OAB e o Provimento nº 205/2021; as páginas de área declaram essa conformidade e que o conteúdo é informativo.",
    milestones: [
      {when: "05/08/2026", what: "Versão inicial com página inicial, índice de áreas e oito páginas temáticas; telefone real aplicado no mesmo dia."},
      {when: "05/08/2026", what: "Pacote de implantação com cabeçalhos de segurança para Apache e para hospedagens estáticas, sitemap e instruções de Google Tag Manager."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a arquitetura estática sem JavaScript próprio e sem formulários, para reduzir a superfície de ataque e o custo de manutenção.",
      "Estruturei o conteúdo em uma página por situação jurídica, pensando em busca local e no atendimento de urgência.",
    ],
    direct: [
      "Escrevi o HTML das dez páginas e um único arquivo de estilos com variáveis CSS como sistema de design.",
      "Implementei dados estruturados schema.org (Attorney com endereço na página inicial e FAQPage nas páginas temáticas), URL canônica, sitemap e robots.txt.",
      "Configurei a política de segurança de conteúdo por meta tag em todas as páginas, com o script do Tag Manager autorizado por hash, e os cabeçalhos equivalentes para servidor.",
      "Publiquei a versão estática em servidor próprio com nginx, HTTPS e cache de longa duração para arquivos estáticos.",
    ],
    team: [],
    ai: [
      "Os commits foram feitos diretamente no servidor, no fluxo de trabalho com agentes de IA que eu dirijo, reviso e valido.",
    ],
  },

  architecture: {
    intro:
      "Site estático puro: dez arquivos HTML, uma folha de estilos e arquivos de SEO, servidos diretamente pelo nginx. A única execução de script é o Google Tag Manager; o menu móvel funciona com CSS.",
    diagram: {
      title: "Arquitetura do site estático de Caio Andaluz",
      tiers: [
        {label: "Visitante", nodes: ["Navegador", "WhatsApp e telefone"]},
        {label: "Servidor próprio", nodes: ["nginx + HTTPS", "Cabeçalhos e cache"]},
        {label: "Arquivos estáticos", nodes: ["10 páginas HTML", "estilo.css", "sitemap e robots"]},
      ],
      links: [
        "O navegador recebe os arquivos HTML e CSS diretamente do nginx.",
        "O nginx aplica cabeçalhos de segurança e cache de 30 dias aos estáticos.",
        "Os botões levam ao WhatsApp com mensagem inicial ou à ligação telefônica.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "HTML semântico com landmarks (nav com aria-label, main), link para pular ao conteúdo, foco visível e respeito a prefers-reduced-motion. Menu suspenso por grupos (criminal e cível) e menu móvel com checkbox em CSS, sem JavaScript.",
      },
      {
        name: "SEO",
        content:
          "Título e descrição por página, URL canônica, sitemap com as páginas temáticas e robots.txt. JSON-LD com Attorney e PostalAddress na página inicial e FAQPage com perguntas e respostas em cada área de atuação. Trilha de navegação visível nas páginas internas.",
      },
      {
        name: "Desempenho",
        content:
          "Sem framework nem pacote JavaScript; uma folha de estilos de cerca de 20 KB. Fontes Marcellus, Cormorant Garamond e Inter do Google Fonts com preconnect e display swap.",
      },
      {
        name: "Segurança",
        content:
          "CSP com default-src 'self', script-src restrito ao hash do snippet do Tag Manager, object-src 'none' e form-action 'none'. Pacote com versões dos cabeçalhos para Apache (.htaccess) e para hospedagens estáticas (_headers), incluindo HSTS e Permissions-Policy.",
      },
      {
        name: "Implantação",
        content:
          "Servidor próprio com nginx servindo os arquivos diretamente, redirecionamento para HTTPS, certificado Let's Encrypt, cabeçalhos X-Frame-Options, nosniff e Referrer-Policy e cache público de 30 dias para CSS, imagens e fontes.",
      },
    ],
  },

  decisions: [
    {
      title: "HTML estático sem formulários",
      problem:
        "Um site de advocacia precisa estar sempre disponível e não deve coletar dados sensíveis de quem está em situação de urgência.",
      decision:
        "Publicar apenas arquivos estáticos, sem backend e sem formulário, com contato por WhatsApp e telefone.",
      reason:
        "Minimiza a superfície de ataque, dispensa atualizações de plataforma e permite servir o site direto do nginx ou de qualquer hospedagem estática.",
      tradeoff:
        "Cada mudança de texto exige editar o HTML; não há painel para o cliente atualizar conteúdo.",
    },
    {
      title: "Uma página por situação jurídica",
      problem:
        "Buscas de urgência são específicas (prisão em flagrante, audiência de custódia) e uma página única não responde bem a cada uma.",
      decision:
        "Criar oito páginas temáticas com título, descrição, perguntas frequentes e dados estruturados próprios.",
      reason:
        "Cada página pode corresponder a uma busca concreta e oferecer a resposta e o contato no mesmo lugar.",
      tradeoff:
        "Elementos comuns (cabeçalho, rodapé) se repetem em cada arquivo, sem gerador ou modelo compartilhado.",
    },
    {
      title: "CSP estrita com o Tag Manager autorizado por hash",
      problem:
        "A medição de conversões exigia o Google Tag Manager, mas liberar scripts inline enfraqueceria a política de segurança.",
      decision:
        "Autorizar apenas o hash SHA-256 do snippet e os domínios do Google necessários, sem 'unsafe-inline' em scripts.",
      reason:
        "Mantém a proteção contra injeção de scripts e mesmo assim permite a análise de acesso.",
      tradeoff:
        "Qualquer alteração no snippet exige recalcular o hash em todas as páginas e nos cabeçalhos.",
    },
  ],

  results: [
    "Dez páginas estáticas com dados estruturados, URL canônica, sitemap, CSP com o Tag Manager autorizado por hash e menu móvel sem JavaScript, publicadas em servidor próprio com nginx, HTTPS e cache de longa duração.",
  ],
  limits: [
    "Próximo passo: alinhar a CSP do pacote para Apache com a versão com Tag Manager usada nas páginas e nas hospedagens estáticas.",
    "Cabeçalho e rodapé repetidos em cada arquivo; próximo passo é adotar um gerador de site estático com modelo compartilhado.",
    "Sem painel de conteúdo: cada mudança de texto exige editar o HTML.",
  ],

  links: [],

};
