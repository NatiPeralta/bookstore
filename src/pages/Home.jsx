import ProductCard from "../components/ProductCard";
import book from "../assets/book.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import book6 from "../assets/book6.jpg";

const products = [
  { id: 1, title: "O Senhor dos Anéis", price: 79.9, rating: 5, tag: "Novo", image: book },
  { id: 2, title: "Harry Potter", price: 59.9, rating: 4, tag: "Promo", image: book2 },
  { id: 3, title: "Dom Casmurro", price: 39.9, rating: 4, tag: "", image: book3 },
  { id: 4, title: "1984", price: 49.9, rating: 5, tag: "Novo", image: book4 },
  { id: 5, title: "O Pequeno Príncipe", price: 29.9, rating: 5, tag: "Promo", image: book5 },
  { id: 6, title: "A Revolução dos Bichos", price: 39.9, rating: 4, tag: "", image: book6 },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <h1 className="text-3xl font-bold mb-2 text-center">Bookstore</h1>
      <p className="text-center mb-6">Bem-vindo(a) à nossa livraria online!</p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
