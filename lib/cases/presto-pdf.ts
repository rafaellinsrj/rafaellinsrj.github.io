import type {CaseStudy} from "@/lib/case-types";

export const prestoPdf: CaseStudy = {
  slug: "presto-pdf",
  name: "Presto PDF",
  group: "ferramentas",
  category: "Ferramenta de navegador · Documentos PDF",
  summary:
    "Site com dez ferramentas de PDF que processam os arquivos inteiramente no navegador, sem upload para servidor, em português, inglês e espanhol.",
  role: "Produto próprio: concepção, arquitetura e desenvolvimento",
  period: "Julho de 2026",
  stage: "Versão local",
  stageNote:
    "Site estático gerado e validado localmente em julho de 2026 (33 páginas em três idiomas). A implantação em Cloudflare Pages está descrita no projeto, mas não foi feita; domínio, AdSense e publicação ficaram para a etapa final do portfólio de sites. Os espaços de anúncio que aparecem nas telas são marcadores de layout, não anúncios ativos.",
  platforms: ["Web (desktop e celular)"],
  cover: {
    src: "/images/screens/local-prestopdf.jpg",
    width: 1440,
    height: 1000,
    alt: "Página inicial do Presto PDF com a grade das dez ferramentas, o aviso de privacidade e espaços reservados para anúncios na lateral.",
    caption: "Versão local, outubro de 2026",
  },
  gallery: [
    {
      src: "/images/cases/presto-pdf/juntar.jpg",
      width: 1440,
      height: 1068,
      alt: "Ferramenta Juntar PDF com área para soltar arquivos, dois PDFs de teste listados em ordem e o botão Processar e baixar.",
      caption: "Versão local, captura de julho de 2026",
    },
    {
      src: "/images/cases/presto-pdf/mobile.jpg",
      width: 780,
      height: 1688,
      alt: "Página inicial do Presto PDF em largura de celular, com a lista de ferramentas em uma coluna.",
      caption: "Versão local em celular, captura de julho de 2026",
    },
  ],

  history: {
    audience:
      "Pessoas que precisam juntar, dividir, converter ou comprimir PDFs no dia a dia e não querem enviar documentos para um serviço de terceiros.",
    problem:
      "As ferramentas de PDF mais usadas na web dependem de upload do arquivo para processamento em servidor. Isso cria espera, limites de uso e uma questão de privacidade para documentos pessoais ou de trabalho. A proposta foi inverter a arquitetura: todo o processamento acontece no dispositivo de quem usa.",
    constraints:
      "Sem backend de processamento; o limite prático é a memória do aparelho. PDFs criptografados não são suportados pelas bibliotecas usadas. A política de segurança precisava conviver com o pdf.js em worker, downloads via blob e o código do AdSense previsto.",
    milestones: [
      {when: "18/07/2026", what: "Estrutura inicial do site, estilos e scripts de ferramentas."},
      {when: "27/07/2026", what: "Versão v3 com auditoria: verificação da promessa de não enviar arquivos, cabeçalhos de segurança, escape de nomes de arquivo e animações com respeito a movimento reduzido."},
      {when: "Etapa futura", what: "Implantação em Cloudflare Pages, domínio e monetização, previstas para o fim do portfólio de sites."},
    ],
  },

  responsibility: {
    leadership: [
      "Defini o posicionamento do produto: processamento 100% local como diferencial de privacidade e de custo de operação.",
      "Delimitei o escopo da primeira versão e registrei o que ficou de fora por exigir servidor ou WebAssembly pesado (proteção de arquivos, Word para PDF, compressão mantendo texto selecionável).",
    ],
    direct: [
      "Estruturei o gerador estático que produz 33 páginas: início e dez ferramentas em português, inglês e espanhol, com slugs localizados e hreflang.",
      "Implementei as dez ferramentas sobre pdf-lib (montagem e edição), PDF.js (renderização em worker) e JSZip (pacotes de saída), com as bibliotecas hospedadas no próprio site.",
      "Configurei os cabeçalhos de segurança (CSP, HSTS, nosniff, X-Frame-Options, COOP, CORP) com as liberações mínimas para worker e blob.",
      "Validei a promessa de privacidade com monitoramento das requisições no navegador durante o processamento de arquivos de teste.",
    ],
    team: [],
    ai: [],
  },

  architecture: {
    intro:
      "Site estático sem backend de processamento. O HTML de cada página é gerado em tempo de build; no navegador, um script único lê a configuração da página e aciona as bibliotecas de PDF. O arquivo do usuário é lido com APIs do navegador, processado em memória e devolvido como download local. A única função de servidor prevista é a detecção de país na borda da Cloudflare, usada para idioma e fuso, sem relação com os arquivos.",
    diagram: {
      title: "Arquitetura do Presto PDF",
      tiers: [
        {label: "Build", nodes: ["Gerador estático em Node", "Catálogo de ferramentas"]},
        {label: "Site estático", nodes: ["33 páginas HTML", "Cabeçalhos _headers"]},
        {label: "Navegador", nodes: ["Ferramentas em JavaScript", "Detecção de idioma"]},
        {label: "Processamento local", nodes: ["pdf-lib", "PDF.js em worker", "JSZip"]},
        {label: "Saída", nodes: ["Download via blob"]},
      ],
      links: [
        "O build gera as páginas a partir do catálogo de ferramentas.",
        "Cada página carrega o script da aplicação e as bibliotecas locais.",
        "Os arquivos são processados em memória pelas bibliotecas de PDF.",
        "O resultado é entregue como download, sem envio a servidor.",
      ],
    },
    layers: [
      {
        name: "Geração estática",
        content:
          "Um gerador estático em Node monta as páginas a partir de um catálogo de ferramentas, com títulos, descrições, perguntas frequentes e slugs por idioma. Português na raiz, inglês em /en/ e espanhol em /es/, com hreflang e sitemap.",
      },
      {
        name: "Ferramentas",
        content:
          "Juntar (ordem por arrastar), dividir (intervalos ou página a página, saída em ZIP), extrair páginas, organizar (miniaturas arrastáveis com exclusão), girar (90, 180 e 270 graus), PDF para JPG (resolução de 1x a 3x), imagem para PDF (JPG e PNG), comprimir, marca d'água e numerar páginas.",
      },
      {
        name: "Bibliotecas",
        content:
          "pdf-lib para criar e editar documentos, PDF.js 3.11.174 para renderizar páginas em worker e JSZip 3.10.1 para empacotar várias saídas. As três ficam em /vendor, servidas pelo próprio domínio, cerca de 2 MB com cache de longa duração.",
      },
      {
        name: "Segurança e privacidade",
        content:
          "CSP com worker-src e blob liberados apenas para o necessário, object-src 'none', frame-ancestors 'none', HSTS, nosniff, Referrer-Policy, Permissions-Policy, COOP e CORP. Nomes de arquivo escolhidos pelo usuário passam por escape antes de aparecer na tela.",
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
      title: "Processamento inteiramente no navegador",
      problem:
        "Serviços de PDF com upload exigem infraestrutura de processamento, impõem filas e limites e pedem que o usuário confie documentos a terceiros.",
      decision:
        "Executar todas as operações no cliente com pdf-lib, PDF.js e JSZip, sem endpoint que receba arquivos.",
      reason:
        "Elimina o custo de servidor por operação, permite uso sem limite artificial e transforma privacidade em uma propriedade verificável da arquitetura, não em uma promessa de política.",
      tradeoff:
        "O desempenho depende do aparelho; arquivos muito grandes em celulares antigos podem esgotar a memória da aba. Recursos que exigem processamento pesado ficaram fora da primeira versão.",
      learning:
        "A promessa foi testada com monitoramento de rede durante o processamento: nenhuma requisição carregou dados de arquivo.",
    },
    {
      title: "Compressão por rasterização com aviso explícito",
      problem:
        "Comprimir PDF mantendo texto vivo e otimizando fontes exige ferramentas que, na prática, rodam em servidor.",
      decision:
        "Comprimir renderizando cada página como imagem com qualidade ajustável, mostrar o tamanho antes e depois e avisar quando o resultado fica maior que o original.",
      reason:
        "Entrega redução real em PDFs compostos por imagens sem abrir mão do processamento local.",
      tradeoff:
        "O texto deixa de ser selecionável; a interface informa isso no resultado e recomenda manter o original quando a compressão não compensa.",
    },
    {
      title: "Bibliotecas hospedadas no próprio domínio",
      problem:
        "Carregar bibliotecas de CDN de terceiros amplia a superfície da CSP e cria dependência externa para a função principal do site.",
      decision:
        "Versionar pdf-lib, PDF.js e JSZip em /vendor e servi-las com cache imutável.",
      reason:
        "Mantém a CSP restrita a 'self' para scripts da aplicação e garante que a ferramenta funcione mesmo se um CDN mudar ou falhar.",
      tradeoff:
        "Atualizações de segurança, especialmente do PDF.js, passam a ser manuais e precisam de acompanhamento.",
    },
  ],

  journey: {
    title: "Juntar dois PDFs (dados de teste)",
    steps: [
      "O usuário solta a.pdf (2 páginas) e b.pdf (3 páginas) na área de arquivos.",
      "A lista mostra os dois arquivos com o tamanho; a ordem pode ser alterada arrastando.",
      "Ao processar, o pdf-lib copia as páginas na ordem definida para um novo documento em memória.",
      "O navegador oferece o download do PDF de 5 páginas por meio de um blob local.",
    ],
  },

  results: [
    "Julho de 2026: 33 páginas geradas sem falhas na verificação estrutural automatizada.",
    "Julho de 2026: fluxo de juntar 2 + 3 páginas resultou em 5 páginas, sem requisições com dados de arquivo e sem violações de CSP no console, segundo a auditoria registrada no projeto.",
    "Julho de 2026: a documentação registra compressão de um PDF de imagens de 1,8 MB para 182 KB em teste de navegador. É um caso de teste, não uma média de uso.",
  ],
  limits: [
    "PDFs criptografados não são suportados.",
    "A compressão rasteriza as páginas e o texto deixa de ser selecionável.",
    "O limite prático de tamanho é a memória do dispositivo; a auditoria recomenda medir após a implantação e avisar acima de um tamanho definido.",
    "A CSP mantém 'unsafe-inline' em scripts por causa do AdSense previsto.",
    "Extrair, girar e numerar páginas foram validados nos motores, sem teste ponta a ponta dedicado na primeira versão.",
    "Próximos passos registrados como intenção: proteção de PDFs com qpdf em WebAssembly, OCR local e funcionamento offline como PWA.",
  ],

  links: [],

};
