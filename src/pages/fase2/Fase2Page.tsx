import React from 'react';
import styled from 'styled-components';
import { PlanificacionLlamadas } from '../../components/fase2/PlanificacionLlamadas';
import { RegistroLlamadas } from '../../components/fase2/RegistroLlamadas';
import { SeguimientoResultados } from '../../components/fase2/SeguimientoResultados';

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
  flex-wrap: wrap;
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

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: var(--light);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--dark-gray);
`;

type TabType = 'planificacion' | 'registro' | 'seguimiento';

const Fase2Page: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>('planificacion');
  
  // Datos simulados para las estadísticas
  const stats = {
    llamadasHoy: 42,
    llamadasSemana: 215,
    interesados: 28,
    pendientesSeguimiento: 15
  };
  
  return (
    <Container>
      <Header>
        <Title>Fase 2: Llamadas Telefónicas</Title>
        <Description>
          En esta fase realizamos el contacto directo con las academias y escuelas identificadas.
          Planificamos llamadas diarias, registramos cada interacción detalladamente y hacemos
          seguimiento de los resultados para maximizar las oportunidades.
        </Description>
      </Header>
      
      <Stats>
        <StatCard>
          <StatValue>{stats.llamadasHoy}</StatValue>
          <StatLabel>Llamadas Realizadas Hoy</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.llamadasSemana}</StatValue>
          <StatLabel>Llamadas Esta Semana</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.interesados}</StatValue>
          <StatLabel>Contactos Interesados</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.pendientesSeguimiento}</StatValue>
          <StatLabel>Pendientes de Seguimiento</StatLabel>
        </StatCard>
      </Stats>
      
      <Tabs>
        <Tab 
          active={activeTab === 'planificacion'} 
          onClick={() => setActiveTab('planificacion')}
        >
          Planificación de Llamadas
        </Tab>
        <Tab 
          active={activeTab === 'registro'} 
          onClick={() => setActiveTab('registro')}
        >
          Registro de Llamadas
        </Tab>
        <Tab 
          active={activeTab === 'seguimiento'} 
          onClick={() => setActiveTab('seguimiento')}
        >
          Seguimiento de Resultados
        </Tab>
      </Tabs>
      
      <ContentArea>
        {activeTab === 'planificacion' && (
          <PlanificacionLlamadas />
        )}
        
        {activeTab === 'registro' && (
          <RegistroLlamadas />
        )}
        
        {activeTab === 'seguimiento' && (
          <SeguimientoResultados />
        )}
      </ContentArea>
    </Container>
  );
};

export default Fase2Page;
