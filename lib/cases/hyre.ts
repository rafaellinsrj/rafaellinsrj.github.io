import type {CaseStudy} from "@/lib/case-types";

export const hyre: CaseStudy = {
  slug: "hyre",
  name: "Hyre",
  group: "plataformas",
  category: "SaaS de IA multi-tenant · Python e Next.js",
  summary:
    "Plataforma de IA para empresários: a primeira versão, publicada em hyre.global, oferece agentes especializados que atendem e vendem pelo WhatsApp; a segunda versão, em desenvolvimento, reorganiza o produto em chat multimodelo com crédito pré-pago, cofre de credenciais e tarefas supervisionadas.",
  role: "Fundador e CEO · estratégia, produto e direção técnica do desenvolvimento",
  organization: "Hyre, parte do Lins Capital Group",
  period: "ago/2025 – atual",
  stage: "Em desenvolvimento",
  stageNote:
    "O site hyre.global está no ar (outubro de 2026) com a versão 1: páginas públicas, cadastro e acesso ao painel do cliente com os agentes de WhatsApp. A versão 2 existe como checkpoint local de 02/10/2026, com testes offline aprovados, mas sem migrations aplicadas, sem build web validado, sem homologação e sem implantação; nenhuma conexão externa está habilitada ao público. Os números exibidos no site (empresas, mensagens, satisfação, depoimentos) são conteúdo de marketing e não foram verificados.",
  platforms: ["Web (site público)", "Painel do cliente", "Painel administrativo", "WhatsApp (v1)", "Aplicativo móvel (esqueleto)"],
  cover: {
    src: "/images/cases/hyre/agentes.jpg",
    width: 1440,
    height: 1000,
    alt: "Página pública da Hyre que apresenta a equipe de agentes de IA por área: comercial, financeiro, documentos, suporte, agenda, pós-venda e gestão.",
    caption: "Site publicado, página de agentes, outubro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/hyre/agentes.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de agentes com filtros por área e os cartões dos agentes comerciais Ed, Zoe e Dudu.",
      caption: "Site publicado, catálogo de agentes da versão 1, outubro de 2026",
    },
    {
      src: "/images/cases/hyre/integracoes.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de integrações da Hyre com chamada para conectar WhatsApp, CRMs e gateways de pagamento.",
      caption: "Site publicado, página de integrações, outubro de 2026",
    },
    {
      src: "/images/cases/hyre/precos.jpg",
      width: 1440,
      height: 1000,
      alt: "Tabela de planos mensais da versão 1, de Starter a Enterprise, com a quantidade de agentes e canais de cada plano.",
      caption: "Site publicado, planos da versão 1, outubro de 2026",
    },
    {
      src: "/images/screens/hyre.jpg",
      width: 1440,
      height: 1000,
      alt: "Página inicial da Hyre com o título Funcionários de IA para sua Empresa e botões de cadastro.",
      caption: "Site publicado, página inicial, outubro de 2026. Os indicadores da tela são conteúdo de marketing, não resultados verificados",
    },
  ],

  history: {
    audience:
      "Empresários e pequenas e médias empresas que atendem clientes pelo WhatsApp e querem automatizar atendimento, vendas, cobrança e rotinas administrativas sem montar uma equipe de tecnologia.",
    problem:
      "Atendimento comercial, cobrança e pós-venda dependiam de pessoas respondendo manualmente, fora do horário e sem histórico unificado. A primeira versão resolveu isso com agentes especializados por função. Em setembro de 2026, a auditoria do código mostrou que cerca de metade do backend existia só para esses agentes e que faltavam peças centrais para um modelo de crédito pré-pago, o que levou à decisão de reorganizar o produto.",
    constraints:
      "Equipe enxuta, com desenvolvimento apoiado por agentes de IA. Credenciais de clientes e de provedores precisam ficar fora do alcance dos modelos. Cobrança em dinheiro real exige consistência contábil antes de qualquer abertura pública.",
    milestones: [
      {when: "mar/2026", what: "Início do repositório com o nome LinsOS: backend FastAPI, painéis owner e tenant em Next.js e primeiros agentes de WhatsApp (570 commits no mês)."},
      {when: "ago/2026", what: "Mudança de marca de LinsOS para Hyre e publicação do site hyre.global com cadastro, planos e catálogo de agentes."},
      {when: "20/09/2026", what: "Auditoria de código e segurança sobre o snapshot da versão 1 e decisão de reorganizar o produto como chat multimodelo com crédito em dólar."},
      {when: "29/09 a 02/10/2026", what: "Versão 2 em desenvolvimento local: ledger de crédito, cofre de credenciais, tarefas supervisionadas e conectores com aprovação; 473 testes Python offline, 52 web e 20 mobile aprovados no último checkpoint."},
      {when: "01/10/2026", what: "Definição da referência de marca HYRE e Hyre Labs para a nova versão, ainda sem alteração de domínio ou DNS."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o posicionamento do produto e a decisão de sair dos agentes de WhatsApp para um chat multimodelo com crédito pré-pago e conexões governadas.",
      "Fechei as regras de negócio da versão 2: crédito somente em dólar via Stripe, planos Free, Pro e Max, provedores pagos suportados e margem fixa calculada em centavos inteiros.",
      "Estabeleci os critérios de liberação: nenhum recurso vai a produção sem migrations ensaiadas, build, testes integrados, homologação e autorização explícita.",
      "Priorizei o cronograma em 15 etapas e 70 tarefas e a ordem de execução dos blocos de segurança, cobrança e conexões.",
    ],
    direct: [
      "Dirigi a arquitetura do backend em FastAPI com SQLAlchemy assíncrono, PostgreSQL e Redis, e dos painéis owner e tenant em Next.js.",
      "Validei a integração com o WhatsApp via Evolution API na versão 1, com uma instância por agente e por cliente.",
      "Revisei e aprovei as políticas de isolamento por tenant (RLS no PostgreSQL), cifragem de credenciais e idempotência de webhooks.",
      "Fiz commits próprios de ajustes de marca e build na mudança de LinsOS para Hyre (27 commits com meu nome no histórico da versão 1).",
    ],
    team: [
      "Equipe de desenvolvimento sob minha coordenação, com nomes preservados.",
      "Parceiro de tecnologia responsável por grande parte da implementação da versão 1, seguindo a direção de produto e arquitetura que eu defini.",
    ],
    ai: [
      "O desenvolvimento usa agentes de IA de codificação; eu defino o escopo, reviso as entregas e decido o que avança.",
      "A auditoria de setembro de 2026, os planos por fase e as rodadas da versão 2 foram executados com agentes de IA; eu defini o escopo de cada rodada, revisei os relatórios de verificação e decidi o que avançava.",
      "Cada rodada da versão 2 registra explicitamente o que foi testado e o que não foi executado (banco real, build, provedores), para não confundir código escrito com funcionalidade homologada.",
    ],
  },

  architecture: {
    intro:
      "A Hyre é um monorepo com API Python, aplicação web Next.js e aplicativo Expo, implantado com Docker Compose. A versão 1, que está no ar, recebe mensagens do WhatsApp pela Evolution API e as processa no motor de agentes. A versão 2 mantém a mesma base técnica e substitui o motor de agentes por um chat com roteamento entre modelos, ledger de crédito, cofre de credenciais e um executor de tarefas separado da API.",
    diagram: {
      title: "Arquitetura da Hyre (base comum das versões 1 e 2)",
      tiers: [
        {label: "Clientes", nodes: ["Site e painel Next.js", "App Expo (esqueleto)", "WhatsApp (v1)"]},
        {label: "Entrada", nodes: ["Nginx", "Evolution API (v1)", "Webhooks Stripe"]},
        {label: "API", nodes: ["FastAPI assíncrono", "Chat com streaming (v2)", "Motor de agentes (v1)"]},
        {label: "Processamento", nodes: ["Rotinas em background", "Executor de tarefas (v2)"]},
        {label: "Dados", nodes: ["PostgreSQL 16 com RLS", "Redis 7", "Cofre cifrado (v2)"]},
        {label: "Provedores de IA", nodes: ["OpenAI · Anthropic", "Google · xAI · Groq"]},
      ],
      links: [
        "O site e o painel chamam a API por HTTPS através do Nginx.",
        "Na versão 1, mensagens do WhatsApp chegam pela Evolution API e passam pelo motor de agentes.",
        "Webhooks do Stripe são autenticados e registrados uma única vez antes de alterar saldo.",
        "A API grava no PostgreSQL com o tenant fixado na transação e usa o Redis para revogação de tokens e limites.",
        "O executor de tarefas da versão 2 lê a fila no PostgreSQL e só recebe credenciais por transporte privado.",
        "As chamadas aos provedores de IA saem da API por adaptadores com timeout e repetição limitada.",
      ],
    },
    layers: [
      {
        name: "Frontend",
        content:
          "Next.js 16 com React 19, TypeScript, TanStack Query, Axios e next-intl, com painéis separados para o operador da plataforma (owner) e para o cliente (tenant). Na versão 2, a renovação de sessão compara sessão, usuário, empresa e versão de autenticação antes de reaproveitar uma resposta, e o chat consome eventos SSE (meta, delta, escalate, usage, done). Aplicativo Expo com token em SecureStore, ainda em esqueleto.",
      },
      {
        name: "API",
        content:
          "FastAPI com SQLAlchemy 2 assíncrono e asyncpg, migrations Alembic, autenticação JWT com PyJWT (identificador por token e revogação no Redis), hash bcrypt na autenticação, limitação de taxa com slowapi, middleware de auditoria e Sentry. Na versão 1, o motor de agentes aplica limites do plano, horário de atendimento, temas bloqueados, detecção de irritação com transferência para humano e uma hierarquia de prioridade entre agentes para o mesmo contato.",
      },
      {
        name: "Isolamento por cliente",
        content:
          "Row Level Security no PostgreSQL com o cliente (tenant) fixado no contexto de cada transação, para não vazar contexto entre requisições que reutilizam a conexão do pool. Na versão 1 a proteção era incremental (a sessão nascia com bypass ligado e só os endpoints de tenant o desligavam). Na versão 2 o bypass nasce desligado em toda transação, as tabelas novas usam FORCE ROW LEVEL SECURITY e a travessia entre tenants exige chamada explícita após autorizar o operador.",
      },
      {
        name: "Credenciais",
        content:
          "Versão 1: chaves de provedores, WhatsApp e pagamentos cifradas em repouso com Fernet na fronteira do ORM, com chave mestra separada do banco. Versão 2: cofre com AES-GCM, chaves versionadas por identificador e dados associados que amarram cada segredo a tenant, usuário, registro e versão; sem fallback para texto puro. Um filtro de redação remove credenciais conhecidas e padrões comuns de chaves de entradas, saídas de modelo e logs.",
      },
      {
        name: "Processamento assíncrono",
        content:
          "Na versão 1, as rotinas periódicas (atualização de CRM, follow-up, alertas e mensagens agendadas) rodam como tarefas assíncronas dentro do processo da API, e a memória do contato é atualizada em background. Na versão 2, tarefas longas vão para uma fila no PostgreSQL consumida por um executor separado com SELECT FOR UPDATE SKIP LOCKED, uma tarefa por vez por usuário, cotas por hora e por dia e sem nova tentativa automática após o despacho.",
      },
      {
        name: "Modelos de IA",
        content:
          "Versão 1: modelo configurável por agente e por tarefa, com cadeia de fallback e provedores OpenAI, Anthropic, Google e Groq, transcrição de áudio e repetição com backoff exponencial para 429 e 5xx. Versão 2: cliente de streaming próprio, sem SDK, com três dialetos (compatível com OpenAI, Anthropic e Google) cobrindo OpenAI, xAI, Anthropic, Gemini e modelos próprios hospedados em endpoint compatível; roteamento híbrido decide o modelo antes da resposta quando a confiança é alta e reavalia depois quando é média.",
      },
      {
        name: "Cobrança",
        content:
          "Stripe com verificação de assinatura dos webhooks e idempotência por INSERT com chave única. Na versão 2, crédito pré-pago em centavos inteiros, ledger append-only protegido por trigger, conferência do saldo a cada lançamento, reserva do pior caso antes de chamar o provedor e liquidação pelo preço cotado na reserva. Pagamentos não foram executados em sandbox.",
      },
      {
        name: "Infraestrutura e qualidade",
        content:
          "Docker Compose com PostgreSQL 16, Redis 7 com persistência, API e web publicadas apenas no loopback atrás do Nginx; Evolution API em compose próprio na versão 1. CI em GitHub Actions com testes offline Python, testes Node de web e mobile, upgrade completo de migrations em banco vazio, testes de RLS e triggers com papel sem superusuário, lint, build e auditoria de dependências. Os passos que dependem de banco e build ainda não foram executados no checkpoint da versão 2.",
      },
    ],
  },

  decisions: [
    {
      title: "Reorganizar o produto e retirar o motor de agentes do núcleo",
      problem:
        "A auditoria de setembro de 2026 mostrou que cerca de 21 mil linhas, aproximadamente metade do backend, existiam só para os agentes de WhatsApp, com dependências (Evolution API, MongoDB, assinatura digital, dados financeiros) que ampliavam a superfície de ataque, e que o modelo de crédito pré-pago desejado não tinha tabela, trava de concorrência nem histórico.",
      decision:
        "Definir a versão 2 como chat multimodelo com crédito em dólar e conexões governadas, remover o código exclusivo dos agentes e arquivar as tabelas de mensagens em modo somente leitura, sem apagá-las.",
      reason:
        "Concentrar o esforço nas peças que sustentam um SaaS cobrado por uso (isolamento, ledger, credenciais) e reduzir dependências sem função no produto novo. As mensagens antigas são histórico de consumo e não podem ser perdidas.",
      tradeoff:
        "A versão 1 continua no ar enquanto a 2 não é homologada, o que mantém duas linhas de produto e adia receitas da nova versão. Parte do que foi construído para os agentes deixa de ser usado.",
      learning:
        "Medir quanto do código serve à proposta atual antes de acrescentar recursos evita endurecer a segurança de módulos que serão descartados.",
    },
    {
      title: "RLS no PostgreSQL, primeiro incremental e depois por padrão",
      problem:
        "A versão 1 dependia de centenas de filtros manuais por tenant nas consultas; um filtro esquecido poderia expor dados de outro cliente.",
      decision:
        "Adotar Row Level Security com o tenant fixado por transação. Na versão 1, a adoção foi incremental, com bypass ligado por padrão para não quebrar painel owner, webhooks e rotinas de fundo. Na versão 2, o contexto é restaurado em toda transação com bypass desligado, e a travessia entre tenants exige chamada explícita.",
      reason:
        "Com RLS, uma consulta sem filtro devolve zero linhas em vez de vazar dados. A versão incremental permitiu ligar a proteção em produção sem interromper o serviço; a versão por padrão fecha as lacunas que a própria implementação anterior reconhecia.",
      tradeoff:
        "Rotinas do operador passam a precisar de autorização explícita e justificável para atravessar tenants, e os testes de RLS só são conclusivos em PostgreSQL real com papel sem superusuário, o que ainda não foi executado no checkpoint da versão 2.",
    },
    {
      title: "Credenciais fora do alcance dos modelos",
      problem:
        "Na primeira versão, chaves de provedores, de WhatsApp e de pagamento chegaram a ficar em texto puro em colunas JSON; com tarefas executadas por modelos e conexões a serviços de terceiros, um segredo exposto no contexto do modelo poderia ser repetido em uma resposta.",
      decision:
        "Cifrar credenciais em repouso (Fernet na v1, cofre AES-GCM com chaves versionadas e dados associados ao tenant e ao usuário na v2), entregar a chave apenas ao transporte privado que faz a chamada HTTP e redigir segredos conhecidos e padrões de chave em entradas, saídas e logs. Respostas com credencial ficam retidas em buffer antes de chegar ao usuário.",
      reason:
        "Separar o segredo do banco muda o impacto de um vazamento de dump, e vincular o texto cifrado ao dono impede que um registro copiado para outro tenant seja decifrado. Manter a chave fora do prompt elimina a classe de vazamento pelo próprio modelo.",
      tradeoff:
        "O cofre fica indisponível se a configuração de chaves faltar, por decisão de falhar fechado; o buffer de proteção atrasa a exibição da resposta, e o filtro de padrões é defesa adicional, não detector universal.",
    },
    {
      title: "Crédito com reserva do pior caso e ledger append-only",
      problem:
        "Cobrar por token em um chat com streaming exige debitar um valor que só é conhecido ao final da resposta, sob concorrência, sem deixar saldo negativo nem cobrar duas vezes um webhook reenviado.",
      decision:
        "Valores em centavos inteiros, margem arredondada para cima, reserva do custo máximo antes de chamar o provedor, liquidação pelo preço cotado e gravado na reserva, ledger append-only protegido por trigger, conferência do saldo a cada lançamento e trava por carteira com SELECT FOR UPDATE. Custo acima da reserva bloqueia a carteira até conciliação, em vez de ajustar o saldo automaticamente.",
      reason:
        "A soma do ledger precisa sempre bater com o saldo, e erros de arredondamento com valores em ponto flutuante viram dinheiro perdido ou cobrado a mais. Quando o provedor não informa uso, cobrar pelo pior caso é mais seguro do que estimar.",
      tradeoff:
        "A reserva do pior caso pode recusar mensagens de clientes com saldo baixo, e divergências exigem conciliação manual. O teste de concorrência real e o Stripe em sandbox ainda estão pendentes.",
    },
    {
      title: "Executor de tarefas sem repetição automática após o despacho",
      problem:
        "Tarefas executadas por agentes podem ter efeito externo; se o processo cair depois de enviar a tarefa ao gateway, não há como provar se a ação aconteceu, e uma repetição automática poderia executá-la duas vezes.",
      decision:
        "Fila de tarefas no PostgreSQL consumida por executor separado e desligado por padrão, uma tarefa em andamento por usuário, aprovação vinculada à versão de autenticação e conferida no worker, cotas por usuário e por tenant e nenhuma repetição automática: tarefas interrompidas viram estado incerto para reconciliação. Na v1, a repetição com backoff vale apenas para chamadas de LLM, que não têm efeito colateral além do custo.",
      reason:
        "Diferenciar operações repetíveis (geração de texto) de operações com efeito externo evita duplicidades e mantém a decisão de reexecutar com uma pessoa.",
      tradeoff:
        "Falhas transitórias exigem ação manual e reduzem a taxa de conclusão automática; o executor ainda precisa de validação em staging antes de ser habilitado.",
    },
  ],

  journey: {
    title: "Mensagem paga no chat da versão 2 (dados sintéticos)",
    steps: [
      "Usuária do tenant Exemplo Ltda., plano Pro, envia uma pergunta na conversa.",
      "A API confere plano e limite diário e grava a mensagem com o tenant fixado na transação.",
      "O roteador escolhe o modelo; com confiança alta, decide antes de gerar a resposta.",
      "O serviço de crédito reserva o custo máximo da resposta na carteira, com trava.",
      "O provedor responde em streaming; a saída passa pelo filtro de credenciais antes de ser exibida.",
      "O uso real é liquidado pelo preço cotado na reserva e lançado no ledger; o evento usage informa o novo saldo.",
      "Se o modelo básico respondeu e o plano permite, o roteador reavalia e pode emitir uma segunda resposta de um modelo maior na mesma stream.",
    ],
  },

  dataModel: [
    {entity: "tenant", fields: "id, nome, plano, ativo, suspenso"},
    {entity: "Carteira de crédito", fields: "cliente, saldo em centavos"},
    {entity: "Lançamento de crédito", fields: "cliente, valor em centavos, saldo após o lançamento, origem, referência (somente inserção)"},
    {entity: "Reserva de crédito", fields: "cliente, teto em centavos, provedor, modelo, preços cotados, situação"},
    {entity: "Conversa e mensagem", fields: "cliente, usuário, papel, modelo, tokens de entrada e saída"},
    {entity: "Execução de tarefa", fields: "cliente, usuário, situação, versão, prazo de aprovação, erro"},
    {entity: "Segredo do cofre", fields: "cliente, usuário, versão, envelope cifrado"},
  ],

  results: [
    "Versão 1 publicada em hyre.global desde agosto de 2026, com site, cadastro, planos e painel do cliente; dez agentes descritos na arquitetura do código.",
    "Checkpoint da versão 2 em 02/10/2026 com 473 testes Python offline, 52 testes web e 20 testes mobile aprovados localmente, sem execução de banco real, build ou provedores.",
    "Auditoria de segurança registrada sobre a versão 1, com pontos a preservar (RLS, JWT com revogação, credenciais cifradas) e correções priorizadas para a versão 2.",
  ],

  limits: [
    "Versão 2 não implantada: migrations não aplicadas, build web e testes integrados com PostgreSQL e Redis não executados, sem homologação nem aprovação visual.",
    "Nenhuma conexão externa habilitada ao público; dos cerca de 950 conectores catalogados, a maior parte ainda não tem adaptador implementado.",
    "Stripe sem execução em sandbox na versão 2 e conciliação financeira operacional pendente.",
    "Aplicativo móvel em esqueleto, com bibliotecas de sessão testadas apenas em Node.",
    "Na versão 1, o processamento de fundo roda dentro do processo da API, com um único worker; o Celery está declarado, mas não é usado.",
    "O site atual mostra indicadores e depoimentos de marketing que não correspondem a resultados verificados.",
  ],

  links: [{label: "Site da Hyre", url: "https://hyre.global/", kind: "produto"}],

};
