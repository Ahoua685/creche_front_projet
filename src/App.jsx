function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Inscription</h2>
        <form className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Nom</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre email"
            />
          </div>
          
          {/* Mot de passe */}
          <div>
            <label className="block text-lg font-medium text-gray-600 mb-2">Mot de passe</label>
            <input
              type="password"
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre mot de passe"
            />
          </div>
          
          {/* Bouton d'inscription */}
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-200"
            >
              S'inscrire
            </button>
          </div>
          
          {/* Message de validation ou d'erreur */}
          <div className="text-center text-sm text-gray-500">
            Déjà un compte ?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Se connecter
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;


