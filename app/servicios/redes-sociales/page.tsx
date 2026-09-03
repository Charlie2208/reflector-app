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

export default function SocialMediaPage(){
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
