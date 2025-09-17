// src/pages/Home.jsx
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, title: "O Senhor dos Anéis", price: 79.9, rating: 5, tag: "Novo", image: "https://via.placeholder.com/200x200?text=Livro+1" },
  { id: 2, title: "Harry Potter", price: 59.9, rating: 4, tag: "Promo", image: "https://via.placeholder.com/200x200?text=Livro+2" },
  { id: 3, title: "Dom Casmurro", price: 39.9, rating: 4, tag: "", image: "https://via.placeholder.com/200x200?text=Livro+3" },
  { id: 4, title: "1984", price: 49.9, rating: 5, tag: "Novo", image: "https://via.placeholder.com/200x200?text=Livro+4" },
  { id: 5, title: "O Pequeno Príncipe", price: 29.9, rating: 5, tag: "Promo", image: "https://via.placeholder.com/200x200?text=Livro+5" },
  { id: 6, title: "A Revolução dos Bichos", price: 39.9, rating: 4, tag: "", image: "https://via.placeholder.com/200x200?text=Livro+6" },
];

const Container = styled.main`
  background-color: ${({ darkMode }) => (darkMode ? "#222222" : "#faf6f1")};
  color: ${({ darkMode }) => (darkMode ? "#faf6f1" : "#222222")};
  min-height: 100vh;
  padding: 2rem;
  transition: background-color 0.25s, color 0.25s;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media(min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Home({ darkMode }) {
  return (
    <Container darkMode={darkMode}>
      <h1>Bookstore</h1>
      <p>Bem-vindo(a) à nossa livraria online!</p>

      <Grid>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}
