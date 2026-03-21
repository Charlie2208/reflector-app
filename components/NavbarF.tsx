'use client'
import Image from "next/image"
import { useState } from "react"

export default function NavbarF() {
  const [isOpen, setIsOpen] = useState(false)

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

      {/* Botón hamburguesa */}
      <button 
        className="nav-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
        <li><a href="/#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a></li>
        <li><a href="/#servicios" onClick={() => setIsOpen(false)}>Servicios</a></li>
        <li><a href="/#proceso" onClick={() => setIsOpen(false)}>Proceso</a></li>
        <li><a href="/blog" onClick={() => setIsOpen(false)}>Blog</a></li>
        <li><a href="/#contacto" onClick={() => setIsOpen(false)} className="nav-cta">Hablemos</a></li>
      </ul>
    </nav>
  )
}