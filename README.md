# 🎲 Random Bucket

Um blog pessoal moderno construído com Next.js 15, focado em matemática, ciência e tecnologia.

## ✨ Características

- 🎨 **Design Clean**: Interface moderna com tema claro e escuro
- 📝 **Posts em Markdown**: Sistema completo de blog com suporte a markdown
- � **LaTeX/KaTeX**: Renderização de equações matemáticas
- 💻 **Syntax Highlighting**: Código colorido com números de linha (estilo GitHub)
- 🗂️ **Organização por Temas**: Posts categorizados (Matemática, Ciência, Tecnologia, Reflexões)
- 🔍 **Navegação Intuitiva**: Browse por categorias e posts individuais
- ⚡ **Geração Estática**: Performance otimizada com SSG do Next.js
- 🎭 **Animações Matemáticas**: Background animado com símbolos matemáticos
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📝 Como Adicionar Posts

### Estrutura Básica

1. Navegue até a pasta da categoria desejada em `content/posts/`:
   - `content/posts/matematica/`
   - `content/posts/ciencia/`
   - `content/posts/tecnologia/`
   - `content/posts/reflexoes/`
   - `content/posts/inmemoriam/`

2. Crie um novo arquivo `.md` com o nome do slug (ex: `meu-post.md`):

```markdown
---
title: "Título do Post"
date: "2026-01-08"
excerpt: "Breve descrição do post"
category: "matematica"
author: "Seu Nome"
---

# Título do Post

Conteúdo do seu post aqui...
```

## 📚 Guia Completo de Templates

Para documentação detalhada de todos os templates disponíveis, consulte [WRITING_GUIDE.md](./WRITING_GUIDE.md).

### Resumo Rápido

#### 1. LaTeX/Matemática

**Inline:**
```markdown
A equação $E = mc^2$ é famosa.
```

**Bloco:**
```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

#### 2. Código com Syntax Highlighting

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

Números de linha são adicionados automaticamente!

#### 3. Citações

```markdown
> "A matemática é a linguagem com que Deus escreveu o universo."
> — Galileu Galilei
```

#### 4. Imagens

**Simples:**
```markdown
![Descrição](https://example.com/image.jpg)
```

**Com Legenda:**
```markdown
<figure>
  <img src="https://example.com/image.jpg" alt="Descrição" />
  <figcaption>Legenda da imagem</figcaption>
</figure>
```

**Responsiva com Estilo:**
```markdown
<div style="text-align: center; margin: 2rem 0;">
  <img src="https://example.com/image.jpg" alt="Descrição" 
       style="max-width: 100%; height: auto; border-radius: 8px; 
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
    <em>Legenda da imagem</em>
  </p>
</div>
```

#### 5. Galeria de Imagens (Carousel)

```markdown
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
            gap: 1rem; margin: 2rem 0;">
  <div>
    <img src="image1.jpg" alt="Imagem 1" 
         style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem;">Legenda 1</p>
  </div>
  <div>
    <img src="image2.jpg" alt="Imagem 2" 
         style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem;">Legenda 2</p>
  </div>
  <div>
    <img src="image3.jpg" alt="Imagem 3" 
         style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem; font-size: 0.875rem;">Legenda 3</p>
  </div>
</div>
```

#### 6. Áudio

```markdown
<audio controls style="width: 100%; margin: 1.5rem 0;">
  <source src="https://example.com/audio.mp3" type="audio/mpeg">
  <source src="https://example.com/audio.ogg" type="audio/ogg">
  Seu navegador não suporta o elemento de áudio.
</audio>
<p style="text-align: center; font-size: 0.875rem; color: #6b7280;">
  <em>Título ou descrição do áudio</em>
</p>
```

#### 7. Vídeo (YouTube/Vimeo)

```markdown
<div style="position: relative; padding-bottom: 56.25%; height: 0; 
            overflow: hidden; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Título do vídeo" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
           gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
```

#### 8. Referências Bibliográficas

```markdown
## Referências

1. Knuth, D. E. (1997). *The Art of Computer Programming, Volume 1* (3rd ed.). Addison-Wesley.

2. Russell, B., & Whitehead, A. N. (1910). *Principia Mathematica*. Cambridge University Press.
```

**Com Links:**
```markdown
Segundo [Knuth (1997)](https://example.com/reference), a análise de algoritmos é fundamental...
```

**Estilo Footnote:**
```markdown
Esta afirmação precisa de referência[^1].

[^1]: Smith, J. (2020). "Título do Artigo". *Nome do Jornal*, 10(2), 123-145.
```

#### 9. Caixas de Destaque

**Aviso:**
```markdown
<div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; 
            padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <strong>⚠️ Importante:</strong> Isto é uma caixa de destaque para informações importantes.
</div>
```

**Informação:**
```markdown
<div style="background-color: #dbeafe; border-left: 4px solid #3b82f6; 
            padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <strong>ℹ️ Info:</strong> Esta é uma nota informativa.
</div>
```

**Sucesso:**
```markdown
<div style="background-color: #d1fae5; border-left: 4px solid #10b981; 
            padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <strong>✓ Sucesso:</strong> Isto indica um resultado bem-sucedido ou dica.
</div>
```

#### 10. Layout de Duas Colunas

```markdown
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
  <div>
    <h3>Coluna Esquerda</h3>
    <p>Conteúdo do lado esquerdo.</p>
  </div>
  <div>
    <h3>Coluna Direita</h3>
    <p>Conteúdo do lado direito.</p>
  </div>
</div>
```

#### 11. Alinhamento de Texto

**Centralizado:**
```markdown
<div style="text-align: center;">
Este texto está centralizado.
</div>
```

**Justificado (padrão):**
Parágrafos normais são automaticamente justificados.

**Direita:**
```markdown
<div style="text-align: right;">
Este texto está alinhado à direita.
</div>
```

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS 4
- **Markdown**: gray-matter, remark, remark-html
- **Matemática**: remark-math, rehype-katex
- **Syntax Highlighting**: rehype-highlight, rehype-line-numbers
- **Temas**: next-themes
- **Animações**: framer-motion
- **Ícones**: lucide-react
- **Datas**: date-fns

## 📁 Estrutura do Projeto

```
random.bucket/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── syntax-theme.css   # Tema de syntax highlighting
│   ├── blog/              # Rotas do blog
│   └── about/             # Página sobre
├── components/            # Componentes React
│   ├── header.tsx
│   ├── footer.tsx
│   ├── post-card.tsx
│   ├── category-card.tsx
│   ├── theme-toggle.tsx
│   └── ...
├── content/               # Posts em markdown
│   └── posts/
│       ├── matematica/
│       ├── ciencia/
│       ├── tecnologia/
│       ├── reflexoes/
│       └── inmemoriam/
├── lib/                   # Utilitários
│   └── posts.ts          # Funções de manipulação de posts
├── public/               # Arquivos estáticos
└── WRITING_GUIDE.md      # Guia completo de escrita
```

## 📖 Documentação Completa

- **[WRITING_GUIDE.md](./WRITING_GUIDE.md)** - Guia completo de todos os templates e recursos disponíveis
- Exemplos de uso de LaTeX
- Templates de componentes
- Melhores práticas de estruturação de posts

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas!

## 📄 Licença

MIT License - veja [LICENSE](./LICENSE) para detalhes.

---

Feito com ❤️ por Adelson Teodoro
date: "2026-01-08"
excerpt: "Uma breve descrição do post"
category: "matematica"
author: "seu-nome"
---

# Conteúdo do Post

Escreva seu conteúdo aqui em markdown...
```

3. O post será automaticamente detectado e exibido no blog!

## 🖼️ Personalização

### Foto de Perfil

Adicione sua foto de perfil como `public/profile.jpg`. Se não adicionar, será exibido um avatar padrão com as iniciais "RB".

### Categorias

As categorias são definidas automaticamente pelas pastas em `content/posts/`. Para adicionar uma nova categoria:

1. Crie uma nova pasta em `content/posts/nome-da-categoria/`
2. Adicione informações da categoria em `lib/posts.ts` na função `getCategoryInfo()`

### Temas e Cores

As cores das categorias podem ser customizadas nos componentes:
- `components/post-card.tsx` - Cores dos badges
- `components/category-card.tsx` - Gradientes dos cards

## 🎨 Estrutura do Projeto

```
random.bucket/
├── app/                      # Rotas Next.js
│   ├── api/                 # API routes
│   ├── blog/                # Páginas do blog
│   ├── about/               # Página sobre
│   └── page.tsx             # Página inicial
├── components/              # Componentes React
│   ├── header.tsx           # Cabeçalho com navegação
│   ├── footer.tsx           # Rodapé
│   ├── post-card.tsx        # Card de post
│   ├── category-card.tsx    # Card de categoria
│   ├── theme-provider.tsx   # Provider de tema
│   ├── theme-toggle.tsx     # Toggle claro/escuro
│   └── math-background.tsx  # Animação de fundo
├── content/                 # Conteúdo do blog
│   └── posts/               # Posts em markdown
│       ├── matematica/
│       ├── ciencia/
│       ├── tecnologia/
│       └── reflexoes/
├── lib/                     # Utilitários
│   └── posts.ts             # Lógica de posts
└── public/                  # Arquivos estáticos
```

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Framer Motion** - Animações
- **gray-matter** - Parser de frontmatter
- **remark** - Processador de markdown
- **next-themes** - Gerenciamento de tema
- **lucide-react** - Ícones
- **date-fns** - Manipulação de datas

## 📄 Licença

MIT - Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuindo

Este é um blog pessoal, mas sugestões são bem-vindas! Abra uma issue ou PR.

---

Feito com ❤️ e muito ☕ por [imrooteodoro](https://github.com/imrooteodoro)
