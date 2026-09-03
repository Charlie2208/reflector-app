import { Metadata } from 'next'
import HeroServices from '@/components/HeroServices'
import PlanChoice from '@/components/PlanChoice'

export const metadata: Metadata = {
  title: 'Posicionamiento Web y Optimizacion SEO | Reflector Agencia de marketing digital',
  description: 'Aparece en los primeros resultados de Google. Optimizamos el SEO On-Page de tu sitio web para atraer tráfico calificado y aumentar tus ventas sin pagar por clic.',
  openGraph: {
    title: 'Posicionamiento Web y Optimizacion SEO On-Page | Reflector Agencia de marketing',
    description: 'Transforma tu sitio web en un canal constante de captacion de clientes. Estrategia SEO On-Page orientada a posicionar tu pyme en los primeros lugares de Google.',
    url: 'https://reflector.cl/servicios/seo',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const planes = [
  {
    nombre: 'Plan SEO On-Page base. Único pago',
    precio: '$200.000',
    tag: 'Más popular',
    descripcion: 'Dejamos la estructura técnica del sitio perfecta y lista para ser indexada por Google.',
    incluye: [
      'Indexación y Configuración: Alta y vinculación profesional en Google Search Console y creación/envío de Sitemap XML.',
      'Optimización On-Page: Estructuración de Meta Tags (Titles, Descriptions) y encabezados (H1, H2, H3) orientados a conversión.',
      'Investigación de Palabras Clave: Selección de palabras clave estratégicas basadas en conceptos foco e intención de búsqueda del comprador.',
      'Estructura Técnica: Implementación de datos estructurados (Schema Markup) para destacar en los resultados de búsqueda.',
    ],
    nota: '',
    destacado: true,
  },
  {
    nombre: 'Plan full SEO y SEO Local',
    precio: '$350.000',
    tag: 'Para crecer',
    descripcion: 'Dominar las búsquedas locales, construir autoridad de marca y captar tráfico constante mediante contenidos.',
    incluye: [
      'Todo lo incluido en el Plan On-Page Base.',
      'Estrategia de SEO Local: Optimización completa y plan de reputación en Google Business Profile (reseñas, ubicación en Google Maps y geolocalización).',
      'Estrategia de Contenidos: Creación y optimización de artículos de blog relevantes orientados a resolver las dudas y búsquedas más frecuentes de tus clientes.',
      'SEO por Intención de Clic: Alineación técnica de la arquitectura de la web para aparecer en búsquedas de alta intención de compra.',
      'Reporte de Posicionamiento: Informe de rendimiento de palabras clave y volumen de tráfico orgánico captado.',
    ],
    nota: '*Esta es la tarifa base. Para gestionar mes a mes hay que pagar adicional',
    destacado: false,
  },
]

const HERO_DATA = {
  title: 'Servicio de Optimizacion SEO para Pymes, desde $200.000.',
  description: 'Convertimos los motores de búsqueda en tu principal canal de ventas. Optimizamos la estructura técnica, el contenido y la experiencia de tu sitio web para que aparezcas en los primeros lugares de Google cuando tus clientes estén listos para comprar.'
}

const WA_LINK = 'https://wa.me/56956075020'

export default function Seo(){
    return(
        <main style={{ background: 'var(--dark)', color: 'var(--white)' }}>

            <HeroServices 
                        title={HERO_DATA.title} 
                        description={HERO_DATA.description} 
                    />
            <section
                style={{
                padding: '6rem 5vw',
                borderTop: '1px solid rgba(247,246,244,0.08)',
                background: '#050505',
            }}
                >
             <section style={{
                                        padding: '6rem 5vw',
                                        borderTop: '1px solid rgba(247,246,244,0.08)',
                                        background: '#050505',
                                    }}>
                                 <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                                    <PlanChoice />
                                    <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                    gap: '2px',
                                  }}>
                                    {planes.map((plan) => (
                                      <div key={plan.nombre} style={{
                                        background: plan.destacado ? 'rgba(0,39,255,0.12)' : 'rgba(247,246,244,0.03)',
                                        border: plan.destacado ? '1px solid rgba(0,39,255,0.5)' : '1px solid rgba(247,246,244,0.07)',
                                        padding: '2.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.2rem',
                                        position: 'relative',
                                      }}>
                                        {plan.destacado && (
                                          <span style={{
                                            position: 'absolute',
                                            top: '1.2rem',
                                            right: '1.2rem',
                                            background: 'var(--blue)',
                                            color: 'var(--white)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            padding: '4px 10px',
                                            borderRadius: '2px',
                                            fontFamily: 'var(--font-open-sans)',
                                            fontWeight: 700,
                                          }}>
                                            {plan.tag}
                                          </span>
                                        )}
                        
                                        {!plan.destacado && (
                                          <span style={{
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            color: 'rgba(247,246,244,0.4)',
                                            fontFamily: 'var(--font-open-sans)',
                                          }}>
                                            {plan.tag}
                                          </span>
                                        )}
                        
                                        <h3 style={{
                                          fontFamily: 'var(--font-anton)',
                                          fontSize: '1.4rem',
                                          letterSpacing: '0.04em',
                                          color: 'var(--white)',
                                        }}>{plan.nombre}</h3>
                        
                                        <div style={{
                                          fontFamily: 'var(--font-anton)',
                                          fontSize: '2.8rem',
                                          lineHeight: 1,
                                          color: plan.destacado ? 'var(--blue)' : 'var(--white)',
                                        }}>
                                          {plan.precio}
                                          <span style={{
                                            fontSize: '0.9rem',
                                            fontFamily: 'var(--font-open-sans)',
                                            color: 'rgba(247,246,244,0.4)',
                                            marginLeft: '6px',
                                            fontWeight: 400,
                                          }}>+ IVA</span>
                                        </div>
                        
                                        <p style={{
                                          fontSize: '0.9rem',
                                          lineHeight: '1.6',
                                          color: 'rgba(247,246,244,0.55)',
                                        }}>{plan.descripcion}</p>
                        
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                                          {plan.incluye.map((item, i) => (
                                            <li key={i} style={{
                                              fontSize: '0.88rem',
                                              lineHeight: '1.5',
                                              color: 'rgba(247,246,244,0.7)',
                                              display: 'flex',
                                              gap: '0.6rem',
                                              alignItems: 'flex-start',
                                            }}>
                                              <span style={{ color: 'var(--blue)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                        
                                        <p style={{
                                          fontSize: '0.72rem',
                                          color: 'rgba(247,246,244,0.3)',
                                          lineHeight: '1.5',
                                          marginTop: '0.5rem',
                                        }}>{plan.nota}</p>
                        
                                        <a
                                          href={`${WA_LINK}?text=Hola, me interesa el ${plan.nombre} de Reflector`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{
                                            display: 'block',
                                            textAlign: 'center',
                                            padding: '0.85rem',
                                            background: plan.destacado ? 'var(--blue)' : 'transparent',
                                            border: plan.destacado ? 'none' : '1px solid rgba(247,246,244,0.2)',
                                            color: 'var(--white)',
                                            textDecoration: 'none',
                                            fontFamily: 'var(--font-open-sans)',
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.14em',
                                            textTransform: 'uppercase',
                                            borderRadius: '2px',
                                            marginTop: 'auto',
                                            transition: 'background 0.25s, border-color 0.25s',
                                          }}
                                        >
                                          Contratar por WhatsApp
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                        
                                </div>
            </section>   
                
            </section>

        </main>
    )
}