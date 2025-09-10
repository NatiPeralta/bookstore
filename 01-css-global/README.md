# Bookstore

Implementação de uma mesma tela de loja de livros em **4 versões diferentes**:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **styled-components**

## Funcionalidades
- Navbar fixa com logo, tema claro/escuro (persistente) e badge do carrinho
- Grid responsivo de produtos (cards de livros)
- Cards com título, preço, rating, tags e botão "Adicionar"
- Interações: hover, focus, disabled, loading (skeleton)
- Acessibilidade com `aria-*` e contraste AA (≥ 4.5:1)
- Dark mode aplicado a cores e sombras
- Animações suaves (150–250ms)

## Estrutura
Cada pasta (`01-css-global/`, `02-css-modules/`, `03-tailwind/`, `04-styled-components/`) é um projeto React independente com os mesmos componentes básicos:

- `Navbar`
- `ProductCard`
- `Button`
- `Skeleton`

## Como rodar
Entre em cada pasta e execute:

```bash
npm install
npm run dev
