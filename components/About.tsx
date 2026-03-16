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
            En Reflector nos mueven las buenas ideas y el crecimiento de los negocios.
Tomamos la parte difícil del marketing para que tú puedas concentrarte en lo importante..
Combinamos estrategia, creatividad y tecnología para aplicar las mejores prácticas del marketing moderno con un objetivo claro: llevar tu emprendimiento al siguiente nivel.
Cada proyecto se diseña a la medida de tus objetivos.
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