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
