import type {CaseStudy} from "@/lib/case-types";

export const fivex: CaseStudy = {
  slug: "fivex",
  name: "FiveX Solutions",
  group: "ferramentas",
  category: "Projeto acadêmico em equipe · Agentes inteligentes",
  summary: "Trabalho acadêmico coletivo do grupo FiveX, do curso de Tecnologia em Inteligência Artificial da Unifeso: um estudo de caso sobre arquiteturas de agentes inteligentes, com quatro simuladores interativos no navegador e o mesmo conteúdo publicado em PDF.",
  role: "Arquitetura e desenvolvimento · equipe acadêmica",
  organization: "Grupo FiveX Solutions · Unifeso",
  period: "Setembro de 2026",
  stage: "Projeto acadêmico",
  stageNote: "Site estático publicado em fivex.solutions desde 03/09/2026. É trabalho de disciplina, feito em grupo de cinco alunos; não é produto comercial nem tem usuários além de professores, colegas e visitantes.",
  platforms: ["Web (site estático)", "PDF do trabalho"],
  cover: {
    src: "/images/screens/fivex.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do site FiveX Solutions, com título sobre os cinco alunos do grupo, botões para o estudo de caso e para o PDF",
    caption: "Site acadêmico publicado em fivex.solutions, outubro de 2026.",
  },
  gallery: [
    {
      src: "/images/cases/fivex/sistemas-multiagentes.jpg",
      width: 1440,
      height: 1000,
      alt: "Abertura do estudo de caso Sistemas Multiagentes, com a pergunta Qual arquitetura cada situação pede, botão para baixar o PDF e atalhos para as quatro arquiteturas",
      caption: "Abertura do estudo de caso no site publicado, outubro de 2026.",
    },
    {
      src: "/images/cases/fivex/agente-objetivos.jpg",
      width: 1440,
      height: 1000,
      alt: "Simulador de agente baseado em objetivos: grade com obstáculos, rota traçada por busca em largura até a entrega e etapas da solução ao lado",
      caption: "Situação 2, agente baseado em objetivos: busca em largura com obstáculos editáveis. Site publicado, outubro de 2026.",
    },
  ],

  history: {
    audience: "Professores e colegas da disciplina, e qualquer pessoa que queira entender a diferença entre tipos de agentes inteligentes sem partir da teoria.",
    problem: "O enunciado da disciplina trazia quatro situações e pedia a arquitetura de agente mais adequada para cada uma. Respostas só em texto tendem a ficar abstratas; o grupo quis que cada resposta pudesse ser verificada mexendo em um exemplo funcionando.",
    constraints: "Prazo de entrega acadêmico, grupo com formações diversas e nenhum orçamento de infraestrutura. Conteúdo precisava existir também em PDF para a entrega formal.",
    milestones: [
      {when: "Setembro de 2026", what: "Definição das respostas pela classificação de Russell e Norvig e dos quatro simuladores."},
      {when: "03/09/2026", what: "Pacote final com site estático, PDF gerado da mesma fonte de conteúdo e publicação em fivex.solutions."},
    ],
  },

  responsibility: {
    leadership: [
      "Estruturei com o grupo a abordagem do trabalho: cada arquitetura acompanhada de um exemplo em que o leitor altera o ambiente e vê o comportamento do agente mudar.",
      "Defini a arquitetura técnica: site estático, conteúdo em fonte única para site e PDF e sistema de design em tokens.",
    ],
    direct: [
      "Desenvolvi o site em Next.js com exportação estática e os quatro simuladores em React.",
      "Implementei a sincronização entre as etapas explicadas e o estado de cada simulador.",
      "Criei o script que gera o HTML de impressão do PDF a partir do mesmo arquivo de conteúdo, com fontes e fotos embutidas.",
      "Publiquei o site em servidor próprio com nginx e HTTPS.",
    ],
    team: [
      "O grupo tem cinco integrantes, cada um com papel declarado na página: análise de dados e gestão; música e produção fonográfica; marketing digital; administrativo e financeiro; arquitetura e desenvolvimento (minha função).",
      "A página do grupo informa que cada projeto passa pelos cinco integrantes antes da entrega e que a divisão de tarefas muda a cada disciplina.",
      "A contribuição específica de cada colega no conteúdo deste trabalho não está registrada nos arquivos disponíveis.",
    ],
    ai: [
      "A publicação e o registro de implantação no servidor foram feitos por um agente de IA operado por mim, a partir do pacote que entreguei.",
    ],
  },

  architecture: {
    intro: "Site estático gerado pelo Next.js (exportação estática), sem backend e sem dependência externa em tempo de execução: até as fontes são servidas pelo próprio site. O conteúdo das quatro situações vive em um arquivo de dados único, lido pelas páginas e pelo script que gera o PDF.",
    diagram: {
      title: "Arquitetura do site FiveX",
      tiers: [
        {label: "Leitor", nodes: ["Navegador", "PDF do trabalho"]},
        {label: "Entrega", nodes: ["nginx (arquivos estáticos)"]},
        {label: "Páginas", nodes: ["Grupo e projetos", "Estudo de caso"]},
        {label: "Interação", nodes: ["Etapas da solução", "Quatro simuladores"]},
        {label: "Conteúdo", nodes: ["Conteúdo em fonte única", "Tokens de design"]},
      ],
      links: [
        "O nginx entrega os arquivos estáticos gerados pela exportação do Next.js.",
        "As páginas montam as seções a partir do arquivo de conteúdo.",
        "Cada situação liga as etapas explicadas ao estado do simulador.",
        "O mesmo arquivo de conteúdo alimenta o HTML de impressão que gera o PDF.",
      ],
    },
    layers: [
      {name: "Frontend", content: "Next.js 16 com App Router e exportação estática (output export, imagens sem otimização em servidor, barra final nas rotas), React 19 e JavaScript."},
      {name: "Simuladores", content: "Termostato com opção de histerese e contador de trocas; planejador de rotas por busca em largura numa grade com obstáculos editáveis; escolha de rota por função de utilidade com pesos ajustáveis para tempo, segurança e consumo; agente de aprendizagem com estratégia epsilon-greedy sobre recompensas ruidosas."},
      {name: "Conteúdo e PDF", content: "Um arquivo de conteúdo único com integrantes, situações e resumo; um script monta o HTML de impressão com fontes e fotos em base64, impresso em PDF A4 por navegador headless."},
      {name: "Design", content: "Tokens no formato DTCG como fonte de verdade do CSS; Instrument Serif e JetBrains Mono autohospedadas via Fontsource, em substituição a fontes licenciadas; diagramas em SVG animado."},
      {name: "Implantação", content: "Cópia da pasta de saída para servidor próprio, nginx servindo arquivos estáticos, certificado Let's Encrypt e redirecionamento para HTTPS."},
    ],
  },

  decisions: [
    {
      title: "Simulador ao lado de cada resposta",
      problem: "A classificação de agentes é fácil de decorar e difícil de entender; o leitor não vê por que uma arquitetura serve e outra não.",
      decision: "Para cada situação, um simulador sincronizado com as etapas da explicação: ao clicar numa etapa, o simulador congela naquele estado.",
      reason: "Permite testar a resposta, por exemplo ver o termostato oscilar sem histerese ou o agente travar na primeira rota com epsilon zero.",
      tradeoff: "Mais código e mais tempo do que uma entrega em texto.",
      learning: "As ressalvas de cada situação, como a histerese transformar o agente reativo simples em agente baseado em modelo, surgiram ao construir os simuladores.",
    },
    {
      title: "Fonte única para site e PDF",
      problem: "A entrega formal exigia PDF, e manter dois textos paralelos gera divergência.",
      decision: "Guardar todo o conteúdo em um arquivo de dados e gerar o PDF a partir dele com um script próprio.",
      reason: "Qualquer correção no conteúdo vale para os dois formatos.",
      tradeoff: "O PDF depende de um passo manual de impressão em navegador.",
    },
    {
      title: "Exportação estática e zero dependência externa",
      problem: "O site precisava ficar no ar sem custo de servidor de aplicação e sem quebrar por serviço de terceiros.",
      decision: "Exportação estática do Next.js e fontes autohospedadas, sem chamadas a serviços externos.",
      reason: "Hospedagem simples, carregamento previsível e nenhum dado do visitante enviado a terceiros.",
      tradeoff: "Nenhum recurso dinâmico, como formulário ou contagem de acessos.",
    },
  ],

  journey: {
    title: "Explorar a situação 4, agente de aprendizagem",
    steps: [
      "O leitor abre a situação e vê o enunciado: um agente melhora suas decisões após milhares de experiências.",
      "O simulador escolhe entre três rotas cuja utilidade real ele não conhece e recebe recompensas com ruído.",
      "Com epsilon em 20%, o agente explora parte das vezes e converge para a melhor rota.",
      "O leitor leva epsilon a zero e vê o agente fixar a primeira rota que pareceu boa.",
      "Ao clicar numa etapa da explicação, o ciclo para e o simulador mostra o estado correspondente.",
    ],
  },

  results: [
    "Site publicado em fivex.solutions desde 03/09/2026, com o estudo de caso e o PDF do trabalho.",
    "Quatro simuladores funcionando no navegador, um para cada arquitetura de agente.",
    "Conteúdo do site e do PDF gerado da mesma fonte.",
  ],

  limits: [
    "Trabalho acadêmico: não houve teste com usuários nem medição de aprendizagem dos leitores.",
    "Simuladores didáticos com parâmetros fixos; não representam sistemas multiagentes de produção.",
    "Sem repositório público; o código foi entregue em pacote.",
    "A página do grupo prevê novos projetos a cada semestre.",
  ],

  links: [
    {label: "Site do grupo", url: "https://fivex.solutions/", kind: "produto"},
    {label: "Estudo de caso", url: "https://fivex.solutions/sistemas-multiagentes/", kind: "produto"},
    {label: "Trabalho em PDF", url: "https://fivex.solutions/fivex-solutions-sistemas-multiagentes.pdf", kind: "documento"},
  ],

};
