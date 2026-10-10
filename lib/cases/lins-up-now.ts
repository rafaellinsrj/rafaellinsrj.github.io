import type {CaseStudy} from "@/lib/case-types";

export const linsUpNow: CaseStudy = {
  slug: "lins-up-now",
  name: "Lins UP Now",
  group: "fintech",
  category: "Sistema quantitativo em simulação · Python e Next.js",
  summary: "Sistema quantitativo que detecta sinais de mercado e simula ordens em mercados de previsão de curta duração sobre o bitcoin, com painel público em linspayments.com.br. Opera somente em simulação: nenhuma ordem real é enviada e nenhum valor exibido é retorno financeiro.",
  role: "Concepção, validação de dados e desenvolvimento do sistema e do painel",
  period: "Julho a outubro de 2026",
  stage: "Simulação",
  stageNote: "linspayments.com.br apresenta o Lins UP Now com o selo de simulação (paper trading). O motor roda desde 09/07/2026 com dados de mercado em tempo real, mas as ordens, os preenchimentos e o resultado exibidos saem de um simulador. O plano previa capital real só depois de três etapas de validação; a segunda etapa não foi aprovada e não houve operação com dinheiro.",
  platforms: ["Página pública com painel ao vivo", "Serviço de simulação no servidor"],
  cover: {
    src: "/images/screens/lins-br.jpg",
    width: 1440,
    height: 1000,
    alt: "Topo do Lins UP Now em fundo escuro com detalhes em laranja, aviso de paper trading sem ordens reais e indicadores do simulador",
    caption: "Página publicada em linspayments.com.br, outubro de 2026. Todos os valores são de simulação.",
  },
  gallery: [
    {
      src: "/images/cases/lins-up-now/painel-simulacao.jpg",
      width: 1440,
      height: 1000,
      alt: "Painel ao vivo com status do serviço, preço do bitcoin, contagem de sinais e ordens simuladas, gráfico de resultado simulado acumulado e lista de sinais",
      caption: "Painel ao vivo, 10 de outubro de 2026. Resultado de simulação, considerado otimista na própria validação do projeto; não é retorno real.",
    },
  ],

  history: {
    audience: "Uso próprio, como laboratório para testar se uma estratégia quantitativa sobrevive a dados reais antes de receber capital, e visitantes que acompanham o projeto pela página pública.",
    problem: "Os antecessores do projeto (Lins UP e Lins UP Future) mostraram que taxas consomem a vantagem esperada e que resultado bruto engana. Textos que circulavam prometiam ganhos rápidos com distorções em mercados de previsão. Era preciso separar o que existe de fato do que é marketing, com dados, antes de arriscar dinheiro.",
    constraints: "Nenhum capital antes de três etapas aprovadas. Taxas da plataforma que mudam conforme o tipo de ordem. Mercados com janelas de 5 e 15 minutos, em que a vantagem dura segundos. Servidor compartilhado com outros projetos.",
    milestones: [
      {when: "26/06/2026", what: "Antecessor Lins UP Future publicado em linspayments.com.br com página e painel ao vivo."},
      {when: "09/07/2026", what: "Criação do Lins UP Now com plano em fases e etapas de aprovação; etapa 1 executada com uma base pública de cerca de 107 milhões de negociações."},
      {when: "09/07/2026", what: "Protótipo de simulação no ar, validado ao vivo, e página reformulada para o painel do Lins UP Now em modo simulação."},
      {when: "12/07/2026", what: "Primeiro relatório da etapa 2: taxa de preenchimento real muito abaixo do modelado; etapa não aprovada."},
      {when: "31/07 a 03/08/2026", what: "Correção da contabilidade de taxas, recálculo dos registros e constatação de que o simulador operava em modo diferente do pretendido."},
      {when: "23/09/2026", what: "Lins UP e Lins UP Future retirados; o Lins UP Now segue em simulação."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o plano em fases com etapas de aprovação e a regra de não usar capital antes de três etapas aprovadas.",
      "Decidi encerrar a linha de arbitragem quando a etapa 1 mostrou que não havia vantagem líquida executável.",
      "Mantive a etapa 2 reprovada enquanto o resultado positivo dependia de premissas de preenchimento e de taxa não confirmadas.",
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
      "A análise da base histórica, o protótipo do motor, os relatórios diários e o monitoramento foram executados por um agente de IA que opero em servidor próprio, com subagentes para as análises mais longas. A reformulação do painel em 09/07/2026 e a correção da contabilidade também passaram pelo agente.",
      "Os vereditos de cada etapa, as correções de contabilidade e a decisão de não usar capital foram tomados por mim a partir desses relatórios.",
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
      {name: "Motor de simulação", content: "Serviço Python com conexões WebSocket ao fluxo de preços e ao livro de ofertas, descoberta das janelas de mercado, simulação de preenchimento pela posição na fila e resolução de cada janela, executado como serviço do sistema com reinício automático. O código do motor está no servidor e não faz parte da cópia local usada neste estudo."},
      {name: "Operação", content: "Vigia a cada 5 minutos que reinicia o motor travado e me avisa; relatório diário automático com as métricas da etapa 2."},
    ],
  },

  decisions: [
    {
      title: "Etapas de aprovação antes de capital",
      problem: "Estratégias de mercado parecem boas em histórico e em simulação e falham com dinheiro real por taxa, fila e latência.",
      decision: "Plano em fases: limpeza, validação com dados históricos, simulação ao vivo e só depois capital pequeno. Cada fase tem critério de aprovação e reprovação encerra a linha sem gasto.",
      reason: "Transforma a pergunta \"isso dá dinheiro?\" em perguntas menores, mensuráveis e baratas.",
      tradeoff: "Mais tempo até qualquer operação real e a possibilidade, confirmada até aqui, de nunca chegar a ela.",
      learning: "Na etapa 1, a linha de arbitragem foi descartada: as distorções existiam, mas eram pequenas, duravam milissegundos e eram capturadas por robôs mais rápidos.",
    },
    {
      title: "Desconfiar do resultado positivo",
      problem: "O simulador passou a mostrar resultado positivo alto e taxa de preenchimento perto de 90%.",
      decision: "Tratar o número como sinal de erro: recalcular com taxa em todas as operações, separar os tipos de preenchimento e verificar a configuração em execução.",
      reason: "A etapa 1 indicava que esse modo de operar não tinha vantagem depois das taxas; um resultado que contradiz a análise precisa ser explicado antes de ser aceito.",
      tradeoff: "Semanas de análise sobre um resultado que, à primeira vista, parecia bom.",
      learning: "Havia um erro de contabilidade (taxa só nas vencedoras) e um padrão de configuração que fazia o simulador operar de forma diferente da estratégia aprovada. A etapa 2 continua reprovada.",
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
    "Etapa 1 concluída em 09/07/2026: linha de arbitragem descartada sem uso de capital.",
    "Simulador em funcionamento contínuo desde 09/07/2026, com página pública atualizada ao vivo em outubro de 2026.",
    "Etapa 2 não aprovada: nas primeiras 70 horas, a taxa de preenchimento real da estratégia ficou em cerca de 1%, contra 84% no modelo. Nenhuma operação com dinheiro real foi feita.",
    "Contabilidade do simulador corrigida em 31/07/2026 para descontar taxa de todas as operações.",
  ],

  limits: [
    "Todos os números do painel são de simulação. O resultado acumulado exibido é considerado otimista pela própria validação do projeto e não deve ser lido como retorno.",
    "A etapa histórica foi concluída, mas a validação ao vivo (etapa 2) não foi aprovada; a página pública informa que a estratégia está em fase de validação (texto ajustado em 10/10/2026).",
    "Fases 3 e 4 (capital real) não foram iniciadas e dependem de aprovação da etapa 2 e de decisão minha.",
    "O código do motor em Python não está na cópia local usada neste estudo.",
  ],

  links: [
    {label: "Página pública (simulação)", url: "https://linspayments.com.br/", kind: "produto"},
  ],

};
