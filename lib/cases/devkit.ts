import type {CaseStudy} from "@/lib/case-types";

export const devkit: CaseStudy = {
  slug: "devkit",
  name: "Devkit",
  group: "ferramentas",
  category: "Ferramenta de navegador · Desenvolvimento",
  summary:
    "Site com sete utilitários para desenvolvedores, como formatador de JSON, conversão CSV e JSON e decodificador de JWT, executados no navegador sem envio de dados, em três idiomas.",
  role: "Produto próprio: concepção, arquitetura e desenvolvimento",
  period: "Julho de 2026",
  stage: "Versão local",
  stageNote:
    "Site estático gerado e validado localmente em julho de 2026 (24 páginas em três idiomas). A implantação em Cloudflare Pages está descrita no projeto, mas não foi feita; domínio, AdSense e publicação ficaram para a etapa final do portfólio de sites. Os espaços de anúncio nas telas são marcadores de layout, não anúncios ativos.",
  platforms: ["Web (desktop e celular)"],
  cover: {
    src: "/images/screens/local-devkit.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do Devkit em tema escuro, com os cartões das sete ferramentas e espaços reservados para anúncios na lateral.",
    caption: "Versão local, outubro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/devkit/json.jpg",
      width: 1440,
      height: 953,
      alt: "Formatador de JSON com o exemplo carregado: entrada compacta à esquerda e saída indentada com realce de sintaxe à direita, com o status JSON válido.",
      caption: "Versão local, captura de julho de 2026",
    },
    {
      src: "/images/cases/devkit/mobile.jpg",
      width: 780,
      height: 1688,
      alt: "Página inicial do Devkit em largura de celular, com as ferramentas empilhadas em uma coluna.",
      caption: "Versão local em celular, captura de julho de 2026",
    },
  ],

  history: {
    audience:
      "Desenvolvedores e estudantes que precisam formatar, converter ou inspecionar dados rapidamente durante o trabalho.",
    problem:
      "Tarefas como validar JSON, converter CSV ou ler o conteúdo de um token costumam ser feitas em sites que recebem o texto colado no servidor. Para dados de trabalho, isso é um risco desnecessário. O Devkit foi pensado como irmão técnico do Presto PDF: tudo roda no navegador.",
    constraints:
      "Sem backend e sem bibliotecas externas de processamento: os motores de conversão são próprios. A prévia de Markdown usa innerHTML, o que exige tratamento cuidadoso de entrada para não abrir espaço a XSS.",
    milestones: [
      {when: "19/07/2026", what: "Especificação e arquitetura: sete ferramentas, três idiomas, visual de editor de código."},
      {when: "28/07/2026", what: "Versão v3 com auditoria: correção de XSS na prévia de Markdown, cabeçalhos de segurança, revisão de acentuação e animações com respeito a movimento reduzido."},
      {when: "Etapa futura", what: "Implantação em Cloudflare Pages, domínio e monetização, previstas para o fim do portfólio de sites."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o escopo da primeira versão (sete ferramentas) e o princípio de processamento local, alinhado ao Presto PDF.",
      "Estabeleci os limites declarados na interface, como a decodificação de JWT sem verificação de assinatura.",
    ],
    direct: [
      "Estruturei o gerador estático que produz 24 páginas (início e sete ferramentas em português, inglês e espanhol), com slugs localizados, hreflang e JSON-LD do tipo SoftwareApplication.",
      "Implementei motores próprios: parser de CSV com aspas e escape, conversão CSV e JSON com inferência de números e booleanos, Base64 seguro para UTF-8, parser compacto de Markdown, decodificação de JWT e realce de JSON.",
      "Corrigi uma falha de XSS na prévia de Markdown com escape de aspas e validação de esquema de URL, e configurei CSP e demais cabeçalhos de segurança.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro:
      "Site estático sem backend de processamento e sem dependências de terceiros para as ferramentas. Cada página é gerada em build com o exemplo inicial, FAQ e dados estruturados. No navegador, um script único implementa as sete ferramentas; o texto colado é processado em memória e nunca é enviado. A detecção de país na borda da Cloudflare, prevista para idioma e fuso, é a única função de servidor.",
    diagram: {
      title: "Arquitetura do Devkit",
      tiers: [
        {label: "Build", nodes: ["Gerador estático em Node"]},
        {label: "Site estático", nodes: ["24 páginas HTML", "Cabeçalhos _headers"]},
        {label: "Navegador", nodes: ["Ferramentas em JavaScript", "Detecção de idioma"]},
        {label: "Motores locais", nodes: ["JSON e CSV", "Base64 e URL", "Markdown e JWT"]},
      ],
      links: [
        "O build gera as páginas por idioma e por ferramenta.",
        "Cada página carrega o script da aplicação, sem bibliotecas externas.",
        "O texto colado é processado pelos motores locais, sem requisições de rede.",
      ],
    },
    layers: [
      {
        name: "Geração estática",
        content:
          "Um gerador estático em Node produz português na raiz, /en/ e /es/, com slugs localizados (por exemplo, formatador-json, json-formatter, formateador-json), FAQ, JSON-LD SoftwareApplication, sitemap e robots.",
      },
      {
        name: "Ferramentas",
        content:
          "Formatador de JSON (formatar, validar com posição do erro, minificar, realce), CSV para JSON e JSON para CSV, Base64 com UTF-8, Markdown para HTML com prévia ao vivo, decodificador de JWT com datas exp e iat legíveis, URL encode e decode e conversor de timestamp Unix em tempo real.",
      },
      {
        name: "Segurança",
        content:
          "Escape de HTML incluindo aspas, função urlSegura que aceita só http, https, mailto, tel, caminhos relativos e data de imagem; links gerados com rel noopener noreferrer nofollow. CSP com object-src 'none' e frame-ancestors 'none', HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP e CORP.",
      },
      {
        name: "Implantação",
        content:
          "Cloudflare Pages com saída em dist e uma Pages Function para detecção de país.",
      },
    ],
  },

  decisions: [
    {
      title: "Motores próprios em vez de bibliotecas",
      problem:
        "Ferramentas pequenas com bibliotecas externas aumentam o peso da página e a superfície de dependências a manter.",
      decision:
        "Escrever parsers compactos para CSV, Markdown, JWT e realce de JSON, usando APIs nativas do navegador onde possível.",
      reason:
        "Mantém as páginas leves, a CSP restrita a 'self' para scripts da aplicação e o comportamento sob controle direto.",
      tradeoff:
        "O parser de Markdown cobre o essencial (títulos, listas, ênfase, código, links e imagens) e não cobre tabelas nem HTML embutido.",
    },
    {
      title: "Não aceitar HTML embutido na prévia de Markdown",
      problem:
        "A auditoria encontrou duas brechas na prévia: o escape não tratava aspas e não havia validação do esquema das URLs, o que permitia execução de script na renderização.",
      decision:
        "Escapar aspas, validar esquemas por lista de permissão, transformar links inválidos em texto simples e manter a prévia sem suporte a HTML embutido.",
      reason:
        "Aceitar HTML embutido reabriria a mesma classe de falha que foi corrigida.",
      tradeoff:
        "Menos recursos de Markdown do que uma biblioteca completa.",
      learning:
        "As correções foram verificadas no navegador com quatro entradas de teste: nenhum script executou e um link legítimo foi preservado.",
    },
    {
      title: "Decodificar JWT sem prometer verificação",
      problem:
        "Uma ferramenta que mostra o conteúdo de um token pode ser confundida com uma validação de autenticidade.",
      decision:
        "Decodificar cabeçalho e payload para leitura, exibir o status com o aviso de assinatura não verificada e recomendar não colar tokens de produção.",
      reason:
        "Verificar a assinatura exigiria a chave, que não deve ser exposta em uma ferramenta de navegador.",
      tradeoff:
        "A ferramenta serve para inspeção, não para confirmar se um token é válido.",
    },
  ],

  journey: {
    title: "Formatar um JSON (dados de exemplo)",
    steps: [
      "A página abre com um objeto JSON de exemplo em uma linha.",
      "Ao formatar, o texto é interpretado com JSON.parse e reescrito com indentação.",
      "A saída recebe realce de sintaxe e o status mostra JSON válido ou a mensagem de erro.",
      "O usuário pode copiar, baixar ou minificar o resultado; nada é enviado pela rede.",
    ],
  },

  results: [
    "Julho de 2026: 24 páginas geradas sem falhas na verificação estrutural automatizada.",
    "Julho de 2026: correção de XSS verificada no navegador com quatro entradas de teste, sem execução de script, segundo a auditoria registrada no projeto.",
    "Julho de 2026: monitoramento de rede não registrou requisições com o texto colado pelo usuário.",
  ],
  limits: [
    "O parser de Markdown não cobre tabelas, citações aninhadas nem HTML embutido.",
    "O decodificador de JWT não verifica assinatura.",
    "A CSP mantém 'unsafe-inline' em scripts por causa do AdSense previsto.",
    "Base64 de arquivos e diff de JSON ficaram para uma fase seguinte.",
    "Próximos passos registrados como intenção: diff de JSON e texto, conversão XML e YAML, hash, gerador de UUID, testador de regex e conversor de cores.",
  ],

  links: [],

};
