import type {CaseStudy} from "@/lib/case-types";

export const escolhiBrasil: CaseStudy = {
  slug: "escolhi-brasil",
  name: "Escolhi Brasil",
  group: "plataformas",
  category: "Guia de cidades multi-tenant · PHP e PostgreSQL",
  summary:
    "Guia das cidades do Brasil feito por quem mora nelas: onde comer, onde ficar, o que fazer e quem produz, com roteiro montado a partir do que o visitante escolhe, Passaporte e painéis para quem cuida de cada estado e de cada cidade.",
  role: "CTO pela Lins Partners · arquitetura, infraestrutura, segurança e condução da entrega",
  organization: "Escolhi Brasil Tecnologia e Mídia Digital, cliente da Lins Partners",
  period: "out/2026 – atual",
  stage: "Em produção",
  stageNote: "Site aberto ao público em escolhibrasil.com.br desde 30/10/2026; versão 1.13.2 em produção em novembro de 2026.",
  platforms: ["Web responsiva (desktop e celular)", "Páginas por estado e por cidade", "Painel administrativo", "Painel de parceiros"],
  cover: {
    src: "/images/cases/escolhi-brasil/home.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do Escolhi Brasil com o título O melhor de cada cidade, escolhido por quem mora nela, a busca por cidade, uma pilha de cartões de lugares e o exemplo de um roteiro de um dia em Teresópolis com mapa.",
    caption: "Página inicial em escolhibrasil.com.br, novembro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/escolhi-brasil/cidade.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de Teresópolis com a busca da cidade (comércios, lugares, eventos, notícias e produtos), galeria de fotos da serra, previsão do tempo e categorias.",
      caption: "Página de uma cidade, novembro de 2026",
    },
    {
      src: "/images/cases/escolhi-brasil/roteiro.jpg",
      width: 1440,
      height: 1000,
      alt: "Tela Monte seu roteiro em Teresópolis com datas de chegada e saída, ritmo da viagem (tranquilo, equilibrado ou intenso) e interesses.",
      caption: "Monte seu roteiro, novembro de 2026",
    },
  ],

  history: {
    audience:
      "Moradores e visitantes que querem saber o que vale a pena em cada cidade, comércios e produtores locais que querem ser encontrados e parceiros que cuidam do conteúdo de um estado ou de uma cidade.",
    problem:
      "O sistema herdado rodava em um servidor antigo, com MySQL e PostgreSQL ao mesmo tempo e contas de serviço em nome de pessoas físicas. Para abrir ao público e crescer cidade a cidade, a empresa precisava de uma base segura, auditável, com publicação controlada e dados isolados por estado e por cidade.",
    constraints:
      "Teto de R$ 250 por mês em servidores, disponibilidade alvo de 99,5% ao mês e p95 abaixo de 800 ms. Nada é feito direto em produção: toda mudança passa por tarefa, branch, PR, testes e homologação.",
    milestones: [
      {when: "out/2026", what: "Contrato de TI com a Lins Partners, auditoria do sistema herdado e plano de execução por etapas (fundação, identidade, painéis, dados, produto e escala)."},
      {when: "29/10/2026", what: "MySQL retirado: tudo em PostgreSQL 17 com RLS; etapas de identidade e de dados homologadas."},
      {when: "30/10/2026", what: "Site aberto ao público em escolhibrasil.com.br."},
      {when: "05/11/2026", what: "Publicação pela esteira do GitHub da empresa, com backup automático do banco antes de cada versão em produção; marca nova aprovada."},
      {when: "07/11/2026", what: "Versão 1.13 com o layout novo, Monte seu roteiro, Passaporte, Meus roteiros e fotos de 77 cidades."},
    ],
  },

  responsibility: {
    leadership: [
      "Assumi a tecnologia da empresa pela Lins Partners: arquitetura, infraestrutura, segurança, processo de entrega e gestão da equipe técnica.",
      "Defini o plano de execução por etapas, o fluxo obrigatório de tarefa, branch, PR, testes, homologação e versão, e as metas de desempenho e disponibilidade.",
      "Decidi a retirada do MySQL, a separação em três servidores (produção, testes e e-mail) e a publicação só pela esteira, com backup antes de qualquer mudança no banco.",
      "Aprovei a identidade visual nova e as correções do layout novo antes de cada versão.",
    ],
    direct: [
      "Conduzi a migração dos dados para PostgreSQL 17 com RLS, a montagem dos servidores e a esteira de publicação.",
      "Revisei as entregas pelas verificações do CI, pelos testes de tela e pela conferência do site depois de cada publicação.",
    ],
    team: [
      "O sócio da Escolhi Brasil homologa as versões que usa e faz o primeiro suporte.",
    ],
    ai: [],
  },

  architecture: {
    intro:
      "Aplicação PHP 8.3 sem framework, com páginas renderizadas no servidor, sobre PostgreSQL 17 com RLS. Site público, painel administrativo e painel de parceiros rodam em containers e domínios próprios. Três servidores separados atendem produção, testes e e-mail, atrás da Cloudflare.",
    diagram: {
      title: "Arquitetura do Escolhi Brasil",
      tiers: [
        {label: "Borda", nodes: ["Cloudflare (DNS, proxy e Access)"]},
        {label: "Aplicação", nodes: ["Site público", "Painel administrativo", "Painel de parceiros"]},
        {label: "Dados", nodes: ["PostgreSQL 17 com RLS", "Fotos e arquivos"]},
        {label: "Entrega", nodes: ["GitHub Actions", "Esteira com backup e volta automática"]},
        {label: "Serviços", nodes: ["Resend (e-mail)", "Mercado Pago", "Login com Google"]},
      ],
      links: [
        "O visitante chega pela Cloudflare; os painéis internos só abrem com o Cloudflare Access.",
        "A aplicação grava no PostgreSQL com o estado e a cidade do usuário fixados na transação.",
        "Um merge na main publica nos testes; uma tag de versão faz o backup do banco e publica na produção.",
        "E-mails saem pelo Resend; o servidor de e-mail só recebe.",
      ],
    },
    layers: [
      {
        name: "Aplicação",
        content:
          "PHP 8.3 sem framework, páginas no servidor e CSS essencial em linha para a primeira tela carregar rápido. Páginas por estado e por cidade, busca dentro da cidade sem acento e com tolerância a erro de digitação, Monte seu roteiro, Passaporte, Minha conta com favoritos e avisos da cidade, e login com Google.",
      },
      {
        name: "Dados e isolamento",
        content:
          "PostgreSQL 17 com Row Level Security: o licenciado de um estado e o operador de uma cidade só enxergam o que é deles, e o site público usa um papel só de leitura onde precisa. Migrações numeradas e backup conferido antes de qualquer mudança no banco de produção.",
      },
      {
        name: "Servidores",
        content:
          "Três servidores na Contabo (produção, testes e e-mail), com SSH só por chave, firewall, CrowdSec, ClamAV, rkhunter, AIDE e auditd, atualização automática com reinício programado, backup diário cifrado com restic e vigia a cada 5 minutos.",
      },
      {
        name: "Entrega e qualidade",
        content:
          "CI com 10 verificações (sintaxe, gitleaks, Trivy, permissões, sessão, 2FA, testes de tela com Playwright e axe, áreas). Merge na main publica nos testes; a tag de versão faz backup do banco e publica na produção, com volta automática e conferência do site depois.",
      },
      {
        name: "Borda e e-mail",
        content:
          "DNS e proxy na Cloudflare, painéis internos e acesso de manutenção atrás do Cloudflare Access, e-mail transacional pelo Resend e servidor de e-mail próprio só para receber, com DKIM e DMARC.",
      },
    ],
  },

  decisions: [
    {
      title: "Um banco só, com isolamento por estado e por cidade",
      problem:
        "O sistema herdado usava MySQL e PostgreSQL ao mesmo tempo, e o acesso de cada parceiro dependia só de filtros no código.",
      decision:
        "Migrar tudo para PostgreSQL 17 e usar RLS com o estado (licenciado) e a cidade (operador) como fronteiras de acesso.",
      reason:
        "Um banco só simplifica backup, restauração e auditoria; com RLS, uma consulta esquecida devolve zero linhas em vez de mostrar dados de outra cidade.",
      tradeoff:
        "A migração exigiu ensaio completo e homologação antes da virada, e as rotinas que atravessam cidades precisam de papel próprio.",
    },
    {
      title: "Nada direto em produção",
      problem:
        "Mudanças feitas direto no servidor não deixam rastro nem caminho de volta, e um site aberto ao público não pode depender de publicação manual.",
      decision:
        "Separar produção, testes e e-mail em três servidores e publicar só pela esteira do GitHub: merge na main vai para os testes, e a tag de versão faz o backup do banco antes de ir para a produção.",
      reason:
        "Toda versão fica ligada a uma tarefa, a um PR e a um backup, e a volta para a versão anterior é um comando.",
      tradeoff:
        "Uma correção urgente segue o mesmo fluxo, só mais rápido, e o plano gratuito do GitHub não permite exigir aprovação no ambiente de produção; por isso o backup automático entrou na própria esteira.",
    },
    {
      title: "PHP sem framework, com foco no celular",
      problem:
        "A maior parte das visitas vem do celular, e a página inicial precisa abrir rápido mesmo em conexão fraca.",
      decision:
        "Manter PHP 8.3 sem framework, com páginas renderizadas no servidor, CSS essencial em linha e metas de LCP abaixo de 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1, medidas no CI e por medição própria sem cookie.",
      reason:
        "Menos camadas entre a requisição e a página e controle direto do que é enviado ao navegador.",
      tradeoff:
        "Componentes e roteamento são mantidos pela própria equipe, sem o ecossistema de um framework.",
    },
  ],

  journey: {
    title: "Monte seu roteiro (exemplo)",
    steps: [
      "O visitante escolhe Teresópolis, as datas de chegada e de saída e o ritmo da viagem.",
      "Desliza para a direita os lugares que quer conhecer e para a esquerda os que não quer.",
      "O site organiza os escolhidos em um roteiro dia a dia, com ordem e horário sugeridos e mapa.",
      "Quem tem conta salva o roteiro em Meus roteiros, imprime ou abre o caminho no Waze.",
    ],
  },

  results: [
    "Site aberto ao público em 30/10/2026, com acessos reais.",
    "Nov/2026: versão 1.13.2 em produção pela esteira, com backup do banco antes da publicação e conferência do site com 23 de 23 verificações aprovadas.",
    "Fotos de 77 das 92 cidades cadastradas carregadas em novembro de 2026.",
  ],
  limits: [
    "Monte seu roteiro está ligado em uma cidade por enquanto; próximo passo é ligar as demais conforme o conteúdo de cada uma ficar pronto.",
    "Próximo passo: backup também fora do servidor e SSH fechado para a internet, com acesso só pelo túnel da Cloudflare.",
  ],

  links: [{label: "escolhibrasil.com.br", url: "https://escolhibrasil.com.br/", kind: "produto"}],

};
