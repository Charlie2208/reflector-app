import { Metadata } from 'next'
import HeroServices from '@/components/HeroServices'
import PlanChoice from '@/components/PlanChoice'

export const metadata: Metadata = {
   title: 'Gestión de Redes Sociales para Pymes | Reflector Agencia',
  description: 'Aumenta el alcance de tu marca con contenido estratégico. Estrategias validadas con certificación oficial de Meta para Instagram, Facebook.',
  openGraph: {
    title: 'Gestión de Redes Sociales y Creación de Contenido | Reflector Agencia',
    description: 'Diseño visual impactante y contenido enfocado en ventas. Gestión integral de comunidad con el respaldo y certificación oficial de Meta.',
    url: 'https://reflector.cl/servicios/redes-sociales',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const HERO_DATA = {
  title: 'Gestión de Redes Sociales para Pymes',
  description: 'Aumenta el alcance de tu marca con contenido estratégico. Estrategias validadas con certificación oficial de Meta para Instagram, Facebook y LinkedIn.'
}

const planes = [
  {
    nombre: 'Plan presencia digital RRSS',
    precio: '$100.000',
    tag: 'Más popular',
    descripcion: 'Mantenemos tu perfil activo y profesional creando una presencia continua.',
    incluye: [
      '2 publicaciones semanales (8 al mes) en formato estático/carrusel.',
      '1 historia semanal (4 al mes).',
      'Redacción de textos (copys) con llamados a la acción claros.',
      'Programación automática del contenido en Instagram y Facebook.',
    ],
    nota: '*No incluye: Respuesta de comentarios/mensajes ni edición de video complejo.',
    destacado: true,
  },
  {
    nombre: 'Plan Crecimiento PRO',
    precio: '$250.000',
    tag: 'Para crecer',
    descripcion: 'Generara interacción constante y captura activa de mensajes de venta.',
    incluye: [
      '3 publicaciones semanales (12 al mes) combinando carruseles, gráficos y Reels sencillos.',
      '3 historias semanales (12 al mes).',
      'Gestión activa de comunidad: Respuesta a comentarios y mensajes directos (DM) en horario hábil.',
      'Monitoreo de hashtags y optimización de perfil (Bio, historias destacadas).',
      'Reporte mensual básico de métricas en PDF.',
    ],
    nota: '*no incluye edición de video complejo.',
    destacado: false,
  },
  {
    nombre: 'Plan Full Brand',
    precio: '$500.000',
    tag: 'Máximo rendimiento',
    descripcion: 'Servicio integral llave en mano para clientes que exigen dedicación completa',
    incluye: [
      '4 a 5 publicaciones semanales (hasta 20 al mes) con enfoque en Reels y video corto.',
      'Historias diarias (de lunes a viernes).',
      'Gestión activa de comunidad prioritaria (respuestas rápidas en Instagram/Facebook/LinkedIn).',
      'Sesión mensual de planificación y estrategia de contenidos.',
      'Reporte mensual avanzado de crecimiento, alcance e interacción.',
      'Respaldo estratégico: Implementación bajo lineamientos y metodologías certificadas por Meta.',
      'Reporte mensual estratégico con reunión de 30 min para revisión de KPIs.',
    ],
    nota: '*',
    destacado: false,
  },
]

const WA_LINK = 'https://wa.me/56956075020'

export default function SocialMediaPage(){
    return(
        <main style={{ background: 'var(--dark)', color: 'var(--white)' }}>
        
                    <HeroServices 
                                title={HERO_DATA.title} 
                                description={HERO_DATA.description} 
                    />
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
                  
        
        </main>
    )
}
