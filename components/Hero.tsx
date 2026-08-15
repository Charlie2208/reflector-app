export default function Hero(){
    return(
        <section className="hero" id="inicio">
            <span className="hero-badge-1">Agencia de Marketing Digital en Chile</span>
            <h1>Haz crecer<br />tu <span>negocio</span></h1>
            <p className="hero-sub">
      Somos una agencia de marketing especializada en emprendimientos, te ayudamos a crecer con estrategia, creatividad y datos. Nos adaptamos a todos los presupuestos.
            </p>
            <div className="hero-actions">
            <a href="#servicios" className="btn-primary">Ver servicios</a>
            <a href="#contacto" className="btn-outline">Hablemos</a>
            </div>
            <div className="hero-scroll">
            <div className="scroll-line"></div>
      Scroll
            </div>
        </section>
    )
}