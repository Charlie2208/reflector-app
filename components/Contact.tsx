'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'service_p2tb2fq',
        'template_5dtc4fz',
        formData,
        'fVMZhju7DDk_RJA-O'
      );
      setStatus('success');
      setFormData({ from_name: '', from_email: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contacto">
      <div>
        <p className="section-label">Contacto</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Hablemos de tu proyecto</h2>
        <p className="section-desc">
          Cuentanos sobre tu marca y tus objetivos. Nuestro equipo te responderá en menos de 24 horas con una propuesta inicial sin costo.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div className="contact-item-label">Email</div>
              <div className="contact-item-text">hola@reflector.cl</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.51-1.51a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <div className="contact-item-label">WhatsApp</div>
              <div className="contact-item-text">+56 9 5607 5020</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div className="contact-item-label">Ubicación</div>
              <div className="contact-item-text">Santiago, Chile</div>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="from_name" placeholder="Tu nombre" value={formData.from_name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="from_email" placeholder="tu@email.com" value={formData.from_email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label>Empresa / Marca</label>
          <input type="text" name="company" placeholder="Nombre de tu empresa" value={formData.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Servicio de interés</label>
          <select name="service" value={formData.service} onChange={handleChange} >
            <option value="" disabled>Selecciona un servicio</option>
            <option>Estrategia Digital</option>
            <option>Publicidad en Meta Ads y Google Ads</option>
            <option>Gestión y Contenido para RRSS</option>
            <option>Branding e Identidad Visual</option>
            <option>Storytelling y Contenido Creativo</option>
            <option>Análisis de Datos y Optimización</option>
            <option>Varios servicios</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea name="message" placeholder="Cuentanos sobre tu proyecto y tus objetivos..." value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status === 'success' && (
          <p style={{ color: '#25D366', marginTop: '1rem' }}>¡Mensaje enviado! Pronto nos pondremos en contacto.</p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red', marginTop: '1rem' }}>Hubo un error. Intenta de nuevo.</p>
        )}
      </form>
    </section>
  );
}