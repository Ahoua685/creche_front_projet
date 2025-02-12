
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Votre nom" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" placeholder="Votre email" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mot de passe</label>
            <input type="password" className="w-full p-2 border rounded-md" placeholder="Votre mot de passe" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

