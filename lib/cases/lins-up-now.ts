import type {CaseStudy} from "@/lib/case-types";

export const linsUpNow: CaseStudy = {
  slug: "lins-up-now",
  name: "Lins UP Now",
  group: "fintech",
  category: "Sistema quantitativo com execução simulada · Python e Next.js",
  summary: "Sistema quantitativo que detecta sinais de mercado e executa ordens simuladas em mercados de previsão de curta duração sobre o bitcoin, com dados de mercado em tempo real e painel público ao vivo em linspayments.com.br. A execução é simulada por desenho (paper trading): nenhum valor exibido é retorno financeiro.",
  role: "Concepção, análise de dados e desenvolvimento do sistema e do painel",
  period: "Julho a outubro de 2026",
  stage: "Simulação",
  stageNote: "",
  platforms: ["Página pública com painel ao vivo", "Serviço de simulação no servidor"],
  cover: {
    src: "/images/screens/lins-br.jpg",
    width: 1440,
    height: 1000,
    alt: "Topo do Lins UP Now em fundo escuro com detalhes em laranja, aviso de paper trading sem ordens reais e indicadores do simulador",
    caption: "Página pública em linspayments.com.br. Todos os valores são de simulação.",
  },
  gallery: [
    {
      src: "/images/cases/lins-up-now/painel-simulacao.jpg",
      width: 1440,
      height: 1000,
      alt: "Painel ao vivo com status do serviço, preço do bitcoin, contagem de sinais e ordens simuladas, gráfico de resultado simulado acumulado e lista de sinais",
      caption: "Painel ao vivo. Números da tela são ilustrativos: resultado de simulação, não retorno real.",
    },
  ],

  history: {
    audience: "Uso próprio, como laboratório para estudar uma estratégia quantitativa com dados reais de mercado e execução simulada, e visitantes que acompanham o sistema pela página pública.",
    problem: "Os projetos anteriores da linha (Lins UP e Lins UP Future) mostraram que taxas consomem a vantagem esperada e que resultado bruto engana. Textos que circulavam prometiam ganhos rápidos com distorções em mercados de previsão. Era preciso medir, com dados, o que existe de fato nesses mercados e acompanhar uma estratégia em tempo real sem arriscar dinheiro.",
    constraints: "Execução sempre simulada. Taxas da plataforma que mudam conforme o tipo de ordem. Mercados com janelas de 5 e 15 minutos, em que a vantagem dura segundos. Servidor compartilhado com outros projetos.",
    milestones: [
      {when: "26/06/2026", what: "Lins UP Future, antecessor da linha, com página e painel ao vivo em linspayments.com.br."},
      {when: "09/07/2026", what: "Criação do Lins UP Now com plano em fases e estudo de uma base pública de cerca de 107 milhões de negociações."},
      {when: "09/07/2026", what: "Motor de simulação com dados em tempo real e página reformulada para o painel do Lins UP Now."},
      {when: "12/07/2026", what: "Relatórios diários automáticos com as métricas de preenchimento e resultado do simulador."},
      {when: "31/07 a 03/08/2026", what: "Contabilidade de taxas em todas as operações e recálculo dos registros do simulador."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o plano em fases do sistema: estudo de dados históricos, simulação ao vivo com dados reais e leitura de resultado só com taxas descontadas.",
      "Descartei a linha de arbitragem quando o estudo histórico mostrou que não havia vantagem líquida executável.",
      "Tratei resultados positivos fora do esperado como sinal de erro até que preenchimento e taxa estivessem explicados.",
      "Defini que a página pública identifica a simulação e não detalha a estratégia.",
      "Exigi que a contabilidade do simulador cobrasse taxa em todas as operações, vencedoras e perdedoras, antes de qualquer leitura de resultado.",
    ],
    direct: [
      "Desenvolvi a página e o painel em Next.js 16, React 19 e TypeScript, com rotas de API que leem o banco do simulador em modo somente leitura.",
      "Implementei o indicador de serviço ativo pelo horário do último registro do simulador e a atualização periódica dos blocos do painel.",
      "Desenhei o gráfico de resultado simulado em SVG próprio, sem biblioteca, com remoção de patamares repetidos.",
    ],
    team: [],
    ai: [
      "A análise da base histórica, o motor de simulação, os relatórios diários e o monitoramento foram executados por um agente de IA que opero em servidor próprio, com subagentes para as análises mais longas. A reformulação do painel em 09/07/2026 e a correção da contabilidade também passaram pelo agente.",
      "As leituras de resultado, as correções de contabilidade e as decisões sobre a estratégia foram tomadas por mim a partir desses relatórios.",
      "O repositório do painel traz instruções formais para os agentes de IA.",
    ],
  },

  architecture: {
    intro: "O sistema tem duas partes que só se comunicam pelo banco. O motor de simulação, em Python, recebe dados de mercado em tempo real, gera sinais, registra ordens simuladas, estima preenchimentos e resolve cada janela de mercado. O painel em Next.js abre o mesmo banco SQLite em modo somente leitura e expõe rotas de API consumidas pela página pública.",
    diagram: {
      title: "Arquitetura do Lins UP Now",
      tiers: [
        {label: "Visitante", nodes: ["Página pública", "Painel ao vivo"]},
        {label: "Painel", nodes: ["Next.js (rotas de API)", "Leitura somente"]},
        {label: "Dados", nodes: ["SQLite do simulador", "Log de estado"]},
        {label: "Motor", nodes: ["Simulador Python", "Sinais e ordens simuladas"]},
        {label: "Mercado", nodes: ["Fluxo de preços", "Livro de ofertas"]},
      ],
      links: [
        "A página consulta periodicamente as rotas de API do Next.js.",
        "As rotas leem o SQLite e o log de estado sem escrever nada.",
        "O simulador grava sinais, ordens simuladas, preenchimentos e resoluções no SQLite.",
        "O simulador recebe o fluxo de preços e o livro de ofertas por conexões em tempo real.",
      ],
    },
    layers: [
      {name: "Painel", content: "Next.js 16.2 com App Router, React 19.2, TypeScript 5 e Tailwind CSS 4. Seis rotas de API (status, resumo, sinais, ordens, resoluções e resultado) com resposta dinâmica e sem cache."},
      {name: "Acesso a dados", content: "SQLite aberto em modo somente leitura, com tempo de espera para bloqueio. O módulo nativo fica fora do bundle do servidor."},
      {name: "Saúde do serviço", content: "O painel considera o motor ativo se o log de estado foi atualizado nos últimos 3 minutos e extrai dele o preço corrente."},
      {name: "Motor de simulação", content: "Serviço Python com conexões WebSocket ao fluxo de preços e ao livro de ofertas, descoberta das janelas de mercado, simulação de preenchimento pela posição na fila e resolução de cada janela, executado como serviço do sistema com reinício automático."},
      {name: "Operação", content: "Vigia a cada 5 minutos que reinicia o motor travado e me avisa; relatório diário automático com as métricas de preenchimento e resultado."},
    ],
  },

  decisions: [
    {
      title: "Estudo de dados antes da estratégia",
      problem: "Estratégias de mercado parecem boas em histórico e em simulação e se desfazem quando taxa, fila e latência entram na conta.",
      decision: "Plano em fases: limpeza e estudo de dados históricos, depois simulação ao vivo com dados reais, sempre com critérios explícitos para cada leitura de resultado.",
      reason: "Transforma a pergunta \"isso dá dinheiro?\" em perguntas menores, mensuráveis e baratas.",
      tradeoff: "Mais tempo de análise antes de qualquer conclusão sobre a estratégia.",
      learning: "O estudo histórico descartou a linha de arbitragem: as distorções existiam, mas eram pequenas, duravam milissegundos e eram capturadas por robôs mais rápidos.",
    },
    {
      title: "Desconfiar do resultado positivo",
      problem: "O simulador passou a mostrar resultado positivo alto e taxa de preenchimento perto de 90%.",
      decision: "Tratar o número como sinal de erro: recalcular com taxa em todas as operações, separar os tipos de preenchimento e verificar a configuração em execução.",
      reason: "O estudo histórico indicava que esse modo de operar não tinha vantagem depois das taxas; um resultado que contradiz a análise precisa ser explicado antes de ser aceito.",
      tradeoff: "Semanas de análise sobre um resultado que, à primeira vista, parecia bom.",
      learning: "Havia um erro de contabilidade (taxa só nas vencedoras) e um padrão de configuração que fazia o simulador operar de forma diferente da estratégia definida; ambos foram corrigidos.",
    },
    {
      title: "Painel separado do motor",
      problem: "Uma página pública não pode afetar um processo que roda sem parar nem ter caminho de escrita no banco dele.",
      decision: "O painel abre o SQLite em modo somente leitura e não tem nenhuma rota de escrita.",
      reason: "Falhas ou acessos indevidos ao site não alteram o estado do simulador.",
      tradeoff: "O painel depende de estar no mesmo servidor que o banco e não oferece controle remoto do motor.",
    },
    {
      title: "Transparência sem expor a estratégia",
      problem: "A página precisava mostrar o sistema funcionando sem entregar o método e sem sugerir retorno real.",
      decision: "Selo de simulação no topo e no painel, textos sem detalhes da estratégia e API pública sem identificadores dos mercados.",
      reason: "Mostra execução real do software e protege o método, sem induzir o visitante a erro.",
      tradeoff: "Parte do valor técnico não aparece na página pública.",
    },
  ],

  journey: {
    title: "Do sinal à resolução (dados sintéticos)",
    steps: [
      "O preço de referência sobe 6 pontos-base em 5 segundos e ultrapassa o limiar de 5; o motor registra um sinal de alta.",
      "O motor identifica a janela de 15 minutos aberta e registra uma ordem simulada no lado favorecido, com a fila à frente anotada.",
      "A ordem tem validade de 30 segundos; o simulador estima se ela seria preenchida pela posição na fila.",
      "No fim da janela, o motor compara preço de abertura e de fechamento e grava o vencedor.",
      "O resultado simulado da operação é calculado com a taxa descontada e aparece no painel na próxima atualização.",
    ],
  },

  dataModel: [
    {entity: "signals", fields: "momento, variação em pontos-base, limiar, direção, preço inicial, preço final"},
    {entity: "Ordens simuladas", fields: "momento, janela, período, lado, resultado esperado, preço, quantidade, fila à frente, status"},
    {entity: "fills", fields: "ordem, modo de preenchimento, tipo de preenchimento"},
    {entity: "resolutions", fields: "janela, período, fim, preço de abertura, preço de fechamento, vencedor"},
    {entity: "Resultados simulados", fields: "momento, venceu, resultado simulado"},
  ],

  results: [
    "Estudo de cerca de 107 milhões de negociações históricas (julho de 2026), que descartou a linha de arbitragem sem uso de capital.",
    "Simulador em funcionamento contínuo desde 09/07/2026, com dados de mercado em tempo real e página pública atualizada ao vivo.",
    "Simulação de preenchimento pela posição na fila, que mede a distância entre o preenchimento modelado e o observado.",
    "Contabilidade do simulador corrigida em 31/07/2026 para descontar taxa de todas as operações.",
  ],

  limits: [
    "Todos os números do painel são de simulação; o resultado acumulado exibido é otimista por natureza e não deve ser lido como retorno.",
    "O painel depende de estar no mesmo servidor que o banco do simulador. Próximo passo: expor os dados por um serviço de leitura dedicado.",
  ],

  links: [
    {label: "Página pública", url: "https://linspayments.com.br/", kind: "produto"},
  ],

};
