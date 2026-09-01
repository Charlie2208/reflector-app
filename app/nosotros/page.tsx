import { Metadata } from 'next'
import WhatsappButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: 'Nosotros | Reflector Agencia de Marketing Digital',
  description: 'Somos una agencia de marketing digital con sede en Santiago de Chile. No vendemos humo, vendemos estrategia y resultados basados en la realidad de tu negocio.',
  openGraph: {
    title: 'Nosotros | Reflector Agencia de Marketing Digital',
    description: 'Somos una agencia de marketing digital con sede en Santiago de Chile. No vendemos humo, vendemos estrategia y resultados basados en la realidad de tu negocio.',
    url: 'https://reflector.cl/nosotros',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const servicios = [
  { numero: '01', titulo: 'Creación de Tiendas Online y Páginas Web', descripcion: 'Diseñamos tu e-commerce o sitio web corporativo listo para vender, rápido, fácil de navegar para tus clientes y optimizado para celulares.' },
  { numero: '02', titulo: 'Publicidad Digital (Meta Ads y Google Ads)', descripcion: 'Creamos y administramos tus anuncios en Facebook, Instagram y Google para atraer clientes verdaderamente interesados en comprar tus productos o servicios.' },
  { numero: '03', titulo: 'Posicionamiento en Google (SEO)', descripcion: 'Optimizamos tu página para que aparezca en las primeras búsquedas de Google sin tener que pagar publicidad todo el tiempo.' },
  { numero: '04', titulo: 'Gestión de Redes Sociales y Contenido', descripcion: 'Nos encargamos de diseñar tus publicaciones, Reels y mantener tus redes activas con una imagen profesional que atraiga y fidelice seguidores.' },
  { numero: '05', titulo: 'Diseño de Marca e Identidad Visual', descripcion: 'Creamos el logo, colores y estilo visual de tu empresa para que proyectes la confianza que necesita un negocio moderno.' },
  { numero: '06', titulo: 'Reportes y Medición de Resultados', descripcion: 'Instalamos las herramientas de seguimiento necesarias para que sepas exactamente cuánto vendes, de dónde vienen tus clientes y cómo rinde cada peso invertido.' },
]

export default function NosotrosPage() {
  return (
    <main style={{ background: 'var(--dark)', color: 'var(--white)' }}>

      {/* HERO */}
      <section style={{
        padding: '10rem 5vw 6rem',
        background: 'var(--dark)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p className="section-label">Quiénes somos</p>
        <h1 className="section-title" style={{
          fontSize: 'clamp(3rem, 7vw, 7rem)',
          lineHeight: '0.95',
          color: 'var(--white)',
          marginBottom: '2rem',
        }}>
          Nosotros
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          lineHeight: '1.75',
          color: 'rgba(247,246,244,0.7)',
          fontWeight: 300,
        }}>
          Somos una agencia de marketing digital con sede en Santiago de Chile que se especializa en ayudar empresas de diferentes tamaños a generar resultados, centrándose en lo importante: sus clientes, productos y servicios.{' '}
          <strong style={{ color: 'var(--white)', fontWeight: 600 }}>
            No vendemos humo, vendemos estrategia y resultados basados en la realidad del negocio.
          </strong>
        </p>
      </section>

      {/* PROPÓSITO E HISTORIA */}
      <section style={{
        padding: '6rem 5vw',
        borderTop: '1px solid rgba(247,246,244,0.08)',
        background: 'var(--dark)',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <p className="section-label">Propósito e historia</p>
        <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '2rem' }}>
          Por qué existe Reflector
        </h2>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.85',
          color: 'rgba(247,246,244,0.65)',
          fontWeight: 300,
          marginBottom: '1.5rem',
        }}>
          Partimos en 2026 con la idea clara de ayudar a maximizar los resultados de negocios que son esencialmente buenos, con equipos increíbles y productos espectaculares, pero que no logran escalar o consolidar sus objetivos.
        </p>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.85',
          color: 'rgba(247,246,244,0.65)',
          fontWeight: 300,
        }}>
          Conversando con diversos emprendedores y empresarios notamos que todos tenían nociones de cómo trabajar una estrategia digital, pero se perdían en el vasto contenido de internet y terminaban frustrados o quemando recursos en campañas sin resultados. Por eso decidimos dar el paso al frente y ayudar desde la experiencia real y el conocimiento adquirido, para que el trabajo de nuestros clientes sea más simple y puedan enfocarse en lo que realmente importa.
        </p>
      </section>

      {/* EQUIPO */}
      <section style={{
        padding: '6rem 5vw',
        borderTop: '1px solid rgba(247,246,244,0.08)',
        background: 'var(--dark)',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <p className="section-label">El equipo</p>
        <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '3rem' }}>
          Quién está detrás
        </h2>
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'rgba(0,39,255,0.2)',
            border: '2px solid rgba(0,39,255,0.4)',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            <img
              src="https://amzn-docs-ed.s3.us-east-1.amazonaws.com/foto-perfil.png"
              alt="Carlos Araya"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h3 style={{
              fontFamily: 'var(--font-anton)',
              fontSize: '1.8rem',
              letterSpacing: '0.04em',
              marginBottom: '0.4rem',
              color: 'var(--white)',
            }}>Carlos Araya Salfate</h3>
            <p style={{
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--blue)',
              marginBottom: '1.2rem',
            }}>Fundador & Director</p>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.8',
              color: 'rgba(247,246,244,0.65)',
              fontWeight: 300,
            }}>
              Ingeniero en Administración mención Marketing y Diplomado en Marketing Digital FEN UChile. Especialista en estrategia digital, Meta Ads, Google Ads y desarrollo web. Fundé Reflector con el propósito de llevar marketing de calidad a negocios que lo merecen.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{
        padding: '6rem 5vw',
        borderTop: '1px solid rgba(247,246,244,0.08)',
        background: '#050505',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="section-label">Lo que hacemos</p>
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '3rem' }}>
            Nuestros servicios
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {servicios.map((s, i) => (
              <li key={s.numero} style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '1.5rem',
                alignItems: 'start',
                padding: '2rem 0',
                borderBottom: i < servicios.length - 1 ? '1px solid rgba(247,246,244,0.07)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'var(--font-anton)',
                  fontSize: '1rem',
                  color: 'var(--blue)',
                  letterSpacing: '0.04em',
                  paddingTop: '3px',
                }}>{s.numero}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-anton)',
                    fontSize: '1.2rem',
                    letterSpacing: '0.04em',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                  }}>{s.titulo}</h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    color: 'rgba(247,246,244,0.55)',
                  }}>{s.descripcion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '8rem 5vw',
        textAlign: 'center',
        background: 'var(--blue)',
      }}>
        <p className="section-label" style={{ color: 'var(--white)' }}>¿Listo para crecer?</p>
        <h2 className="section-title" style={{ color: 'var(--white)', maxWidth: '16ch', margin: '0 auto 1.5rem' }}>
          Hagamos crecer tu negocio.
        </h2>
        <a href="/#contacto" className="btn-white">Hablemos</a>
      </section>
      <WhatsappButton />

    </main>
  )
}
