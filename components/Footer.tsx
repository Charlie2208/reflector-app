export default function Footer(){
    return(
<footer>
    <div className="footer-top">
      <div className="footer-brand">
        <img src="logo.png" alt="Reflector" />
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
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Proceso</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Contacto</h5>
        <ul>
          <li><a href="#">reflectoram@gmail.com</a></li>
          <li><a href="#">WhatsApp</a></li>
          <li><a href="#">Santiago, CL</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 <span>Reflector</span> Agencia de Marketing. Todos los derechos reservados.</p>
      <div className="social-links">
             {/* <!-- Instagram --> */}
        <a href="#" className="social-link" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        {/* <!-- LinkedIn --> */}
        <a href="#" className="social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>

        <a href="#" className="social-link" aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
      </div>
    </div>
  </footer>
    )
}