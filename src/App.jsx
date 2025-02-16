import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        < Nav />
    </>
  )
}
export default App

