import React from 'react';
import styled from 'styled-components';
import { ElaboracionInformes } from '../../components/fase3/ElaboracionInformes';
import { BaseDatosTalentos } from '../../components/fase3/BaseDatosTalentos';

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

const ReportCard = styled.div`
  background-color: var(--light);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--primary);
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ReportTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--dark);
`;

const ReportDate = styled.span`
  font-size: 0.875rem;
  color: var(--gray);
`;

const ReportSummary = styled.p`
  margin-bottom: 1rem;
`;

const ReportLink = styled.a`
  color: var(--primary);
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

type TabType = 'informes' | 'basedatos';

const Fase3Page: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>('informes');
  
  // Datos simulados para los reportes recientes
  const reportes = [
    {
      id: 1,
      titulo: 'Informe Semanal - W20 2023',
      fecha: '2023-05-21',
      resumen: 'Resumen de actividades de la semana 20. Se realizaron 243 llamadas, con un 18% de tasa de interés y 12 compromisos de seguimiento.',
      enlace: '#'
    },
    {
      id: 2,
      titulo: 'Reporte de Academias - Este de EEUU',
      fecha: '2023-05-15',
      resumen: 'Análisis de academias contactadas en la región Este de Estados Unidos. 65 instituciones identificadas, 40 contactadas, 15 con interés.',
      enlace: '#'
    },
    {
      id: 3,
      titulo: 'Análisis Trimestral - Q1 2023',
      fecha: '2023-04-03',
      resumen: 'Resultados del primer trimestre del año. Aumento de 32% en contactos efectivos respecto al trimestre anterior.',
      enlace: '#'
    }
  ];
  
  return (
    <Container>
      <Header>
        <Title>Fase 3: Reportes y Evaluación</Title>
        <Description>
          Esta fase está dedicada a la elaboración de informes detallados para Naila y a la organización
          y mantenimiento de la base de datos de talentos. Estos reportes son esenciales para evaluar
          el progreso y tomar decisiones estratégicas.
        </Description>
      </Header>
      
      <Tabs>
        <Tab 
          active={activeTab === 'informes'} 
          onClick={() => setActiveTab('informes')}
        >
          Elaboración de Informes
        </Tab>
        <Tab 
          active={activeTab === 'basedatos'} 
          onClick={() => setActiveTab('basedatos')}
        >
          Base de Datos de Talentos
        </Tab>
      </Tabs>
      
      <ContentArea>
        {activeTab === 'informes' && (
          <>
            <h3 style={{ marginBottom: '1.5rem' }}>Reportes Recientes</h3>
            
            {reportes.map(reporte => (
              <ReportCard key={reporte.id}>
                <ReportHeader>
                  <ReportTitle>{reporte.titulo}</ReportTitle>
                  <ReportDate>{reporte.fecha}</ReportDate>
                </ReportHeader>
                <ReportSummary>{reporte.resumen}</ReportSummary>
                <ReportLink href={reporte.enlace}>Ver reporte completo →</ReportLink>
              </ReportCard>
            ))}
            
            <ElaboracionInformes />
          </>
        )}
        
        {activeTab === 'basedatos' && (
          <BaseDatosTalentos />
        )}
      </ContentArea>
    </Container>
  );
};

export default Fase3Page;
