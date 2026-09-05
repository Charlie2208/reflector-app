'use client'

const WA_LINK = 'https://wa.me/56956075020';

const trackWhatsappClick = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'ads_conversion_Enviar_formulario_de_cl_1');
  }
};

interface WhatsappCTAProps {
  message?: string;
  destacado?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsappCTA({ 
  message, 
  destacado = false, 
  className,
  children = 'Hablar por WhatsApp' 
}: WhatsappCTAProps) {
  const href = message 
    ? `${WA_LINK}?text=${encodeURIComponent(message)}`
    : WA_LINK;

  // Si pasas una className (como "btn-primary"), usa estilos CSS estándar de esa clase.
  // Si NO pasas className, aplica el estilo directo de la tarjeta de planes.
  const defaultStyle: React.CSSProperties = className ? {} : {
    display: 'block',
    textAlign: 'center',
    padding: '0.85rem',
    background: destacado ? 'var(--blue)' : 'transparent',
    border: destacado ? 'none' : '1px solid rgba(247,246,244,0.2)',
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
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsappClick}
      className={className}
      style={defaultStyle}
    >
      {children}
    </a>
  );
}