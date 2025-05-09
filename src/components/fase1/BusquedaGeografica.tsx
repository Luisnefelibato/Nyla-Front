import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Container = styled.div``;

const SearchForm = styled.form`
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 2rem;
`;

const ResultCount = styled.div`
  margin-bottom: 1rem;
  font-weight: 500;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ResultCard = styled(Card)`
  padding: 1.5rem;
`;

const ResultTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
`;

const ResultType = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const ResultInfo = styled.div`
  margin-bottom: 1rem;
`;

const ResultRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

const ResultLabel = styled.span`
  font-weight: 500;
  width: 120px;
  color: var(--dark-gray);
`;

const ResultValue = styled.span`
  flex: 1;
`;

const ResultActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const MapContainer = styled.div`
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: 'Mapa interactivo aquí';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--gray);
  }
`;

export const BusquedaGeografica: React.FC = () => {
  const [location, setLocation] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [radius, setRadius] = useState('25');
  const [hasSearched, setHasSearched] = useState(false);
  
  // Datos simulados para resultados de búsqueda
  const resultados = [
    {
      id: '1',
      nombre: 'Academia de Danza Moderna',
      tipo: 'Danza',
      direccion: '123 Main St, New York, NY 10001',
      telefono: '+1 (212) 555-1234',
      email: 'info@danzamoderna.com',
      sitioWeb: 'www.danzamoderna.com'
    },
    {
      id: '2',
      nombre: 'Escuela de Teatro Broadway Stars',
      tipo: 'Teatro',
      direccion: '456 Theater Ave, New York, NY 10002',
      telefono: '+1 (212) 555-5678',
      email: 'contact@broadwaystars.edu',
      sitioWeb: 'www.broadwaystars.edu'
    },
    {
      id: '3',
      nombre: 'Instituto de Artes Escénicas',
      tipo: 'Multidisciplinario',
      direccion: '789 Art Blvd, New York, NY 10003',
      telefono: '+1 (212) 555-9012',
      email: 'admissions@artsinstitute.org',
      sitioWeb: 'www.artsinstitute.org'
    },
    {
      id: '4',
      nombre: 'Elite Model Academy',
      tipo: 'Modelaje',
      direccion: '321 Fashion St, New York, NY 10004',
      telefono: '+1 (212) 555-3456',
      email: 'info@elitemodel.com',
      sitioWeb: 'www.elitemodel.com'
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    // Aquí iría la lógica real de búsqueda
  };
  
  return (
    <Container>
      <h2>Búsqueda Geográfica de Instituciones</h2>
      <p style={{ marginBottom: '2rem' }}>
        Utiliza el mapa interactivo o el formulario de búsqueda para localizar academias
        de danza, teatro, modelaje y canto en áreas específicas de Estados Unidos.
      </p>
      
      <MapContainer />
      
      <SearchForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="location">Ubicación</Label>
          <Input 
            id="location" 
            placeholder="Ciudad, Estado o Código Postal"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </FormGroup>
        
        <FormRow>
          <FormGroup>
            <Label htmlFor="disciplina">Disciplina</Label>
            <Select 
              id="disciplina"
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
            >
              <option value="">Todas las disciplinas</option>
              <option value="danza">Danza</option>
              <option value="teatro">Teatro</option>
              <option value="modelaje">Modelaje</option>
              <option value="canto">Canto</option>
              <option value="musica">Música</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="radius">Radio de búsqueda (millas)</Label>
            <Input 
              id="radius" 
              type="number" 
              min="1" 
              max="100"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
            />
          </FormGroup>
        </FormRow>
        
        <Button type="submit">Buscar Instituciones</Button>
      </SearchForm>
      
      {hasSearched && (
        <ResultsContainer>
          <ResultCount>{resultados.length} instituciones encontradas</ResultCount>
          
          <ResultsGrid>
            {resultados.map(resultado => (
              <ResultCard key={resultado.id}>
                <ResultTitle>{resultado.nombre}</ResultTitle>
                <ResultType>{resultado.tipo}</ResultType>
                
                <ResultInfo>
                  <ResultRow>
                    <ResultLabel>Dirección:</ResultLabel>
                    <ResultValue>{resultado.direccion}</ResultValue>
                  </ResultRow>
                  <ResultRow>
                    <ResultLabel>Teléfono:</ResultLabel>
                    <ResultValue>{resultado.telefono}</ResultValue>
                  </ResultRow>
                  <ResultRow>
                    <ResultLabel>Email:</ResultLabel>
                    <ResultValue>{resultado.email}</ResultValue>
                  </ResultRow>
                  <ResultRow>
                    <ResultLabel>Sitio Web:</ResultLabel>
                    <ResultValue>{resultado.sitioWeb}</ResultValue>
                  </ResultRow>
                </ResultInfo>
                
                <ResultActions>
                  <Button size="small">Guardar</Button>
                  <Button size="small" variant="outline">Ver Detalles</Button>
                </ResultActions>
              </ResultCard>
            ))}
          </ResultsGrid>
        </ResultsContainer>
      )}
    </Container>
  );
};
