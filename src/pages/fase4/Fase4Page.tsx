import React from 'react';
import styled from 'styled-components';
import { ControlCompromisos } from '../../components/fase4/ControlCompromisos';
import { EvaluacionContinua } from '../../components/fase4/EvaluacionContinua';

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

const CalendarView = styled.div`
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const CalendarHeader = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalendarTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const CalendarControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CalendarButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
`;

const CalendarDay = styled.div`
  padding: 1rem;
  min-height: 100px;
  border-right: 1px solid var(--light-gray);
  border-bottom: 1px solid var(--light-gray);
  
  &:nth-child(7n) {
    border-right: none;
  }
`;

const DayHeader = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const DayEvents = styled.div`
  font-size: 0.75rem;
`;

const Event = styled.div`
  background-color: #e6f7ff;
  border-left: 3px solid #1890ff;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 2px;
  cursor: pointer;
  
  &:hover {
    background-color: #cceeff;
  }
`;

type TabType = 'compromisos' | 'evaluacion';

const Fase4Page: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>('compromisos');
  
  return (
    <Container>
      <Header>
        <Title>Fase 4: Gestión y Seguimiento</Title>
        <Description>
          La fase final se centra en el seguimiento continuo de los contactos establecidos,
          la gestión de compromisos adquiridos y la evaluación continua del modelo para
          asegurar que se cumplen los objetivos establecidos.
        </Description>
      </Header>
      
      <Tabs>
        <Tab 
          active={activeTab === 'compromisos'} 
          onClick={() => setActiveTab('compromisos')}
        >
          Control de Compromisos
        </Tab>
        <Tab 
          active={activeTab === 'evaluacion'} 
          onClick={() => setActiveTab('evaluacion')}
        >
          Evaluación Continua
        </Tab>
      </Tabs>
      
      <ContentArea>
        {activeTab === 'compromisos' && (
          <>
            <CalendarView>
              <CalendarHeader>
                <CalendarTitle>Mayo 2023</CalendarTitle>
                <CalendarControls>
                  <CalendarButton>←</CalendarButton>
                  <CalendarButton>Hoy</CalendarButton>
                  <CalendarButton>→</CalendarButton>
                </CalendarControls>
              </CalendarHeader>
              
              <CalendarGrid>
                {/* Ejemplo de una semana del calendario */}
                <CalendarDay>
                  <DayHeader>Lun 15</DayHeader>
                  <DayEvents>
                    <Event>9:00 - Academia de Danza</Event>
                    <Event>14:30 - Escuela de Teatro</Event>
                  </DayEvents>
                </CalendarDay>
                <CalendarDay>
                  <DayHeader>Mar 16</DayHeader>
                  <DayEvents>
                    <Event>11:00 - Estudio de Modelaje</Event>
                  </DayEvents>
                </CalendarDay>
                <CalendarDay>
                  <DayHeader>Mié 17</DayHeader>
                  <DayEvents></DayEvents>
                </CalendarDay>
                <CalendarDay>
                  <DayHeader>Jue 18</DayHeader>
                  <DayEvents>
                    <Event>10:30 - Conservatorio</Event>
                    <Event>15:00 - Agencia de Modelos</Event>
                  </DayEvents>
                </CalendarDay>
                <CalendarDay>
                  <DayHeader>Vie 19</DayHeader>
                  <DayEvents>
                    <Event>9:30 - Escuela de Música</Event>
                  </DayEvents>
                </CalendarDay>
                <CalendarDay>
                  <DayHeader>Sáb 20</DayHeader>
                  <DayEvents></DayEvents>
                </CalendarDay>
                <CalendarDay>
                  <DayHeader>Dom 21</DayHeader>
                  <DayEvents></DayEvents>
                </CalendarDay>
              </CalendarGrid>
            </CalendarView>
            
            <ControlCompromisos />
          </>
        )}
        
        {activeTab === 'evaluacion' && (
          <EvaluacionContinua />
        )}
      </ContentArea>
    </Container>
  );
};

export default Fase4Page;
