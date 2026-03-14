export default function About(){
    return(
    <section className="about" id="nosotros">
        <div className="about-visual">
        <div className="about-circle-bg">
            <img src="logo.png" alt="Reflector" className="about-logo" />
        </div>
        </div>
        <div className="about-text">
        <p className="section-label">Quiénes somos</p>
        <h2 className="section-title">Marketing que mueve resultados reales</h2>
        <p className="section-desc">
            En Reflector somos un equipo apasionado por las marcas y los resultados. Combinamos estrategia, creatividad y tecnología para construir presencias digitales que generan impacto medible. No hacemos marketing genérico: diseñamos cada campaña a la medida de tu negocio.
        </p>
        <div className="about-pills">
            <span className="pill">Estrategia</span>
            <span className="pill">Creatividad</span>
            <span className="pill">Datos</span>
            <span className="pill">Resultados</span>
            <span className="pill">Innovación</span>
        </div>
        </div>
  </section>
    )
}