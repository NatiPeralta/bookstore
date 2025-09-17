import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  if (!product) return null;

  const ratingStars =
    "★".repeat(product.rating || 0) + "☆".repeat(5 - (product.rating || 0));

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImage}
        src={product.image || "https://via.placeholder.com/200"}
        alt={product.title || "Livro sem título"}
      />
      <h3 className={styles.productTitle}>
        {product.title || "Título indisponível"}
      </h3>
      <p className={styles.productPrice}>
        R$ {product.price?.toFixed(2) || "N/A"}
      </p>
      {product.tag && <span className={styles.productTag}>{product.tag}</span>}
      <p
        className={styles.productRating}
        aria-label={`Avaliação: ${product.rating} de 5`}
      >
        {ratingStars}
      </p>
      <button className={styles.addButton}>Adicionar</button>
    </div>
  );
}
