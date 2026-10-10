import type {CaseStudy} from "@/lib/case-types";

export const certame: CaseStudy = {
  slug: "certame",
  name: "Certame",
  group: "plataformas",
  category: "Plataforma transacional com prova pública · Python",
  summary:
    "Plataforma de campanhas com prêmios vinculadas a causas sociais, em que regra, sorteio e resultado podem ser conferidos por qualquer pessoa. Reúne marketplace, checkout Pix, painéis de parceiro e de operação, motor de sorteio com compromisso prévio e registro de provas em blockchain.",
  role: "CTO e sócio",
  organization: "Certame",
  period: "jun/2026 – atual",
  stage: "Site publicado",
  stageNote: "",
  platforms: [
    "Web (site do comprador, responsivo)",
    "Painel do parceiro organizador",
    "Painel administrativo",
    "Páginas públicas de verificação",
    "Apps Expo do comprador e do parceiro",
  ],
  cover: {
    src: "/images/cases/certame/home-desktop.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da Certame com busca, filtros por causa, banner e o cartão de uma campanha aberta.",
    caption: "Página inicial em certame.app, outubro de 2026. Números da tela são ilustrativos.",
  },
  gallery: [
    {
      src: "/images/cases/certame/campanha-desktop.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de uma campanha com galeria dos prêmios, preço por título, seletor de quantidade, prazo de compra e entidade beneficiária.",
      caption: "Página de campanha, outubro de 2026. Números da tela são ilustrativos.",
    },
    {
      src: "/images/cases/certame/ancora-desktop.jpg",
      width: 1440,
      height: 1000,
      alt: "Página pública de integridade com o código-resumo da trilha de eventos, total de eventos registrados e histórico de códigos diários.",
      caption: "Página de registro diário, outubro de 2026, com a trilha de eventos encadeada. Números da tela são ilustrativos.",
    },
    {
      src: "/images/cases/certame/como-funciona-desktop.jpg",
      width: 1440,
      height: 1000,
      alt: "Página Como funciona com o passo a passo da participação e o quadro de regras: mínimo por pedido, maioridade e documentos antes de pagar.",
      caption: "Página institucional Como funciona, outubro de 2026.",
    },
    {
      src: "/images/cases/certame/home-mobile.jpg",
      width: 390,
      height: 844,
      alt: "Página inicial no celular com busca, filtros, banner, cartão de campanha e barra inferior com Início, Causas e Validar.",
      caption: "Versão para celular, outubro de 2026. Números da tela são ilustrativos.",
    },
  ],

  history: {
    audience:
      "Pessoas que querem apoiar uma causa social concorrendo a prêmios; instituições e organizadores que precisam arrecadar com regras claras; e a capitalizadora parceira, que exige rastreabilidade de vendas, títulos e sorteios.",
    problem:
      "Campanhas com prêmios ligadas a causas costumam pedir confiança no organizador: o comprador não tem como conferir se a regra foi definida antes da venda, se o sorteio foi justo e se a causa recebeu o que foi prometido. A Certame foi desenhada para que cada afirmação pública tenha um registro verificável embaixo, operando dentro do modelo regulado de títulos de capitalização.",
    constraints:
      "Operação dentro do modelo de títulos de capitalização, com capitalizadora parceira (modelo regulado pela SUSEP), o que exige documentação técnica, segregação de funções e evidências de controle. LGPD: nenhum dado pessoal pode ir para a blockchain e o CPF não pode ser gravado em claro. Princípio de produto: a blockchain registra provas, nunca valor; não há token negociável.",
    milestones: [
      {when: "jul/2026", what: "Arquitetura v1.0 aprovada: monolito modular em FastAPI, PostgreSQL, Redis, worker e camada on-chain na rede Base."},
      {when: "jul/2026", what: "Fundação implementada: migrações Alembic, fila de ancoragens on-chain com novas tentativas, worker, Docker Compose e integração contínua."},
      {when: "ago/2026", what: "Consolidação de bases de código divergentes em um monorepo único, governado pelo documento de arquitetura; esteira de qualidade com portões bloqueantes."},
      {when: "set/2026", what: "Motor de sorteio v2 com compromisso da semente antes da revelação e conferência pública."},
      {when: "set/2026", what: "Versão 1.2.0 entregue em certame.app: site do comprador, painéis de parceiro e operação, checkout Pix e verificação pública."},
      {when: "set–out/2026", what: "Semana de testes ponta a ponta com roteiros, chamados por defeito e reteste; publicador on-chain reduzido a um único caminho, validado com transações reais na rede."},
      {when: "out/2026", what: "Documentação técnica e controles para a capitalizadora parceira, incluindo segregação de papéis."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a arquitetura oficial (monolito modular, SSR, PostgreSQL, Redis, worker, camada on-chain) e a regra de que o código serve à arquitetura documentada.",
      "Estabeleci os princípios de produto que guiam o desenho técnico: prova pública antes da venda, nenhum dado pessoal on-chain e token de prova, nunca de valor.",
      "Liderei as decisões de topologia (domínios por público, sessões separadas), de autenticação (conta obrigatória, verificação de e-mail, 2FA para parceiro e admin) e de virada para produção.",
      "Conduzi a frente técnica junto à capitalizadora parceira: documentação, evidências, política de segurança e reestruturação de controles.",
      "Defini o padrão de engenharia com segurança aplicada e a esteira de oito portões bloqueantes.",
    ],
    direct: [
      "Estruturei a consolidação das bases anteriores em um monorepo único e versionado, com migrações encadeadas.",
      "Implementei o backend FastAPI, o checkout Pix idempotente, o motor de sorteio v2, a trilha de auditoria encadeada, os atestados assinados e a fila de ancoragem on-chain.",
      "Operei a implantação no servidor com Docker Compose, backups, janelas de subida fora dos horários de sorteio e conferência de dados antes e depois de cada versão.",
      "Coordenei os roteiros de QA ponta a ponta e validei pessoalmente os fluxos de compra, sorteio, verificação e painéis.",
    ],
    team: [
      "Equipe de desenvolvimento e parceiro de tecnologia sob minha coordenação técnica, com nomes preservados.",
    ],
    ai: [],
  },

  architecture: {
    intro:
      "A Certame é uma instância única e monolítica, organizada por domínios: FastAPI com páginas renderizadas no servidor, PostgreSQL, Redis e um worker de tarefas, em contêineres atrás de nginx. Um mesmo backend atende o site do comprador, o painel do parceiro e o painel administrativo, roteando por domínio com sessões separadas por público. A confiança se apoia em três camadas independentes: trilha de auditoria com hash encadeado, atestados assinados com Ed25519 e registro de hashes em contrato na rede Base.",
    diagram: {
      title: "Arquitetura da plataforma Certame",
      tiers: [
        {label: "Públicos", nodes: ["Comprador", "Parceiro organizador", "Equipe de operação", "Verificador público"]},
        {label: "Interface", nodes: ["Site SSR (Jinja2)", "Painel do parceiro", "Painel administrativo", "Páginas de verificação"]},
        {label: "Aplicação", nodes: ["API FastAPI (modulith)", "Motor de sorteio v2", "Worker de tarefas"]},
        {label: "Dados", nodes: ["PostgreSQL 16", "Redis 7", "Trilha hash encadeada"]},
        {label: "Serviços externos", nodes: ["Gateway Pix", "Rede Base", "Resend (e-mail)", "Didit (KYC)"]},
      ],
      links: [
        "Os quatro públicos acessam interfaces web renderizadas pelo mesmo backend, separadas por domínio e por cookie de sessão.",
        "A API FastAPI concentra regras de campanha, checkout, saldo, KYC e sorteio; o motor de sorteio roda no horário agendado.",
        "O worker processa reservas vencidas, a âncora diária e a fila de ancoragens on-chain fora da requisição.",
        "PostgreSQL guarda o estado e a trilha de auditoria encadeada; Redis atende limite de requisições compartilhado e cache de leitura.",
        "O worker publica hashes em um contrato inteligente de registro na rede Base; e-mails transacionais saem pelo Resend e o KYC do parceiro passa pela Didit.",
      ],
    },
    layers: [
      {
        name: "Backend",
        content:
          "Python 3.12, FastAPI e Starlette sobre Uvicorn; Pydantic v2 para validação; SQLAlchemy 2.0 e Alembic, com 89 migrações versionadas. Contratos de arquitetura com import-linter impedem que serviços conheçam a camada HTTP e que a criptografia dependa da aplicação.",
      },
      {
        name: "Interface",
        content:
          "Páginas renderizadas no servidor com Jinja2 e CSS próprio, com ícones SVG e checagem de acessibilidade com axe nas telas revisadas. Apps do comprador e do parceiro em Expo 52, React Native 0.76 e TypeScript.",
      },
      {
        name: "Dados e filas",
        content:
          "PostgreSQL 16 em produção e SQLite apenas no desenvolvimento; Redis 7 para limite de requisições entre processos e cache. Valores monetários em centavos inteiros; CPF cifrado em repouso e buscado por hash.",
      },
      {
        name: "Prova e criptografia",
        content:
          "Trilha de auditoria append-only com SHA-256 encadeado; atestados em JSON canônico assinados com Ed25519 (biblioteca cryptography); hash Argon2id na autenticação. Contrato de registro em Solidity 0.8.20, que só emite eventos com código e hash, publicado via web3.py na rede Base.",
      },
      {
        name: "Documentos",
        content:
          "Comprovantes, certificados e termos em PDF com WeasyPrint e ReportLab, com QR Code apontando para a verificação pública. Arquivos enviados passam por re-encode com Pillow e por varredura no ClamAV, com falha fechada.",
      },
      {
        name: "Integrações",
        content:
          "Abstração de gateway Pix com adaptadores por provedor e modo de teste. E-mail transacional pelo Resend com webhook de eventos de entrega; KYC de identidade do parceiro pela Didit; login social do comprador com validação do token do provedor.",
      },
      {
        name: "Infraestrutura e qualidade",
        content:
          "Docker Compose com serviços de migração, aplicação e worker, aplicação exposta só no loopback atrás de nginx. GitHub Actions com oito portões: ruff, import-linter, pytest com piso de cobertura de 70%, migrações que sobem e descem, gitleaks, pip-audit, SAST e testes de segurança, ponta a ponta com Playwright, orçamento de peso das páginas e padrão de mensagem de commit. Erros monitorados com Sentry.",
      },
    ],
  },

  decisions: [
    {
      title: "Sorteio com compromisso prévio e conferência pública",
      problem:
        "Um sorteio feito pela própria plataforma só é crível se ninguém, nem a equipe, puder escolher o resultado depois de conhecer os participantes.",
      decision:
        "Implementei um motor em que, uma hora antes do sorteio, a lista de títulos vendidos é congelada, uma semente de 32 bytes é gerada e só o compromisso SHA-256 de campanha, lista e semente é publicado. No horário, a semente é revelada e a posição contemplada é derivada por HMAC-SHA256 com amostragem por rejeição, sem viés de módulo e sem repetir título quando há vários prêmios.",
      reason:
        "Qualquer pessoa consegue refazer a conta na página de verificação, sem depender de fonte externa nem de entrada manual de número; a rota antiga de apuração manual passou a responder 410.",
      tradeoff:
        "A semente precisa ficar guardada cifrada até a revelação, e o cronograma rígido impede ajustes de última hora na campanha.",
      learning:
        "Centralizar os estados da campanha num único módulo evitou que campanhas sorteadas sumissem de telas que conheciam apenas o fluxo antigo.",
    },
    {
      title: "Blockchain como cartório, com fila idempotente",
      problem:
        "Registrar provas em rede pública não pode gerar publicação duplicada, publicar na rede errada nem expor dados pessoais.",
      decision:
        "Cada evento entra numa fila com chave única por código e tipo; repetir o mesmo código com conteúdo diferente é recusado. A transação é assinada e seu hash gravado antes do envio, e uma nova tentativa consulta esse hash na rede antes de reenviar. O publicador recusa RPC cujo chain id não seja o configurado, e uma trava no PostgreSQL garante uma publicação por vez entre site e worker.",
      reason:
        "Com o hash gravado antes do envio, uma queda no meio da publicação não gera transação dupla. A trilha interna encadeada existe independentemente da rede, então instabilidade da chain atrasa o registro externo sem bloquear a operação.",
      tradeoff:
        "O publicador tem um único caminho, sempre com rede real: os testes automáticos conferem a fila sem publicar, e a publicação é validada com transações de verdade, o que exige saldo na rede e uma etapa manual de verificação.",
      learning:
        "Uma campanha aprovada fica à espera da ancoragem e só entra na vitrine quando o registro é confirmado, o que amarra a regra pública ao momento anterior à venda.",
    },
    {
      title: "Checkout Pix com intenção idempotente e eventos at least once",
      problem:
        "Cliques repetidos, recarregamento de página e webhooks reenviados pelo provedor podiam gerar pedidos duplicados ou confirmar pagamento duas vezes.",
      decision:
        "A compra começa por uma intenção com chave de idempotência obrigatória e comando canônico com digest; o pedido é vinculado na mesma transação da reserva, antes de qualquer chamada ao provedor. Eventos de pagamento são persistidos com chave única por provedor e id de evento, junto com o hash do payload.",
      reason:
        "Uma retomada nunca cria segundo pedido nem chama o gateway de novo, e o mesmo id de evento com conteúdo diferente é detectado em vez de aceito.",
      tradeoff:
        "O fluxo tem mais estados e tabelas do que um checkout simples, e o cliente precisa preservar a chave da tentativa entre telas.",
    },
    {
      title: "Esteira com portões bloqueantes e dependências fixadas",
      problem:
        "Num sistema que cifra CPF e lida com sorteios regulados, regressões de segurança e de schema precisam ser barradas antes do deploy, não descobertas em produção.",
      decision:
        "Fixei versões exatas de dependências e montei oito portões no CI, incluindo varredura de CVE, segredos no histórico, SAST, migrações que sobem e descem e testes de segurança. Toda vulnerabilidade encontrada vira teste automatizado antes da correção.",
      reason:
        "A primeira varredura de dependências encontrou CVEs em quatro pacotes, inclusive na biblioteca que cifra os CPFs. Versão fixa torna o build reproduzível e faz uma CVE nova aparecer como mudança visível.",
      tradeoff:
        "Atualizar dependências virou ato deliberado, e exceções de auditoria precisam de justificativa e prazo de validade.",
      learning:
        "Regras registradas a partir de incidentes reais: coluna NOT NULL nova exige valor padrão, porque o CI roda em banco vazio e produção tem linhas; e é proibido silenciar exceções, depois que um erro engolido escondeu que um e-mail de verificação nunca era enviado.",
    },
  ],

  journey: {
    title: "Compra por Pix até o comprovante verificável (dados sintéticos)",
    steps: [
      "Comprador com conta verificada escolhe 10 títulos de R$ 0,50 numa campanha ativa; a tela calcula R$ 5,00, o mínimo por pedido no Pix. Abaixo do mínimo, a interface orienta a usar saldo ou ajustar a quantidade.",
      "O cliente envia a intenção com uma chave de idempotência. Sem chave válida, a API recusa o pedido; repetir a mesma chave com conteúdo diferente é recusado como divergente.",
      "A API reserva os títulos e vincula o pedido, à espera de pagamento, na mesma transação; só então gera a cobrança Pix. Reserva não paga vence em 15 minutos e libera os títulos.",
      "O provedor envia o evento de pagamento; a API grava o evento com chave única por provedor e id, confere o hash do payload e marca o pedido como pago. Um reenvio do mesmo evento não altera o pedido de novo.",
      "A compra entra na trilha de auditoria encadeada e na fila de ancoragem; o worker publica o hash na rede Base e grava transação e bloco.",
      "O comprador recebe e-mail de confirmação e um comprovante em PDF com QR Code. Quem lê o QR abre a página pública de verificação, que mostra a prova sem dados do comprador.",
    ],
  },

  dataModel: [
    {entity: "Campanha", fields: "slug, status (rascunho, em revisão, à espera de ancoragem, ativa, encerrada, finalizada), preço por título, quantidade, cronograma do sorteio, entidade beneficiária"},
    {entity: "Pedido", fields: "campanha, quantidade, valor em centavos, status (à espera de pagamento, pago, vencido), tipo, identificador da cobrança Pix, CPF cifrado e hash do CPF"},
    {entity: "IntençãoCheckoutPix", fields: "cliente, chave de idempotência, comando canônico, digest, ambiente, prazo de lease"},
    {entity: "Evento de pagamento", fields: "provedor, id do evento, tipo, hash do payload, valor em centavos, status, recebido em, processado em"},
    {entity: "Auditoria", fields: "evento, dados, hash anterior, hash"},
    {entity: "Ancoragem", fields: "código, tipo, hash do payload, rede, status, tentativas, hash da transação, bloco, erro"},
    {entity: "Atestado", fields: "código público, payload canônico, assinatura Ed25519"},
    {entity: "Instituição (ONG)", fields: "nome, causa, documentação de certificação, dados de repasse (classificados como sensíveis)"},
  ],

  results: [
    "Plataforma completa entregue em certame.app: site do comprador, painel do parceiro, painel administrativo, páginas públicas de verificação e apps Expo para comprador e parceiro.",
    "Semana de QA de 28/09 a 02/10/2026 com roteiros por fluxo: cadastro, login social, compra com Pix, saldo, comprovantes, verificação pública, painéis e e-mails aprovados; defeitos registrados como chamados e retestados.",
    "Bateria automática de 28/09/2026: 2.338 testes aprovados, 51 pulados e 4 falhas, sendo três testes desatualizados corrigidos no mesmo dia e uma questão de regra de produto.",
    "Sorteios de demonstração executados automaticamente no horário em 29/09/2026, com compromisso publicado antes, vendas fechadas uma hora antes, conferência pública íntegra e registro on-chain.",
    "Pacote técnico de documentação e evidências entregue à capitalizadora parceira em setembro de 2026.",
  ],

  limits: [
    "O cronograma rígido do sorteio, com vendas fechadas uma hora antes e semente guardada cifrada até a revelação, troca flexibilidade de última hora por auditabilidade.",
    "Próximo passo: publicar a âncora diária da trilha de auditoria também fora da Certame, como prova externa adicional.",
    "Próximo passo: exportação diária por SFTP com layout configurável por capitalizadora.",
    "Próximo passo: modelar a participação de promotoras no fluxo financeiro de campanha quando houver arranjo comercial definido.",
  ],

  links: [{label: "certame.app", url: "https://certame.app/", kind: "produto"}],

};
