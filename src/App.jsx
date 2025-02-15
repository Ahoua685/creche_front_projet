import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Minis Licorns</div>
        <nav style={{ ...styles.navLinks, display: menuOpen ? "flex" : "none" }}>
          <a href="#" style={styles.navLink}>ACCUEIL</a>
          <a href="#" style={styles.navLink}>A PROPOS</a>
          <a href="#" style={styles.navLink}>PAGES</a>
          <a href="#" style={styles.navLink}>PROGRAMME</a>
          <a href="#" style={styles.navLink}>CONTACT</a>
          <a href="#" style={styles.navLink}>INSCRIPTION</a>
        </nav>
        <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#5A5560" d="M3 6h18M3 12h18m-18 6h18"></path>
          </svg>
        </button>
      </header>

      {/* Carousel */}
      <section style={styles.carousel}>
        <button style={styles.arrow}>❮</button>
        <div style={styles.carouselContent}>Image du Slide</div>
        <button style={styles.arrow}>❯</button>
      </section>

      {/* Services */}
      <section style={styles.section}>
        <h2 style={styles.title}>NOS SERVICES</h2>
        <div style={styles.servicesContainer}>
          <div style={styles.serviceCard}>
            <div style={styles.serviceImg}></div>
            <h3>Dessins & Peinture</h3>
            <button style={styles.btn}>DETAIL</button>
          </div>
          <div style={styles.serviceCard}>
            <div style={styles.serviceImg}></div>
            <h3>Jeux éducatifs</h3>
            <button style={styles.btn}>DETAIL</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <h2 style={styles.title}>Avis et Commentaires</h2>
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonial}>
            <h3>JOHN DOE ⭐⭐⭐⭐⭐</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div style={styles.testimonial}>
            <h3>SHARA CLAIR ⭐⭐⭐⭐</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <h3>Minis Licorns</h3>
          <p>56 Main Street, PARIS</p>
          <p>hotline@gmail.com</p>
          <p>+33 02 65 42 65 89</p>
        </div>
        <div>
          <h3>Horaires</h3>
          <p>Lundi - Vendredi : 7h - 19h</p>
        </div>
        <div>
          <h3>Programme</h3>
          <p>Arts & Dessins</p>
          <p>Activités éducatives</p>
        </div>
      </footer>
    </div>
  );
}

// ✅ Styles avec couleurs pastel 🎨
const styles = {
  container: {
    width: "100%",
    backgroundColor: "#FAF3DD", // Beige pastel
    color: "#5A5560", // Gris foncé doux
    fontFamily: "Arial, sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#FFCAD4", // Rose pastel
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    left: "0",
    width: "100%",
    background: "#FFC8A2", // Orange pastel
    textAlign: "center",
    padding: "10px 0"
  },
  navLink: {
    textDecoration: "none",
    color: "#5A5560",
    padding: "10px"
  },
  menuBtn: {
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "250px",
    background: "#A2D2FF", // Bleu pastel
    margin: "20px 0"
  },
  carouselContent: {
    width: "70%",
    height: "150px",
    background: "#B8E2F2", // Bleu ciel pastel
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  arrow: {
    fontSize: "30px",
    cursor: "pointer",
    background: "none",
    border: "none"
  },
  section: {
    textAlign: "center",
    padding: "20px"
  },
  title: {
    color: "#FF758F" // Rose foncé pastel
  },
  servicesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  serviceCard: {
    background: "white",
    padding: "20px",
    width: "200px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  serviceImg: {
    height: "100px",
    background: "#FFD166" // Jaune pastel
  },
  btn: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    background: "#FF758F", // Rose foncé pastel
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  testimonialsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  testimonial: {
    background: "white",
    padding: "20px",
    width: "200px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    background: "#C7CEEA", // Violet pastel
    padding: "20px",
    marginTop: "20px"
  }
};






