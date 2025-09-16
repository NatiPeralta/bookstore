import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  if (!product) return null;

  const ratingStars = "★".repeat(product.rating || 0) + "☆".repeat(5 - (product.rating || 0));

  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.image || "https://via.placeholder.com/200"}
        alt={product.title || "Livro sem título"}
      />
      <h3 className="product-title">{product.title || "Título indisponível"}</h3>
      <p className="product-price">R$ {product.price?.toFixed(2) || "N/A"}</p>
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <p className="product-rating" aria-label={`Avaliação: ${product.rating} de 5`}>{ratingStars}</p>
      <button className="add-button">Adicionar</button>
    </div>
  );
}
