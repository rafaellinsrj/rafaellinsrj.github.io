// Modelo de dados dos estudos de caso (especificação V2, seções 5 e 10).
// Cada projeto clicável tem um arquivo em lib/cases/<slug>.ts que exporta um CaseStudy.

export type Stage =
  | "Em produção"
  | "Site publicado"
  | "MVP"
  | "Em desenvolvimento"
  | "Protótipo"
  | "Projeto histórico"
  | "Projeto acadêmico"
  | "Simulação"
  | "Versão local";

export type Group = "riotech" | "plataformas" | "fintech" | "ferramentas" | "sites";

export type GalleryImage = {
  src: string;          // caminho em /public, ex.: /images/cases/certame/home.webp
  width: number;
  height: number;
  alt: string;          // descrição do que a tela mostra
  caption: string;      // versão/ano e contexto: "Site publicado, outubro de 2026"
};

// Diagrama: camadas de cima para baixo; cada camada tem blocos. As setas ligam camadas vizinhas,
// e "links" descreve as conexões em texto (vai para o texto alternativo e para a legenda).
export type Diagram = {
  title: string;
  tiers: {label: string; nodes: string[]}[];
  links: string[];
};

export type Layer = {name: string; content: string};

export type Decision = {
  title: string;
  problem: string;
  decision: string;
  reason: string;
  tradeoff: string;
  learning?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  group: Group;
  category: string;           // ex.: "Plataforma transacional · Python"
  summary: string;            // 1 a 2 frases, usado no card e no topo
  role: string;               // papel efetivamente exercido
  organization?: string;      // organização e período, quando publicáveis
  period?: string;
  stage: Stage;
  stageNote: string;          // o que está de fato no ar / em teste / planejado
  platforms: string[];        // Web, Android, iOS, painel administrativo...
  cover: GalleryImage;
  gallery: GalleryImage[];

  history: {
    audience: string;         // para quem o produto foi criado
    problem: string;          // situação anterior e problema
    constraints?: string;     // restrições confirmadas
    milestones: {when: string; what: string}[];
  };

  responsibility: {
    leadership: string[];     // estratégia, priorização, decisões de arquitetura
    direct: string[];         // o que Rafael codificou/integrou diretamente
    team: string[];           // o que foi feito por outras pessoas (vazio se não houve equipe)
    ai: string[];             // uso de agentes de IA e quem validou
  };

  architecture: {
    intro: string;
    diagram: Diagram;
    layers: Layer[];          // só as camadas que existem no projeto
  };

  decisions: Decision[];      // 2 a 5
  journey?: {title: string; steps: string[]};   // fluxo crítico com dados sintéticos
  dataModel?: {entity: string; fields: string}[];

  results: string[];          // resultados documentados, com período; nada de métricas de demonstração
  limits: string[];           // limites conhecidos e próximos passos (intenção, não implementação)

  // Para projetos históricos sem código disponível: proposta de arquitetura atual, identificada como tal.
  proposal?: {
    title: string;
    intro: string;
    diagram: Diagram;
    layers: Layer[];
    decisions: Decision[];
  };

  links: {label: string; url: string; kind: "produto" | "codigo" | "documento"}[];

  // As fontes de cada afirmação e as pendências de validação ficam em notas internas, fora do repositório público.
};
