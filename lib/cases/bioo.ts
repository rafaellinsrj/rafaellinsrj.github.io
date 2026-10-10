import type {CaseStudy} from "@/lib/case-types";

export const bioo: CaseStudy = {
  slug: "bioo",
  name: "Bioo",
  group: "plataformas",
  category: "Plataforma para criadores · Node.js, PostgreSQL e Next.js",
  summary:
    "Plataforma de página única para criadores e pequenos negócios que reúne links, loja, agenda, cursos, gorjetas, contatos e automações, com pagamentos a criadores, comissão por plano e isolamento de dados no banco.",
  role: "Produto próprio: direção de produto, arquitetura e desenvolvimento com agentes de IA",
  period: "Setembro a outubro de 2026",
  stage: "Em desenvolvimento",
  stageNote:
    "Versão 0.11 funcionando apenas em ambiente local. O Bioo não tem servidor de produção. Em 08/10/2026 foram concluídas localmente as etapas 1 a 12 do plano vigente e a versão do criador foi entregue para minha avaliação, ainda sem aceite. Pagamentos (Stripe), e-mail transacional (Resend), verificação de identidade (Didit), login Google e Apple, redes sociais e anúncios estão desligados ou usam respostas simuladas; nenhuma integração foi homologada com o provedor real. Painel interno da equipe, infraestrutura e lançamento são as próximas etapas.",
  platforms: ["Web responsiva (desktop e celular)", "Página pública do criador", "Painel do criador"],
  cover: {
    src: "/images/cases/bioo/home.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do Bioo com o título Um link para tudo o que você faz, campo para escolher o endereço da página e a demonstração de um perfil ilustrativo em moldura de celular.",
    caption: "Versão local 0.11 (front em Next.js), outubro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/bioo/planos.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de planos do Bioo com os cartões Gratuito, Pro e Premium, limites de páginas, armazenamento, DMs e mensagens e a comissão sobre vendas de cada plano.",
      caption: "Versão local 0.11, outubro de 2026",
    },
    {
      src: "/images/screens/local-bioo.jpg",
      width: 1440,
      height: 1000,
      alt: "Página inicial da versão anterior do Bioo, com outra identidade visual, seletor de três idiomas e um perfil de exemplo em moldura de celular.",
      caption: "Versão anterior, execução local",
    },
  ],

  history: {
    audience:
      "Criadores de conteúdo, profissionais autônomos e pequenos negócios que precisam de uma página pública com links e também de ferramentas comerciais: vender produtos digitais, agendar serviços, receber gorjetas, captar contatos e responder seguidores.",
    problem:
      "A base anterior (0.5) era um editor de página com backend em Cloudflare Pages e D1/SQLite. O diagnóstico de 02/10/2026 apontou credencial de edição guardada no navegador sem expiração, moderação protegida por uma chave administrativa compartilhada sem MFA e autorização feita só na aplicação, sem isolamento no banco. Para virar uma plataforma com dinheiro de terceiros, dados de contatos e equipes, o produto precisava de outra fundação.",
    constraints:
      "Escopo sem IA por decisão de produto, confirmação de conta apenas por e-mail, moeda única em dólar, nenhum serviço externo ligado antes da etapa final e validação somente com dados sintéticos. Migrações de banco imutáveis, com backup cifrado antes de qualquer mudança.",
    milestones: [
      {when: "Até 24/09/2026", what: "Base 0.5: editor de página em Cloudflare Pages com D1/SQLite."},
      {when: "02/10/2026", what: "Diagnóstico do backend e modelo de ameaças com a proposta de migração para Node.js e PostgreSQL com RLS."},
      {when: "05/10/2026", what: "Versões 0.6 a 0.10: backend PostgreSQL validado localmente, nova identidade, fluxo de acesso, redes sociais e editor com imagens e planos."},
      {when: "06/10/2026", what: "Primeiro commit da 0.11 em repositório privado; fases de base comum, assinatura, vendas e automações concluídas localmente."},
      {when: "07/10/2026", what: "Front refeito em Next.js 16, regras de dinheiro, agenda e cursos, indicações, selo de verificação, retenção de dados, dez idiomas e consentimento de cookies."},
      {when: "08/10/2026", what: "Plano de 24 etapas: etapas 1 a 12 concluídas localmente e versão do criador entregue para avaliação."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o produto, a matriz comercial (Gratuito, Pro a US$ 1,99 e Premium a US$ 4,99 por mês) e as regras de dinheiro: comissão de 10%, 5% e 2% por plano mais as taxas do provedor, reembolso parcial, contestação e troca de plano com prorrateio.",
      "Aprovei a migração da base Cloudflare D1 para Node.js e PostgreSQL com RLS a partir do modelo de ameaças, e decidi refazer todo o front em Next.js.",
      "Registrei as decisões de produto (indicações, selo de verificação, retenção de dados, idiomas, agenda e cursos) e mantive um único documento de pendências como fonte de verdade para o projeto.",
      "Estabeleci a regra de não ligar serviços reais antes da etapa de homologação e de separar implementado, validado localmente e homologado.",
    ],
    direct: [
      "Conduzi a construção do servidor Node 24 (API, webhooks, mídia, filas e workers), das 64 migrações PostgreSQL e do front Next.js 16 com next-intl.",
      "Revisei e validei as entregas de cada fase por meio das baterias de testes e das avaliações das telas em desktop e celular.",
    ],
    team: [],
    ai: [
      "O código foi produzido com agentes de IA sob minha direção: os commits do repositório registram coautoria do Claude, e a documentação de testes e o registro de pendências mostram uso também do Codex.",
      "Os agentes seguem regras escritas no próprio projeto: backup antes de mudanças, migrações imutáveis, atualização do documento único de pendências e evidência de teste para marcar uma etapa como concluída.",
      "Eu defino escopo, decisões e critérios de aceite; a conclusão de uma etapa depende de evidência registrada e o aceite final é meu.",
    ],
  },

  architecture: {
    intro:
      "O navegador fala com um servidor Node 24 que concentra API, webhooks, mídia e cabeçalhos de segurança, e repassa as páginas ao front em Next.js. Os dados ficam em PostgreSQL 18 privado, acessado por papéis sem permissão de contornar RLS, com conteúdo privado cifrado. Workers separados tratam e-mail, listas, campanhas, redes sociais e conciliação de cobrança. Provedores externos entram por adaptadores que hoje estão desligados ou simulados.",
    diagram: {
      title: "Arquitetura do Bioo 0.11 (ambiente local)",
      tiers: [
        {label: "Navegador", nodes: ["Site e página do criador", "Painel do criador"]},
        {label: "Front", nodes: ["Next.js 16 + next-intl", "CSP com nonce"]},
        {label: "Servidor", nodes: ["Node 24: API e webhooks", "Workers e filas"]},
        {label: "Dados", nodes: ["PostgreSQL 18 com RLS", "Arquivos cifrados"]},
        {label: "Provedores (desligados)", nodes: ["Stripe Connect", "Resend", "Didit", "Redes sociais"]},
      ],
      links: [
        "O navegador acessa o servidor Node, que repassa as páginas ao Next.js.",
        "As telas chamam a API do Node, que aplica sessão, CSRF e limites.",
        "Cada transação define o contexto do usuário e o PostgreSQL filtra as linhas por RLS.",
        "Workers executam as operações com provedores a partir de filas persistidas, hoje com respostas simuladas.",
      ],
    },
    layers: [
      {
        name: "Front",
        content:
          "Next.js 16, React 19, TypeScript e Tailwind 4, com Radix UI, React Hook Form, Zod, TanStack Query, dnd-kit para ordenar blocos e Motion para animações com movimento reduzido. Telas do site público, conta, editor, página do criador, telas do visitante e painel. Uma camada de proxy gera um nonce por requisição para a CSP e trata idioma e o endereço público do criador.",
      },
      {
        name: "Idiomas",
        content:
          "Dez idiomas (pt, en, es, fr, de, it, ja, ko, id, tr) com um arquivo por idioma para telas, frases do painel, 49 artigos de ajuda, matriz de planos e e-mails. Detecção na primeira visita, seletor com nomes nativos e idioma salvo na conta. Um verificador confere chaves, marcadores e listas em todos os catálogos.",
      },
      {
        name: "Servidor",
        content:
          "Node 24 com módulos por domínio (autenticação, catálogo, comércio, comissão, agenda, acesso a cursos, indicações, verificação, mensagens, campanhas, redes, consentimento). Sessões opacas em cookie HttpOnly, MFA por TOTP obrigatório para administradores com sessão mais curta, conferência de host, limites de requisição, CSRF e cabeçalhos de segurança. Dependências diretas mínimas: pg, argon2, jose, otpauth e sharp.",
      },
      {
        name: "Dados",
        content:
          "PostgreSQL 18 compilado a partir do código oficial, acessível só por socket local. 64 migrações; RLS habilitada e forçada nas tabelas de proprietário, com mais de 60 políticas, e papéis de aplicação criados sem BYPASSRLS. O contexto do usuário é definido dentro de cada transação para não vazar entre conexões do pool. Conteúdo privado cifrado com AES-256-GCM e hash Argon2id na autenticação.",
      },
      {
        name: "Pagamentos",
        content:
          "Modelo de cobrança de destino da Stripe Connect: a venda é repassada à conta do criador e a comissão do plano mais a taxa estimada do provedor seguem como taxa da plataforma. O webhook confere assinatura, valor, moeda, destino e taxa antes de marcar o pedido como pago. Assinaturas com teste de 30 dias, troca de plano com prorrateio e conciliação de eventos fora de ordem. Tudo desligado até a homologação.",
      },
      {
        name: "Operação e privacidade",
        content:
          "Workers de e-mail, listas, campanhas e redes sociais, conciliação de cobrança, limpeza com prazos de retenção definidos, backup cifrado com restauração testada, interruptores de emergência por provedor e por espaço e verificação de prontidão. Consentimento de cookies que bloqueia medição e marketing até a escolha do visitante.",
      },
    ],
  },

  decisions: [
    {
      title: "Isolamento de dados no banco, não só na aplicação",
      problem:
        "Na base anterior, a autorização existia apenas no código da aplicação. Em uma plataforma com equipes, contatos e vendas de terceiros, um erro de consulta pode expor dados de outro espaço.",
      decision:
        "Migrar para PostgreSQL com RLS habilitada e forçada nas tabelas de proprietário, papéis de aplicação sem BYPASSRLS e contexto do usuário definido por transação, além da autorização na aplicação.",
      reason:
        "Duas camadas independentes reduzem o impacto de falhas de consulta, e o PostgreSQL oferece esse controle nativamente, o que o D1/SQLite não oferecia.",
      tradeoff:
        "Mais complexidade em migrações e testes, que precisam cobrir operações sem contexto e tentativas entre proprietários. RLS não protege contra comprometimento total do servidor.",
    },
    {
      title: "Operações com provedores tratadas como incertas",
      problem:
        "Em cobranças, reembolsos e publicações, a resposta do provedor pode se perder depois que a operação já aconteceu. Repetir às cegas pode cobrar ou publicar duas vezes.",
      decision:
        "Persistir a intenção cifrada e a chave de idempotência antes de chamar o provedor, controlar execução por lease com expiração e marcar como desconhecido o resultado sem confirmação, exigindo conferência antes de novo envio.",
      reason:
        "Separar erro definitivo, erro recuperável e resultado desconhecido evita efeitos duplicados em dinheiro e em contas de redes sociais.",
      tradeoff:
        "Mais estados para a interface e para a operação; algumas situações dependem de conferência manual, prevista no painel interno.",
    },
    {
      title: "Comissão cobrada na própria transação de pagamento",
      problem:
        "A comissão varia por plano (10%, 5% e 2%) e precisa ser coerente com o valor efetivamente repassado ao criador.",
      decision:
        "Calcular a comissão pelo plano efetivo na criação do pedido, enviá-la como taxa da plataforma na cobrança de destino e registrar um livro de comissões por pedido; o webhook recusa pagamentos cuja taxa difere da esperada.",
      reason:
        "O repasse e a receita da plataforma saem da mesma transação, o que simplifica conciliação, reembolsos parciais e contestações.",
      tradeoff:
        "A taxa do provedor é uma estimativa configurável repassada ao criador; essa escolha ainda está em definição.",
    },
    {
      title: "CSP estrita com nonce e terceiros só após consentimento",
      problem:
        "Páginas de criadores podem usar pixels de medição e players incorporados, o que normalmente leva a políticas de segurança permissivas.",
      decision:
        "CSP com nonce por requisição e strict-dynamic no front; o site do Bioo não carrega terceiros, e Google Analytics, Meta Pixel e players de vídeo e música só entram em páginas que os usam e depois da permissão do visitante. A verificação de identidade usa página hospedada pelo provedor, sem embutir scripts.",
      reason:
        "Mantém a superfície de XSS pequena e faz a escolha de cookies corresponder ao que de fato é carregado.",
      tradeoff:
        "Cada integração nova exige ajuste explícito da política e teste de navegador; algumas experiências incorporadas exigem um clique a mais.",
    },
    {
      title: "Serviços reais só depois da validação local completa",
      problem:
        "Ligar pagamentos, e-mail e redes durante o desenvolvimento mistura falhas de produto com falhas de configuração e gera custo e risco antes da hora.",
      decision:
        "Implementar adaptadores com transporte simulado, validar localmente todas as jornadas e homologar cada provedor em etapa própria antes de liberar o recurso.",
      reason:
        "Permite testar regras de negócio, falhas e repetições de forma determinística e deixa claro o que está implementado, validado e homologado.",
      tradeoff:
        "A validação local não substitui a prova com o provedor real; o lançamento depende de infraestrutura, contas e revisões ainda pendentes.",
    },
  ],

  journey: {
    title: "Venda de um produto digital (dados sintéticos, provedor simulado)",
    steps: [
      "Um criador no plano Pro publica um guia em PDF por US$ 20,00.",
      "O visitante informa um e-mail de teste e o servidor registra a intenção de checkout com chave de idempotência.",
      "A cobrança de destino é criada com repasse à conta do criador e taxa da plataforma de 5% mais a taxa estimada do provedor.",
      "O webhook simulado confirma o pagamento; o servidor confere assinatura, valor, moeda, destino e taxa antes de marcar o pedido como pago.",
      "O comprador recebe o link de entrega protegido e o painel do criador mostra bruto, comissão, taxas e líquido.",
    ],
  },

  dataModel: [
    {entity: "Espaço de trabalho", fields: "id, proprietário, plano, validade do plano, teste usado, estado da cobrança"},
    {entity: "Item", fields: "id, espaço, página, tipo (produto, pedido, agendamento...), conteúdo cifrado, status, versão"},
    {entity: "Operação com provedor", fields: "id, espaço, pedido, tipo (checkout ou reembolso), status (preparada, em execução, desconhecida, concluída...), requisição cifrada"},
    {entity: "Comissão", fields: "pedido, espaço, plano, taxa em pontos-base, moeda, bruto, comissão, taxas do provedor"},
  ],

  results: [
    "08/10/2026, ambiente local: 339 testes automatizados (unidade e PostgreSQL real em bancos descartáveis) e 101 verificações HTTP aprovados.",
    "08/10/2026, ambiente local: 1.058 verificações em baterias de navegador (site e painel, consentimento, agenda, financeiro, indicações, publicação, recuperação, acesso federado e segurança), sem erros de JavaScript ou violações de CSP nas jornadas verificadas.",
    "08/10/2026, ambiente local: auditoria de layout e acessibilidade com 217 verificações em dez idiomas e cinco larguras de tela. É uma verificação automatizada, não certificação de acessibilidade.",
    "Esses números são validação local com provedores simulados; não representam uso real, homologação externa nem aceite do produto.",
  ],
  limits: [
    "Sem servidor de produção, domínio configurado, TLS público, backup externo nem monitoramento.",
    "Nenhuma integração homologada: Stripe, Resend, Didit, Google e Apple, redes sociais e listas de e-mail usam respostas simuladas.",
    "Painel interno da equipe (papéis, auditoria, operação, moderação, atendimento, financeiro e privacidade) projetado e ainda não construído.",
    "Apple Wallet e Google Wallet não implementados; dependem de certificados de emissor.",
    "Textos legais e traduções aguardam revisão jurídica e linguística humana.",
    "Algumas baterias de navegador tiveram timeouts isolados que passaram na repetição, sem causa comprovada.",
    "Metas de desempenho (LCP até 2,5 s, INP até 200 ms, CLS até 0,1) ainda precisam ser confirmadas em campo.",
  ],

  links: [],

};
