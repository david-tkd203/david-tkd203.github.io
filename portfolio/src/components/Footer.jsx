export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="#" title="GitHub">GitHub</a>
          <a href="#" title="LinkedIn">LinkedIn</a>
          <a href="#" title="Twitter">Twitter</a>
        </div>
        <p>&copy; {currentYear} Mi Portfolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
