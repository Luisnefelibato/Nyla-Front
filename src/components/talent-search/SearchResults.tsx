import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ResultsTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--dark);
`;

const ResultsCount = styled.span`
  color: var(--gray);
  font-size: 0.875rem;
`;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultItem = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ResultName = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const ResultCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(78, 205, 196, 0.1);
  color: var(--secondary);
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const ResultDescription = styled.p`
  color: var(--dark);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ResultMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--gray);
`;

const ResultMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ResultActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
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

interface SearchResultsProps {
  results: Institution[];
  onSaveToDatabase: (institution: Institution) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onSaveToDatabase }) => {
  if (!results.length) {
    return null;
  }
  
  return (
    <ResultsContainer>
      <ResultsHeader>
        <ResultsTitle>Resultados de la búsqueda</ResultsTitle>
        <ResultsCount>{results.length} instituciones encontradas</ResultsCount>
      </ResultsHeader>
      
      <ResultList>
        {results.map((institution) => (
          <ResultItem key={institution.id}>
            <ResultName>{institution.name}</ResultName>
            <ResultCategory>{institution.category}</ResultCategory>
            
            <ResultDescription>{institution.description}</ResultDescription>
            
            <ResultMeta>
              <ResultMetaItem>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {institution.location}
              </ResultMetaItem>
              
              <ResultMetaItem>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.049 2.927C11.3483 2.00576 12.6517 2.00576 12.951 2.927L14.431 7.45967C14.563 7.87305 14.9474 8.14947 15.382 8.14947H20.1371C21.1119 8.14947 21.5091 9.38548 20.7229 9.95967L16.9231 12.6839C16.5708 12.9398 16.4204 13.3966 16.5526 13.8099L18.0326 18.3426C18.3319 19.2638 17.2939 20.0414 16.5078 19.4672L12.7079 16.743C12.3557 16.4871 11.8943 16.4871 11.5421 16.743L7.74219 19.4672C6.95607 20.0414 5.91811 19.2638 6.21743 18.3426L7.69743 13.8099C7.82965 13.3966 7.67916 12.9398 7.32691 12.6839L3.52716 9.95967C2.74091 9.38548 3.13806 8.14947 4.11293 8.14947H8.868C9.30256 8.14947 9.68702 7.87305 9.819 7.45967L11.049 2.927Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {institution.rating.toFixed(1)}
              </ResultMetaItem>
              
              <ResultMetaItem>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5902 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.30509 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.1705C3.55777 2.0583 3.83233 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {institution.contact}
              </ResultMetaItem>
            </ResultMeta>
            
            <ResultActions>
              <Button
                variant="primary"
                onClick={() => onSaveToDatabase(institution)}
              >
                Guardar en Base de Datos
              </Button>
              <Button variant="outline">Ver Detalles</Button>
            </ResultActions>
          </ResultItem>
        ))}
      </ResultList>
    </ResultsContainer>
  );
};

export default SearchResults;