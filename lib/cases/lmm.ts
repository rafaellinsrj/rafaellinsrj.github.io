import type {CaseStudy} from "@/lib/case-types";

export const lmm: CaseStudy = {
  slug: "lmm",
  name: "LMM Capital",
  group: "fintech",
  category: "Formador de mercado automatizado · Node.js",
  summary: "Robô formador de mercado multi-conta para o mercado de previsões Vero Markets, com preço ancorado na Polymarket, controles de risco por patrimônio e painel de operação.",
  role: "Arquitetura, desenvolvimento e operação",
  period: "Maio a outubro de 2026",
  stage: "Projeto histórico",
  stageNote: "",
  platforms: ["Serviço Node.js (robô e API)", "Painel administrativo web", "Página institucional"],
  cover: {
    src: "/images/screens/local-lmm.jpg",
    width: 1440,
    height: 720,
    alt: "Página institucional da LMM Capital, em fundo escuro com detalhes em roxo e título sobre liquidez institucional para mercados digitais",
    caption: "Página institucional da LMM Capital. Números da tela são ilustrativos.",
  },
  gallery: [],

  history: {
    audience: "A própria Vero Markets, mercado de previsões no estilo Polymarket: o LMM fornecia ofertas de compra e venda para que os mercados tivessem livro e preço de referência desde a abertura.",
    problem: "Mercado de previsões recém-aberto tem livro vazio: sem ofertas dos dois lados, o preço exibido não reflete a probabilidade do evento e quem chega não consegue negociar. Era preciso manter ofertas contínuas em dezenas de mercados, com preço coerente com uma referência externa e sem deixar o formador de mercado acumular risco sem controle.",
    constraints: "Toda a operação passava pela API REST da Vero, com limites de requisição por conta (lotes de até 50 ordens e cancelamento em massa limitado por minuto). Preços em centavos inteiros de 1 a 99, com SIM e NÃO complementares. Servidor único de 2 vCPU e 2 GB.",
    milestones: [
      {when: "13/05/2026", what: "Versão 1.0: robô de formação de mercado e painel, com kill switch por resultado."},
      {when: "16/05/2026", what: "Endurecimento do painel: limite de tentativas de login e CORS restrito."},
      {when: "11 e 12/06/2026", what: "Orquestrador multi-conta, painel de contas e configuração, âncora de preço na Polymarket e kill switch por patrimônio."},
      {when: "18 a 25/06/2026", what: "Versão 1.1: defesa em mercado suspenso, validade (TTL) das ordens, tratamento de limite de requisições e registro de patrimônio por ciclo."},
      {when: "01/07/2026", what: "Versão 1.2: ofertas de venda a partir das posições acumuladas e patrimônio medido por valor de liquidação, sem dupla contagem."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o papel do LMM como formador de mercado da Vero e o desenho em três frentes: ofertas nos dois lados, preço ancorado em referência externa e risco limitado.",
      "Decidi as regras de contenção: robô em espera por padrão, kill switch por patrimônio e pausa por conta ou de todas as contas pelo painel.",
      "Identifiquei, pelo raciocínio de soma zero de um conjunto fechado de contas, que o patrimônio agregado não podia subir, o que levou à correção da contabilidade e a uma regra de conservação na própria Vero.",
      "Documentei o roteiro de instalação, com código, painel compilado e cópia consistente do banco.",
    ],
    direct: [
      "Implementei o serviço em Node.js com Express: estratégia de preço, orquestrador multi-conta, gestor de risco e cliente da API da Vero com novas tentativas.",
      "Estruturei a persistência em SQLite: configuração, configuração por mercado, histórico de ordens, logs e registro de patrimônio por ciclo.",
      "Construí o painel em React com Vite, Tailwind CSS e Recharts: visão geral, contas, mercados, ordens e posições, logs e configuração.",
      "Implementei a autenticação do painel com JWT, hash bcrypt e limite de tentativas de login.",
      "Configurei a operação: PM2, nginx com HTTPS e backup diário consistente do SQLite enviado para outro servidor.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro: "Um único processo Node.js reunia o robô e a API do painel. A cada ciclo, o orquestrador lia o livro de cada mercado habilitado na API da Vero, calculava o preço-alvo com a referência da Polymarket, aplicava os limites de risco e enviava ordens em lotes por conta. O painel, servido pelo mesmo processo atrás do nginx, permitia ligar e pausar o robô, ajustar parâmetros por mercado e acompanhar patrimônio, ordens e logs.",
    diagram: {
      title: "Arquitetura do LMM",
      tiers: [
        {label: "Operação", nodes: ["Painel React (Vite)", "Página institucional"]},
        {label: "Borda", nodes: ["nginx com HTTPS"]},
        {label: "Serviço", nodes: ["API Express + JWT", "Orquestrador multi-conta", "Estratégia e risco"]},
        {label: "Dados", nodes: ["SQLite (better-sqlite3)", "Backup diário externo"]},
        {label: "Externos", nodes: ["API REST da Vero", "Polymarket (referência)"]},
      ],
      links: [
        "O painel e a página institucional chegam ao serviço pelo nginx.",
        "A API Express autentica o painel e aciona o orquestrador.",
        "O orquestrador consulta a estratégia e o risco e grava estado e logs no SQLite.",
        "O orquestrador envia ordens à API da Vero e lê o preço de referência da Polymarket.",
      ],
    },
    layers: [
      {name: "Serviço", content: "Node.js 22 com Express 5, axios, express-rate-limit, jsonwebtoken, bcryptjs e dotenv. Processo único gerenciado por PM2, com reinício automático e limite de memória."},
      {name: "Estratégia", content: "Preço médio do livro combinado com a referência da Polymarket (70% livro e 30% referência na estratégia v2), spread dinâmico, desvio por inventário para não ampliar posição já carregada, ordens em dois níveis e recusa de cotar perto de 0 ou de 100."},
      {name: "Orquestração", content: "Pool de contas carregado de arquivo restrito fora do repositório, um cliente da API por conta, envio em lotes de 20 ordens com novas tentativas respeitando Retry-After, cancelamento faseado de ordens antigas e defesa que recolhe ordens quando o mercado é suspenso."},
      {name: "Risco", content: "Kill switch por patrimônio (caixa, valor reservado em ofertas e posições a valor de liquidação), teto de posição total e por mercado, validade das ordens e robô em espera ao reiniciar, salvo se o estado gravado for ligado."},
      {name: "Dados", content: "SQLite via better-sqlite3 com tabelas de configuração, configuração por mercado, histórico de ordens, logs e registro de patrimônio por ciclo com a variação de cada componente."},
      {name: "Painel", content: "React 19, React Router 7, Recharts, Tailwind CSS 3 e Vite 6, compilado e servido pelo próprio serviço. Login em página separada, fora do build."},
      {name: "Operação", content: "nginx com certificado Let's Encrypt, PM2 e cron de backup diário com snapshot consistente do SQLite enviado a outro servidor."},
    ],
  },

  decisions: [
    {
      title: "Âncora de preço externa",
      problem: "Com poucos participantes, o preço médio do livro da Vero podia ficar distante da probabilidade real do evento, e o formador de mercado acabaria reforçando um preço errado.",
      decision: "Combinar o preço do livro com o preço do mesmo evento na Polymarket, com cache de dois minutos, e usar a referência apenas quando o casamento entre os mercados fosse confiável.",
      reason: "A Polymarket tinha liquidez muito maior para os mesmos eventos e servia de referência pública para o preço.",
      tradeoff: "Dependência de uma fonte externa e de regras de casamento de mercados que exigiram ajustes, inclusive para eventos com várias opções.",
      learning: "Sem casamento confiável, a referência é descartada e o robô cota apenas com o livro local; referência errada é pior que nenhuma.",
    },
    {
      title: "Patrimônio por valor de liquidação",
      problem: "O painel somava os dois lados de cada posição a preço de mercado. O patrimônio aparecia inflado e o kill switch usava essa medida.",
      decision: "Medir o patrimônio por valor de liquidação (versão 1.2.0) e registrar a cada ciclo caixa, valor reservado e posições, com a variação de cada parte.",
      reason: "Um conjunto fechado de contas do formador de mercado é soma zero: se o agregado sobe, há erro de medida ou criação indevida de valor.",
      tradeoff: "Medida mais conservadora e mais consultas por ciclo.",
      learning: "O mesmo raciocínio revelou um erro de contabilização na Vero, corrigido com uma regra de conservação que desfaz a operação inválida e registra auditoria.",
    },
    {
      title: "Limites da API como parte do projeto",
      problem: "Com muitas contas, respostas 429 descartavam lotes inteiros e zeravam saldos lidos, tirando contas da operação e esvaziando o livro.",
      decision: "Novas tentativas com espera pelo Retry-After ou recuo exponencial, lotes de 20 ordens, tempo limite maior e preservação do último saldo válido em caso de erro.",
      reason: "O limite de requisições da plataforma era a principal restrição de operação, não o cálculo de preço.",
      tradeoff: "Ciclos mais longos e menor frequência de atualização das ofertas.",
    },
    {
      title: "Em espera por padrão",
      problem: "Um reinício do processo não podia colocar o robô para enviar ordens sem decisão explícita.",
      decision: "O estado ligado ou em espera fica gravado no banco; sem estado ligado, o serviço sobe em espera. O segredo do token é obrigatório e o processo não inicia sem ele.",
      reason: "Em sistema que movimenta saldo, falhar fechado é mais seguro que retomar sozinho.",
      tradeoff: "Exige ação manual após manutenção, registrada também no roteiro de instalação.",
    },
  ],

  journey: {
    title: "Um ciclo do orquestrador (dados sintéticos)",
    steps: [
      "O ciclo lê os mercados habilitados e o saldo das contas ativas.",
      "Para um mercado binário, o livro indica preço médio de 58 centavos e a referência externa, 62; o alvo combinado fica em 59.",
      "O risco confere patrimônio e posição: a conta já carrega SIM, então o preço é deslocado para não ampliar essa posição.",
      "São montadas ofertas de compra e venda em dois níveis para SIM e NÃO, com preços complementares.",
      "As ordens saem em lotes de 20; um 429 faz o cliente esperar e tentar de novo.",
      "Ordens vencidas são canceladas e o patrimônio do ciclo é gravado com a variação de cada componente.",
    ],
  },

  dataModel: [
    {entity: "config", fields: "chave, valor (estado do robô, kill switch, tetos de posição)"},
    {entity: "Configuração de mercado", fields: "mercado, habilitado, spread, tamanho da ordem, posição máxima, tipo de mercado, URL de referência"},
    {entity: "Histórico de ordens", fields: "mercado, lado, preço, quantidade, status, criado em"},
    {entity: "Registro de patrimônio", fields: "ciclo, contas, caixa, reservado, posições, total, base, variações"},
    {entity: "Registro de eventos do robô", fields: "data, nível, mensagem, dados"},
  ],

  results: [
    "Robô formador de mercado multi-conta entregue em três versões (1.0, 1.1 e 1.2), registradas no histórico do repositório entre maio e julho de 2026.",
    "Correção da medida de patrimônio (versão 1.2.0, julho de 2026) e regra de conservação incorporada à Vero a partir do diagnóstico feito sobre o LMM.",
    "Roteiro de instalação documentado, com código, painel compilado e cópia consistente do banco.",
  ],

  limits: [
    "O robô foi desenhado para a API de uma única plataforma. Próximo passo: separar o cliente de corretora em adaptadores para operar em outros mercados.",
    "A validação foi feita em operação, com logs e registro de patrimônio por ciclo. Próximo passo: testes automatizados da estratégia e do gestor de risco.",
    "Os números da página institucional são de apresentação e não são métricas deste portfólio.",
  ],

  links: [],

};
