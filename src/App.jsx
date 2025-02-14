import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-pink-100 min-h-screen text-gray-700">
      {/* Header */}
      <header className="bg-pink-300 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2 text-xl font-bold text-white">
          <span>Minis Licorns</span>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <button className="hover:underline">ACCUEIL</button>
          <button className="hover:underline">A PROPOS DE NOUS</button>
          <button className="hover:underline">PAGES</button>
          <button className="hover:underline">PROGRAMME</button>
          <button className="hover:underline">CONTACTS</button>
          <button className="hover:underline">INSCRIPTION</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-pink-400 rounded text-white">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-pink-200 p-4 flex flex-col space-y-2">
          <button className="hover:underline">ACCUEIL</button>
          <button className="hover:underline">A PROPOS DE NOUS</button>
          <button className="hover:underline">PAGES</button>
          <button className="hover:underline">PROGRAMME</button>
          <button className="hover:underline">CONTACTS</button>
          <button className="hover:underline">INSCRIPTION</button>
        </nav>
      )}

      {/* Main Content */}
      <main className="h-96 bg-pink-200 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-pink-600">Bienvenu à la crèche Les Minis Licornes</h1>
        <p className="text-lg text-pink-800 mt-2">Découvrez des activités ludiques et éducatives pour les enfants.</p>
        <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600">Cliquer</button>
      </main>

      {/* Footer */}
      <footer className="bg-pink-300 p-6 flex flex-col md:flex-row justify-between text-white">
        <div>
          <p className="font-bold">Minis licornes</p>
          <p>56 Main Street, PARIS</p>
          <p>hotline@gmail.com</p>
          <p>+33 02 65 42 65 89</p>
        </div>
        <div>
          <h3 className="font-bold">Horaires d'ouverture</h3>
          <p>Lundi - Vendredi</p>
          <p>7h - 19h</p>
        </div>
        <div>
          <h3 className="font-bold">Notre programme</h3>
          <p>Arts et dessins</p>
          <p>Musique & Dance</p>
          <p>Lecture</p>
        </div>
        <div>
          <h3 className="font-bold">Informations</h3>
          <p>Fermeture exceptionnelle</p>
          <p>26 DEC 2026</p>
          <p>Fermeture exceptionnelle</p>
          <p>25 DEC 2026</p>
        </div>
      </footer>
    </div>
  );
}
