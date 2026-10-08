export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  role: string;
  status: string;
  tone: string;
  tech: string[];
  context: string;
  contributions: {title: string; text: string}[];
  decisions: string[];
  stage: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const projects: Project[] = [
  {
    slug: "certame",
    name: "Certame",
    category: "Plataforma web · Python",
    description: "Campanhas beneficentes, checkout Pix e rotinas de conciliação em uma aplicação fullstack.",
    role: "CTO e sócio",
    status: "Desenvolvimento e homologação",
    tone: "certame",
    tech: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "PostgreSQL", "Alembic", "pytest", "Playwright"],
    context: "Uma plataforma para campanhas beneficentes precisa conectar apresentação da campanha, intenção de compra, pagamento e acompanhamento da operação. Na Certame, trabalho na organização desses fluxos e no desenvolvimento da aplicação.",
    contributions: [
      {title: "Backend e contratos", text: "Desenvolvimento de APIs com FastAPI, validação de entradas com Pydantic, persistência com SQLAlchemy e evolução do banco por migrações Alembic."},
      {title: "Jornada de pagamento", text: "Implementação de intenções de checkout Pix, vinculação com pedidos e rotinas de conciliação. O fluxo mantém estados explícitos para acompanhar o andamento de cada operação."},
      {title: "Comunicação e qualidade", text: "Rotinas de entrega de e-mails e tratamento de eventos de webhook, além de testes com pytest e Playwright e verificações no processo de integração contínua."}
    ],
    decisions: ["Separar contratos de entrada, regras de negócio e persistência para facilitar a evolução da aplicação.", "Modelar o checkout como um fluxo com estados, incluindo situações em que uma intenção não resulta em pedido.", "Usar testes de backend e navegador para verificar jornadas relevantes do produto."],
    stage: "Projeto em desenvolvimento e homologação. A interface apresentada utiliza dados de demonstração; não representa indicadores de operação real.",
    image: "/images/certame.png",
    imageAlt: "Página inicial de demonstração da Certame, com campanhas e informações de participação.",
    imageCaption: "Interface de demonstração da plataforma. Campanhas e valores ilustrativos."
  },
  {
    slug: "hyre",
    name: "Hyre",
    category: "Produto com IA · Fullstack",
    description: "Uma plataforma de IA com múltiplos provedores, arquitetura multi-tenant e processamento assíncrono.",
    role: "Fundador e CEO · desenvolvimento do produto",
    status: "Nova versão em desenvolvimento",
    tone: "hyre",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery", "Stripe"],
    context: "A Hyre reúne aplicação web, serviços de IA e integrações em uma arquitetura voltada a diferentes usuários e organizações. Minha atuação conecta a definição do produto ao desenvolvimento de backend, interface e rotinas de processamento.",
    contributions: [
      {title: "Aplicação fullstack", text: "Backend com FastAPI, SQLAlchemy assíncrono e PostgreSQL, integrado a uma interface em Next.js, React, TypeScript e TanStack Query."},
      {title: "Modelos e processamento", text: "Implementação de adaptadores para APIs de modelos de linguagem, respostas em streaming e rotinas assíncronas com Celery e Redis."},
      {title: "Acesso e cobrança", text: "Estrutura multi-tenant, autorizações para integrações e cobrança por créditos via Stripe, com validação de assinatura e idempotência no tratamento de webhooks."}
    ],
    decisions: ["Separar provedores de IA por adaptadores para reduzir o acoplamento a uma única API.", "Executar tarefas mais longas em workers, mantendo a interface desacoplada do processamento.", "Tratar permissões, consumo e repetição de eventos como parte do desenho do produto."],
    stage: "A nova versão está em desenvolvimento local. Integrações externas e a operação completa ainda dependem de homologação."
  },
  {
    slug: "moneta",
    name: "The Moneta Post",
    category: "Conteúdo e IA · Python",
    description: "Portal em três idiomas, com rotinas de produção, revisão e distribuição editorial apoiadas por IA.",
    role: "Fundador · desenvolvimento e operação",
    status: "Portal e evolução editorial",
    tone: "moneta",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "APIs de IA", "Linux"],
    context: "O The Moneta Post combina um portal de notícias com processos editoriais em português, inglês e espanhol. O trabalho envolve a apresentação do conteúdo e a coordenação das etapas de geração, revisão, publicação e distribuição.",
    contributions: [
      {title: "Portal multilíngue", text: "Desenvolvimento do site com Next.js e TypeScript, apoiado por serviços Python/FastAPI e PostgreSQL para organizar o conteúdo editorial."},
      {title: "Fluxo editorial", text: "Implementação de rotinas que utilizam APIs de modelos de IA, com etapas de revisão, políticas de fontes e organização do conteúdo antes da publicação."},
      {title: "Operação e distribuição", text: "Rotinas agendadas em Linux, integrações para newsletter e redes sociais, além de registros de consumo e controles de orçamento para chamadas de IA."}
    ],
    decisions: ["Dividir a produção em etapas para acompanhar geração, revisão e publicação.", "Registrar consumo de modelos para tornar os custos de processamento observáveis.", "Organizar o portal por idioma e manter a distribuição conectada ao processo editorial."],
    stage: "O projeto tem histórico de publicação e operação do portal. Novas versões do fluxo editorial continuam em desenvolvimento; nem toda funcionalidade local está publicada."
  },
  {
    slug: "bioo",
    name: "Bioo",
    category: "Plataforma para criadores · Node.js",
    description: "Editor de páginas, catálogo e ferramentas de gestão para criadores e pequenos negócios.",
    role: "Desenvolvimento fullstack",
    status: "Implementação local",
    tone: "bioo",
    tech: ["Node.js", "Next.js", "React", "TypeScript", "PostgreSQL", "RLS", "Vitest", "Playwright"],
    context: "A Bioo propõe reunir a presença digital e a rotina comercial de criadores em um só produto: páginas públicas, catálogo, agenda, mensagens, automações e métricas.",
    contributions: [
      {title: "Produto e interface", text: "Desenvolvimento do editor e das áreas de gestão com Next.js, React e TypeScript, com estrutura de internacionalização preparada para dez idiomas."},
      {title: "Dados e permissões", text: "Backend Node.js, migrações PostgreSQL e políticas de segurança por linha (RLS) para organizar o acesso aos dados de cada conta."},
      {title: "Verificação de fluxos", text: "Testes de unidade, integração e navegador com Vitest e Playwright, cobrindo regras e percursos da aplicação."}
    ],
    decisions: ["Aplicar isolamento de dados também no banco, além das verificações da aplicação.", "Organizar traduções desde a estrutura da interface para facilitar a evolução internacional.", "Manter serviços externos desativados até a etapa de homologação correspondente."],
    stage: "Implementação local em desenvolvimento. Pagamentos, envio real de e-mails e integrações sociais ainda não estão ativados em produção."
  },
  {
    slug: "fivex",
    name: "FiveX Solutions",
    category: "Projeto acadêmico · Agentes de IA",
    description: "Uma experiência educativa com simulações interativas de diferentes tipos de agentes.",
    role: "Integrante da equipe acadêmica · Unifeso",
    status: "Projeto acadêmico em grupo",
    tone: "fivex",
    tech: ["Next.js", "React", "JavaScript", "Exportação estática"],
    context: "Projeto desenvolvido em grupo no contexto acadêmico da Unifeso. A proposta é tornar conceitos de agentes inteligentes mais acessíveis por meio de explicações e simulações interativas.",
    contributions: [
      {title: "Experiência educativa", text: "Participação no projeto que apresenta agentes reativos, orientados a objetivos, baseados em utilidade e com aprendizagem."},
      {title: "Simulações", text: "O site reúne um termostato, um planejador de rotas, uma comparação por utilidade e uma simulação de aprendizagem para explorar os conceitos na prática."},
      {title: "Conteúdo estruturado", text: "A base do projeto organiza o conteúdo em uma fonte compartilhada pelo site e pelo material em PDF, com publicação estática."}
    ],
    decisions: ["Aproximar conceitos de IA de situações que o visitante consegue explorar na interface.", "Compartilhar a base de conteúdo entre formatos para reduzir divergências.", "Usar exportação estática para simplificar a disponibilização do material acadêmico."],
    stage: "Trabalho acadêmico coletivo. A autoria é compartilhada com os demais integrantes da equipe FiveX."
  },
  {
    slug: "zappop",
    name: "ZapPop",
    category: "Atendimento · Integrações",
    description: "Implantação e customização de uma plataforma de atendimento baseada no Atendechat.",
    role: "Implantação e customização",
    status: "Projeto de implantação",
    tone: "zappop",
    tech: ["Node.js", "Express", "TypeScript", "React", "PostgreSQL", "Redis", "Socket.io"],
    context: "O projeto ZapPop utiliza a base Atendechat para organizar atendimento, conversas e rotinas operacionais. Minha atuação está relacionada à implantação e customização dessa solução.",
    contributions: [
      {title: "Aplicação de atendimento", text: "Trabalho com uma base que reúne tickets, conversas, campanhas, agendamentos e configuração de canais de atendimento."},
      {title: "Comunicação em tempo real", text: "Estrutura com backend Express/TypeScript, frontend React e Socket.io para atualização de eventos na interface."},
      {title: "Dados e processamento", text: "Persistência em PostgreSQL com Sequelize e processamento de tarefas com Redis e filas Bull, dentro da aplicação implantada."}
    ],
    decisions: ["Evoluir uma base existente de atendimento para as necessidades do projeto.", "Distinguir eventos em tempo real de tarefas executadas em segundo plano.", "Organizar a implantação do backend, da interface e dos serviços necessários à operação."],
    stage: "Projeto baseado no Atendechat. A apresentação descreve o trabalho de implantação e customização, com crédito à base original."
  },
  {
    slug: "presto-pdf",
    name: "Presto PDF",
    category: "Ferramentas web · Documentos",
    description: "Utilitários de PDF com processamento de arquivos no próprio navegador.",
    role: "Desenvolvimento de aplicação web",
    status: "Protótipo desenvolvido",
    tone: "presto",
    tech: ["JavaScript", "pdf-lib", "PDF.js", "JSZip"],
    context: "O Presto PDF reúne operações frequentes sobre documentos em uma interface web. A implementação explorou processamento local para permitir o uso das ferramentas sem depender de um serviço de upload.",
    contributions: [
      {title: "Operações com documentos", text: "Ferramentas para reunir e dividir PDFs, girar e extrair páginas, converter imagens e aplicar marcas d’água."},
      {title: "Processamento no navegador", text: "Uso de bibliotecas JavaScript para manipulação e leitura de PDFs e organização de arquivos para download."},
      {title: "Interface de ferramenta", text: "Fluxos de seleção de arquivos, configuração da operação e entrega do resultado, com layout adaptado a diferentes tamanhos de tela."}
    ],
    decisions: ["Executar a manipulação dos arquivos no navegador para reduzir a dependência de infraestrutura.", "Separar cada operação em um fluxo específico.", "Usar bibliotecas especializadas para leitura, manipulação de PDFs e empacotamento."],
    stage: "Protótipo com implementação disponível no acervo do projeto. A apresentação não pressupõe uma operação pública ativa."
  },
  {
    slug: "devkit",
    name: "Devkit",
    category: "Ferramentas web · Desenvolvimento",
    description: "Utilitários de texto e dados para tarefas recorrentes de desenvolvimento.",
    role: "Desenvolvimento de aplicação web",
    status: "Protótipo desenvolvido",
    tone: "devkit",
    tech: ["JavaScript", "HTML", "CSS", "Processamento local"],
    context: "O Devkit reúne pequenas ferramentas para tarefas comuns de desenvolvimento, com execução no navegador e interface organizada por operação.",
    contributions: [
      {title: "Dados e formatos", text: "Formatador de JSON, conversão entre CSV e JSON e prévia de Markdown."},
      {title: "Codificação e inspeção", text: "Utilitários de Base64, codificação de URLs e decodificação de JWT para inspeção do conteúdo. A decodificação não equivale à validação de uma assinatura."},
      {title: "Datas e idioma", text: "Conversor de timestamps Unix e estrutura de interface em três idiomas."}
    ],
    decisions: ["Manter as operações locais ao navegador para simplificar o uso das ferramentas.", "Apresentar entrada e resultado no mesmo contexto de trabalho.", "Explicitar o alcance de cada ferramenta, especialmente em operações de inspeção de dados."],
    stage: "Protótipo com implementação disponível no acervo do projeto. As ferramentas são apresentadas como experimentos de produto."
  }
];

export const websites = [
  {name: "CGM Marcenaria", kind: "Portfólio de serviços", text: "Galeria de trabalhos, apresentação da empresa e contato por WhatsApp.", tech: "Next.js · React"},
  {name: "Via Manzoni", kind: "Moda e coleções", text: "Apresentação de coleções e navegação visual de produtos.", tech: "Next.js · Tailwind CSS"},
  {name: "Arlene Zerbini", kind: "Site profissional", text: "Apresentação de atuação em psicanálise, serviços e contato.", tech: "Next.js · React"},
  {name: "Dra. Vitória Feo", kind: "Site profissional", text: "Página institucional com informações de atuação e atendimento.", tech: "Next.js · Tailwind CSS"},
  {name: "Site Fácil", kind: "Serviços digitais", text: "Site de apresentação de serviços e portfólio de projetos web.", tech: "Next.js · React"},
  {name: "Caio Andaluz", kind: "Advocacia", text: "Site institucional com apresentação profissional e áreas de atuação.", tech: "HTML · CSS"}
];

export const experiments = [
  {name: "Datera", text: "Ferramentas para datas e contagem de dias."},
  {name: "TikTak", text: "Relógios e consulta de fusos horários."},
  {name: "Qriar", text: "Geração de QR codes e encurtamento de links."},
  {name: "Sortea", text: "Ferramentas de sorteio e seleção aleatória."},
  {name: "Somma", text: "Coleção de calculadoras para o navegador."},
  {name: "Currículo", text: "Construtor de currículos com exportação."},
  {name: "Vrum", text: "Consultas e estimativas relacionadas a veículos."},
  {name: "Plink", text: "Conversão de moedas e criptoativos."}
];
