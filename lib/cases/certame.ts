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
  stageNote:
    "A plataforma completa está publicada em certame.app desde 24/09/2026, operando em modo de homologação: o Pix é simulado, não há venda com dinheiro real e as campanhas exibidas são de demonstração e teste. O registro on-chain funciona na rede de testes Base Sepolia; a migração para a rede principal Base faz parte da virada para produção, ainda não executada. A publicação externa da âncora diária está pendente e a própria página pública informa isso. Os apps Expo existem em código, sem build publicado nas lojas.",
  platforms: [
    "Web (site do comprador, responsivo)",
    "Painel do parceiro organizador",
    "Painel administrativo",
    "Páginas públicas de verificação",
    "Apps Expo (em código, não publicados)",
  ],
  cover: {
    src: "/images/cases/certame/home-desktop.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial da Certame com busca, filtros por causa, banner e o cartão de uma campanha aberta.",
    caption: "Site publicado em certame.app, outubro de 2026. Campanha e contadores são dados de homologação.",
  },
  gallery: [
    {
      src: "/images/cases/certame/campanha-desktop.jpg",
      width: 1440,
      height: 1000,
      alt: "Página de uma campanha com galeria dos prêmios, preço por título, seletor de quantidade, prazo de compra e entidade beneficiária.",
      caption: "Página de campanha, outubro de 2026. Campanha de teste em ambiente de homologação; valores e quantidades não são resultados.",
    },
    {
      src: "/images/cases/certame/ancora-desktop.jpg",
      width: 1440,
      height: 1000,
      alt: "Página pública de integridade com o código-resumo da trilha de eventos, total de eventos registrados e histórico de códigos diários marcados como só na Certame.",
      caption: "Página de registro diário, outubro de 2026. Mostra a trilha encadeada e informa que a publicação externa da âncora ainda está pendente.",
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
      caption: "Versão para celular do site publicado, outubro de 2026. Dados de homologação.",
    },
  ],

  history: {
    audience:
      "Pessoas que querem apoiar uma causa social concorrendo a prêmios; instituições e organizadores que precisam arrecadar com regras claras; e a capitalizadora parceira, que exige rastreabilidade de vendas, títulos e sorteios.",
    problem:
      "Campanhas com prêmios ligadas a causas costumam pedir confiança no organizador: o comprador não tem como conferir se a regra foi definida antes da venda, se o sorteio foi justo e se a causa recebeu o que foi prometido. A Certame foi desenhada para que cada afirmação pública tenha um registro verificável embaixo, operando dentro do modelo regulado de títulos de capitalização.",
    constraints:
      "Operação condicionada à homologação junto a uma capitalizadora (modelo regulado pela SUSEP), o que exige documentação técnica, segregação de funções e evidências de controle. LGPD: nenhum dado pessoal pode ir para a blockchain e o CPF não pode ser gravado em claro. Princípio de produto: a blockchain registra provas, nunca valor; não há token negociável.",
    milestones: [
      {when: "jul/2026", what: "Arquitetura v1.0 aprovada: monolito modular em FastAPI, PostgreSQL, Redis, worker e camada on-chain na rede Base, com testes primeiro em Base Sepolia."},
      {when: "jul/2026", what: "Fundação implementada: migrações Alembic, fila de ancoragens on-chain com novas tentativas, worker, Docker Compose e integração contínua."},
      {when: "ago/2026", what: "Consolidação de bases de código divergentes em um monorepo único, governado pelo documento de arquitetura; esteira de qualidade com portões bloqueantes."},
      {when: "set/2026", what: "Motor de sorteio v2 com compromisso da semente antes da revelação e conferência pública."},
      {when: "set/2026", what: "Versão 1.2.0 publicada em certame.app, em modo de homologação, com Pix simulado."},
      {when: "set–out/2026", what: "Semana de testes ponta a ponta com roteiros, chamados por defeito e reteste; publicador on-chain reduzido a um único caminho, validado com transações reais na Base Sepolia."},
      {when: "out/2026", what: "Revisão de documentos e controles para a homologação com capitalizadora, incluindo segregação de papéis e plano de teste de invasão independente."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini a arquitetura oficial (monolito modular, SSR, PostgreSQL, Redis, worker, camada on-chain) e a regra de que o código serve à arquitetura documentada.",
      "Estabeleci os princípios de produto que guiam o desenho técnico: prova pública antes da venda, nenhum dado pessoal on-chain e token de prova, nunca de valor.",
      "Liderei as decisões de topologia (domínios por público, sessões separadas), de autenticação (conta obrigatória, verificação de e-mail, 2FA para parceiro e admin) e de virada para produção.",
      "Conduzi a frente técnica da homologação com a capitalizadora: documentação, evidências, política de segurança e plano de reestruturação de controles.",
      "Defini o padrão de engenharia com segurança aplicada e a esteira de oito portões bloqueantes.",
    ],
    direct: [
      "Estruturei a consolidação das bases anteriores em um monorepo único e versionado, com migrações encadeadas.",
      "Implementei, com agentes de IA sob minha direção, o backend FastAPI, o checkout Pix idempotente, o motor de sorteio v2, a trilha de auditoria encadeada, os atestados assinados e a fila de ancoragem on-chain.",
      "Operei a implantação no servidor com Docker Compose, backups, janelas de subida fora dos horários de sorteio e conferência de dados antes e depois de cada versão.",
      "Coordenei os roteiros de QA ponta a ponta e validei pessoalmente os fluxos de compra, sorteio, verificação e painéis.",
    ],
    team: [
      "Equipe de desenvolvimento e parceiro de tecnologia sob minha coordenação técnica, com nomes preservados.",
    ],
    ai: [
      "O desenvolvimento é feito com agentes de codificação (Claude Code e outros) sob minha direção; o repositório tem instruções formais que obrigam os agentes à leitura da arquitetura, do padrão de segurança e do estado atual antes de qualquer alteração.",
      "Eu defino escopo e arquitetura, reviso as entregas e aprovo cada subida; mudanças destrutivas exigem plano, rollback e aprovação humana antes de executar.",
      "Os agentes registram cada etapa em diários de execução e corrigem defeitos com teste automático; a conclusão de um chamado de QA é feita por outra pessoa, não por quem corrigiu.",
    ],
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
        {label: "Serviços externos", nodes: ["Gateway Pix (simulado)", "Base Sepolia", "Resend (e-mail)", "Didit (KYC)"]},
      ],
      links: [
        "Os quatro públicos acessam interfaces web renderizadas pelo mesmo backend, separadas por domínio e por cookie de sessão.",
        "A API FastAPI concentra regras de campanha, checkout, saldo, KYC e sorteio; o motor de sorteio roda no horário agendado.",
        "O worker processa reservas vencidas, a âncora diária e a fila de ancoragens on-chain fora da requisição.",
        "PostgreSQL guarda o estado e a trilha de auditoria encadeada; Redis atende limite de requisições compartilhado e cache de leitura.",
        "O worker publica hashes em um contrato inteligente de registro na Base Sepolia; e-mails transacionais saem pelo Resend e o KYC do parceiro passa pela Didit.",
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
          "Páginas renderizadas no servidor com Jinja2 e CSS próprio, com ícones SVG e checagem de acessibilidade com axe nas telas revisadas. Apps do comprador e do parceiro em Expo 52, React Native 0.76 e TypeScript, ainda sem build publicado.",
      },
      {
        name: "Dados e filas",
        content:
          "PostgreSQL 16 em produção e SQLite apenas no desenvolvimento; Redis 7 para limite de requisições entre processos e cache. Valores monetários em centavos inteiros; CPF cifrado em repouso e buscado por hash.",
      },
      {
        name: "Prova e criptografia",
        content:
          "Trilha de auditoria append-only com SHA-256 encadeado; atestados em JSON canônico assinados com Ed25519 (biblioteca cryptography); hash Argon2id na autenticação. Contrato de registro em Solidity 0.8.20, que só emite eventos com código e hash, publicado via web3.py na Base Sepolia.",
      },
      {
        name: "Documentos",
        content:
          "Comprovantes, certificados e termos em PDF com WeasyPrint e ReportLab, com QR Code apontando para a verificação pública. Arquivos enviados passam por re-encode com Pillow e por varredura no ClamAV, com falha fechada.",
      },
      {
        name: "Integrações",
        content:
          "Abstração de gateway Pix com adaptadores para provedores e modo simulado, hoje usado em homologação. E-mail transacional pelo Resend com webhook de eventos de entrega; KYC de identidade do parceiro pela Didit; login social do comprador com validação do token do provedor.",
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
        "Removi o modo simulado do publicador: os testes automáticos conferem a fila sem publicar e a publicação real é validada na rede de testes, o que exige saldo de teste e uma etapa manual de verificação.",
      learning:
        "Uma campanha aprovada fica em aguardando ancoragem e só entra na vitrine quando o registro é confirmado, o que amarra a regra pública ao momento anterior à venda.",
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
    title: "Compra por Pix até o comprovante verificável (dados sintéticos, ambiente de homologação)",
    steps: [
      "Comprador com conta verificada escolhe 10 títulos de R$ 0,50 numa campanha ativa; a tela calcula R$ 5,00, o mínimo por pedido no Pix. Abaixo do mínimo, a interface orienta a usar saldo ou ajustar a quantidade.",
      "O cliente envia a intenção com uma chave de idempotência. Sem chave válida, a API recusa o pedido; repetir a mesma chave com conteúdo diferente é recusado como divergente.",
      "A API reserva os títulos e vincula o pedido, aguardando pagamento, na mesma transação; só então gera a cobrança Pix. Reserva não paga expira em 15 minutos e libera os títulos.",
      "O provedor envia o evento de pagamento; a API grava o evento com chave única por provedor e id, confere o hash do payload e marca o pedido como pago. Um reenvio do mesmo evento não altera o pedido de novo.",
      "A compra entra na trilha de auditoria encadeada e na fila de ancoragem; o worker publica o hash na Base Sepolia e grava transação e bloco.",
      "O comprador recebe e-mail de confirmação e um comprovante em PDF com QR Code. Quem lê o QR abre a página pública de verificação, que mostra a prova sem dados do comprador.",
    ],
  },

  dataModel: [
    {entity: "Campanha", fields: "slug, status (rascunho, em revisão, aguardando ancoragem, ativa, encerrada, finalizada), preço por título, quantidade, cronograma do sorteio, entidade beneficiária"},
    {entity: "Pedido", fields: "campanha, quantidade, valor em centavos, status (aguardando pagamento, pago, expirado), tipo, identificador da cobrança Pix, CPF cifrado e hash do CPF"},
    {entity: "IntençãoCheckoutPix", fields: "cliente, chave de idempotência, comando canônico, digest, ambiente, prazo de lease"},
    {entity: "Evento de pagamento", fields: "provedor, id do evento, tipo, hash do payload, valor em centavos, status, recebido em, processado em"},
    {entity: "Auditoria", fields: "evento, dados, hash anterior, hash"},
    {entity: "Ancoragem", fields: "código, tipo, hash do payload, rede, status, tentativas, hash da transação, bloco, erro"},
    {entity: "Atestado", fields: "código público, payload canônico, assinatura Ed25519"},
    {entity: "Instituição (ONG)", fields: "nome, causa, documentação de certificação, dados de repasse (classificados como sensíveis)"},
  ],

  results: [
    "Plataforma completa publicada em certame.app em 24/09/2026, em modo de homologação, sem venda com dinheiro real.",
    "Semana de QA de 28/09 a 02/10/2026 com roteiros por fluxo: cadastro, login social, compra com Pix simulado, saldo, comprovantes, verificação pública, painéis e e-mails aprovados; defeitos registrados como chamados e retestados.",
    "Bateria automática de 28/09/2026: 2.338 testes aprovados, 51 pulados e 4 falhas, sendo três testes desatualizados corrigidos no mesmo dia e uma pendência de decisão de produto.",
    "Sorteios de demonstração executados automaticamente no horário em 29/09/2026, com compromisso publicado antes, vendas fechadas uma hora antes e conferência pública íntegra, registrados na Base Sepolia.",
    "Pacote técnico de documentação e evidências entregue à capitalizadora parceira em setembro de 2026 para avaliação de homologação.",
  ],

  limits: [
    "Ainda sem operação comercial: o Pix real e a migração do registro on-chain para a rede principal Base dependem da conclusão da homologação e da virada para produção.",
    "A publicação externa da âncora diária está pendente; hoje o código diário fica apenas na Certame, como a página pública informa.",
    "Apps Expo do comprador e do parceiro sem build nem validação em aparelhos.",
    "Homologação em revisão: segregação de papéis (responsável por segurança e substituto técnico distintos do CTO), teste de invasão por empresa independente e evidências de treinamento estão planejados.",
    "Exportação diária por SFTP com layout configurável por capitalizadora está planejada, não implementada.",
    "Participação de promotoras no fluxo financeiro de campanha está prevista na arquitetura, sem modelagem em código até haver arranjo comercial definido.",
  ],

  links: [{label: "certame.app", url: "https://certame.app/", kind: "produto"}],

};
