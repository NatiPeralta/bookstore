import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const products = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
    price: 79.9,
    rating: 5,
    tag: "Novo",
    image: "https://via.placeholder.com/200x200?text=Livro+1"
  },
  {
    id: 2,
    title: "Harry Potter",
    price: 59.9,
    rating: 4,
    tag: "Promo",
    image: "https://via.placeholder.com/200x200?text=Livro+2"
  },
  {
    id: 3,
    title: "Dom Casmurro",
    price: 39.9,
    rating: 4,
    tag: "-",
    image: "https://via.placeholder.com/200x200?text=Livro+3"
  },
  {
    id: 4,
    title: "1984",
    price: 49.9,
    rating: 5,
    tag: "Novo",
    image: "https://via.placeholder.com/200x200?text=Livro+4"
  },
  {
    id: 5,
    title: "O Pequeno Príncipe",
    price: 29.9,
    rating: 5,
    tag: "Promo",
    image: "https://via.placeholder.com/200x200?text=Livro+5"
  },
  {
    id: 6,
    title: "A Revolução dos Bichos",
    price: 39.9,
    rating: 4,
    tag: "",
    image: "https://via.placeholder.com/200x200?text=Livro+6"
  },
];

export default function Home() {
  return (
    <main className="home-container">
      <h1>Bookstore</h1>
      <p>Bem-vindo(a) à nossa livraria online!</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}