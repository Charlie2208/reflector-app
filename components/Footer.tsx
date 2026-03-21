import Image from "next/image"

export default function Footer(){
    return(
<footer>
    <div className="footer-top">
      <div className="footer-brand">
        <Image 
              src="/logo.png" 
              alt="Reflector Logo" 
              width={48}
              height={48}
                />
        <div className="footer-brand-name">Reflector</div>
        <p>Agencia creativa de marketing digital enfocada en estrategias de adquisición y crecimiento.</p>
      </div>
      <div className="footer-col">
        <h5>Servicios</h5>
        <ul>
          <li><a href="#">Estrategia Digital</a></li>
          <li><a href="#">Meta Ads & Google Ads</a></li>
          <li><a href="#">Gestión de RRSS</a></li>
          <li><a href="#">Branding</a></li>
          <li><a href="#">Storytelling</a></li>
          <li><a href="#">Análisis de Datos</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Agencia</h5>
        <ul>
          <li><a href="/#">Nosotros</a></li>
          <li><a href="/#">Proceso</a></li>
          {/* <li><a href="#">Clientes</a></li> */}
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Contacto</h5>
        <ul>
          <li><a href="#">hola@reflector.cl</a></li>
          <li><a href="https://wa.me/56956075020" target="_blank">WhatsApp</a></li>
          <li><a href="#">Santiago, CL</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 <span>Reflector</span> Agencia de Marketing. Todos los derechos reservados.</p>
      <div className="social-links">
             {/* <!-- Instagram --> */}
        <a href="https://www.instagram.com/reflectoram" target="_blank" className="social-link" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        {/* <!-- LinkedIn --> */}
        <a href="https://www.tiktok.com/@reflectoram" target="_blank" className="social-link" aria-label="TikTok">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
          </svg>
        </a>

        <a href="https://web.facebook.com/profile.php?id=61585018786233" target="_blank" className="social-link" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
      </div>
    </div>
  </footer>
    )
}