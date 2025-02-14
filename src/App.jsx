import { useState } from "react";
import { Menu } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold">voot kids</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>PAGES</span>
          <span>PROGRAMS</span>
          <span>CONTACTS</span>
          <span>INSCRIPTION</span>
        </div>
        <div className="md:hidden">
          <Menu onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 p-4 flex flex-col space-y-2">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>PAGES</span>
          <span>PROGRAMS</span>
          <span>CONTACTS</span>
          <span>INSCRIPTION</span>
        </nav>
      )}

      {/* Main Content */}
      <main className="h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-400">[Placeholder for main content]</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-6 flex flex-col md:flex-row justify-between">
        <div>
          <p className="font-bold">voot kids</p>
          <p>56 Main Street, PARIS</p>
          <p>hotline@gmail.com</p>
          <p>+33 02 65 42 65 89</p>
        </div>
        <div>
          <h3 className="font-bold">Opening Hours</h3>
          <p>Sunday - Friday</p>
          <p>08 am - 05 pm</p>
        </div>
        <div>
          <h3 className="font-bold">Our Program</h3>
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



