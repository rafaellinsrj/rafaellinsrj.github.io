// Layout v2 (aprovado em 11/11/2026): tipo, situação, ano e frase curta de cada projeto,
// a ordem de apresentação e os números da página inicial.

export type Kind = "proprio" | "cliente" | "site" | "ferramenta" | "historico";
export type Tone = "ok" | "warn" | "dim" | "blue";

export const kinds: {id: Kind; label: string}[] = [
  {id: "proprio", label: "Produtos próprios"},
  {id: "cliente", label: "Clientes e sociedades"},
  {id: "site", label: "Sites"},
  {id: "ferramenta", label: "Ferramentas e pesquisa"},
  {id: "historico", label: "Histórico"},
];

type Info = {kind: Kind; status: string; tone: Tone; year: string; short: string};

// Ordem: o que está no ar e é mais recente primeiro; histórico por último.
export const info: Record<string, Info> = {
  "hyre": {kind: "proprio", status: "No ar", tone: "ok", year: "2026", short: "Página na bio, DMs automáticas e planejador de posts para pequenos negócios."},
  "escolhi-brasil": {kind: "cliente", status: "No ar", tone: "ok", year: "2026", short: "Guia das cidades do Brasil feito por quem mora nelas, com roteiro e Passaporte."},
  "moneta": {kind: "proprio", status: "No ar", tone: "ok", year: "2026", short: "Portal de notícias em três edições, produzido por um pipeline editorial com IA."},
  "certame": {kind: "cliente", status: "Encerrado", tone: "dim", year: "2026", short: "Campanhas com prêmios ligadas a causas, com regra e sorteio conferíveis por qualquer pessoa."},
  "vero-markets": {kind: "cliente", status: "Pausado", tone: "warn", year: "2026", short: "Mercados de previsão com livro central de ofertas sobre economia, juros e política."},
  "lmm": {kind: "cliente", status: "Encerrado", tone: "dim", year: "2026", short: "Robô formador de mercado multi-conta para a Vero Markets, com controle de risco."},
  "lins-up-now": {kind: "proprio", status: "Simulação", tone: "blue", year: "2026", short: "Sistema quantitativo que detecta sinais e executa ordens simuladas sobre o bitcoin."},
  "lins-payments": {kind: "proprio", status: "Site no ar", tone: "ok", year: "2026", short: "Site de apresentação de um gateway de pagamentos para empresas."},
  "zappop": {kind: "cliente", status: "Versão local", tone: "blue", year: "2026", short: "Implantação de uma plataforma de atendimento multiusuário pelo WhatsApp."},
  "presto-pdf": {kind: "ferramenta", status: "Versão local", tone: "blue", year: "2026", short: "Dez ferramentas de PDF que processam os arquivos no próprio navegador."},
  "devkit": {kind: "ferramenta", status: "Versão local", tone: "blue", year: "2026", short: "Sete utilitários para desenvolvedores, como JSON, CSV e JWT, sem envio de dados."},
  "fivex": {kind: "ferramenta", status: "Acadêmico", tone: "dim", year: "2026", short: "Estudo de caso em equipe sobre arquiteturas de agentes inteligentes (Unifeso)."},
  "arlene": {kind: "site", status: "No ar", tone: "ok", year: "2026", short: "Site de uma psicanalista com serviços, etapas do atendimento e agendamento."},
  "autistasocial": {kind: "site", status: "No ar", tone: "ok", year: "2026", short: "Landing page de uma comunidade que avalia profissionais e clínicas do autismo."},
  "cgm": {kind: "site", status: "No ar", tone: "ok", year: "2026", short: "Site de uma marcenaria de shopping centers, com portfólio de obras."},
  "sitefacil": {kind: "site", status: "No ar", tone: "ok", year: "2026", short: "Oferta de criação de sites com portfólio, modelos e formulário de briefing."},
  "caio": {kind: "site", status: "Versão local", tone: "blue", year: "2026", short: "Site de advocacia criminal e cível com páginas por área de atuação."},
  "viamanzoni": {kind: "site", status: "Versão local", tone: "blue", year: "2026", short: "Site de aluguel de roupas de luxo com coleções feminina e masculina."},
  "190-policia-militar": {kind: "historico", status: "Histórico", tone: "dim", year: "2014", short: "Plataforma que ligava cidadão, policial em campo e comando do batalhão."},
  "easyspa": {kind: "historico", status: "Histórico", tone: "dim", year: "2015", short: "App que ligava clientes a profissionais de beleza por localização e agenda."},
};

export const order = Object.keys(info);
export const featured = ["hyre", "escolhi-brasil", "moneta", "190-policia-militar"];

export const kindLabel = (k: Kind) => kinds.find(x => x.id === k)!.label;
export const singular: Record<Kind, string> = {proprio: "Produto próprio", cliente: "Cliente", site: "Site", ferramenta: "Ferramenta", historico: "Histórico"};
