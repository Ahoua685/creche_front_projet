import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-700">
      {/* Header */}
      <header className="bg-gray-300 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2 text-xl font-bold text-gray-800">
          <span>Voot Kids</span>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <button className="hover:underline">ACCUEIL</button>
          <button className="hover:underline">A PROPOS</button>
          <button className="hover:underline">PAGES</button>
          <button className="hover:underline">PROGRAMME</button>
          <button className="hover:underline">CONTACT</button>
          <button className="hover:underline">INSCRIPTION</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-gray-400 rounded text-white">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-200 p-4 flex flex-col space-y-2">
          <button className="hover:underline">ACCUEIL</button>
          <button className="hover:underline">A PROPOS</button>
          <button className="hover:underline">PAGES</button>
          <button className="hover:underline">PROGRAMME</button>
          <button className="hover:underline">CONTACT</button>
          <button className="hover:underline">INSCRIPTION</button>
        </nav>
      )}

      {/* Carousel */}
      <section className="bg-gray-200 h-64 flex items-center justify-center text-gray-600">
        <button className="text-3xl">❮</button>
        <div className="w-3/4 h-48 bg-gray-400 flex items-center justify-center">Slide Image</div>
        <button className="text-3xl">❯</button>
      </section>

      {/* Services Section */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-center text-xl font-bold text-gray-800">NOS SERVICES</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="bg-white p-4 shadow-md w-64 text-center">
            <div className="h-32 bg-gray-300"></div>
            <h3 className="mt-2 font-bold">DRAWING & PAINTING</h3>
            <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded">DETAIL</button>
          </div>
          <div className="bg-white p-4 shadow-md w-64 text-center">
            <div className="h-32 bg-gray-300"></div>
            <h3 className="mt-2 font-bold">DRAWING & PAINTING</h3>
            <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded">DETAIL</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-8 bg-gray-200">
        <h2 className="text-center text-xl font-bold text-gray-800">What Parents Say About Our</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="bg-white p-4 shadow-md w-64">
            <h3 className="font-bold">JOHN DOE ⭐⭐⭐⭐⭐</h3>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md w-64">
            <h3 className="font-bold">SHARA CLAIR ⭐⭐⭐⭐</h3>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 p-6 flex flex-col md:flex-row justify-between text-gray-800">
        <div>
          <p className="font-bold">Voot Kids</p>
          <p>56 Main Street, PARIS</p>
          <p>hotline@gmail.com</p>
          <p>+33 02 65 42 65 89</p>
        </div>
        <div>
          <h3 className="font-bold">Horaires d'ouverture</h3>
          <p>Samedi - Vendredi</p>
          <p>08 am - 09 pm</p>
        </div>
        <div>
          <h3 className="font-bold">Notre Programme</h3>
          <p>Arts & Drawing</p>
          <p>Arts & Drawing</p>
          <p>Arts & Drawing</p>
        </div>
        <div>
          <h3 className="font-bold">Recent News</h3>
          <p>Fermeture exceptionnelle</p>
          <p>26 DEC 2026</p>
          <p>Fermeture exceptionnelle</p>
          <p>25 DEC 2026</p>
        </div>
      </footer>
    </div>
  );
}


