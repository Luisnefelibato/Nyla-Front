import React from 'react';
import styled from 'styled-components';
import CallInterface from '../components/calls/CallInterface';
import CallHistory from '../components/calls/CallHistory';

const PageContainer = styled.div`
  padding: 3rem 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const CallsPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="container">
        <PageHeader>
          <PageTitle>Comunicación con Instituciones</PageTitle>
          <PageDescription>
            Realiza llamadas a instituciones de talentos directamente desde nuestra plataforma
            utilizando la integración con Telnyx.
          </PageDescription>
        </PageHeader>
        
        <ContentGrid>
          <CallInterface />
          <CallHistory />
        </ContentGrid>
      </div>
    </PageContainer>
  );
};

export default CallsPage;