import { Metadata } from 'next'
import HeroServices from '@/components/HeroServices'
import PlanChoice from '@/components/PlanChoice'

export const metadata: Metadata = {
  title: 'Publicidad en Meta (Facebook e Instagram) y Google Ads | Reflector Agencia de Marketing Digital',
  description: 'Arma tus campañas en instantes. Configuramos tu cuenta publicitaria para que puedas comenzar a captar nuevos clientes desde el día 1',
  openGraph: {
    title: 'Publicidad digital en Meta y Google Ads | Reflector Agencia de Marketing Digital',
    description: 'Empieza hoy mismo a vender mediante campañas digitales en Meta y Google, contamos con certificación oficial de Meta, para que tus camapañas tengan resultados reales y medibles',
    url: 'https://reflector.cl/servicios/publicidad-digital',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const HERO_DATA = {
  title: 'Tu primera campaña a sólo $30.000+ IVA.',
  description: 'Configuramos tu cuenta publicitaria en Meta para armar tu primera campaña y escalar tu negocio a una audiencia masiva. Sin complicaciones de configuración. Incluye la pieza gráfica.'
}


const planes = [
  {
    nombre: 'Súper Promo primera campaña por 30K',
    precio: '$30.000',
    tag: 'Para empezar',
    descripcion: 'Armamos tu cuenta publicitaria en Meta para que empieces a vender al instante',
    incluye: [
      'Configuración técnica de Business Manager / Meta Ads (Business Suite + Pixel básico).',
      'Creación de 1 campaña (Objetivo: lo definimos juntos).',
      'Diseño de 1 creativo adaptado (Formato Feed + Story) con copy publicitario optimizado.',
      'Segmentación inicial de público objetivo.',
      'Duración: Campaña activa de prueba (7 a 10 días)',
    ],
    nota: '*El presupuesto publicitario lo paga el cliente directamente en Meta',
    destacado: false,
  },
  {
    nombre: 'Plan Mensual Simple',
    precio: '$120.000',
    tag: 'Más popular',
    descripcion: 'Mantener flujo constante de leads/consultas/clientes por WhatsApp o sitio web.',
    incluye: [
      'Todo lo del Plan Esencial +',
      'Gestión de 1 plataforma (Meta Ads: Facebook e Instagram).',
      '1 Campaña activa fija + 1 Campaña de Retargeting.',
      'Diseño de hasta 4 creativos mensuales (gráficos/estáticos) + copys.',
      'Optimización semanal de presupuesto y audiencias.',
      'Informe mensual simple de métricas (Costo por Clic, Costo por Lead/Chat, Alcance, Roas).',
    ],
    nota: '*El presupuesto publicitario lo paga el cliente directamente en Meta.',
    destacado: true,
  },
  {
    nombre: 'Plan Mensual Pro Ecommerce',
    precio: '$220.000',
    tag: 'Máximo rendimiento',
    descripcion: 'Escalar ventas en Shopify u otro proveedor o captar prospectos de alto valor.',
    incluye: [
      'Todo lo del Plan Crecimiento +',
      'Gestión multicanal (Meta Ads + Google Ads Search/Shopping).',
      'Hasta 3 Campañas activas en paralelo (Captación + Retargeting + Catálogo Dinámico).',
      'Diseño de 8 creativos mensuales (Gráficos + 2 Adaptaciones en Video Corto/Reels).',
      'Pruebas A/B continuas de textos, imágenes y públicos.',
      'Instalación y monitoreo de eventos avanzados (Pixel, CAPI y GA4).',
      'Reporte mensual estratégico con reunión de 30 min para revisión de KPIs.',
    ],
    nota: '*El presupuesto publicitario lo paga el cliente directamente en Meta.',
    destacado: false,
  },
]

const WA_LINK = 'https://wa.me/56956075020'

export default function AdsPages(){
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