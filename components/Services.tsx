export default function Services(){
    return(
         <section className="services" id="servicios">
    <div className="services-header">
      <div>
        <p className="section-label">Lo que hacemos</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Nuestros servicios</h2>
      </div>
      <p className="section-desc">
        Soluciones integrales de marketing digital diseñadas para escalar tu negocio con precisión y creatividad.
      </p>
    </div>
    <div className="services-grid">

              
      <div className="service-card">
        <div className="service-number">01</div>
        <div className="service-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <h3>Estrategia Digital</h3>
        <p>Diseñamos el mapa completo de tu presencia online: objetivos, audiencias, canales y KPIs alineados a tu negocio.</p>
      </div>

    
      <div className="service-card">
        <div className="service-number">02</div>
        <div className="service-icon">
          <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <h3>Publicidad en Meta Ads y Google Ads</h3>
        <p>Campañas de pago optimizadas para maximizar tu inversión publicitaria y alcanzar a tu cliente ideal en el momento justo.</p>
      </div>

     
      <div className="service-card">
        <div className="service-number">03</div>
        <div className="service-icon">
          <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h3>Gestión y Contenido para RRSS</h3>
        <p>Creamos y gestionamos tu comunidad digital con contenido relevante, consistente y que genera conversaciones reales.</p>
      </div>

     
      <div className="service-card">
        <div className="service-number">04</div>
        <div className="service-icon">
          <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </div>
        <h3>Branding e Identidad Visual</h3>
        <p>Construimos marcas memorables: desde el naming y logotipo hasta el sistema visual completo que te diferencia.</p>
      </div>

      
      <div className="service-card">
        <div className="service-number">05</div>
        <div className="service-icon">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <h3>Storytelling y Contenido Creativo</h3>
        <p>Contamos la historia de tu marca de manera auténtica y poderosa, conectando emocionalmente con tu audiencia.</p>
      </div>

      
      <div className="service-card">
        <div className="service-number">06</div>
        <div className="service-icon">
          <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        </div>
        <h3>Análisis de Datos y Optimización</h3>
        <p>Medimos todo, interpretamos los datos y tomamos decisiones basadas en evidencia para mejorar continuamente tus resultados.</p>
      </div>

    </div>
  </section>
    )
}