import type {CaseStudy} from "@/lib/case-types";

export const hyre: CaseStudy = {
  slug: "hyre",
  name: "Hyre",
  group: "plataformas",
  category: "SaaS para perfis e pequenos negócios · Node.js, PostgreSQL e Next.js",
  summary:
    "Plataforma que junta página na bio, DMs automáticas e planejador de posts: quem comenta uma palavra no post recebe o link no direct, no Instagram e no Facebook, e os posts só saem com o ok do dono do perfil.",
  role: "Fundador e CEO · produto, arquitetura e direção do desenvolvimento",
  organization: "Hyre, parte do Lins Capital Group",
  period: "set/2026 – atual",
  stage: "Em produção",
  stageNote: "Site, planos e cadastro no ar em hyre.global desde novembro de 2026.",
  platforms: ["Web responsiva (desktop e celular)", "Página pública do perfil", "Painel do cliente", "Painel administrativo"],
  cover: {
    src: "/images/cases/hyre/home.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da Hyre em fundo escuro com o título Tudo que seu perfil precisa, os botões Criar minha página e Ver um exemplo e um perfil ilustrativo em moldura de celular.",
    caption: "Página inicial em hyre.global, novembro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/hyre/planos.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de planos com os cartões Gratuito (US$ 0), Pro (US$ 4,99 por mês, com 30 dias grátis) e Premium (US$ 9,99 por mês), com páginas, DMs automáticas, métricas e equipe de cada plano.",
      caption: "Planos em hyre.global, novembro de 2026",
    },
    {
      src: "/images/cases/hyre/exemplo.jpg",
      width: 1440,
      height: 1000,
      alt: "Página na bio de exemplo, de um perfil ilustrativo, com foto, descrição, ícones de redes e três botões de link.",
      caption: "Página na bio de exemplo. Perfil ilustrativo.",
    },
  ],

  history: {
    audience:
      "Pequenos negócios e perfis profissionais que vendem pelas redes (confeitarias, salões, clínicas, lojas, personal trainers, agências) e precisam de uma página com todos os links, de resposta rápida a quem comenta e de constância nos posts, sem equipe de marketing.",
    problem:
      "Quem vende pelo Instagram perde clientes nos comentários: a pessoa pergunta o preço ou pede o link e a resposta chega horas depois, ou não chega. Páginas de links, respostas automáticas e agendamento de posts costumam ser três ferramentas pagas separadas. O produto nasceu como Bioo, uma página de links com loja, agenda e cursos; o foco foi fechado em três funções e o produto passou a se chamar Hyre.",
    constraints:
      "Equipe enxuta. Confirmação de conta só por e-mail. Moeda única em dólar. Nada é publicado em nome do cliente sem a aprovação da versão exata do post. Provedores externos ficam atrás de adaptadores, e os testes usam dados sintéticos.",
    milestones: [
      {when: "set/2026", what: "Primeira base (Bioo 0.5): editor de página em Cloudflare Pages com D1/SQLite."},
      {when: "out/2026", what: "Migração para Node.js e PostgreSQL com RLS, front refeito em Next.js 16, planos, idiomas, consentimento de cookies e retenção de dados."},
      {when: "out/2026", what: "Escopo de lançamento fechado em página na bio, DMs automáticas e planejador; vendas, cursos, gorjetas, listas e mídia kit saíram da primeira versão."},
      {when: "07/11/2026", what: "Troca de Bioo para Hyre em todo o código, serviços e documentos, com o layout novo aprovado."},
      {when: "nov/2026", what: "Site, planos e cadastro publicados em hyre.global, com vigia externo a cada 30 minutos."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o foco do produto (página na bio, DMs automáticas e planejador) e o que ficou fora da primeira versão.",
      "Fechei a matriz de planos: Gratuito, Pro a US$ 4,99 e Premium a US$ 9,99 por mês, com 30 dias grátis no Pro e desconto no plano anual.",
      "Aprovei a migração da base Cloudflare D1 para Node.js e PostgreSQL com RLS a partir do modelo de ameaças e decidi refazer o front em Next.js.",
      "Estabeleci as regras de segurança do produto: post só sai com aprovação da versão exata, cada provedor por um adaptador próprio e evidência de teste para cada entrega.",
    ],
    direct: [
      "Conduzi a construção do servidor Node (API, webhooks, filas e workers), das migrações PostgreSQL e do front Next.js com next-intl.",
      "Revisei as entregas de cada etapa pelas baterias de testes e pela avaliação das telas em desktop e celular, e aprovei o layout novo.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro:
      "O navegador fala com um servidor Node que concentra API, webhooks e cabeçalhos de segurança e repassa as páginas ao front em Next.js. Os dados ficam em PostgreSQL privado, acessado por papéis sem permissão de contornar RLS. Workers separados tratam e-mail, respostas no direct, posts agendados e cobrança, a partir de filas persistidas no banco.",
    diagram: {
      title: "Arquitetura da Hyre",
      tiers: [
        {label: "Navegador", nodes: ["Site e página na bio", "Painel do cliente"]},
        {label: "Front", nodes: ["Next.js 16 + next-intl", "CSP com nonce"]},
        {label: "Servidor", nodes: ["Node: API e webhooks", "Workers e filas"]},
        {label: "Dados", nodes: ["PostgreSQL com RLS", "Conteúdo privado cifrado"]},
        {label: "Provedores", nodes: ["Instagram e Facebook", "Stripe", "Resend"]},
      ],
      links: [
        "O navegador acessa o servidor Node, que repassa as páginas ao Next.js.",
        "As telas chamam a API, que aplica sessão, CSRF e limites por plano.",
        "Cada transação define o contexto do cliente e o PostgreSQL filtra as linhas por RLS.",
        "Os comentários chegam por webhook e viram tarefas na fila; os workers respondem no direct e publicam os posts aprovados.",
      ],
    },
    layers: [
      {
        name: "Front",
        content:
          "Next.js 16, React 19 e TypeScript, com telas do site público, conta, editor da página, página pública do perfil, planejador em grade do mês e painel administrativo. Uma camada de proxy gera um nonce por requisição para a CSP e trata o idioma e o endereço hyre.global/seunome.",
      },
      {
        name: "Servidor",
        content:
          "Node com módulos por domínio (autenticação, páginas, conexões sociais, respostas automáticas, planejador, planos e cobrança). Sessões opacas em cookie HttpOnly, MFA obrigatório para administradores, conferência de host, limites de requisição, CSRF e cabeçalhos de segurança, com poucas dependências diretas.",
      },
      {
        name: "Dados",
        content:
          "PostgreSQL acessível só pela rede local do servidor, com migrações imutáveis, RLS habilitada e forçada nas tabelas de cada cliente e papéis de aplicação sem BYPASSRLS. O contexto do cliente é definido dentro de cada transação para não vazar entre conexões do pool. Conteúdo privado cifrado com AES-256-GCM e senhas com Argon2id.",
      },
      {
        name: "DMs automáticas",
        content:
          "A pessoa comenta a palavra escolhida no post e recebe o link no direct, no Instagram e no Facebook. Cada resposta respeita a palavra-chave, os limites do plano, um intervalo mínimo por pessoa e a pausa do cliente, e fica registrada antes do envio para não sair duas vezes.",
      },
      {
        name: "Planejador",
        content:
          "No plano Premium, o cliente monta o post, escolhe dia e hora e acompanha a situação na grade do mês (Rascunho, Agendado, Publicado, Não publicou). O post só é publicado com aprovação da versão exata; qualquer mudança no texto ou na mídia invalida a aprovação anterior.",
      },
      {
        name: "Operação e privacidade",
        content:
          "Workers de e-mail, respostas e publicações, conciliação de cobrança, limpeza com prazos de retenção definidos, backup cifrado com restauração testada, interruptores de emergência por provedor e vigia externo a cada 30 minutos. Consentimento de cookies que bloqueia medição e marketing até a escolha do visitante.",
      },
    ],
  },

  decisions: [
    {
      title: "Fechar o produto em três funções",
      problem:
        "A base anterior acumulava loja, agenda, cursos, gorjetas, listas de contatos e mídia kit. Cada função trazia regras de dinheiro, dados pessoais e integrações que atrasavam o lançamento.",
      decision:
        "Lançar só com página na bio, DMs automáticas e planejador. As áreas retiradas respondem como recurso encerrado, e os registros antigos ficam guardados com os mesmos controles de acesso e retenção.",
      reason:
        "As três funções resolvem o problema principal de quem vende pelas redes e cabem em planos simples, de US$ 0 a US$ 9,99 por mês.",
      tradeoff:
        "Parte do que foi construído deixa de ser usada na primeira versão e só volta se o uso pedir.",
    },
    {
      title: "Isolamento de dados no banco, não só na aplicação",
      problem:
        "Na base anterior, a autorização existia apenas no código. Com equipes, conexões sociais e mensagens de terceiros, um erro de consulta poderia expor dados de outro cliente.",
      decision:
        "PostgreSQL com RLS habilitada e forçada nas tabelas de cada cliente, papéis sem BYPASSRLS e contexto definido por transação, além da autorização na aplicação.",
      reason:
        "Duas camadas independentes reduzem o impacto de uma consulta errada; o D1/SQLite não oferecia esse controle.",
      tradeoff:
        "Mais trabalho em migrações e testes, que precisam cobrir operações sem contexto e tentativas entre clientes. RLS não protege contra o comprometimento total do servidor.",
    },
    {
      title: "Envio e publicação tratados como incertos",
      problem:
        "Numa resposta no direct ou num post agendado, a resposta da rede pode se perder depois que a ação já aconteceu. Repetir às cegas manda a mesma DM ou publica o mesmo post duas vezes.",
      decision:
        "Gravar a intenção e a chave de idempotência antes de chamar a rede, controlar a execução por lease com prazo e marcar como desconhecido o resultado sem confirmação, com conferência antes de um novo envio.",
      reason:
        "Separar erro definitivo, erro recuperável e resultado desconhecido evita mensagens e posts duplicados na conta do cliente.",
      tradeoff:
        "Mais estados para a interface e para a operação; alguns casos pedem conferência antes de tentar de novo.",
    },
    {
      title: "CSP estrita com nonce e terceiros só após consentimento",
      problem:
        "Páginas na bio costumam usar pixels de medição e players incorporados, o que leva a políticas de segurança permissivas.",
      decision:
        "CSP com nonce por requisição e strict-dynamic; o site da Hyre não carrega terceiros, e medição e players só entram nas páginas que os usam, depois da permissão do visitante.",
      reason:
        "Mantém pequena a superfície de XSS e faz a escolha de cookies corresponder ao que de fato é carregado.",
      tradeoff:
        "Cada integração nova exige ajuste explícito da política e teste no navegador.",
    },
  ],

  journey: {
    title: "Comentário que vira DM (exemplo com dados sintéticos)",
    steps: [
      "Uma confeitaria no plano Pro publica o cardápio de Natal e escolhe a palavra \"quero\".",
      "Uma seguidora comenta \"quero\" no post.",
      "O webhook do Instagram chega, a Hyre confere a palavra, o limite do plano e o intervalo por pessoa e grava a resposta na fila.",
      "O worker envia o link da página no direct e registra o envio; uma repetição do mesmo evento não gera outra mensagem.",
      "O painel mostra quantas DMs saíram no mês dentro do limite de 1.000 do plano.",
    ],
  },

  results: [
    "Site, planos e cadastro publicados em hyre.global em novembro de 2026, com vigia externo a cada 30 minutos.",
    "30/10/2026: 784 testes automatizados aprovados (Node e PostgreSQL real em bancos descartáveis), sem falhas, com dados sintéticos.",
  ],
  limits: [
    "Os números de testes vêm de baterias automatizadas com dados sintéticos e não representam uso real.",
    "RLS complementa, mas não substitui, a segurança da aplicação e da infraestrutura.",
    "Próximo passo: medir em campo as metas de desempenho (LCP até 2,5 s, INP até 200 ms, CLS até 0,1).",
    "Próximo passo: revisão humana das traduções e dos textos legais.",
  ],

  links: [{label: "hyre.global", url: "https://hyre.global/", kind: "produto"}],

};
