import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-700">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-600" />
          <span className="text-sm">56 Main Street, Paris</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-red-500" />
          <span className="text-sm">+33 58 69 52 63</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          <FiMenu size={24} />
        </button>
      </header>

      {/* Navigation */}
      <nav className={`bg-gray-300 p-4 md:flex justify-center space-x-6 ${menuOpen ? "block" : "hidden"}`}>
        {['ACCUEIL', 'A PROPOS', 'PAGES', 'PROGRAMME', 'CONTACT', 'INSCRIPTION'].map((item) => (
          <button key={item} className="hover:underline text-gray-800 font-medium">
            {item}
          </button>
        ))}
      </nav>

      {/* Carousel */}
      <section className="bg-gray-200 h-64 flex items-center justify-between px-4">
        <button className="text-3xl">❮</button>
        <div className="w-3/4 h-48 bg-gray-400 flex items-center justify-center">Slide Image</div>
        <button className="text-3xl">❯</button>
      </section>

      {/* Services Section */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-center text-xl font-bold text-gray-800">NOS SERVICES</h2>
        <div className="flex justify-center space-x-6 mt-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-4 shadow-md w-64 text-center">
              <div className="h-32 bg-gray-300"></div>
              <h3 className="mt-2 font-bold">DESSIN & PEINTURE</h3>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded">DETAIL</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-8 bg-gray-200">
        <h2 className="text-center text-xl font-bold text-gray-800">Ce que disent les parents</h2>
        <div className="flex justify-center space-x-6 mt-4">
          {[{ name: "John Doe", rating: 5 }, { name: "Shara Clair", rating: 4 }].map((review, i) => (
            <div key={i} className="bg-white p-4 shadow-md w-64">
              <h3 className="font-bold">{review.name} {"⭐".repeat(review.rating)}</h3>
              <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 p-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-800">
        <div>
          <p className="font-bold">Voot kids</p>
          <p>56 Main Street, Paris</p>
          <p>hotline@gmail.com</p>
          <p>+33 02 65 42 65 89</p>
        </div>
        <div>
          <h3 className="font-bold">Horaires d'ouverture</h3>
          <p>Lundi - Vendredi</p>
          <p>7h - 19h</p>
        </div>
        <div>
          <h3 className="font-bold">Notre Programme</h3>
          <p>Arts et Dessins</p>
        </div>
        <div>
          <h3 className="font-bold">Informations</h3>
          <p>Fermeture exceptionnelle</p>
          <p>25 DEC 2026</p>
        </div>
      </footer>
    </div>
  );
}



