export default function ProductCard({ product }) {
  if (!product) return null;

  const ratingStars =
    "★".repeat(product.rating || 0) + "☆".repeat(5 - (product.rating || 0));

  return (
    <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      
      <img
        src={product.image || "https://via.placeholder.com/200"}
        alt={product.title || "Livro sem título"}
        className="w-full aspect-square object-cover rounded-md mb-2"
      />

      <h3 className="text-center text-base font-medium line-clamp-2 mb-1">
        {product.title || "Título indisponível"}
      </h3>

      <p className="text-sm font-semibold mb-1">R$ {product.price?.toFixed(2) || "N/A"}</p>

      {product.tag && (
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md mb-1">
          {product.tag}
        </span>
      )}

      <p className="text-yellow-400 dark:text-yellow-300 text-sm mb-2" aria-label={`Avaliação: ${product.rating} de 5`}>
        {ratingStars}
      </p>

      <button className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-1 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200">
        Adicionar
      </button>
    </div>
  );
}
