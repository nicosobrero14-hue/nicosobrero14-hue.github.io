export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Nicolás Sobrero</p>
        <div className="footer__socials">
          <a href="https://github.com/nicosobrero14-hue" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bi bi-github" />
          </a>
          <a href="https://www.linkedin.com/in/nicolassobrero" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  )
}
