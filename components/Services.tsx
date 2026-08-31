export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services-header">
        <div>
          <p className="section-label">Lo que hacemos</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Nuestros servicios</h2>
        </div>
        <p className="section-desc">
          Soluciones digitales claras y directas para que tu pyme atraiga más clientes y venda más.
        </p>
      </div>
      <div className="services-grid">

        {/* 01. Tiendas Online y Web */}
        <div className="service-card">
          <div className="service-number">01</div>
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h3>Creación de Tiendas Online (Ecommerce) y Páginas Web</h3>
          <p>Diseñamos tu e-commerce o sitio web listo para vender rápido, fácil de navegar para tus clientes y optimizado para celulares.</p>
        </div>

        {/* 02. Publicidad Digital */}
        <div className="service-card">
          <div className="service-number">02</div>
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <h3>Publicidad Digital (Meta Ads y Google Ads)</h3>
          <p>Creamos y administraciones tus anuncios en Facebook, Instagram y Google para atraer clientes verdaderamente interesados en comprar tus productos o servicios (con certificación oficial).</p>
        </div>

        {/* 03. Posicionamiento en Google */}
        <div className="service-card">
          <div className="service-number">03</div>
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <h3>Posicionamiento en Google (SEO)</h3>
          <p>Optimizamos tu página para que aparezca en las primeras búsquedas de Google sin tener que pagar publicidad todo el tiempo.</p>
        </div>

        {/* 04. Gestión de Redes Sociales */}
        <div className="service-card">
          <div className="service-number">04</div>
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3>Gestión de Redes Sociales y Contenido</h3>
          <p>Nos encargamos de diseñar tus publicaciones, Reels y mantener tus redes activas con una imagen profesional que atraiga y fidelice seguidores.</p>
        </div>

        {/* 05. Diseño de Marca */}
        <div className="service-card">
          <div className="service-number">05</div>
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <h3>Diseño de Marca e Identidad Visual</h3>
          <p>Creamos el logo, colores y estilo visual de tu empresa para que proyectes la confianza que necesita un negocio moderno.</p>
        </div>

        {/* 06. Reportes y Medición */}
        <div className="service-card">
          <div className="service-number">06</div>
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <h3>Reportes y Medición de Ventas</h3>
          <p>Instalamos las herramientas de seguimiento necesarias para que sepas exactamente cuánto vendes, de dónde vienen tus clientes y cómo rinde cada peso invertido.</p>
        </div>

      </div>
    </section>
  );
}