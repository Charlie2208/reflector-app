export default function Testimonials(){
    return(
        <section className="testimonials" id="testimonios">
    <div className="testimonials-header">
      <p className="section-label">Lo que dicen</p>
      <h2 className="section-title">Clientes que confían en Reflector</h2>
      <p className="section-desc">Resultados reales de marcas reales que decidieron brillar.</p>
    </div>
    <div className="testi-grid">

      <div className="testi-card">
        <div className="testi-quote">"</div>
        <p className="testi-text">Reflector transformó por completo nuestra presencia digital. En tres meses triplicamos nuestras consultas orgánicas y las campañas de Meta Ads superaron todas las expectativas.</p>
        <div className="testi-author">
          <div className="testi-avatar">MR</div>
          <div>
            <div className="testi-name">María Rodríguez</div>
            <div className="testi-role">CEO — Estudio MR Arquitectura</div>
          </div>
        </div>
      </div>

      <div className="testi-card">
        <div className="testi-quote">"</div>
        <p className="testi-text">El equipo de Reflector entiende el negocio antes de hablar de marketing. Su estrategia de contenido nos posicionó como referentes en nuestro sector en tiempo récord.</p>
        <div className="testi-author">
          <div className="testi-avatar">JP</div>
          <div>
            <div className="testi-name">Juan Pablo Ferreyra</div>
            <div className="testi-role">Fundador — JP Fitness & Wellness</div>
          </div>
        </div>
      </div>

      <div className="testi-card">
        <div className="testi-quote">"</div>
        <p className="testi-text">El rebranding que hicieron para nuestra empresa fue exactamente lo que necesitábamos. Profesionalismo, creatividad y resultados medibles desde el primer mes.</p>
        <div className="testi-author">
          <div className="testi-avatar">SL</div>
          <div>
            <div className="testi-name">Sofía Lemos</div>
            <div className="testi-role">Directora Comercial — Grupo SL</div>
          </div>
        </div>
      </div>

    </div>
  </section>
    )
}