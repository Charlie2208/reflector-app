 export default function CtaServices(){
    return(
<section style={{
        padding: '8rem 5vw',
        textAlign: 'center',
        background: 'var(--blue)',
      }}>
        <p className="section-label" style={{ color: 'var(--white)' }}>¿No sabes por dónde empezar?</p>
        <h2 className="section-title" style={{ color: 'var(--white)', maxWidth: '18ch', margin: '0 auto 1.5rem' }}>
          Hablemos y lo definimos juntos.
        </h2>
        <a
          href="https://wa.me/56956075020"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white"
        >
          Escribirnos por WhatsApp
        </a>
      </section>
    )
 }
 