import type {CaseStudy} from "@/lib/case-types";

export const veroMarkets: CaseStudy = {
  slug: "vero-markets",
  name: "Vero Markets",
  group: "plataformas",
  category: "Mercado de previsões com livro de ofertas · Laravel, React, Go e Polygon",
  summary:
    "Plataforma de mercados de previsão em que os usuários negociam probabilidades sobre economia, política, juros, esportes e grandes acontecimentos. Reúne livro central de ofertas com casamento próprio, depósitos e saques por PIX e por USDC na Polygon, resolução automática de mercados, programa de formadores de mercado, painel administrativo e interface em 20 idiomas.",
  role: "CTO, responsável pela tecnologia da plataforma",
  organization: "Vero Markets",
  period: "2026",
  stage: "Projeto histórico",
  stageNote: "",
  platforms: [
    "Web responsiva (aplicativo do usuário)",
    "Painel administrativo",
    "API para formadores de mercado",
    "Contratos inteligentes na Polygon",
  ],
  cover: {
    src: "/images/cases/vero-markets/market-makers.jpg",
    width: 1440,
    height: 1000,
    alt: "Página Market Makers da Vero Markets em fundo escuro com detalhes em cobre: quatro cartões (spread zero, rebate diário, API dedicada e suporte prioritário), o passo a passo do programa e o início do formulário de candidatura.",
    caption: "Página do programa de formadores de mercado. Interface da plataforma.",
  },
  gallery: [
    {
      src: "/images/cases/vero-markets/integridade.jpg",
      width: 1440,
      height: 1000,
      alt: "Página Política de Integridade de Mercado com padrões de criação de mercado, as quatro etapas do processo de liquidação e o início das medidas contra manipulação.",
      caption: "Política de Integridade de Mercado. Interface da plataforma.",
    },
    {
      src: "/images/cases/vero-markets/central-de-ajuda.jpg",
      width: 1440,
      height: 1000,
      alt: "Central de Ajuda com perguntas frequentes recolhíveis sobre preço, cotas, venda antes do resultado, liquidação, eventos cancelados e bônus de indicação.",
      caption: "Central de Ajuda em português, uma das 20 línguas da interface. Interface da plataforma.",
    },
  ],

  history: {
    audience:
      "Pessoas que querem expressar e negociar uma opinião sobre eventos futuros (juros, inflação, eleições, criptoativos, esportes e entretenimento) com preço que funciona como probabilidade; formadores de mercado que fornecem liquidez por API; e a equipe de operação, que cria, acompanha e resolve mercados e cuida de depósitos, saques e suporte.",
    problem:
      "Mercados de previsão internacionais exigem cripto, falam inglês e não aceitam PIX. A proposta era um mercado com a mecânica de um livro de ofertas profissional, entrada e saída em reais por PIX ou em USDC, interface em várias línguas e resolução transparente. Do lado técnico, isso significa casar ordens sem criar nem destruir dinheiro, manter centenas de mercados com preço vivo, resolver resultados com rapidez e segurança e custodiar recursos com controles fortes.",
    constraints:
      "Preços em centavos inteiros de 1 a 99, com SIM e NÃO complementares somando 100. Toda alteração de saldo precisa preservar a soma total do sistema. Saques acima de um limite exigem aprovação dupla. Chaves de carteira nunca ficam em claro no servidor. Integrações obrigatórias com gateway PIX, verificação de identidade e dados esportivos de terceiros, cada uma com seus limites e formatos.",
    milestones: [
      {when: "abr/2026", what: "Início como CTO: desenho da arquitetura, infraestrutura em nuvem separando aplicação e serviço de custódia, e base do produto."},
      {when: "mai/2026", what: "API dedicada para formadores de mercado em uso por um robô externo; decisões de segurança registradas em ADRs (escopo de tokens entre aplicativo e painel, direitos de dados da LGPD)."},
      {when: "jun/2026", what: "Adoção do livro único complementar por resultado, versionamento semântico com publicação contínua, interface completa em 20 idiomas, aba Ao Vivo com estatísticas de jogos e importação automática de mercados esportivos."},
      {when: "jun/2026", what: "Casamento de ordens em duas fases com fila dedicada e resolução automática de mercados esportivos e de mercados gerais com apoio de IA."},
      {when: "jul/2026", what: "Blindagem de conservação de valor na raiz do motor, com invariante, alerta em tempo real e auditoria diária; motor de casamento em Go executado em paralelo ao motor principal para comparação."},
      {when: "jul/2026", what: "Versão 1.11: troca do provedor de verificação de identidade, 21 modelos de e-mail em 20 idiomas e revisão de documentos de identidade no painel."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a arquitetura da plataforma: monolito Laravel como núcleo transacional, dois aplicativos React separados (usuário e painel), WebSocket próprio, motor de casamento dedicado em Go e serviço de custódia isolado em outro servidor.",
      "Decidi o modelo de mercado (livro único complementar por resultado, com criação e destruição de pares SIM/NÃO) e a regra de que nenhuma operação pode alterar a soma de valor do sistema.",
      "Estabeleci a política de resolução em camadas: placar oficial quando existe, IA com busca na web apenas com fontes confiáveis e concordantes, e revisão humana nos demais casos.",
      "Desenhei o programa de formadores de mercado (API com chave própria, limites de posição, desconto de spread e rebate diário) e conduzi a integração com o robô LMM.",
      "Priorizei segurança e conformidade: escopo de tokens por aplicação, direitos de dados da LGPD, verificação de identidade, aprovação dupla de saques grandes e chaves de carteira cifradas por KMS.",
    ],
    direct: [
      "Estruturei e implementei, com agentes de IA sob minha direção, o backend em Laravel: ordens, casamento, posições, carteira, resolução, rotinas agendadas, notificações e a API para formadores de mercado.",
      "Construí os fluxos financeiros: depósito e saque por PIX com conferência de titularidade por CPF, depósito em USDC sem custo de gás para o usuário e saque em cripto via contrato de custódia.",
      "Conduzi o diagnóstico e a correção de vazamentos de valor no motor de casamento, criando a invariante de conservação, o alerta e a auditoria diária.",
      "Configurei a operação: nginx, Supervisor com filas e processos permanentes, rotinas agendadas, backups diários, monitoramento de processos, Sentry e esteira de testes e implantação no GitHub Actions.",
      "Validei pessoalmente as versões publicadas, os fluxos de depósito, negociação, resolução e saque, e as telas do painel.",
    ],
    team: [
      "Sócios e parceiros da operação, com nomes preservados, participaram das decisões de produto e da segunda assinatura exigida para saques acima do limite.",
    ],
    ai: [
      "Cerca de um terço dos commits do repositório foi feito por um agente de IA operado por mim em servidor próprio; o restante foi assinado por mim.",
      "O repositório mantém um documento de contexto dedicado a agentes de codificação (como Claude Code), com arquitetura, regras de conservação e procedimentos de implantação.",
      "Diagnósticos e relatórios de implementação gerados por agentes (por exemplo, a migração para o livro único) passaram por minha revisão antes de qualquer subida; decisões de arquitetura, de risco e de produção foram minhas.",
      "Dentro do produto, a IA é usada em pontos delimitados: tradução de mercados e notícias para 20 idiomas e apoio à resolução de mercados não esportivos, sempre com validação por fontes.",
    ],
  },

  architecture: {
    intro:
      "A Vero é organizada em torno de um núcleo transacional em Laravel com MySQL e Redis. O nginx entrega os dois aplicativos React como arquivos estáticos e encaminha a API e o WebSocket. Toda ordem passa por uma fase curta e síncrona de validação e reserva de saldo e por uma fase de casamento executada em fila, serializada por resultado. Um motor em Go recebe cópia das ordens por Redis Streams, casa em memória e compara cada resultado com o do motor principal. A custódia fica em um serviço Node.js separado, acessível apenas pelo servidor da aplicação, que assina transações na Polygon com chaves decifradas por KMS e opera contratos de custódia com aprovação dupla e travas de tempo. São 113 migrações, 51 tabelas criadas por migração, cerca de 290 rotas de API, 27 tarefas agendadas e sete processos permanentes.",
    diagram: {
      title: "Arquitetura da plataforma Vero Markets",
      tiers: [
        {label: "Públicos", nodes: ["Usuário (web)", "Equipe de operação", "Formador de mercado (API)"]},
        {label: "Interface", nodes: ["App React 19", "Painel React", "WebSocket (Reverb)"]},
        {label: "Aplicação", nodes: ["API Laravel 12", "Filas e workers", "Agendador de rotinas", "Motor Go paralelo"]},
        {label: "Dados", nodes: ["MySQL 8", "Redis 7 (filas, streams)"]},
        {label: "Custódia", nodes: ["Serviço Node.js + KMS", "Contratos Polygon"]},
        {label: "Externos", nodes: ["PIX (AurePay)", "KYC (Didit)", "Dados esportivos", "OpenAI e e-mail"]},
      ],
      links: [
        "O usuário, a equipe e os formadores de mercado chegam pelo nginx; os aplicativos React consomem a API e recebem livros, negócios e saldos pelo WebSocket.",
        "A API valida e reserva saldo na hora; o casamento roda em workers de fila, serializado por resultado, e publica cópia das ordens para o motor Go comparar.",
        "O agendador fecha mercados vencidos, importa e resolve mercados, expira ordens, consolida estatísticas e audita a conservação de valor.",
        "MySQL guarda o estado transacional; Redis atende filas, cache, streams e proteção contra repetição de webhooks.",
        "Depósitos e saques em cripto passam pelo serviço de custódia, que assina com chaves cifradas por KMS e opera os contratos de custódia na Polygon.",
        "PIX, verificação de identidade, dados esportivos, importação de mercados, IA e e-mail são integrações externas chamadas pela aplicação.",
      ],
    },
    layers: [
      {
        name: "Backend",
        content:
          "PHP 8.3 com Laravel 12, Sanctum (tokens com escopo distinto para aplicativo e painel), Socialite (login com Google), Reverb (WebSocket), web push e Sentry. Cerca de 20,7 mil linhas de código de aplicação: 38 modelos, 30 serviços de domínio, 32 comandos de console, 20 notificações e 13 middlewares. Login por carteira com verificação de assinatura Ethereum no servidor.",
      },
      {
        name: "Casamento e risco",
        content:
          "Livro único por resultado em que NÃO a p equivale a SIM a 100 − p: compras opostas criam o par, vendas opostas o destroem e ordens do mesmo lado transferem cotas. Fase síncrona curta com bloqueio do usuário e do resultado; fase de casamento em fila, idempotente e serializada, com ordem determinística de bloqueios para evitar impasse no banco. Venda descoberta bloqueada, ordens a mercado convertidas em limite quando não há contraparte, suspensão de negociação em torno de lances ao vivo, limites de posição por formador de mercado e invariante de conservação que desfaz a operação inválida.",
      },
      {
        name: "Motor Go",
        content:
          "Go 1.26 com go-redis e driver MySQL. Uma goroutine por resultado consome as ordens por Redis Streams com grupos de consumidores, casa em memória com as mesmas três semânticas do motor principal (transferência, criação e destruição de par) e compara cada execução. No arranque, carrega posições e ordens abertas do banco para começar com o mesmo estado.",
      },
      {
        name: "Interface",
        content:
          "Aplicativo do usuário em React 19, TypeScript 5.9 e Vite, com Tailwind CSS, Radix UI, TanStack Query, Zustand, i18next em 20 idiomas, lightweight-charts e Recharts para preço e probabilidade, Laravel Echo para tempo real e wagmi, viem, RainbowKit e WalletConnect para carteiras (cerca de 21,8 mil linhas e 29 páginas). Painel administrativo em React separado (cerca de 14,8 mil linhas e 32 telas) com exportação em PDF e mapa de usuários.",
      },
      {
        name: "Dados e filas",
        content:
          "MySQL 8 com valores em centavos inteiros e Redis 7 para filas de casamento e gerais, cache de API pública, streams do motor Go e janela antirrepetição de webhooks. Instantâneos de probabilidade alimentam os gráficos e são expurgados após 30 dias. Supervisor mantém três workers, o WebSocket, o recálculo de probabilidades, a captura de jogos ao vivo e o motor Go.",
      },
      {
        name: "Custódia e blockchain",
        content:
          "Serviço Node.js 22 com Express 5, ethers 6 e AWS KMS, isolado em servidor próprio e aceito apenas pela aplicação. Nove contratos Solidity 0.8.24 com OpenZeppelin 5 e Hardhat: custódia de USDC com aprovação dupla acima de um limite, cofre com trava de tempo de 24 a 48 horas para mudanças de configuração e teto diário, depósito sem gás por assinatura EIP-2612, token ERC-20 de oferta fixa e trava de liquidez.",
      },
      {
        name: "Resolução e conteúdo",
        content:
          "Máquina de estados por mercado esportivo que mapeia o jogo na API de esportes, acompanha o status real e resolve pelo placar. Mercados gerais usam IA com busca na web e só pagam com três ou mais fontes confiáveis independentes concordando; sem isso, vão para a fila do painel. Importação de mercados da Polymarket e da Kalshi três vezes ao dia, agregador de notícias com filtro de conteúdo e tradução automática.",
      },
      {
        name: "Qualidade e operação",
        content:
          "Cerca de 190 casos de teste de backend com Pest e PHPUnit em 27 arquivos, 25 cenários ponta a ponta em Playwright e GitHub Actions para testes e implantação. nginx atrás da Cloudflare, cabeçalhos de segurança e CSP, backups diários do banco, monitoramento de processos e de workers e rotinas de retenção de logs e de auditoria.",
      },
    ],
  },

  decisions: [
    {
      title: "Livro único complementar por resultado",
      problem:
        "Com livros separados para SIM e NÃO, havia seis combinações de casamento. Duas não se encontravam nunca e a venda simultânea dos dois lados caía no ramo errado, criando posição onde deveria desfazer o par.",
      decision:
        "Tratar toda ordem NÃO a p como SIM a 100 − p dentro de cada resultado, mantendo no banco o lado real de cada ordem. As seis formas colapsam em transferência, criação de par e destruição de par, com uma única fonte para o melhor preço de compra e venda.",
      reason:
        "É o modelo dos mercados de previsão de referência e vale igual para mercados binários, de múltipla escolha e em série, sem ramificar o motor por tipo de mercado.",
      tradeoff:
        "Exigiu reescrever o núcleo do casamento e todos os pontos que calculavam preço, mantendo compatibilidade com o histórico de negócios e posições.",
      learning:
        "Normalizar no casamento e não na reserva de saldo deixou a mudança reversível e localizada; a revisão expôs um defeito latente que descartava créditos dentro da transação.",
    },
    {
      title: "Casamento em duas fases, com fila serializada por resultado",
      problem:
        "Casar ordens dentro da requisição HTTP mantinha bloqueios longos, saturava o PHP-FPM em rajadas de formadores de mercado e gerava impasses no banco quando dois resultados do mesmo mercado casavam em paralelo.",
      decision:
        "Separar a ordem em uma fase síncrona curta (validação e reserva de saldo, na casa de dezenas de milissegundos) e uma fase de casamento em fila dedicada, idempotente e sem sobreposição por resultado, com ordem fixa de aquisição de bloqueios. A ativação é feita por mercado.",
      reason:
        "O usuário recebe resposta imediata e o casamento ganha execução previsível, sem mudar nenhuma regra financeira.",
      tradeoff:
        "O preenchimento passa a ser assíncrono, exigindo atualização por WebSocket e mais cuidado com ordens canceladas ou vencidas entre as duas fases.",
      learning:
        "O limite estrutural de um livro em banco relacional levou ao motor em Go com livro em memória, validado em paralelo antes de qualquer troca de motor.",
    },
    {
      title: "Conservação de valor como invariante",
      problem:
        "Um conjunto fechado de contas de formador de mercado é soma zero, mas seu patrimônio agregado subia. A causa estava no casamento entre contas do próprio formador: o custo transferido usava o preço do livro, não o custo médio, e alguns caminhos permitiam venda descoberta.",
      decision:
        "Criar uma invariante de liquidação que desfaz a operação quando ela criaria valor, transferir sempre o custo médio, tornar o cancelamento atômico e somar um alerta em tempo real, uma auditoria diária em leitura consistente e comandos de reconciliação.",
      reason:
        "Em uma plataforma que custodia saldo, nenhuma otimização de preço justifica uma operação capaz de criar ou destruir dinheiro.",
      tradeoff:
        "Mais verificações por execução e operações legítimas recusadas quando a invariante dispara, com investigação manual.",
      learning:
        "O raciocínio de soma zero, aplicado primeiro ao robô LMM, revelou o erro na plataforma; a reconciliação documentada passou a fechar com divergência zero.",
    },
    {
      title: "Resolução automática em camadas",
      problem:
        "Resolver manualmente centenas de mercados esportivos e gerais atrasava o pagamento e concentrava risco de erro em poucas pessoas.",
      decision:
        "Esportes com jogo identificado são resolvidos pelo placar da API de dados esportivos, por uma máquina de estados que só avança quando o jogo realmente termina. Os demais mercados passam por IA com busca na web e só são pagos com três ou mais fontes confiáveis independentes concordando, dentro de uma lista editável de domínios. Todo o resto vai para a fila do painel.",
      reason:
        "Dado determinístico vence modelo; a IA entra só onde não existe fonte estruturada, e nunca sozinha.",
      tradeoff:
        "Mercados ambíguos continuam dependendo de revisão humana, e a lista de fontes confiáveis exige manutenção.",
      learning:
        "O pagamento de todos os caminhos passa pelo mesmo serviço de resolução, idempotente e auditado, o que permitiu automatizar sem multiplicar riscos.",
    },
    {
      title: "Custódia isolada com controles on-chain",
      problem:
        "Guardar chaves de carteira no servidor da aplicação e enviar saques sem limite tornaria qualquer falha da aplicação uma perda de fundos.",
      decision:
        "Isolar a assinatura de transações em um serviço próprio, acessível só pela aplicação, com chaves cifradas e decifradas por KMS. Recursos de usuários ficam em contrato de custódia separado do cofre da empresa, com aprovação dupla acima de um limite, pausa de emergência e trava de tempo para mudanças de configuração. Depósitos em USDC usam assinatura de permissão, sem gás para o usuário.",
      reason:
        "Separar custódia, tesouraria e aplicação reduz o impacto de uma falha em qualquer uma delas e deixa as regras críticas verificáveis na própria rede.",
      tradeoff:
        "Mais componentes para operar, custo de gás pago pela plataforma no repasse de depósitos e saques grandes mais lentos por exigirem segunda aprovação.",
      learning:
        "A terceira versão do contrato de depósito passou a enviar fundos para a custódia, e não para o cofre, para não misturar recursos de usuários com os da empresa.",
    },
  ],

  journey: {
    title: "Do depósito ao saque (dados sintéticos)",
    steps: [
      "Uma usuária deposita R$ 200 por PIX; o gateway confirma, a plataforma confere que o pagador tem o mesmo CPF da conta e credita o saldo, avisando por e-mail e notificação.",
      "No mercado “O time A vence?”, ela envia uma ordem limite de compra de 100 cotas SIM a 62 centavos. A fase síncrona valida, reserva R$ 62 mais o spread e responde na hora.",
      "Na fila de casamento, a ordem encontra uma compra de NÃO a 40 centavos: como 62 + 40 passa de 100, o par é criado a 100 centavos por par e o excedente volta aos compradores.",
      "Livro, último preço e probabilidade são atualizados e enviados pelo WebSocket; o gráfico de probabilidade recebe um novo ponto.",
      "Durante o jogo, um gol suspende a negociação por alguns instantes para evitar arbitragem com informação atrasada; formadores de mercado continuam cotando.",
      "Encerrado o jogo, a máquina de estados confirma o placar pela API de esportes e resolve o mercado: as 100 cotas SIM pagam R$ 100, com registro de auditoria e checagem de conservação.",
      "Ela pede o saque; dentro do limite e com conta liberada, o PIX sai automaticamente. Em cripto, valores acima do limite aguardam a segunda aprovação no contrato de custódia.",
    ],
  },

  dataModel: [
    {entity: "Usuário", fields: "perfil, idioma, situação da verificação de identidade, saldos disponível e reservado, código de indicação"},
    {entity: "Mercado", fields: "título e regras traduzidos, categoria, tipo (binário, múltipla escolha, série, resultados independentes), encerramento, situação, criador"},
    {entity: "Resultado", fields: "mercado, nome, probabilidade atual, valores reservados de SIM e NÃO, situação de resolução"},
    {entity: "Ordem", fields: "resultado, lado (SIM ou NÃO), compra ou venda, tipo (limite ou a mercado), preço em centavos, quantidade, preenchido, validade"},
    {entity: "Execução e negócio", fields: "ordens envolvidas, forma (transferência, criação ou destruição de par), preço, quantidade, spread"},
    {entity: "Posição", fields: "usuário, resultado, lado, cotas, cotas reservadas para venda, custo total"},
    {entity: "Movimento financeiro", fields: "depósito ou saque, meio (PIX ou cripto), valor, situação, aprovações"},
    {entity: "Formador de mercado", fields: "chave de API, termos (desconto de spread, limites de posição), rebate diário"},
    {entity: "Vínculo de evento", fields: "mercado, jogo na API de esportes, estado da máquina de fechamento automático"},
    {entity: "Registro de auditoria", fields: "ação, autor, entidade afetada, antes e depois, data"},
  ],

  results: [
    "Plataforma completa construída e publicada sob minha liderança técnica: aplicativo, painel, API de formadores de mercado, motor de casamento, resolução automática, PIX, cripto e custódia na Polygon.",
    "236 commits e 104 versões marcadas no repositório entre 08/06/2026 (v1.0.1) e 10/07/2026 (v1.11.9), com histórico de mudanças em versionamento semântico.",
    "Interface traduzida em 20 idiomas (cerca de 11 mil textos, segundo o histórico de versões) e 21 modelos de e-mail transacional em cada idioma.",
    "Correção estrutural de conservação em julho de 2026: a reconciliação documentada do conjunto de contas de formador de mercado passou a fechar com divergência zero.",
    "Motor em Go validado em paralelo ao motor principal, com casamentos 100% idênticos e nenhuma quebra de conservação nas métricas registradas na documentação de julho de 2026.",
    "Integração com o robô formador de mercado LMM pela API dedicada, com envio de ordens em lote e limites por conta.",
  ],

  limits: [
    "O livro de ofertas vive no banco relacional: a serialização por mercado garante consistência, mas limita o paralelismo em mercados muito ativos; o motor Go em memória foi a resposta de arquitetura.",
    "Manter dois motores de casamento equivalentes (PHP e Go) exige que toda regra nova seja implementada e testada nos dois.",
    "Parte da API acumulou lógica em um arquivo de rotas extenso, fora dos serviços de domínio, o que dificulta testes isolados e revisão.",
    "A resolução por IA depende da qualidade das fontes e da lista de domínios confiáveis; mercados ambíguos dependem de revisão humana.",
    "Aplicação e banco concentrados em um único servidor, com escala vertical; a custódia fica separada, mas o núcleo transacional não tem réplica.",
    "Dependência de provedores externos para PIX, verificação de identidade, dados esportivos, IA e rede Polygon, cada um com seus limites e indisponibilidades.",
  ],

  links: [],
};
