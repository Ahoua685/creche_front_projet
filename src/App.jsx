import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gradient-to-br from-pink-100 to-purple-100 min-h-screen text-gray-700">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-400 to-purple-400 p-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-2 text-2xl font-extrabold text-white">
          <span>🦄 Minis Licornes</span>
        </div>
        <div className="hidden md:flex space-x-6 text-white text-lg">
          <button className="hover:underline transition duration-300">ACCUEIL</button>
          <button className="hover:underline transition duration-300">A PROPOS DE NOUS</button>
          <button className="hover:underline transition duration-300">PAGES</button>
          <button className="hover:underline transition duration-300">PROGRAMME</button>
          <button className="hover:underline transition duration-300">CONTACTS</button>
          <button className="hover:underline transition duration-300">INSCRIPTION</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 bg-purple-500 rounded text-white shadow-md">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden bg-purple-200 p-4 flex flex-col space-y-2 text-lg">
          <button className="hover:underline">ACCUEIL</button>
          <button className="hover:underline">A PROPOS DE NOUS</button>
          <button className="hover:underline">PAGES</button>
          <button className="hover:underline">PROGRAMME</button>
          <button className="hover:underline">CONTACTS</button>
          <button className="hover:underline">INSCRIPTION</button>
        </motion.nav>
      )}

      {/* Main Content */}
      <main className="h-[500px] bg-gradient-to-br from-pink-200 to-purple-200 flex flex-col items-center justify-center text-center p-6 shadow-xl rounded-lg mx-4 mt-6">
        <h1 className="text-5xl font-extrabold text-pink-700 drop-shadow-lg">Bienvenue à la crèche Les Minis Licornes</h1>
        <p className="text-xl text-purple-800 mt-4 max-w-xl">Un espace magique où vos enfants peuvent apprendre, jouer et grandir dans un environnement sécurisé et bienveillant.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="mt-6 px-8 py-3 bg-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-purple-600 transition duration-300">Découvrir</motion.button>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-400 to-purple-400 p-6 flex flex-col md:flex-row justify-between text-white mt-6">
        <div>
          <p className="font-extrabold text-lg">🦄 Minis Licornes</p>
          <p>56 Main Street, PARIS</p>
          <p>hotline@gmail.com</p>
          <p>+33 02 65 42 65 89</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Horaires d'ouverture</h3>
          <p>Lundi - Vendredi</p>
          <p>7h - 19h</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Notre programme</h3>
          <p>🌈 Arts et dessins</p>
          <p>🎵 Musique & Dance</p>
          <p>📖 Lecture</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Informations</h3>
          <p>⚠ Fermeture exceptionnelle</p>
          <p>26 DEC 2026</p>
          <p>⚠ Fermeture exceptionnelle</p>
          <p>25 DEC 2026</p>
        </div>
      </footer>
    </div>
  );
}
