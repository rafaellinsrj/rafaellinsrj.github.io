import type {CaseStudy} from "@/lib/case-types";

const img = (file: string, width: number, height: number, alt: string, caption: string) =>
  ({src: `/images/cases/easyspa/${file}`, width, height, alt, caption});

export const easyspa: CaseStudy = {
  slug: "easyspa",
  name: "EasySPA",
  group: "riotech",
  category: "Marketplace de beleza e bem-estar · App e painel web",
  summary: "Aplicativo que ligava clientes a profissionais e empresas de beleza e bem-estar por localização, agenda e avaliação, com uma rede de afiliados para captar profissionais e vender publicidade.",
  role: "CTO e sócio da Rio Tech",
  organization: "Rio Tech",
  period: "2015",
  stage: "Projeto histórico",
  stageNote: "Há três registros: o protótipo das telas do app na versão 1.0 (janeiro de 2015), a apresentação comercial com o modelo de afiliados (julho de 2015) e o design de uma versão posterior do app e do painel de revenda. O lançamento público não está confirmado nos registros.",
  platforms: ["App do cliente", "Versão para profissionais e empresas", "Painel web de revenda e afiliados"],
  cover: img("app-tela-principal.jpg", 900, 1461, "Tela principal do app EasySPA com categorias de serviço, destaques e menu inferior com EasyClub, EasyBeauty, Chat e Agenda", "Versão posterior do app: categorias, conteúdo, ofertas e agenda. Arquivo de design, 2015."),
  gallery: [
    img("app-tela-principal.jpg", 900, 1461, "Tela principal do app com categorias e destaques", "Versão posterior do app: categorias de serviço, destaques, EasyClub (ofertas), EasyBeauty (produtos), chat e agenda."),
    img("painel-revenda.jpg", 1560, 1422, "Painel web de revenda com gráfico de faturamento mensal e lista de boletos", "Painel de revenda: faturamento, boletos em aberto e pagos, afiliados, banners e relatórios. Nomes de clientes ocultados."),
    img("prototipo-login.jpg", 1600, 1131, "Protótipo da tela de login com entrada pelo Facebook", "Protótipo v1.0, janeiro de 2015: login com e-mail ou Facebook."),
    img("prototipo-cadastro.jpg", 1600, 1131, "Protótipo das telas de cadastro de usuário", "Cadastro em duas etapas, com endereço e foto de perfil."),
    img("prototipo-inicio.jpg", 1600, 1131, "Protótipo da tela inicial com menu lateral", "Início com 'Quero me embelezar', conversas, atendimentos e configurações."),
    img("prototipo-categorias.jpg", 1600, 1131, "Protótipo da escolha de categoria de serviço", "Escolha do tratamento: manicure, cabeleireiro, maquiagem, massagem e estética."),
    img("prototipo-mapa.jpg", 1600, 1131, "Protótipo do mapa com profissionais próximos", "Profissionais no mapa ao redor do cliente, com raio de busca ajustável."),
    img("prototipo-filtros.jpg", 1600, 1131, "Protótipo dos filtros de busca", "Filtros por especialidade, cidade, zona, qualificação e tipo de profissional."),
    img("prototipo-lista.jpg", 1600, 1131, "Protótipo da lista de profissionais com ordenação", "Lista ordenável por proximidade, ordem alfabética ou qualificação."),
    img("prototipo-perfil.jpg", 1600, 1131, "Protótipo do perfil de uma profissional", "Perfil com apresentação, especialidades, horários e localidade."),
    img("prototipo-chat.jpg", 1600, 1131, "Protótipo do chat entre cliente e profissional", "Chat para combinar o atendimento."),
    img("prototipo-qualificacao.jpg", 1600, 1131, "Protótipo do histórico e da qualificação de atendimentos", "Qualificação liberada só depois do atendimento concluído."),
  ],

  history: {
    audience: "Clientes que buscam serviços de beleza e bem-estar perto de casa, e profissionais autônomos ou empresas do setor (manicure, cabeleireiro, estética, massagem, maquiagem e, nos planos maiores, personal trainer, fisioterapia, nutrição, odontologia e salões).",
    problem: "Encontrar um profissional confiável, perto e com horário disponível dependia de indicação. Do outro lado, profissionais autônomos não tinham uma vitrine nem uma forma simples de organizar a agenda.",
    constraints: "Produto da mesma equipe da Rio Tech, em paralelo à atuação em segurança pública, com aquisição de profissionais feita por uma rede de afiliados em vez de equipe comercial própria.",
    milestones: [
      {when: "Janeiro de 2015", what: "Protótipo das telas do app, versão 1.0: login, cadastro, busca por mapa e filtros, perfil, chat, histórico e qualificação."},
      {when: "Julho de 2015", what: "Apresentação comercial com proposta, recursos para cliente e profissional e sistema de afiliados com planos P1 a P4."},
      {when: "2015", what: "Design da versão posterior: app com destaques, ofertas (EasyClub), produtos (EasyBeauty), chat e agenda, e painel web de revenda com faturamento e boletos."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o produto e o modelo de negócio: assinatura por categoria, publicidade e rede de afiliados com comissão.",
      "Conduzi a evolução do protótipo para a versão com conteúdo, ofertas e painel de revenda.",
    ],
    direct: [],
    team: [
      "Design e desenvolvimento pela equipe da Rio Tech; diretoria comercial responsável pela rede de afiliados.",
    ],
    ai: ["Não se aplica: projeto de 2015, anterior às ferramentas de IA generativa."],
  },

  architecture: {
    intro: "O que o protótipo, a apresentação e os arquivos de design comprovam. O código-fonte não está disponível; a arquitetura abaixo mostra canais, funções e integrações visíveis nos registros e as linguagens usadas pela equipe.",
    diagram: {
      title: "Arquitetura funcional do EasySPA (2015)",
      tiers: [
        {label: "Usuários", nodes: ["Cliente", "Profissional ou empresa", "Afiliado"]},
        {label: "Canais", nodes: ["App do cliente", "Versão do profissional", "Painel web de revenda"]},
        {label: "Plataforma", nodes: ["Busca por raio e filtros", "Chat e agenda", "Qualificação pós-atendimento", "Planos e comissões", "Publicidade"]},
        {label: "Serviços externos", nodes: ["Mapas", "Login com Facebook", "Cobrança por boleto"]},
      ],
      links: [
        "O cliente busca por mapa ou filtros, abre o perfil, conversa pelo chat e combina o horário.",
        "A qualificação só é liberada depois que o atendimento é concluído.",
        "Afiliados captam profissionais; as assinaturas geram boletos e comissões acompanhadas no painel de revenda.",
      ],
    },
    layers: [
      {name: "Interface", content: "App do cliente com menu 'Quero me embelezar', escolha de categoria, mapa com raio ajustável, filtros, lista ordenável, perfil, chat, histórico e configurações; versão posterior com destaques, ofertas, produtos e agenda. Painel web com faturamento, boletos, afiliados, banners, anúncios, notificações e relatórios."},
      {name: "Regras de negócio", content: "Planos P1 a P4 por grupo de categorias; categoria principal e categorias extras com valores próprios; comissão do afiliado na venda e nos meses seguintes; espaços de publicidade (banner na home, destaques na busca, divulgação de eventos)."},
      {name: "Linguagens", content: "Java no aplicativo Android, Python e C++ no servidor."},
      {name: "Integrações", content: "Mapas para a busca geográfica, login com Facebook e cobrança das assinaturas por boleto bancário."},
    ],
  },

  decisions: [
    {
      title: "Avaliação só depois do atendimento",
      problem: "Avaliações abertas a qualquer usuário perdem credibilidade.",
      decision: "Liberar a qualificação apenas quando o atendimento estiver concluído, separando no histórico os profissionais já qualificados dos que aguardam avaliação.",
      reason: "A reputação do profissional passa a refletir atendimentos reais, que é o que dá valor ao marketplace.",
      tradeoff: "Menos avaliações no início, em troca de confiança.",
    },
    {
      title: "Duas formas de buscar",
      problem: "Parte dos clientes pensa em distância; outra parte, em especialidade ou reputação.",
      decision: "Busca no mapa com raio ajustável e busca por filtros, com ordenação por proximidade, nome ou qualificação.",
      reason: "Atende os dois comportamentos sem telas separadas.",
      tradeoff: "Mais estados de interface para projetar e testar.",
    },
    {
      title: "Crescimento por afiliados",
      problem: "Montar uma equipe comercial nacional custaria caro para um produto novo.",
      decision: "Rede de afiliados remunerada por comissão na primeira venda e nos meses seguintes, com valores por plano e por categoria extra.",
      reason: "Custo variável de aquisição, alinhado à receita gerada.",
      tradeoff: "Exige controle de comissões, cobrança e qualidade dos profissionais captados, por isso o painel de revenda.",
    },
    {
      title: "Ir além do agendamento",
      problem: "Um app usado só quando a pessoa precisa de um serviço tem pouca recorrência.",
      decision: "Na versão posterior, acrescentar conteúdo, ofertas da cidade (EasyClub) e produtos (EasyBeauty).",
      reason: "Motivos para abrir o app entre um atendimento e outro e novas fontes de receita.",
      tradeoff: "Escopo maior e risco de dispersão do produto principal.",
    },
  ],

  journey: {
    title: "Do pedido à avaliação (dados fictícios)",
    steps: [
      "A cliente entra pelo app e toca em 'Quero me embelezar'.",
      "Escolhe Manicure e vê as profissionais num raio de 5 km no mapa.",
      "Filtra por qualificação e abre o perfil de uma profissional com horário disponível.",
      "Combina o atendimento pelo chat.",
      "Depois do atendimento, a avaliação fica disponível no histórico; antes disso, o app informa que a qualificação depende da conclusão.",
    ],
  },
  dataModel: [
    {entity: "Cliente", fields: "nome, cidade, bairro, foto"},
    {entity: "Profissional ou empresa", fields: "tipo, especialidades, área de atendimento, horários, qualificação média"},
    {entity: "Plano", fields: "grupo P1 a P4, categoria principal, categorias extras, valor mensal"},
    {entity: "Atendimento", fields: "cliente, profissional, data, situação, avaliação"},
    {entity: "Afiliado e comissão", fields: "carteira de profissionais, plano vendido, valor da venda, valores mensais"},
  ],

  results: [
    "Protótipo completo do app em 17 telas (janeiro de 2015).",
    "Modelo comercial com planos por categoria, publicidade e rede de afiliados documentado na apresentação de julho de 2015.",
  ],
  limits: [
    "Lançamento e números de uso não confirmados nos registros disponíveis.",
    "Cobrança por boleto, sem pagamento dentro do app.",
  ],

  proposal: {
    title: "Como eu arquitetaria hoje",
    intro: "Proposta de arquitetura para um marketplace de serviços com a tecnologia atual. Não foi implementada: mostra como eu resolveria hoje os pontos que o modelo de 2015 deixava em aberto, como pagamento, agenda concorrente e confiança nas avaliações.",
    diagram: {
      title: "Proposta de arquitetura atual (não implementada)",
      tiers: [
        {label: "Canais", nodes: ["App do cliente iOS/Android", "App do profissional", "Painel de parceiros"]},
        {label: "Borda", nodes: ["API e CDN", "Login social e por código"]},
        {label: "Serviços", nodes: ["Busca geoespacial", "Agenda e reservas", "Pagamentos com split", "Mensagens", "Avaliações", "Comissões"]},
        {label: "Dados", nodes: ["PostgreSQL + PostGIS", "Índice de busca", "Cache", "Analítico"]},
        {label: "Operação", nodes: ["Contêineres gerenciados", "Filas", "Observabilidade"]},
      ],
      links: [
        "A busca combina distância, disponibilidade real da agenda e reputação.",
        "A reserva bloqueia o horário e o pagamento fica retido até o atendimento; o valor é dividido entre profissional, plataforma e afiliado.",
        "Avaliações só existem para reservas pagas e concluídas.",
      ],
    },
    layers: [
      {name: "Interface", content: "Apps multiplataforma para cliente e profissional, painel web para empresas e afiliados, notificações push para lembretes e mudanças de agenda."},
      {name: "API e serviços", content: "Serviços de busca, agenda, pagamentos, mensagens, avaliações e comissões, com eventos para manter os módulos desacoplados."},
      {name: "Persistência", content: "PostgreSQL com PostGIS para área de atendimento, índice de busca para ranking, cache para disponibilidade e base analítica para crescimento e qualidade."},
      {name: "Integrações", content: "Gateway de pagamento com divisão de valores (marketplace), Pix e cartão, mapas e login social."},
      {name: "Segurança", content: "Verificação de identidade de profissionais, dados pessoais mínimos, permissões por empresa e auditoria de pagamentos e comissões."},
      {name: "Qualidade", content: "Testes de concorrência na agenda, testes de contrato com o gateway de pagamento e métricas de comparecimento e cancelamento."},
    ],
    decisions: [
      {
        title: "Pagamento retido até o atendimento",
        problem: "Boleto e combinação por chat geram faltas e calote.",
        decision: "Cobrar na reserva, reter até a conclusão e dividir automaticamente entre profissional, plataforma e afiliado.",
        reason: "Reduz faltas, simplifica comissões e dá prova de que o atendimento existiu.",
        tradeoff: "Taxas do gateway e regras de reembolso a definir.",
      },
      {
        title: "Agenda com bloqueio de horário",
        problem: "Duas clientes podem tentar reservar o mesmo horário ao mesmo tempo.",
        decision: "Reserva com bloqueio temporário e confirmação atômica no banco.",
        reason: "Nenhum horário vendido duas vezes.",
        tradeoff: "Horários ficam presos por alguns minutos durante o pagamento.",
      },
      {
        title: "Livro-razão de comissões",
        problem: "Comissões recorrentes de afiliados geram disputas.",
        decision: "Registrar cada comissão como lançamento imutável vinculado ao pagamento de origem.",
        reason: "Extrato auditável para afiliado, profissional e financeiro.",
        tradeoff: "Correções viram lançamentos de estorno em vez de edição.",
      },
    ],
  },

  links: [],
};
