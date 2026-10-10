import type {CaseStudy} from "@/lib/case-types";

const img = (file: string, width: number, height: number, alt: string, caption: string) =>
  ({src: `/images/cases/190/${file}`, width, height, alt, caption});

export const policia190: CaseStudy = {
  slug: "190-policia-militar",
  name: "190 · Tecnologia para a Polícia Militar",
  group: "riotech",
  category: "Segurança pública · Plataforma web e mobile",
  summary: "Plataforma integrada que ligava cidadão, policial em campo e comando do batalhão: pedido de ajuda pelo celular, localização em tempo real e painel de gestão das ocorrências.",
  role: "CTO e sócio da Rio Tech",
  organization: "Rio Tech",
  period: "2014 – 2015",
  stage: "Projeto histórico",
  stageNote: "",
  platforms: ["Painel web do comando", "App do cidadão (Android)", "App do policial", "Tablet da viatura"],
  cover: img("painel-dashboard.jpg", 480, 803, "Painel web do Sistema de Gestão 190 com indicadores de efetivo e viaturas, mapa de ocorrências, gráficos por situação e tabelas de atendimento", "Painel web do batalhão, versão 1.4.5, fevereiro de 2015. Nome do usuário ocultado."),
  gallery: [
    img("painel-dashboard.jpg", 480, 803, "Painel com indicadores de efetivo, viaturas, carros e motos, mapa de ocorrências e gráficos por situação", "Painel do batalhão: efetivo e viaturas on-line, ocorrências em atendimento, pendentes e finalizadas. Fevereiro de 2015."),
    img("painel-ocorrencias-mapa.jpg", 480, 784, "Mapa do painel com cartões de ocorrência e de viatura abertos", "Ocorrências no mapa com o cartão do solicitante e da viatura designada. Dados pessoais ocultados."),
    img("painel-mapa.jpg", 480, 607, "Mapa em tela cheia com viaturas e ocorrências filtradas", "Mapa operacional com filtros de policiais, viaturas e situação da ocorrência."),
    img("painel-rota.jpg", 800, 850, "Tela de pesquisa de rota de um policial por período, com o trajeto desenhado no mapa", "Consulta do trajeto de um policial ou viatura por período. Identificação do policial ocultada."),
    img("app-cidadao-login.jpg", 480, 262, "Slide com a tela de login do aplicativo Eu Polícia", "App do cidadão: cadastro com dados de identificação e opção de entrar com rede social."),
    img("app-cidadao-principal.jpg", 480, 262, "Slide com a tela principal do aplicativo, mapa e botão Preciso de ajuda", "App do cidadão: localização em tempo real e botão de pedido de ajuda."),
    img("app-cidadao-ocorrencia.jpg", 480, 261, "Slide com as etapas de registro da ocorrência pelo cidadão", "Registro em duas etapas: para quem é a ajuda e se há risco de vida."),
    img("app-agente-login.jpg", 480, 262, "Slide com a tela de login do aplicativo do agente", "App do policial: acesso por matrícula e cadastro da viatura."),
    img("app-agente-localizacao.jpg", 480, 261, "Slide com o tablet da viatura mostrando ocorrências no mapa", "Tablet da viatura: ocorrências num raio definido pelo comando, com cores por situação."),
    img("app-chat.jpg", 480, 262, "Slide com a tela de chat entre policial e cidadão no celular e no tablet", "Chat entre policial e cidadão com texto, fotos, áudio e vídeo."),
    img("programa-incentivo.jpg", 480, 262, "Slide do programa de pontuação por patentes para o cidadão", "Programa de incentivo: patentes conforme denúncias comprovadas."),
    img("sistema-addons.jpg", 480, 262, "Slide de módulos adicionais do sistema", "Módulos adicionais da plataforma: relatórios estatísticos, Guarda Municipal e câmeras."),
    img("implantacao-equipamentos.jpg", 480, 262, "Slide de equipamentos entregues com o sistema", "Pacote de implantação: smartphone por policial e tablet por viatura."),
  ],

  history: {
    audience: "Secretarias de segurança pública e batalhões da Polícia Militar, os policiais em campo e o cidadão que precisa de atendimento.",
    problem: "Em 2014 o pedido de ajuda dependia da ligação ao 190 e de repasses entre central e batalhão. A apresentação da época citava pesquisa segundo a qual 70% das pessoas não confiavam na polícia (UOL, 2013) e o custo da violência em 5,4% do PIB (O Globo, 2014). A proposta era encurtar o caminho entre o pedido e a viatura e dar ao comando uma visão em tempo real.",
    constraints: "Redes móveis de 2014 sem 4G e congestionadas em grandes eventos (num Fla x Flu no Maracanã, até uma ligação era difícil), comunicação de campo baseada em rádio (Nextel) e equipe de cinco pessoas.",
    milestones: [
      {when: "2014", what: "Fundação da Rio Tech com cinco pessoas e definição da plataforma integrada para PM, Polícia Civil, Bombeiros, Guarda Municipal e Defesa Civil."},
      {when: "2014 – 2015", what: "Apps do cidadão e do policial, tablet da viatura e painel do batalhão. Painel na versão 1.4.5 em fevereiro de 2015."},
      {when: "2014 – 2015", what: "Mais de 12 meses de testes e reuniões com órgãos de segurança no Rio de Janeiro, Pará e Amapá."},
      {when: "Depois dos testes", what: "Venda da tecnologia a uma empresa da Lituânia; a Rio Tech passou a desenvolver projetos no setor privado."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini com os sócios o conceito de uma plataforma única para cidadão, policial e comando, e o escopo de cada aplicativo.",
      "Conduzi as apresentações e os testes com órgãos de segurança pública em três estados.",
      "Decidi, diante do limite de infraestrutura da época, vender a tecnologia em vez de insistir na implantação pública.",
    ],
    direct: [],
    team: [
      "Desenvolvimento dos aplicativos e do painel pela equipe da Rio Tech, de cinco pessoas.",
    ],
    ai: ["Não se aplica: projeto de 2014 e 2015, anterior às ferramentas de IA generativa."],
  },

  architecture: {
    intro: "O que as telas e a apresentação da época comprovam. O código-fonte não está disponível; a arquitetura abaixo mostra canais, funções e integrações visíveis nas telas, em nível público e não operacional, e as linguagens usadas pela equipe.",
    diagram: {
      title: "Arquitetura funcional do sistema 190 (2014–2015)",
      tiers: [
        {label: "Usuários", nodes: ["Cidadão", "Policial em campo", "Comando do batalhão"]},
        {label: "Canais", nodes: ["App Eu Polícia (Android)", "App do policial e tablet", "Painel web de gestão"]},
        {label: "Plataforma Rio Tech", nodes: ["Registro de ocorrências", "Localização em tempo real", "Chat com mídia", "Programa de pontuação"]},
        {label: "Serviços externos", nodes: ["Mapas (Google Maps)", "Login com rede social", "Rede móvel"]},
      ],
      links: [
        "O cidadão registra o pedido no app; a plataforma localiza o solicitante e apresenta a ocorrência ao policial e ao painel do batalhão.",
        "O policial e a viatura enviam a posição; o comando acompanha efetivo, viaturas e ocorrências no mapa.",
        "Policial e cidadão conversam pelo chat; a pontuação considera apenas denúncias comprovadas.",
      ],
    },
    layers: [
      {name: "Interface", content: "Três canais por papel: app do cidadão com botão de ajuda e registro em duas etapas; app do policial e tablet na viatura com ocorrências num raio configurável; painel web do batalhão com indicadores, mapa, tabelas por situação, agenda de tarefas e consulta de trajetos."},
      {name: "Funções da plataforma", content: "Cadastro de cidadãos, policiais (matrícula) e viaturas (chassi, Renavam e placa); classificação da ocorrência; posição em tempo real de policiais e viaturas; chat com texto, fotos, áudio e vídeo; pontuação por patentes e premiação de policiais e batalhões."},
      {name: "Linguagens", content: "Java nos aplicativos Android, Python e C++ no servidor e nos módulos de processamento."},
      {name: "Integrações", content: "Mapas do Google no painel e nos apps; entrada do cidadão com conta de rede social; comunicação dependente da rede móvel de 2014."},
      {name: "Implantação", content: "Pacote com smartphone por policial e tablet por viatura, linha e dados, cadastro da corporação, treinamento e simulações, em etapas de 30 dias, com suporte por telefone, WhatsApp, aulas e tutoriais."},
    ],
  },

  decisions: [
    {
      title: "Um aplicativo para cada papel",
      problem: "Cidadão, policial e comando precisam de informações diferentes e operam em condições diferentes.",
      decision: "Separar app do cidadão, app do policial com tablet na viatura e painel web do batalhão, sobre a mesma base de ocorrências.",
      reason: "Cada interface mostra só o necessário para a tarefa: pedir ajuda, atender ou coordenar.",
      tradeoff: "Três produtos para manter e treinar, em troca de telas simples para quem está sob pressão.",
    },
    {
      title: "Triagem pelo próprio cidadão",
      problem: "Um botão de pânico sem contexto não permite priorizar.",
      decision: "Registro em duas etapas (para quem é a ajuda e se há risco de vida), com resposta imediata ao cidadão.",
      reason: "A informação chega classificada ao batalhão e orienta a prioridade de atendimento.",
      tradeoff: "Mais toques numa emergência; por isso o botão principal continuou único e as perguntas, curtas.",
    },
    {
      title: "Incentivo com prova",
      problem: "Desconfiança da população e risco de denúncias falsas.",
      decision: "Pontuação por patentes para o cidadão e premiação para policiais e batalhões, contadas apenas sobre ocorrências comprovadas.",
      reason: "Recompensar só o que foi confirmado reduz o incentivo ao abuso.",
      tradeoff: "A recompensa demora mais, porque depende da conclusão do atendimento.",
    },
    {
      title: "Reconhecer o limite da infraestrutura",
      problem: "Em eventos de massa a rede móvel congestionava e o rádio continuava sendo o meio de comunicação em campo.",
      decision: "Vender a tecnologia a uma empresa da Lituânia e levar a Rio Tech para o setor privado.",
      reason: "O software estava pronto antes da infraestrutura pública e da maturidade de mercado.",
      tradeoff: "Abrir mão da implantação no Brasil em troca de retorno e continuidade da empresa.",
      learning: "Uma solução inovadora precisa de infraestrutura e maturidade de mercado para atingir seu potencial. Esse limite orienta a proposta atual abaixo.",
    },
  ],

  results: [
    "Mais de 12 meses de testes e reuniões com órgãos de segurança pública no Rio de Janeiro, no Pará e no Amapá (relato publicado no LinkedIn).",
    "Painel do batalhão na versão 1.4.5 em fevereiro de 2015 (registro de tela).",
    "Venda da tecnologia a uma empresa da Lituânia.",
  ],
  limits: [
    "Dependência de rede móvel em 2014, sem modo offline.",
    "Imagens históricas em baixa resolução, reproduzidas do material publicado na época.",
  ],

  proposal: {
    title: "Como eu arquitetaria hoje",
    intro: "Proposta de arquitetura para levar o mesmo conceito à escala estadual ou nacional com a tecnologia atual. Não foi implementada: mostra as decisões que eu tomaria como CTO, começando pelo problema que limitou o projeto em 2014, a conectividade.",
    diagram: {
      title: "Proposta de arquitetura atual (não implementada)",
      tiers: [
        {label: "Canais", nodes: ["App do cidadão iOS/Android", "App do policial", "Painel do comando", "Central 190 existente"]},
        {label: "Borda", nodes: ["Gateway de API e WAF", "Identidade OIDC com MFA", "Fila offline e SMS"]},
        {label: "Núcleo orientado a eventos", nodes: ["Barramento de eventos", "Ocorrências", "Localização", "Mensagens", "Incentivos"]},
        {label: "Dados", nodes: ["PostgreSQL + PostGIS", "Cache geoespacial", "Mídia em objeto", "Analítico"]},
        {label: "Operação", nodes: ["Multi-região", "Observabilidade", "Auditoria imutável"]},
      ],
      links: [
        "Os apps gravam o pedido localmente e reenviam pela rede de dados ou por SMS quando a rede cai.",
        "Cada mudança de estado vira um evento; os serviços de ocorrências, localização e mensagens consomem o barramento de forma independente.",
        "Consultas por raio usam índice geoespacial; o histórico completo fica em trilha de auditoria imutável.",
      ],
    },
    layers: [
      {name: "Interface", content: "Apps nativos ou multiplataforma com modo offline, painel web em tempo real por WebSocket e integração com a central telefônica existente, sem substituí-la."},
      {name: "API e serviços", content: "Serviços pequenos por domínio (ocorrências, localização, mensagens, incentivos) comunicando por eventos; idempotência por identificador gerado no aparelho para que reenvios não dupliquem ocorrências."},
      {name: "Persistência", content: "PostgreSQL com PostGIS para consultas por área e raio, cache geoespacial para posições recentes, armazenamento de objetos para fotos, áudios e vídeos, e base analítica separada da operação."},
      {name: "Integrações", content: "Adaptadores para sistemas de despacho já usados pelos órgãos, notificações push e SMS como canal de contingência, com política de novas tentativas e fila de mensagens não entregues."},
      {name: "Infraestrutura", content: "Execução em contêineres em mais de uma região, escalonamento por demanda para eventos de massa, testes de carga e de falha programados antes de grandes eventos."},
      {name: "Segurança e LGPD", content: "Identidade federada com MFA para agentes, permissões por órgão, batalhão e função, criptografia em trânsito e em repouso, minimização de dados do cidadão e trilha de auditoria de cada acesso."},
      {name: "IA com supervisão humana", content: "Apoio à triagem (transcrição de áudio, detecção de pedidos duplicados e sugestão de prioridade), sempre como recomendação: a decisão de atendimento é do agente."},
      {name: "Qualidade", content: "Simulação de eventos de massa, testes de contrato entre serviços, monitoramento ponta a ponta do tempo entre pedido e atendimento."},
    ],
    decisions: [
      {
        title: "Offline primeiro",
        problem: "Em 2014 a rede congestionada impediu até ligações em grandes eventos.",
        decision: "Fila local no aparelho, reenvio automático e SMS como canal alternativo.",
        reason: "O pedido de ajuda não pode depender de uma conexão perfeita.",
        tradeoff: "Mais complexidade no app e necessidade de tratar duplicidade no servidor.",
      },
      {
        title: "Eventos como fonte de verdade",
        problem: "Segurança pública exige saber quem fez o quê e quando.",
        decision: "Registrar cada mudança de estado como evento imutável e derivar as telas a partir deles.",
        reason: "Auditoria completa e serviços que escalam de forma independente.",
        tradeoff: "Modelo mais difícil de operar do que um banco único, exigindo equipe com experiência em sistemas distribuídos.",
      },
      {
        title: "Isolamento por órgão",
        problem: "Polícia Militar, Polícia Civil, Bombeiros e Guarda Municipal compartilham a plataforma, mas não todos os dados.",
        decision: "Permissões por órgão, unidade e função, com compartilhamento explícito entre órgãos em cada ocorrência.",
        reason: "Integração sem expor informação além do necessário.",
        tradeoff: "Regras de acesso mais trabalhosas de definir com cada instituição.",
      },
      {
        title: "IA como apoio, nunca como decisão",
        problem: "Volume alto de pedidos e risco de erro com consequências graves.",
        decision: "Modelos apenas sugerem prioridade e agrupam duplicados; o agente confirma.",
        reason: "Ganho de velocidade sem retirar a responsabilidade humana.",
        tradeoff: "O ganho é menor do que com automação total, em troca de segurança e confiança.",
      },
    ],
  },

  links: [],
};
