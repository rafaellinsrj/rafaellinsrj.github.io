// Trajetória profissional. Datas e cargos iguais aos do LinkedIn (linkedin.com/in/rlins), alinhados em 10/10/2026.
export type Role = {company: string; role: string; period: string; current?: boolean; summary: string; confidential?: boolean};

export const roles: Role[] = [
  {company: "Certame", role: "CTO e sócio", period: "jun 2026 – atual", current: true, summary: "Plataforma de prêmios com causa, com regras, números e resultados acessíveis a qualquer pessoa. Arquitetura do sistema e da infraestrutura, condução do time técnico e do roadmap."},
  {company: "Lins Capital Group LLC", role: "Fundador", period: "jun 2026 – atual", current: true, summary: "Holding que reúne os projetos de inteligência artificial, automação e blockchain: Hyre, The Moneta Post e a participação na Certame."},
  {company: "The Moneta Post", role: "Fundador", period: "mai 2026 – atual", current: true, summary: "Portal de notícias financeiras em português, espanhol e inglês produzido com IA. Concepção e desenvolvimento do site, do painel de gestão e do pipeline editorial automatizado."},
  {company: "Vero Markets", role: "CTO", period: "abr 2026 – atual", current: true, summary: "Plataforma de mercados de previsão. Responsável pela tecnologia: arquitetura, desenvolvimento do produto e integração de mercados e dados."},
  {company: "Hyre", role: "Fundador e CEO", period: "ago 2025 – atual", current: true, summary: "Plataforma de agentes de IA para pequenas e médias empresas. Estratégia, produto e desenvolvimento."},
  {company: "Swiss Private", role: "COO e CTO", period: "jan 2024 – jan 2026", summary: "Direção de operações e de tecnologia da empresa, em São Paulo: gestão estratégica, planejamento e condução da área técnica."},
  {company: "Escritório de advocacia", role: "Chief Technology Officer", period: "2021 – 2024", confidential: true, summary: "Liderança direta de cinco desenvolvedores durante a expansão da base de aproximadamente 400 para 17 mil clientes. Identidade preservada por confidencialidade."},
  {company: "Rio Tech", role: "CTO e sócio", period: "jan 2014 – dez 2017", summary: "Fundação e direção técnica de uma plataforma integrada de segurança pública (190), testada com órgãos do Rio de Janeiro, Pará e Amapá. A tecnologia foi vendida a uma empresa da Lituânia."},
  {company: "Locart", role: "Sócio e diretor executivo", period: "dez 2012 – fev 2015", summary: "Locação de máquinas e caminhões: operações, contratos, negociação e equipes no Rio de Janeiro, Espírito Santo e sul da Bahia."},
];
