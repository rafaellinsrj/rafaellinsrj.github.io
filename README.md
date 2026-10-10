# Rafael Lins Gaspar · Portfólio

Portfólio executivo de tecnologia: liderança como CTO, arquitetura de software, produtos com IA e estudos de caso técnicos.

**Site:** https://rafaellinsrj.github.io  
**LinkedIn:** https://www.linkedin.com/in/rlins/

## Conteúdo

- Posicionamento como CTO, experiência executiva com linha do tempo e caso do setor jurídico (anônimo).
- Vinte estudos de caso técnicos, cada um com página própria: história, responsabilidade, arquitetura documentada, decisões, resultados, limites e galeria.
- Projetos históricos da Rio Tech (190 e EasySPA) com a seção "Como eu arquitetaria hoje", identificada como proposta.
- Sem currículo para download: a trajetória está no próprio site.

As descrições identificam o estágio e o alcance de cada projeto. FiveX é um trabalho acadêmico coletivo. ZapPop apresenta implantação e customização de uma base Atendechat. As capturas identificam páginas publicadas e versões locais. O endereço linspayments.com.br apresenta o Lins UP Now, em modo de simulação.

## Desenvolvimento

Requer Node.js 24 e npm.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000.

```sh
npm run typecheck
npm run build
```

O build gera o site estático em `out/`. Não é necessário um servidor Node.js na hospedagem.

## Estrutura

- `app/page.tsx`: página inicial.
- `app/projetos/[slug]/page.tsx`: página técnica de cada estudo de caso, gerada no build.
- `lib/case-types.ts`: modelo de dados de um estudo de caso.
- `lib/cases/<slug>.ts`: conteúdo de cada estudo de caso; `lib/cases/index.ts` é gerado por `node scripts/gen-cases-index.mjs`.
- `lib/experience.ts`: trajetória profissional (datas iguais ao LinkedIn).
- `components/case/`: diagrama de arquitetura, galeria ampliável e card.
- `components/Icon.tsx`: ícones SVG da biblioteca Lucide (licença ISC).
- `scripts/qa.mjs` e `scripts/capture.mjs`: conferências do site gerado (links, imagens, emojis, currículo, títulos, rolagem horizontal e capturas).
- `app/globals.css`: estilos e adaptação para celulares.
- `public/`: foto, capturas dos projetos e ícone.

As fontes Inter e IBM Plex Mono são distribuídas localmente com o site. Não há formulário que armazene dados de visitantes, rastreamento próprio ou dependência de banco de dados.

## Publicação

O workflow `.github/workflows/pages.yml` verifica os tipos, gera o site e publica no GitHub Pages a cada push para `main`. Em **Settings → Pages**, a fonte deve ser **GitHub Actions**.

O projeto aceita `NEXT_PUBLIC_BASE_PATH` para publicação sob um subdiretório; o workflow usa o caminho fornecido pelo GitHub Pages. A URL principal configurada é `https://rafaellinsrj.github.io`.

## Conteúdo e autoria

Este repositório contém apenas a implementação do portfólio e seus materiais públicos. Os sistemas apresentados têm seus próprios repositórios, contextos e direitos. A presença de um projeto no portfólio não implica disponibilização de seu código ou uma licença sobre sua marca.

Foto: Rafael Lins Gaspar. As telas foram capturadas nos sites públicos ou em cópias locais dos projetos. A origem de cada imagem e afirmação fica em notas internas, fora do repositório público. Números presentes nas interfaces não são apresentados como resultados profissionais comprovados.
