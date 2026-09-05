import BackLink from '@/components/BackLink'
import { WhatsappCTA } from '@/components/WhatsappCTA';

// const WA_LINK = 'https://wa.me/56956075020'

interface HeroServicesProps {
  title: string;
  description: string;
}

export default function HeroServices({ title, description }: HeroServicesProps) {
  return (
    <section style={{
      padding: '10rem 5vw 6rem',
      background: 'var(--dark)',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <BackLink href="/servicios" label="Todos los servicios" />
      <p className="section-label">Servicios</p>
      
      <h1 className="section-title" style={{
        fontSize: 'clamp(2.5rem, 6vw, 6rem)',
        lineHeight: '0.95',
        color: 'var(--white)',
        marginBottom: '2rem',
      }}>
        {title}
      </h1>
      
      <p style={{
        fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
        lineHeight: '1.75',
        color: 'rgba(247,246,244,0.7)',
        fontWeight: 300,
        marginBottom: '2.5rem',
      }}>
        {description}
      </p>

      <WhatsappCTA className="btn-primary">
        Cotizar por WhatsApp
      </WhatsappCTA>
    </section>
  )
}