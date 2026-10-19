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
      {id: "oracle-oci-architect", name: "Oracle Cloud Infrastructure Certified Architect Associate", issuer: "oracle", kind: "Certificação profissional", date: "14/10/2026", dateIso: "2026-10-14", detail: "Exame 1Z0-1072-26 · ID 332437107OCI26CAA · válida até 14/10/2028", image: img("oracle-oci-architect-associate-certificado", 1600, 1097), verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3e4d2d18f32dea7a17cb3cbdc49237c3b9505f0c03d68af8d1acd37c640295ee"},
      {id: "oracle-agentic-ai-foundations", name: "Agentic AI Certified Foundations Associate", issuer: "oracle", kind: "Certificação Foundations", date: "19/10/2026", dateIso: "2026-10-19", detail: "ID 332437107AAI26OFA · válida até 19/10/2028", image: img("oracle-agentic-ai-foundations", 1600, 1097), verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=e4de5d4ed9e2cd635b3b05344bcd48aa34d7b3d0f952c511f54ec00c5cf4058f"},
      {id: "oracle-oci-ai-foundations", name: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "oracle", kind: "Certificação Foundations", date: "19/10/2026", dateIso: "2026-10-19", detail: "ID 332437107OCI26AICFA · válida até 19/10/2028", image: img("oracle-oci-ai-foundations", 1600, 1097), verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=a1d09bdd3c96064f86b05036ee3cca34ab8a2e78dd97a86ccdd1c7a1c5431470"},
      {id: "oracle-ai-database-foundations", name: "Oracle AI Database Certified Foundations Associate", issuer: "oracle", kind: "Certificação Foundations", date: "19/10/2026", dateIso: "2026-10-19", detail: "ID 332437107OCI26DCFA · válida até 19/10/2028", image: img("oracle-ai-database-foundations", 1600, 1097), verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=b33089aafcd482b0e3d661aae2213bdb4056e6cc353932598250fb881262e284"},
      {id: "oracle-oci-foundations", name: "Oracle Cloud Infrastructure Certified Foundations Associate", issuer: "oracle", kind: "Certificação Foundations", date: "19/10/2026", dateIso: "2026-10-19", detail: "ID 332437107OCI26FNDCFA · válida até 19/10/2028", image: img("oracle-oci-foundations", 1600, 1097), verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=d4e74331061a663a657d7c75c495e10c822045c9d2062c9463cc93440a08d632"},
      {id: "oracle-multicloud-foundations", name: "Oracle Multicloud Certified Foundations Associate", issuer: "oracle", kind: "Certificação Foundations", date: "19/10/2026", dateIso: "2026-10-19", detail: "Exame 1Z0-1144-26 · ID 332437107OMC26CFA · válida até 19/10/2028", image: img("oracle-multicloud-foundations", 1600, 1097), verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=50ab57ca2126a9b087dfa7096724388aad129e8f8ca38aeb2435d0813af3bcc7"},
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
