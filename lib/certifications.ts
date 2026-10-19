// Certificações e cursos. Fonte: PDFs e imagens em Pessoal/Certificados e o Registro de Concluídas de 15/10/2026.
// Links de verificação só quando constam nesses arquivos (nada inventado).

export type Issuer = {name: string; logo: string; logoWidth: number};

export const issuers = {
  oracle: {name: "Oracle", logo: "/images/certificacoes/logos/oracle.png", logoWidth: 758},
  microsoft: {name: "Microsoft", logo: "/images/certificacoes/logos/microsoft.png", logoWidth: 451},
  databricks: {name: "Databricks Academy", logo: "/images/certificacoes/logos/databricks.png", logoWidth: 585},
  aws: {name: "AWS Educate", logo: "/images/certificacoes/logos/aws.png", logoWidth: 161},
  dio: {name: "DIO", logo: "/images/certificacoes/logos/dio.png", logoWidth: 249},
  eleva: {name: "Academia Eleva", logo: "/images/certificacoes/logos/academia-eleva.png", logoWidth: 192},
} satisfies Record<string, Issuer>;

export type Certification = {
  id: string;
  name: string;
  issuer: keyof typeof issuers;
  kind: string;
  date: string;
  dateIso: string;
  detail?: string;
  image: {full: string; thumb: string; width: number; height: number; badge?: boolean};
  verifyUrl?: string;
};

export type CertificationGroup = {id: string; title: string; description: string; items: Certification[]};

const img = (name: string, width: number, height: number) => ({full: `/images/certificacoes/${name}.webp`, thumb: `/images/certificacoes/${name}-mini.webp`, width, height});
const badge = (name: string, width: number, height: number) => ({full: `/images/certificacoes/${name}.webp`, thumb: `/images/certificacoes/${name}.webp`, width, height, badge: true});

export const certificationGroups: CertificationGroup[] = [
  {
    id: "nuvem-dados-ia",
    title: "Nuvem, dados e inteligência artificial",
    description: "Certificações e credenciais de Oracle, Microsoft, Databricks e AWS.",
    items: [
      {id: "oracle-oci-architect", name: "Oracle Cloud Infrastructure 2026 Architect Associate", issuer: "oracle", kind: "Certificação profissional", date: "14/10/2026", dateIso: "2026-10-14", detail: "Exame 1Z0-1072-26", image: badge("oracle-oci-architect-associate", 552, 276), verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3E4D2D18F32DEA7A17CB3CBDC49237C3B9505F0C03D68AF8D1ACD37C640295EE"},
      {id: "microsoft-mcp-foundry", name: "Microsoft Applied Skills: Integrar ferramentas de protocolo de contexto do modelo (MCP) com agentes no Microsoft Foundry", issuer: "microsoft", kind: "Credencial Applied Skills", date: "19/10/2026", dateIso: "2026-10-19", detail: "ID da credencial 86D00605094ED435", image: img("microsoft-applied-skills-mcp-foundry", 1537, 1278), verifyUrl: "https://learn.microsoft.com/api/credentials/share/pt-br/rafaellinsgaspar-2909/86D00605094ED435?sharingId=478785CDF4636728"},
      {id: "microsoft-foundry", name: "Microsoft Applied Skills: Introdução ao desenvolvimento de agentes no Microsoft Foundry", issuer: "microsoft", kind: "Credencial Applied Skills", date: "14/10/2026", dateIso: "2026-10-14", detail: "ID da credencial 8ED97732C45A8030", image: img("microsoft-applied-skills-foundry", 1537, 1278), verifyUrl: "https://learn.microsoft.com/api/credentials/share/pt-br/rafaellinsgaspar-2909/8ED97732C45A8030?sharingId=478785CDF4636728"},
      {id: "databricks-fundamentals", name: "Databricks Fundamentals Accreditation", issuer: "databricks", kind: "Acreditação", date: "14/10/2026", dateIso: "2026-10-14", image: img("databricks-fundamentals-accreditation", 1600, 1132)},
      {id: "databricks-genai", name: "Generative AI Fundamentals", issuer: "databricks", kind: "Curso", date: "14/10/2026", dateIso: "2026-10-14", image: img("databricks-generative-ai-fundamentals", 1600, 1132)},
      {id: "databricks-agents", name: "AI Agent Fundamentals", issuer: "databricks", kind: "Curso", date: "14/10/2026", dateIso: "2026-10-14", image: img("databricks-ai-agent-fundamentals", 1600, 1132)},
      {id: "aws-cloud-101", name: "Introduction to Cloud 101", issuer: "aws", kind: "Badge de treinamento", date: "14/10/2026", dateIso: "2026-10-14", image: badge("aws-educate-cloud-101", 601, 601)},
      {id: "microsoft-rag", name: "Introdução aos conceitos de geração aumentada de recuperação (RAG)", issuer: "microsoft", kind: "Módulo Microsoft Learn", date: "20/08/2026", dateIso: "2026-08-20", image: img("microsoft-learn-rag", 1600, 1102), verifyUrl: "https://learn.microsoft.com/pt-br/users/rafaellinsgaspar-2909/achievements/print/u7kz2973"},
    ],
  },
  {
    id: "cursos",
    title: "Outros cursos",
    description: "Formação complementar em tecnologia, ferramentas e comunicação.",
    items: [
      {id: "dio-web3", name: "Introdução e Visão Geral Sobre Web3", issuer: "dio", kind: "Curso · 1 hora", date: "06/12/2022", dateIso: "2022-12-06", detail: "Código C3DBD143", image: img("dio-web3", 1600, 1132)},
      {id: "eleva-excel", name: "Excel Básico", issuer: "eleva", kind: "Curso on-line · 3 horas", date: "15/03/2019", dateIso: "2019-03-15", image: img("eleva-excel-basico", 1600, 1132)},
      {id: "eleva-comunicacao", name: "Eleve a sua comunicação", issuer: "eleva", kind: "Curso on-line", date: "27/09/2018", dateIso: "2018-09-27", image: img("eleva-eleve-sua-comunicacao", 1600, 1132)},
    ],
  },
  {
    id: "palestrante",
    title: "Treinamentos como palestrante",
    description: "Treinamentos internos ministrados na Eleva Educação.",
    items: [
      {id: "eleva-material-didatico", name: "Controle de Material Didático", issuer: "eleva", kind: "Palestrante · 6 horas", date: "27/09/2018", dateIso: "2018-09-27", image: img("eleva-controle-material-didatico", 1600, 1132)},
      {id: "eleva-otrs", name: "OTRS", issuer: "eleva", kind: "Palestrante · 6 horas", date: "27/09/2018", dateIso: "2018-09-27", image: img("eleva-otrs", 1600, 1132)},
      {id: "eleva-primeiros-socorros", name: "Primeiros Socorros", issuer: "eleva", kind: "Palestrante · 6 horas", date: "27/09/2018", dateIso: "2018-09-27", image: img("eleva-primeiros-socorros", 1600, 1132)},
    ],
  },
];
