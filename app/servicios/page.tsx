import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios | Reflector Agencia de Marketing Digital',
  description: 'Estrategia digital, ecommerce con Shopify, Meta Ads, Google Ads, SEO, gestión de redes sociales y branding para empresas en Santiago, Chile.',
  openGraph: {
    title: 'Servicios | Reflector Agencia de Marketing Digital',
    description: 'Estrategia digital, ecommerce con Shopify, Meta Ads, Google Ads, SEO, gestión de redes sociales y branding para empresas en Santiago, Chile.',
    url: 'https://reflector.cl/servicios',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const servicios = [
  {
    numero: '01',
    titulo: 'Creación de Tiendas Online y Páginas Web',
    descripcion: 'Tu tienda online lista en pocos días. Configuramos Shopify con dominio, pasarela de pago Flow, productos cargados y SEO básico.',
    slug: '/servicios/ecommerce',
    disponible: true,
  },
  {
    numero: '02',
    titulo: 'Publicidad Digital (Meta Ads y Google Ads)',
    descripcion: 'Campañas en Facebook, Instagram y Google para atraer clientes que realmente quieren comprar tu producto o servicio.',
    slug: '/servicios/publicidad-digital',
    disponible: true,
  },
  {
    numero: '03',
    titulo: 'Posicionamiento en Google (SEO)',
    descripcion: 'Optimizamos tu página para aparecer en las primeras búsquedas de Google sin pagar publicidad todo el tiempo.',
    slug: '/servicios/seo',
    disponible: true,
  },
  {
    numero: '04',
    titulo: 'Gestión de Redes Sociales y Contenido',
    descripcion: 'Nos encargamos de tus publicaciones, Reels y presencia en redes con una imagen profesional que atrae y fideliza seguidores.',
    slug: '/servicios/redes-sociales',
    disponible: true,
  },
  {
    numero: '05',
    titulo: 'Diseño de Marca e Identidad Visual',
    descripcion: 'Creamos el logo, colores y estilo visual de tu empresa para que proyectes la confianza que necesita un negocio moderno.',
    slug: '/servicios/branding',
    disponible: true,
  },
]

export default function ServiciosPage() {
  return (
    <main style={{ background: 'var(--dark)', color: 'var(--white)' }}>

      {/* HERO */}
      <section style={{
        padding: '10rem 5vw 6rem',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p className="section-label">Lo que hacemos</p>
        <h1 className="section-title" style={{
          fontSize: 'clamp(2.5rem, 6vw, 6rem)',
          lineHeight: '0.95',
          color: 'var(--white)',
          marginBottom: '2rem',
        }}>
          Nuestros servicios
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
          lineHeight: '1.75',
          color: 'rgba(247,246,244,0.7)',
          fontWeight: 300,
        }}>
          Combinamos estrategia, creatividad y tecnología para ayudarte a crecer. Cada servicio está diseñado para generar resultados reales, no métricas de vanidad.
        </p>
      </section>

      {/* LISTA DE SERVICIOS */}
      <section style={{
        padding: '2rem 5vw 8rem',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {servicios.map((s, i) => (
            <li key={s.numero} style={{
              borderBottom: i < servicios.length - 1 ? '1px solid rgba(247,246,244,0.07)' : 'none',
            }}>
              {s.disponible ? (
                <Link href={s.slug} style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '2.5rem 0',
                  textDecoration: 'none',
                  color: 'var(--white)',
                  transition: 'color 0.25s',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-anton)',
                    fontSize: '1rem',
                    color: 'var(--blue)',
                    letterSpacing: '0.04em',
                  }}>{s.numero}</span>
                  <div>
                    <h2 style={{
                      fontFamily: 'var(--font-anton)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                      letterSpacing: '0.04em',
                      color: 'var(--white)',
                      marginBottom: '0.5rem',
                    }}>{s.titulo}</h2>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      color: 'rgba(247,246,244,0.5)',
                    }}>{s.descripcion}</p>
                  </div>
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--blue)',
                    flexShrink: 0,
                  }}>→</span>
                </Link>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '2.5rem 0',
                  opacity: 0.4,
                  cursor: 'default',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-anton)',
                    fontSize: '1rem',
                    color: 'var(--blue)',
                    letterSpacing: '0.04em',
                  }}>{s.numero}</span>
                  <div>
                    <h2 style={{
                      fontFamily: 'var(--font-anton)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                      letterSpacing: '0.04em',
                      color: 'var(--white)',
                      marginBottom: '0.5rem',
                    }}>{s.titulo}</h2>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      color: 'rgba(247,246,244,0.5)',
                    }}>{s.descripcion}</p>
                  </div>
                  <span style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(247,246,244,0.4)',
                    fontFamily: 'var(--font-open-sans)',
                    flexShrink: 0,
                  }}>Próximamente</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

    </main>
  )
}
