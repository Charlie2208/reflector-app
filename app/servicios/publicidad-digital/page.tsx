import { Metadata } from 'next'
import BackLink from '@/components/BackLink'

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

