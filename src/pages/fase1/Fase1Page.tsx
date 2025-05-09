import React from 'react';
import styled from 'styled-components';
import { BusquedaGeografica } from '../../components/fase1/BusquedaGeografica';
import { RecopilacionInformacion } from '../../components/fase1/RecopilacionInformacion';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: justify;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 1rem 1.5rem;
  background: ${({ active }) => active ? 'white' : 'transparent'};
  border: none;
  border-bottom: ${({ active }) => active ? '3px solid var(--primary)' : '3px solid transparent'};
  font-weight: ${({ active }) => active ? '600' : '400'};
  color: ${({ active }) => active ? 'var(--primary)' : 'var(--dark)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const ContentArea = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const Fase1Page: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'busqueda' | 'recopilacion'>('busqueda');
  
  return (
    <Container>
      <Header>
        <Title>Fase 1: Identificación de Academias y Escuelas de Talento</Title>
        <Description>
          Esta fase se enfoca en la localización e identificación de academias de talento en áreas específicas
          de Estados Unidos. Utiliza las herramientas de búsqueda geográfica para encontrar instituciones,
          y luego recopila información detallada de contacto para la siguiente fase.
        </Description>
      </Header>
      
      <Tabs>
        <Tab 
          active={activeTab === 'busqueda'} 
          onClick={() => setActiveTab('busqueda')}
        >
          Búsqueda Geográfica
        </Tab>
        <Tab 
          active={activeTab === 'recopilacion'} 
          onClick={() => setActiveTab('recopilacion')}
        >
          Recopilación de Información
        </Tab>
      </Tabs>
      
      <ContentArea>
        {activeTab === 'busqueda' && (
          <BusquedaGeografica />
        )}
        
        {activeTab === 'recopilacion' && (
          <RecopilacionInformacion />
        )}
      </ContentArea>
    </Container>
  );
};

export default Fase1Page;
