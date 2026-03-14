export default function Hero(){
    return(
        <section className="hero" id="inicio">
            <span className="hero-badge-1">Agencia de Marketing Digital</span>
            <h1>Tu marca<br />bajo el <span>reflector</span></h1>
            <p className="hero-sub">
      Potenciamos marcas con estrategia, creatividad y datos. Hacemos que tu negocio brille donde más importa.
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