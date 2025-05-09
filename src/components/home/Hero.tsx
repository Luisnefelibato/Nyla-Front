import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <HeroTitle>Descubriendo Talentos, Creando Futuro</HeroTitle>
          <HeroSubtitle>
            Nyla Talent es un programa de cazatalentos diseñado para descubrir, 
            desarrollar y conectar a los mejores talentos con las mejores oportunidades.
          </HeroSubtitle>
          <ButtonGroup>
            <Link to="/talent-search">
              <Button size="large">Buscar Instituciones</Button>
            </Link>
            <Link to="/calls">
              <Button variant="outline" size="large">Contactar</Button>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero;
