import type {CaseStudy} from "@/lib/case-types";

export const zappop: CaseStudy = {
  slug: "zappop",
  name: "ZapPop",
  group: "plataformas",
  category: "Atendimento via WhatsApp · Implantação de plataforma de terceiros",
  summary: "Implantação, sob a marca ZapPop, de uma plataforma de atendimento multiusuário pelo WhatsApp baseada no Atendechat, produto de terceiros. Meu trabalho foi colocar a base em operação em servidor próprio, integrar o módulo da API oficial do WhatsApp, versionar e proteger a instalação e criar o site de apresentação.",
  role: "Implantação, operação e site de apresentação",
  period: "2026",
  stage: "Versão local",
  stageNote: "A plataforma operou nos domínios do ZapPop em 2026. O domínio zappop.com.br expirou em 08/09/2026 e os endereços não respondem desde então. Restam a cópia da instalação e o site de apresentação, executado localmente para a imagem abaixo. O código da aplicação de atendimento é do Atendechat; este estudo não o apresenta como desenvolvimento próprio.",
  platforms: ["Aplicação web de atendimento", "API oficial do WhatsApp (módulo)", "Site de apresentação"],
  cover: {
    src: "/images/screens/local-zappop.jpg",
    width: 1440,
    height: 1000,
    alt: "Site de apresentação do ZapPop, com chamada para centralizar atendimentos via WhatsApp",
    caption: "Site de apresentação do ZapPop executado localmente, outubro de 2026.",
  },
  gallery: [],

  history: {
    audience: "Pequenas e médias empresas que atendem clientes pelo WhatsApp com mais de um atendente e precisam de filas, histórico e relatórios.",
    problem: "Atendimento feito em um único celular não escala: conversas se perdem, não há divisão entre atendentes nem registro do que foi resolvido. Construir uma plataforma do zero levaria meses; a alternativa foi licenciar uma base pronta e cuidar da implantação, da operação e da oferta comercial.",
    constraints: "Base de terceiros com instalador próprio, que precisou de ajustes de ambiente. Servidor compartilhado com outros projetos. Duas formas de conexão com o WhatsApp: a sessão do WhatsApp Web, sem custo por mensagem, e a API oficial da Meta, com webhook e aprovação.",
    milestones: [
      {when: "Dez/2025 a fev/2026", what: "Versões do instalador do Atendechat com suporte a múltiplas instâncias, mantido pelo fornecedor."},
      {when: "28/03/2026", what: "Site de apresentação do ZapPop publicado, com planos, botão de contato pelo WhatsApp e ícone da marca."},
      {when: "2026", what: "Aplicação, backend e API oficial em operação em três subdomínios, com HTTPS e processos gerenciados."},
      {when: "31/07/2026", what: "Bancos e Redis do ZapPop incluídos na rotina diária de backup com retenção e cópia externa."},
      {when: "13/08/2026", what: "Correção de DNS do site e criação de repositório privado da instalação, sem segredos."},
      {when: "08/09/2026", what: "Expiração do domínio zappop.com.br."},
    ],
  },

  responsibility: {
    leadership: [
      "Decidi licenciar e implantar uma base existente em vez de construir uma plataforma de atendimento do zero.",
      "Defini a separação entre site comercial, aplicação de atendimento, backend e API oficial em endereços próprios.",
      "Defini as regras de operação: Redis antes do backend e verificação das filas antes de reiniciar.",
    ],
    direct: [
      "Implantei a base no servidor: frontend, backend e módulo da API oficial como processos PM2, nginx com WebSocket e certificados Let's Encrypt.",
      "Configurei PostgreSQL para a aplicação e para a API oficial e Redis em contêiner para as filas.",
      "Incluí a instalação no backup diário e criei o repositório privado excluindo arquivos de ambiente e dependências.",
      "Administrei usuários e perfis de acesso da plataforma.",
    ],
    team: [
      "Aplicação de atendimento, módulo da API oficial e instalador: desenvolvidos e mantidos pelo fornecedor do Atendechat.",
    ],
    ai: [
      "O site de apresentação foi produzido por um agente de IA operado por mim em servidor próprio, com as decisões de conteúdo, preço e marca sob minha responsabilidade; o repositório traz instruções formais para os agentes.",
      "O mesmo agente executou a correção de DNS, a criação do repositório e a rotina de backup, sob minha supervisão.",
    ],
  },

  architecture: {
    intro: "A instalação segue a arquitetura da base Atendechat: frontend React, backend Node.js com Express e TypeScript, PostgreSQL via Sequelize, filas Bull sobre Redis e eventos em tempo real com Socket.IO. Ao lado roda o módulo da API oficial do WhatsApp em NestJS com Prisma. O site de apresentação é uma aplicação Next.js separada.",
    diagram: {
      title: "Implantação do ZapPop",
      tiers: [
        {label: "Acesso", nodes: ["Site de apresentação", "App de atendimento"]},
        {label: "Borda", nodes: ["nginx + HTTPS", "PM2"]},
        {label: "Aplicação (Atendechat)", nodes: ["Backend Express", "API oficial (NestJS)", "Socket.IO"]},
        {label: "Dados e filas", nodes: ["PostgreSQL", "Redis (Bull)"]},
        {label: "WhatsApp", nodes: ["Sessão WhatsApp Web", "API oficial da Meta"]},
      ],
      links: [
        "O site e a aplicação chegam aos processos pelo nginx com HTTPS.",
        "O PM2 mantém frontend, backend, API oficial e site em execução.",
        "O backend persiste no PostgreSQL, enfileira tarefas no Redis e envia eventos por Socket.IO.",
        "O backend conecta sessões do WhatsApp Web e a API oficial recebe o webhook da Meta.",
      ],
    },
    layers: [
      {name: "Base de terceiros", content: "Atendechat: backend Node.js com Express 4, TypeScript, Sequelize 5 sobre PostgreSQL (pg), Bull 3, Socket.IO 4, biblioteca Baileys para sessões do WhatsApp Web e integração com OpenAI; frontend React 16 com Material UI."},
      {name: "API oficial", content: "Módulo do mesmo fornecedor em NestJS 10 com Prisma 5, PostgreSQL próprio e ioredis, com documentação Swagger e webhook por empresa e conexão."},
      {name: "Infraestrutura", content: "Servidor Linux com PM2, nginx com cabeçalhos de WebSocket, certificados Let's Encrypt por subdomínio e Redis em contêiner Docker."},
      {name: "Site de apresentação", content: "Next.js 16.2, React 19.2, TypeScript 5 e Tailwind CSS 4, com ícones Lucide, em processo próprio atrás do nginx."},
      {name: "Continuidade", content: "Backup diário dos dois bancos e do Redis com retenção e cópia externa; repositório privado com a instalação, sem arquivos de ambiente nem dependências."},
    ],
  },

  decisions: [
    {
      title: "Licenciar a base em vez de construir",
      problem: "Uma plataforma de atendimento com filas, campanhas, agendamentos e várias conexões levaria meses para ficar estável.",
      decision: "Adotar o Atendechat e concentrar o trabalho em implantação, operação e oferta comercial.",
      reason: "Coloca o produto em operação rapidamente e deixa a evolução do núcleo com quem o mantém.",
      tradeoff: "Dependência do fornecedor para correções e atualizações e pouca diferenciação técnica no núcleo.",
    },
    {
      title: "Sessão do WhatsApp Web e API oficial lado a lado",
      problem: "A sessão do WhatsApp Web não tem custo por mensagem, mas não é o canal oficial; a API da Meta é oficial, mas exige aprovação e cobra por conversa.",
      decision: "Manter as duas opções: a conexão padrão da base e o módulo da API oficial em endereço próprio.",
      reason: "Cada cliente escolhe entre custo e conformidade com as regras da plataforma.",
      tradeoff: "Dois serviços, dois bancos e mais pontos de falha para operar.",
    },
    {
      title: "Versionar uma instalação que só existia no servidor",
      problem: "A instalação rodava sem controle de versão; uma falha de disco ou alteração indevida não teria como ser revertida.",
      decision: "Criar repositório privado a partir do servidor, excluindo os arquivos de ambiente e as dependências, e incluir bancos e Redis no backup diário.",
      reason: "Recuperação e auditoria de mudanças sem expor credenciais.",
      tradeoff: "O primeiro commit registra o estado já em produção, sem o histórico anterior das alterações.",
    },
  ],

  results: [
    "Plataforma em operação em três subdomínios do ZapPop em 2026, com HTTPS e processos gerenciados.",
    "Site de apresentação publicado em março de 2026.",
    "Instalação versionada e coberta por backup diário a partir de julho e agosto de 2026.",
  ],

  limits: [
    "O núcleo da aplicação é de terceiros; não há no repositório evidência de alterações próprias no código do Atendechat.",
    "Domínio expirado em 08/09/2026: produto fora do ar até decisão sobre renovação.",
    "Sem testes automatizados próprios e sem monitoramento de disponibilidade documentado.",
  ],

  links: [],

};
