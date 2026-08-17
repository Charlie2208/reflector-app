export default function Hero(){
    return(
        <section className="hero" id="inicio">
            <span className="hero-badge-1">Agencia de Marketing Digital en Chile</span>
            <h1>Haz crecer<br />tu <span>negocio</span></h1>
            <div className="hero-sub">
                <p>
                    Somos una agencia de marketing con foco en <strong>emprendimientos y <span className="no-wrap">e-commerce</span></strong>.
                </p>
                <p>
                    ¿Cómo crecerás? Con <strong>estrategia, creatividad y datos</strong>. Contamos con certificación oficial de <strong>Meta</strong> y el respaldo académico de la <strong>Universidad de Chile</strong>.
                </p>
            </div>
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