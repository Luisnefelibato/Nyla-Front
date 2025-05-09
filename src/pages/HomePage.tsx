import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import homeImage from '../images/Home_page.png';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: justify;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 4rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${homeImage});
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
  padding-bottom: 0.5rem;
`;

const FaseCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FaseTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
`;

const FaseDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: justify;
`;

const FaseList = styled.ul`
  list-style-position: inside;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    text-align: justify;
  }
`;

const ActionLink = styled(Link)`
  display: inline-block;
  font-weight: 500;
  color: var(--primary);
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Hero>
        <Title>NYLA - Programa de Cazatalentos</Title>
        <Subtitle>
          Un sistema integral para la identificación, seguimiento y gestión de talentos y academias
          en el mundo del entretenimiento.
        </Subtitle>
        <ButtonGroup>
          <Link to="/fase1">
            <Button size="large">Iniciar Búsqueda</Button>
          </Link>
          <Link to="/fase2">
            <Button variant="outline" size="large">Gestionar Llamadas</Button>
          </Link>
        </ButtonGroup>
      </Hero>

      <Section>
        <SectionTitle>Nuestro Proceso</SectionTitle>
        
        <FaseCard>
          <FaseTitle>Fase 1: Identificación de Academias y Escuelas de Talento</FaseTitle>
          <FaseDescription>
            En esta fase inicial, nos enfocamos en identificar y localizar academias y escuelas de talento
            en áreas específicas de Estados Unidos. Utilizamos herramientas avanzadas de búsqueda geográfica
            y recopilación de datos para crear una base sólida para las fases siguientes.
          </FaseDescription>
          <FaseList>
            <li>Búsqueda Geográfica por ciudad o estado</li>
            <li>Localización de academias de danza, teatro, modelaje y canto</li>
            <li>Recopilación de información de contacto completa</li>
            <li>Organización y almacenamiento de datos en nuestra base de datos</li>
          </FaseList>
          <ActionLink to="/fase1">Ir a Fase 1: Identificación</ActionLink>
        </FaseCard>
        
        <FaseCard>
          <FaseTitle>Fase 2: Llamadas Telefónicas</FaseTitle>
          <FaseDescription>
            Una vez identificadas las academias, iniciamos un proceso estructurado de comunicación
            mediante llamadas telefónicas. Cada llamada es cuidadosamente planificada, ejecutada y 
            documentada para un seguimiento efectivo.
          </FaseDescription>
          <FaseList>
            <li>Planificación de 35-50 llamadas diarias</li>
            <li>Registro detallado de cada interacción</li>
            <li>Seguimiento de compromisos y resultados</li>
            <li>Organización de contactos en carpetas según resultados</li>
          </FaseList>
          <ActionLink to="/fase2">Ir a Fase 2: Llamadas</ActionLink>
        </FaseCard>
        
        <FaseCard>
          <FaseTitle>Fase 3: Reportes y Evaluación</FaseTitle>
          <FaseDescription>
            La generación de informes periódicos nos permite evaluar el progreso y los resultados
            de nuestras actividades. Esta fase es crucial para mantener a Naila informada y 
            para la toma de decisiones estratégicas.
          </FaseDescription>
          <FaseList>
            <li>Elaboración de informes detallados</li>
            <li>Análisis de resultados (interesados, no interesados, seguimientos)</li>
            <li>Creación y mantenimiento de base de datos de talentos</li>
            <li>Segmentación de información para futuras convocatorias</li>
          </FaseList>
          <ActionLink to="/fase3">Ir a Fase 3: Reportes</ActionLink>
        </FaseCard>
        
        <FaseCard>
          <FaseTitle>Fase 4: Gestión y Seguimiento</FaseTitle>
          <FaseDescription>
            El seguimiento continuo es esencial para convertir los contactos iniciales en relaciones
            duraderas. Esta fase se centra en la gestión de compromisos y la evaluación continua
            del modelo para optimizar resultados.
          </FaseDescription>
          <FaseList>
            <li>Mantenimiento de calendario de seguimiento</li>
            <li>Documentación de cada interacción posterior</li>
            <li>Actualización del estado de cada prospecto</li>
            <li>Revisión y ajuste de estrategias según necesidades</li>
          </FaseList>
          <ActionLink to="/fase4">Ir a Fase 4: Gestión</ActionLink>
        </FaseCard>
      </Section>
    </Container>
  );
};

export default HomePage;
