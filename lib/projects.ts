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
  url?: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
};

export type Website = {
  slug: string;
  name: string;
  kind: string;
  text: string;
  tech: string;
  url?: string;
  image: string;
  caption: string;
  screen: string;
};

export const projects: Project[] = [
  {
    "slug": "certame",
    "name": "Certame",
    "category": "Plataforma web · Python",
    "description": "Campanhas beneficentes, checkout Pix e rotinas de conciliação em uma aplicação fullstack.",
    "role": "CTO e sócio",
    "status": "Site publicado",
    "tone": "certame",
    "tech": [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "pytest",
      "Playwright"
    ],
    "context": "Uma plataforma para campanhas beneficentes precisa conectar apresentação da campanha, intenção de compra, pagamento e acompanhamento da operação. Na Certame, trabalho na organização desses fluxos e no desenvolvimento da aplicação.",
    "contributions": [
      {
        "title": "Backend e contratos",
        "text": "Desenvolvimento de APIs com FastAPI, validação de entradas com Pydantic, persistência com SQLAlchemy e evolução do banco por migrações Alembic."
      },
      {
        "title": "Jornada de pagamento",
        "text": "Implementação de intenções de checkout Pix, vinculação com pedidos e rotinas de conciliação. O fluxo mantém estados explícitos para acompanhar o andamento de cada operação."
      },
      {
        "title": "Comunicação e qualidade",
        "text": "Rotinas de entrega de e-mails e tratamento de eventos de webhook, além de testes com pytest e Playwright e verificações no processo de integração contínua."
      }
    ],
    "decisions": [
      "Separar contratos de entrada, regras de negócio e persistência para facilitar a evolução da aplicação.",
      "Modelar o checkout como um fluxo com estados, incluindo situações em que uma intenção não resulta em pedido.",
      "Usar testes de backend e navegador para verificar jornadas relevantes do produto."
    ],
    "stage": "A página pública da Certame está publicada. A captura apresenta a interface disponível no site; as rotinas internas continuam evoluindo com testes e homologações.",
    "image": "/images/screens/certame.jpg",
    "imageAlt": "Tela do projeto Certame",
    "imageCaption": "Captura do site publicado em certame.app.",
    "url": "https://certame.app/"
  },
  {
    "slug": "hyre",
    "name": "Hyre",
    "category": "Produto com IA · Fullstack",
    "description": "Uma plataforma de IA com múltiplos provedores, arquitetura multi-tenant e processamento assíncrono.",
    "role": "Fundador e CEO · desenvolvimento do produto",
    "status": "Site publicado",
    "tone": "hyre",
    "tech": [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Stripe"
    ],
    "context": "A Hyre reúne aplicação web, serviços de IA e integrações em uma arquitetura voltada a diferentes usuários e organizações. Minha atuação conecta a definição do produto ao desenvolvimento de backend, interface e rotinas de processamento.",
    "contributions": [
      {
        "title": "Aplicação fullstack",
        "text": "Backend com FastAPI, SQLAlchemy assíncrono e PostgreSQL, integrado a uma interface em Next.js, React, TypeScript e TanStack Query."
      },
      {
        "title": "Modelos e processamento",
        "text": "Implementação de adaptadores para APIs de modelos de linguagem, respostas em streaming e rotinas assíncronas com Celery e Redis."
      },
      {
        "title": "Acesso e cobrança",
        "text": "Estrutura multi-tenant, autorizações para integrações e cobrança por créditos via Stripe, com validação de assinatura e idempotência no tratamento de webhooks."
      }
    ],
    "decisions": [
      "Separar provedores de IA por adaptadores para reduzir o acoplamento a uma única API.",
      "Executar tarefas mais longas em workers, mantendo a interface desacoplada do processamento.",
      "Tratar permissões, consumo e repetição de eventos como parte do desenho do produto."
    ],
    "stage": "O site de apresentação da Hyre está publicado. O desenvolvimento técnico descrito também inclui a evolução da aplicação, com integrações que passam por homologação.",
    "image": "/images/screens/hyre.jpg",
    "url": "https://hyre.global/",
    "imageCaption": "Página pública de apresentação da Hyre.",
    "imageAlt": "Tela do projeto Hyre"
  },
  {
    "slug": "moneta",
    "name": "The Moneta Post",
    "category": "Conteúdo e IA · Python",
    "description": "Portal em três idiomas, com rotinas de produção, revisão e distribuição editorial apoiadas por IA.",
    "role": "Fundador · desenvolvimento e operação",
    "status": "Site publicado",
    "tone": "moneta",
    "tech": [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "APIs de IA",
      "Linux"
    ],
    "context": "O The Moneta Post combina um portal de notícias com processos editoriais em português, inglês e espanhol. O trabalho envolve a apresentação do conteúdo e a coordenação das etapas de geração, revisão, publicação e distribuição.",
    "contributions": [
      {
        "title": "Portal multilíngue",
        "text": "Desenvolvimento do site com Next.js e TypeScript, apoiado por serviços Python/FastAPI e PostgreSQL para organizar o conteúdo editorial."
      },
      {
        "title": "Fluxo editorial",
        "text": "Implementação de rotinas que utilizam APIs de modelos de IA, com etapas de revisão, políticas de fontes e organização do conteúdo antes da publicação."
      },
      {
        "title": "Operação e distribuição",
        "text": "Rotinas agendadas em Linux, integrações para newsletter e redes sociais, além de registros de consumo e controles de orçamento para chamadas de IA."
      }
    ],
    "decisions": [
      "Dividir a produção em etapas para acompanhar geração, revisão e publicação.",
      "Registrar consumo de modelos para tornar os custos de processamento observáveis.",
      "Organizar o portal por idioma e manter a distribuição conectada ao processo editorial."
    ],
    "stage": "Portal publicado em português, inglês e espanhol. A captura foi feita na página pública; a plataforma editorial segue em evolução.",
    "image": "/images/screens/moneta.jpg",
    "url": "https://themonetapost.com/",
    "imageCaption": "Página inicial do portal publicado, com conteúdo editorial.",
    "imageAlt": "Tela do projeto The Moneta Post"
  },
  {
    "slug": "bioo",
    "name": "Bioo",
    "category": "Plataforma para criadores · Node.js",
    "description": "Editor de páginas, catálogo e ferramentas de gestão para criadores e pequenos negócios.",
    "role": "Desenvolvimento fullstack",
    "status": "Versão local",
    "tone": "bioo",
    "tech": [
      "Node.js",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "RLS",
      "Vitest",
      "Playwright"
    ],
    "context": "A Bioo propõe reunir a presença digital e a rotina comercial de criadores em um só produto: páginas públicas, catálogo, agenda, mensagens, automações e métricas.",
    "contributions": [
      {
        "title": "Produto e interface",
        "text": "Desenvolvimento do editor e das áreas de gestão com Next.js, React e TypeScript, com estrutura de internacionalização preparada para dez idiomas."
      },
      {
        "title": "Dados e permissões",
        "text": "Backend Node.js, migrações PostgreSQL e políticas de segurança por linha (RLS) para organizar o acesso aos dados de cada conta."
      },
      {
        "title": "Verificação de fluxos",
        "text": "Testes de unidade, integração e navegador com Vitest e Playwright, cobrindo regras e percursos da aplicação."
      }
    ],
    "decisions": [
      "Aplicar isolamento de dados também no banco, além das verificações da aplicação.",
      "Organizar traduções desde a estrutura da interface para facilitar a evolução internacional.",
      "Manter serviços externos desativados até a etapa de homologação correspondente."
    ],
    "stage": "A captura apresenta a página de uma versão anterior da Bioo, executada localmente. Editor, catálogo e áreas de gestão fazem parte da evolução do produto.",
    "image": "/images/screens/local-bioo.jpg",
    "imageCaption": "Página de apresentação de uma versão anterior da Bioo, executada localmente.",
    "imageAlt": "Tela do projeto Bioo"
  },
  {
    "slug": "fivex",
    "name": "FiveX Solutions",
    "category": "Projeto acadêmico · Agentes de IA",
    "description": "Uma experiência educativa com simulações interativas de diferentes tipos de agentes.",
    "role": "Arquitetura e desenvolvimento · equipe acadêmica",
    "status": "Site publicado",
    "tone": "fivex",
    "tech": [
      "Next.js",
      "React",
      "JavaScript",
      "Exportação estática"
    ],
    "context": "Projeto desenvolvido em grupo no contexto acadêmico da Unifeso. A proposta é tornar conceitos de agentes inteligentes mais acessíveis por meio de explicações e simulações interativas.",
    "contributions": [
      {
        "title": "Experiência educativa",
        "text": "Participação no projeto que apresenta agentes reativos, orientados a objetivos, baseados em utilidade e com aprendizagem."
      },
      {
        "title": "Simulações",
        "text": "O site reúne um termostato, um planejador de rotas, uma comparação por utilidade e uma simulação de aprendizagem para explorar os conceitos na prática."
      },
      {
        "title": "Conteúdo estruturado",
        "text": "A base do projeto organiza o conteúdo em uma fonte compartilhada pelo site e pelo material em PDF, com publicação estática."
      }
    ],
    "decisions": [
      "Aproximar conceitos de IA de situações que o visitante consegue explorar na interface.",
      "Compartilhar a base de conteúdo entre formatos para reduzir divergências.",
      "Usar exportação estática para simplificar a disponibilização do material acadêmico."
    ],
    "stage": "Site acadêmico publicado. Trabalho coletivo desenvolvido pela equipe FiveX no contexto da Unifeso.",
    "image": "/images/screens/fivex.jpg",
    "url": "https://fivex.solutions/",
    "imageCaption": "Site acadêmico publicado da equipe FiveX Solutions.",
    "imageAlt": "Tela do projeto FiveX Solutions"
  },
  {
    "slug": "zappop",
    "name": "ZapPop",
    "category": "Atendimento · Integrações",
    "description": "Implantação e customização de uma plataforma de atendimento baseada no Atendechat.",
    "role": "Implantação e customização",
    "status": "Versão local",
    "tone": "zappop",
    "tech": [
      "Node.js",
      "Express",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Redis",
      "Socket.io"
    ],
    "context": "O projeto ZapPop utiliza a base Atendechat para organizar atendimento, conversas e rotinas operacionais. Minha atuação está relacionada à implantação e customização dessa solução.",
    "contributions": [
      {
        "title": "Aplicação de atendimento",
        "text": "Trabalho com uma base que reúne tickets, conversas, campanhas, agendamentos e configuração de canais de atendimento."
      },
      {
        "title": "Comunicação em tempo real",
        "text": "Estrutura com backend Express/TypeScript, frontend React e Socket.io para atualização de eventos na interface."
      },
      {
        "title": "Dados e processamento",
        "text": "Persistência em PostgreSQL com Sequelize e processamento de tarefas com Redis e filas Bull, dentro da aplicação implantada."
      }
    ],
    "decisions": [
      "Evoluir uma base existente de atendimento para as necessidades do projeto.",
      "Distinguir eventos em tempo real de tarefas executadas em segundo plano.",
      "Organizar a implantação do backend, da interface e dos serviços necessários à operação."
    ],
    "stage": "Projeto baseado no Atendechat. A apresentação descreve o trabalho de implantação e customização, com crédito à base original.",
    "image": "/images/screens/local-zappop.jpg",
    "imageCaption": "Captura local do site de apresentação do ZapPop.",
    "imageAlt": "Tela do projeto ZapPop"
  },
  {
    "slug": "presto-pdf",
    "name": "Presto PDF",
    "category": "Ferramentas web · Documentos",
    "description": "Utilitários de PDF com processamento de arquivos no próprio navegador.",
    "role": "Desenvolvimento de aplicação web",
    "status": "Versão local",
    "tone": "presto",
    "tech": [
      "JavaScript",
      "pdf-lib",
      "PDF.js",
      "JSZip"
    ],
    "context": "O Presto PDF reúne operações frequentes sobre documentos em uma interface web. A implementação explorou processamento local para permitir o uso das ferramentas sem depender de um serviço de upload.",
    "contributions": [
      {
        "title": "Operações com documentos",
        "text": "Ferramentas para reunir e dividir PDFs, girar e extrair páginas, converter imagens e aplicar marcas d’água."
      },
      {
        "title": "Processamento no navegador",
        "text": "Uso de bibliotecas JavaScript para manipulação e leitura de PDFs e organização de arquivos para download."
      },
      {
        "title": "Interface de ferramenta",
        "text": "Fluxos de seleção de arquivos, configuração da operação e entrega do resultado, com layout adaptado a diferentes tamanhos de tela."
      }
    ],
    "decisions": [
      "Executar a manipulação dos arquivos no navegador para reduzir a dependência de infraestrutura.",
      "Separar cada operação em um fluxo específico.",
      "Usar bibliotecas especializadas para leitura, manipulação de PDFs e empacotamento."
    ],
    "stage": "Interface executada localmente a partir dos arquivos do projeto, com ferramentas de manipulação de PDFs no navegador.",
    "image": "/images/screens/local-prestopdf.jpg",
    "imageCaption": "Captura local da página de ferramentas do Presto PDF.",
    "imageAlt": "Tela do projeto Presto PDF"
  },
  {
    "slug": "devkit",
    "name": "Devkit",
    "category": "Ferramentas web · Desenvolvimento",
    "description": "Utilitários de texto e dados para tarefas recorrentes de desenvolvimento.",
    "role": "Desenvolvimento de aplicação web",
    "status": "Versão local",
    "tone": "devkit",
    "tech": [
      "JavaScript",
      "HTML",
      "CSS",
      "Processamento local"
    ],
    "context": "O Devkit reúne pequenas ferramentas para tarefas comuns de desenvolvimento, com execução no navegador e interface organizada por operação.",
    "contributions": [
      {
        "title": "Dados e formatos",
        "text": "Formatador de JSON, conversão entre CSV e JSON e prévia de Markdown."
      },
      {
        "title": "Codificação e inspeção",
        "text": "Utilitários de Base64, codificação de URLs e decodificação de JWT para inspeção do conteúdo. A decodificação não equivale à validação de uma assinatura."
      },
      {
        "title": "Datas e idioma",
        "text": "Conversor de timestamps Unix e estrutura de interface em três idiomas."
      }
    ],
    "decisions": [
      "Manter as operações locais ao navegador para simplificar o uso das ferramentas.",
      "Apresentar entrada e resultado no mesmo contexto de trabalho.",
      "Explicitar o alcance de cada ferramenta, especialmente em operações de inspeção de dados."
    ],
    "stage": "Interface executada localmente a partir dos arquivos do projeto, com utilitários de texto, formatos e dados.",
    "image": "/images/screens/local-devkit.jpg",
    "imageCaption": "Captura local das ferramentas do Devkit.",
    "imageAlt": "Tela do projeto Devkit"
  },
  {
    "slug": "lmm",
    "name": "LMM Capital",
    "category": "Mercados digitais · Aplicação web",
    "description": "Site institucional e interfaces de acompanhamento para um projeto de liquidez em mercados digitais.",
    "role": "Desenvolvimento de produto e interfaces",
    "status": "Captura local",
    "tone": "lmm",
    "tech": [
      "React",
      "TypeScript",
      "Recharts",
      "Tailwind CSS",
      "Vite"
    ],
    "image": "/images/screens/local-lmm.jpg",
    "imageAlt": "Página institucional da LMM Capital, com identidade escura e detalhes em roxo.",
    "imageCaption": "Página institucional executada localmente a partir dos arquivos do projeto.",
    "context": "A LMM Capital reúne uma apresentação institucional sobre liquidez em mercados digitais e um painel de acompanhamento. O projeto aproxima identidade de marca, visualização de informações e interfaces para uma operação técnica.",
    "contributions": [
      {
        "title": "Site institucional",
        "text": "Página de apresentação com áreas de serviços, tecnologia, mercados e contato, usando uma identidade visual escura e tipografia de destaque."
      },
      {
        "title": "Interface de acompanhamento",
        "text": "Frontend estruturado em React, com navegação por rotas e componentes para visualização de informações com Recharts."
      },
      {
        "title": "Organização da aplicação",
        "text": "Separação entre a apresentação pública e a interface de acompanhamento, permitindo tratar comunicação institucional e rotina de uso em contextos próprios."
      }
    ],
    "decisions": [
      "Distinguir a página pública das telas de acompanhamento do sistema.",
      "Usar gráficos e componentes reutilizáveis para apresentar informações na interface.",
      "Manter a identidade do produto consistente entre as áreas do projeto."
    ],
    "stage": "A imagem foi capturada da versão local. Os números presentes na apresentação institucional não são apresentados aqui como resultados financeiros ou métricas comprovadas."
  },
  {
    "slug": "lins-payments",
    "name": "Lins Payments",
    "category": "Fintech · Site de produto",
    "description": "Site de apresentação de um gateway de pagamentos, com métodos, integração, planos e contato.",
    "role": "Desenvolvimento do site e da experiência de produto",
    "status": "Site publicado",
    "tone": "payments",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion"
    ],
    "url": "https://linspayments.com/",
    "image": "/images/screens/lins-global.jpg",
    "imageAlt": "Página publicada da Lins Payments, em azul e roxo.",
    "imageCaption": "Captura da página pública em linspayments.com.",
    "context": "O site da Lins Payments apresenta a proposta de um gateway de pagamentos para empresas. O trabalho de interface organiza a explicação do produto, métodos de pagamento, integração, preços e canais de contato.",
    "contributions": [
      {
        "title": "Apresentação do produto",
        "text": "Desenvolvimento de uma landing page com destaque para a proposta do serviço e uma representação visual de painel de transações."
      },
      {
        "title": "Navegação e componentes",
        "text": "Organização das seções de métodos, vantagens, integração e perguntas frequentes com componentes React e elementos de interface reutilizáveis."
      },
      {
        "title": "Experiência responsiva",
        "text": "Construção em Next.js e TypeScript, com adaptação da navegação e das seções para diferentes tamanhos de tela."
      }
    ],
    "decisions": [
      "Apresentar o funcionamento e a proposta do produto em uma sequência de leitura clara.",
      "Usar componentes reutilizáveis para manter consistência visual.",
      "Dar acesso aos pontos de contato e à entrada do produto a partir da página de apresentação."
    ],
    "stage": "Site público de apresentação do produto. A captura mostra a interface publicada; números ilustrativos da página não são métricas de resultado deste portfólio."
  },
  {
    "slug": "lins-up-now",
    "name": "Lins UP Now",
    "category": "Lins Payments .com.br · Dados e automação",
    "description": "Página pública e painel de acompanhamento de sinais, ordens e resultados de operações simuladas.",
    "role": "Desenvolvimento de sistema e interface de acompanhamento",
    "status": "Site publicado · Simulação",
    "tone": "linsup",
    "tech": [
      "Python",
      "Next.js",
      "React",
      "TypeScript",
      "SQLite"
    ],
    "url": "https://linspayments.com.br/",
    "image": "/images/screens/lins-br.jpg",
    "imageAlt": "Lins UP Now publicado em linspayments.com.br, com indicação de operações simuladas.",
    "imageCaption": "Captura de linspayments.com.br, que atualmente apresenta o Lins UP Now. Os valores exibidos são de simulação.",
    "context": "O endereço linspayments.com.br atualmente apresenta o Lins UP Now. O projeto combina uma explicação do sistema quantitativo com uma interface para acompanhar sinais de mercado e a execução de ordens em simulação.",
    "contributions": [
      {
        "title": "Página pública",
        "text": "Apresentação do projeto, de seu funcionamento e da etapa de simulação supervisionada, com acesso ao painel na própria página."
      },
      {
        "title": "Painel de acompanhamento",
        "text": "Interface com indicadores de serviço, sinais, ordens simuladas, preenchimentos e visualização da evolução dos resultados do simulador."
      },
      {
        "title": "Integração de dados",
        "text": "Organização da apresentação de eventos e informações do sistema em componentes de interface, permitindo acompanhar o fluxo de simulação."
      }
    ],
    "decisions": [
      "Identificar claramente a simulação na interface.",
      "Reunir visão geral e eventos detalhados para facilitar a leitura do funcionamento do sistema.",
      "Separar os resultados de simulação de qualquer afirmação sobre desempenho financeiro real."
    ],
    "stage": "Página publicada em linspayments.com.br. O projeto é apresentado em modo de simulação, sem tratar seus valores como retorno de operações reais."
  }
];

export const websites: Website[] = [
  {
    "slug": "cgm",
    "name": "CGM Marcenaria",
    "kind": "Portfólio de serviços",
    "text": "Site institucional com serviços para ambientes comerciais, portfólio e contato.",
    "tech": "Next.js · React",
    "url": "https://www.cgmmarcenaria.com.br/",
    "screen": "cgm",
    "image": "/images/screens/cgm.jpg",
    "caption": "Captura do site publicado"
  },
  {
    "slug": "viamanzoni",
    "name": "Via Manzoni",
    "kind": "Moda e coleções",
    "text": "Site para aluguel de roupas de luxo, com coleções e canais de atendimento.",
    "tech": "Next.js · Tailwind CSS",
    "screen": "local-viamanzoni",
    "image": "/images/screens/local-viamanzoni.jpg",
    "caption": "Captura da versão local"
  },
  {
    "slug": "arlene",
    "name": "Arlene Zerbini",
    "kind": "Site profissional",
    "text": "Apresentação da atuação em psicanálise e do atendimento on-line.",
    "tech": "Next.js · React",
    "url": "https://psicanalista.arlenezerbini.com/",
    "screen": "arlene",
    "image": "/images/screens/arlene.jpg",
    "caption": "Captura do site publicado"
  },
  {
    "slug": "vitoria",
    "name": "Dra. Vitória Féo",
    "kind": "Site profissional",
    "text": "Apresentação profissional, especialidades e informações de atendimento.",
    "tech": "Next.js · Tailwind CSS",
    "screen": "local-vitoria",
    "image": "/images/screens/local-vitoria.jpg",
    "caption": "Captura da versão local"
  },
  {
    "slug": "sitefacil",
    "name": "Site Fácil",
    "kind": "Serviços digitais",
    "text": "Site de serviços digitais com portfólio, etapas de atendimento e contato.",
    "tech": "Next.js · React",
    "url": "https://sitefacil.pro/",
    "screen": "sitefacil",
    "image": "/images/screens/sitefacil.jpg",
    "caption": "Captura do site publicado"
  },
  {
    "slug": "caio",
    "name": "Caio Andaluz",
    "kind": "Advocacia",
    "text": "Site institucional com apresentação profissional e áreas de atuação.",
    "tech": "HTML · CSS",
    "url": "https://caioandaluzadvogado.com.br/",
    "screen": "caio",
    "image": "/images/screens/caio.jpg",
    "caption": "Captura do site publicado"
  },
  {
    "slug": "autistasocial",
    "name": "Autista Social",
    "kind": "Landing page",
    "text": "Página de apresentação de uma proposta de comunidade e avaliações.",
    "tech": "Next.js · React",
    "url": "https://autistasocial.com.br/",
    "screen": "autistasocial",
    "image": "/images/screens/autistasocial.jpg",
    "caption": "Captura do site publicado"
  }
];

export const experiments = [
  {
    "name": "Datera",
    "text": "Ferramentas para datas e contagem de dias.",
    "image": "/images/screens/local-datera.jpg"
  },
  {
    "name": "TikTak",
    "text": "Relógios e consulta de fusos horários.",
    "image": "/images/screens/local-tiktak.jpg"
  },
  {
    "name": "Qriar",
    "text": "Geração de QR codes e encurtamento de links.",
    "image": "/images/screens/local-qriar.jpg"
  },
  {
    "name": "Sortea",
    "text": "Ferramentas de sorteio e seleção aleatória.",
    "image": "/images/screens/local-sortea.jpg"
  },
  {
    "name": "Somma",
    "text": "Coleção de calculadoras para o navegador.",
    "image": "/images/screens/local-somma.jpg"
  },
  {
    "name": "Currículo",
    "text": "Construtor de currículos com exportação.",
    "image": "/images/screens/local-cv.jpg"
  },
  {
    "name": "Vrum",
    "text": "Consultas e estimativas relacionadas a veículos.",
    "image": "/images/screens/local-vrum.jpg"
  },
  {
    "name": "Plink",
    "text": "Conversão de moedas e criptoativos.",
    "image": "/images/screens/local-plink.jpg"
  },
  {
    "name": "Lotta",
    "text": "Consulta e comparação de informações de loterias.",
    "image": "/images/screens/local-lotta.jpg"
  }
];
