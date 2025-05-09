import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 5rem 0;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  color: var(--dark);
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: 0.875rem;
  color: var(--gray);
`;

const Testimonials: React.FC = () => {
  return (
    <TestimonialsContainer>
      <div className="container">
        <SectionTitle>Lo Que Dicen Nuestros Clientes</SectionTitle>
        
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialText>
              "Gracias a Nyla Talent pude encontrar las mejores instituciones de desarrollo de talentos
              para mi agencia. La herramienta de búsqueda inteligente nos ahorró meses de investigación."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/images/testimonial-1.jpg" alt="Carlos Rodríguez" />
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>Carlos Rodríguez</AuthorName>
                <AuthorRole>Director de Casting</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialText>
              "La posibilidad de guardar instituciones en una base de datos y realizar llamadas
              directamente desde la plataforma ha revolucionado nuestro proceso de búsqueda de talentos."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/images/testimonial-2.jpg" alt="Ana Martínez" />
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>Ana Martínez</AuthorName>
                <AuthorRole>Productora Ejecutiva</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
          
          <TestimonialCard>
            <TestimonialText>
              "Nyla Talent ha transformado nuestra agencia. Ahora podemos encontrar y conectar
              con instituciones de alto nivel en cuestión de minutos. Totalmente recomendado."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorAvatar>
                <img src="/images/testimonial-3.jpg" alt="Miguel Torres" />
              </AuthorAvatar>
              <AuthorInfo>
                <AuthorName>Miguel Torres</AuthorName>
                <AuthorRole>Director de Agencia</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials;
