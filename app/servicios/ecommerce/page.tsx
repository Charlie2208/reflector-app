import { Metadata } from 'next'
import HeroServices from '@/components/HeroServices'
import PlanChoice from '@/components/PlanChoice'
import { WhatsappCTA } from '@/components/WhatsappCTA';


export const metadata: Metadata = {
  title: 'Ecommerce con Shopify | Reflector Agencia de Marketing Digital',
  description: 'Abre tu tienda online en pocos días. Configuramos tu ecommerce en Shopify con dominio .cl, pasarela de pago Flow, SEO básico y hasta 5 productos cargados.',
  openGraph: {
    title: 'Ecommerce con Shopify | Reflector Agencia de Marketing Digital',
    description: 'Abre tu tienda online en pocos días. Configuramos tu ecommerce en Shopify con dominio .cl, pasarela de pago Flow, SEO básico y hasta 5 productos cargados.',
    url: 'https://reflector.cl/servicios/ecommerce',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const HERO_DATA = {
  title: 'Tu tienda online lista en pocos días.',
  description: 'Configuramos tu ecommerce en Shopify con todo lo necesario para empezar a vender: dominio, pasarela de pago, productos cargados y SEO básico. Sin complicaciones técnicas, tú solo te preocupas de vender.'
}

const planes = [
  {
    nombre: 'Ecommerce Esencial',
    precio: '$150.000',
    tag: 'Para empezar',
    descripcion: 'Todo lo que necesitas para tener tu tienda online operativa en pocos días.',
    incluye: [
      'Tienda Shopify configurada y lista para vender',
      'Dominio .cl gratis por 1 año',
      'Pasarela de pago configurada vía Flow',
      'Hasta 5 productos cargados con ficha completa',
      'SEO básico: títulos, meta-descripciones y URLs amigables',
      'Integración con Google Search Console',
      'Tienda optimizada para móviles',
    ],
    nota: '*Suscripción a Shopify Basic y comisiones por pago corren por cuenta del cliente.',
    destacado: false,
  },
  {
    nombre: 'Plan Crecimiento',
    precio: '$250.000',
    tag: 'Más popular',
    descripcion: 'Medición precisa para campañas pagadas y mayor capacidad de productos.',
    incluye: [
      'Todo lo del Plan Esencial +',
      'Meta Pixel + API de Conversiones (CAPI)',
      'Google Merchant Center + Canal de YouTube configurado',
      'Google Analytics 4 con eventos de e-commerce (Add to Cart, Begin Checkout, Purchase)',
      'SEO On-Page en páginas principales y hasta 15 productos',
      'Hasta 15 productos cargados con ficha completa',
    ],
    nota: '*Suscripción a Shopify Basic y comisiones por pago corren por cuenta del cliente.',
    destacado: true,
  },
  {
    nombre: 'Plan Pro',
    precio: '$400.000',
    tag: 'Máximo rendimiento',
    descripcion: 'Automatización de ventas, retención de clientes y logística operativa.',
    incluye: [
      'Todo lo del Plan Crecimiento +',
      'Email Marketing automatizado (Klaviyo / Shopify Email)',
      'Flujo de recuperación de carritos abandonados (2 correos)',
      'Flujo automático de bienvenida y primer descuento',
      'Cross-selling y upselling en el carrito',
      'Banner o pop-up de captura de leads',
      'Integración con plataformas de envíos (Envíame, Shippify, Starken o Chilexpress)',
      'Hasta 30 productos cargados',
      'Capacitación en vivo de 1 hora por videollamada',
    ],
    nota: '*Suscripción a Shopify Basic y comisiones por pago corren por cuenta del cliente.',
    destacado: false,
  },
]

const WA_LINK = 'https://wa.me/56956075020'

export default function EcommercePage() {
  return (
    <main style={{ background: 'var(--dark)', color: 'var(--white)' }}>
      {/* HERO */}
      <HeroServices 
        title={HERO_DATA.title} 
        description={HERO_DATA.description} 
      />

      {/* PLANES */}
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

                <WhatsappCTA 
                  message={`Hola, me interesa el ${plan.nombre} de Reflector`} 
                  destacado={plan.destacado} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
