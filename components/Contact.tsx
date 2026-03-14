export default function Contact(){
    return(
         <section className="contact" id="contacto">
    <div>
      <p className="section-label">Contacto</p>
      <h2 className="section-title" style={{color:'var(--white)'}}>Hablemos de tu proyecto</h2>
      <p className="section-desc">
        Contanos sobre tu marca y tus objetivos. Nuestro equipo te responde en menos de 24 horas con una propuesta inicial sin costo.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <div className="contact-item-label">Email</div>
            <div className="contact-item-text">hola@reflectoragencia.com</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <div>
            <div className="contact-item-label">WhatsApp</div>
            <div className="contact-item-text">+54 9 11 0000-0000</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <div className="contact-item-label">Ubicación</div>
            <div className="contact-item-text">Buenos Aires, Argentina</div>
          </div>
        </div>
      </div>
    </div>
    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" />
        </div>
      </div>
      <div className="form-group">
        <label>Empresa / Marca</label>
        <input type="text" placeholder="Nombre de tu empresa" />
      </div>
      <div className="form-group">
        <label>Servicio de interés</label>
        <select defaultValue="">
          <option value="" disabled>Seleccioná un servicio</option>
          <option>Estrategia Digital</option>
          <option>Publicidad en Meta Ads y Google Ads</option>
          <option>Gestión y Contenido para RRSS</option>
          <option>Branding e Identidad Visual</option>
          <option>Storytelling y Contenido Creativo</option>
          <option>Análisis de Datos y Optimización</option>
          <option>Varios servicios</option>
        </select>
      </div>
      <div className="form-group">
        <label>Mensaje</label>
        <textarea placeholder="Contanos sobre tu proyecto y tus objetivos..."></textarea>
      </div>
      <button type="submit" className="btn-primary" style={{alignSelf:'flex-star'}}>Enviar mensaje</button>
    </form>
  </section>
    )
}