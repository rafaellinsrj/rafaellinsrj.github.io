# Rafael Lins Gaspar · Portfólio

Portfólio pessoal de desenvolvimento fullstack, produtos com IA e liderança técnica.

**Site:** https://rafaellinsrj.github.io  
**LinkedIn:** https://www.linkedin.com/in/rlins/

## Conteúdo

- Apresentação profissional, currículo para download e contato.
- Onze estudos de projeto: Certame, Hyre, The Moneta Post, Bioo, FiveX Solutions, ZapPop, Presto PDF, Devkit, LMM Capital, Lins Payments e Lins UP Now.
- Seleção de sites institucionais e experimentos de produto.
- Experiência, tecnologias e formação acadêmica.

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
- `app/projetos/[slug]/page.tsx`: páginas de projeto geradas no build.
- `lib/projects.ts`: conteúdo e tecnologias de cada projeto.
- `components/`: cabeçalho, rodapé e capas.
- `app/globals.css`: estilos e adaptação para celulares.
- `public/`: foto, capturas dos projetos, ícone e currículo.

As fontes Inter e IBM Plex Mono são distribuídas localmente com o site. Não há formulário que armazene dados de visitantes, rastreamento próprio ou dependência de banco de dados.

## Publicação

O workflow `.github/workflows/pages.yml` verifica os tipos, gera o site e publica no GitHub Pages a cada push para `main`. Em **Settings → Pages**, a fonte deve ser **GitHub Actions**.

O projeto aceita `NEXT_PUBLIC_BASE_PATH` para publicação sob um subdiretório; o workflow usa o caminho fornecido pelo GitHub Pages. A URL principal configurada é `https://rafaellinsrj.github.io`.

## Conteúdo e autoria

Este repositório contém apenas a implementação do portfólio e seus materiais públicos. Os sistemas apresentados têm seus próprios repositórios, contextos e direitos. A presença de um projeto no portfólio não implica disponibilização de seu código ou uma licença sobre sua marca.

Foto e currículo: Rafael Lins Gaspar. As telas foram capturadas nos sites públicos ou em cópias locais dos projetos. A relação de imagens e origens está em docs/screenshots.json. Números presentes nas interfaces não são apresentados como resultados profissionais comprovados.
