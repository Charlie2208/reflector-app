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

const HERO_DATA = {
  title: 'Servicio de Optimizacion SEO para Pymes.',
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
                    
                
            </section>

        </main>
    )
}