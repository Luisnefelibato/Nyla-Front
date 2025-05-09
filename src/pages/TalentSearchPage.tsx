import React, { useState } from 'react';
import styled from 'styled-components';
import InstitutionSearch from '../components/talent-search/InstitutionSearch';
import SearchResults from '../components/talent-search/SearchResults';
import SaveToDatabase from '../components/talent-search/SaveToDatabase';

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

interface Institution {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
  rating: number;
  contact: string;
}

const TalentSearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Institution[]>([]);
  const [savedInstitutions, setSavedInstitutions] = useState<Institution[]>([]);
  
  const handleSearchResults = (results: any[]) => {
    // Transformar los resultados de la API a nuestro formato de institución
    const formattedResults: Institution[] = results.map((result, index) => ({
      id: `inst-${Date.now()}-${index}`,
      name: result.name || 'Nombre no disponible',
      category: result.category || 'General',
      description: result.description || 'Sin descripción',
      location: result.location || 'Ubicación no especificada',
      rating: result.rating || Math.random() * 5,
      contact: result.contact || 'Contacto no disponible'
    }));
    
    setSearchResults(formattedResults);
  };
  
  const handleSaveToDatabase = (institution: Institution) => {
    // Verificar si la institución ya está guardada
    const isAlreadySaved = savedInstitutions.some(saved => saved.id === institution.id);
    
    if (!isAlreadySaved) {
      setSavedInstitutions([...savedInstitutions, institution]);
      alert(`Institución "${institution.name}" guardada en la base de datos.`);
    } else {
      alert(`La institución "${institution.name}" ya está guardada en la base de datos.`);
    }
  };
  
  return (
    <PageContainer>
      <div className="container">
        <PageHeader>
          <PageTitle>Búsqueda de Instituciones de Talentos</PageTitle>
          <PageDescription>
            Encuentra las mejores instituciones de desarrollo de talentos utilizando
            nuestra herramienta de búsqueda con inteligencia artificial.
          </PageDescription>
        </PageHeader>
        
        <ContentGrid>
          <InstitutionSearch onSearchResults={handleSearchResults} />
          
          <SearchResults 
            results={searchResults} 
            onSaveToDatabase={handleSaveToDatabase} 
          />
          
          <SaveToDatabase institutions={savedInstitutions} />
        </ContentGrid>
      </div>
    </PageContainer>
  );
};

export default TalentSearchPage;