// src/components/ProductCard.jsx
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const Card = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "#333333" : "#ffffff")};
  color: ${({ darkMode }) => (darkMode ? "#faf6f1" : "#222222")};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.25s, color 0.25s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-size: 1rem;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Price = styled.p`
  margin: 0.25rem 0;
  font-weight: bold;
`;

const Tag = styled.span`
  margin: 0.25rem 0;
  padding: 0.2rem 0.5rem;
  background-color: ${({ darkMode }) => (darkMode ? "#ffb74d" : "#ff9800")};
  color: white;
  font-size: 0.75rem;
  border-radius: 4px;
`;

const Rating = styled.p`
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: ${({ darkMode }) => (darkMode ? "#ffd54f" : "#ffb400")};
  text-align: center;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ darkMode }) => (darkMode ? "#faf6f1" : "#222")};
  color: ${({ darkMode }) => (darkMode ? "#222" : "#faf6f1")};
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? "#555" : "#444")};
    animation: ${pulse} 1s infinite ease-in-out;
  }

  &:focus {
    outline: 2px solid #ff9800;
    outline-offset: 2px;
  }
`;

export default function ProductCard({ product, darkMode }) {
  if (!product) return null;

  const ratingStars =
    "★".repeat(product.rating || 0) +
    "☆".repeat(5 - (product.rating || 0));

  return (
    <Card darkMode={darkMode}>
      <Image src={product.image || "https://via.placeholder.com/200"} alt={product.title || "Livro sem título"} />
      <Title>{product.title || "Título indisponível"}</Title>
      <Price>R$ {product.price?.toFixed(2) || "N/A"}</Price>
      {product.tag && <Tag>{product.tag}</Tag>}
      <Rating darkMode={darkMode} aria-label={`Avaliação: ${product.rating} de 5`}>{ratingStars}</Rating>
      <Button darkMode={darkMode}>Adicionar</Button>
    </Card>
  );
}
