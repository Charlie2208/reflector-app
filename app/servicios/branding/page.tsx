import { Metadata } from 'next'
import HeroServices from '@/components/HeroServices'
import PlanChoice from '@/components/PlanChoice'

export const metadata: Metadata = {
  title: 'Identidad visual para tu negocio, logos, tipografías, paleta de colores | Reflector Agencia de Marketin',
  description: 'Genera una imagen de negocio desde el comienzo, porque cómo te ven tus clientes importa y mucho',
  openGraph: {
    title: 'Identidad visual, brandig para tu negocio | Reflector Agencia de Marketing Digital',
    description: 'Te armamos un kit con todo lo necesario para que tu negocio luzca profesional',
    url: 'https://reflector.cl/servicios/branding',
    siteName: 'Reflector',
    locale: 'es_CL',
    type: 'website',
  },
}

const HERO_DATA = {
  title: 'Identidad visual, branding desde $100.000 CLP',
  description: 'Si tienes la idea de tu negocio pero no sabes como darle actitud e identidad, este es el lugar correcto para ti'
}

export default function Branding(){
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
                           
                       
                   </section>
       
               </main>
    )
}
