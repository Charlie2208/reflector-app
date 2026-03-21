import Image from "next/image"

export default function NavbarF() {
  return (
    <nav>
    <a href="/#" className="nav-logo">
      <Image 
        src="/logo.png" 
        alt="Reflector Logo" 
        width={48}
        height={48}
        />
      <span className="nav-logo-text">Reflector</span>
    </a>
    <ul className="nav-links">
      <li><a href="/#nosotros">Nosotros</a></li>
      <li><a href="/#servicios">Servicios</a></li>
      <li><a href="/#proceso">Proceso</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/#contacto" className="nav-cta">Hablemos</a></li>
    </ul>
  </nav>
  )
}