import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { searchInstitutions } from '../../services/geminiApi';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SearchTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const SearchDescription = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray);
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray);
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.875rem;
`;

interface InstitutionSearchProps {
  onSearchResults: (results: any[]) => void;
}

const InstitutionSearch: React.FC<InstitutionSearchProps> = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm) {
      setError('Por favor, ingresa un término de búsqueda.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
        const query = `${searchTerm} ${category !== 'all' ? category : ''} ${location ? 'en ' + location : ''}`.trim();
        const results = await searchInstitutions({ query });
        
        onSearchResults(results);
      } catch (err) {
        console.error('Error al realizar la búsqueda:', err);
        setError('Ocurrió un error al realizar la búsqueda. Por favor, inténtalo de nuevo.');
      } finally {
        setLoading(false);
      }
    };
    
    const handleClear = () => {
      setSearchTerm('');
      setCategory('all');
      setLocation('');
      setError('');
      onSearchResults([]);
    };
    
    return (
      <SearchContainer>
        <SearchTitle>Buscar Instituciones de Talentos</SearchTitle>
        <SearchDescription>
          Utiliza nuestra herramienta con IA para encontrar las mejores instituciones 
          que ayudan a desarrollar talentos en tu área de interés.
        </SearchDescription>
        
        <SearchForm onSubmit={handleSearch}>
          <InputGroup>
            <Label htmlFor="search-term">¿Qué tipo de institución estás buscando?</Label>
            <Input
              id="search-term"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ej: escuelas de actuación, academias de modelaje..."
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="category">Categoría</Label>
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Todas las categorías</option>
              <option value="actuación">Actuación</option>
              <option value="modelaje">Modelaje</option>
              <option value="canto">Canto</option>
              <option value="baile">Baile</option>
              <option value="música">Música</option>
            </Select>
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="location">Ubicación</Label>
            <Input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ciudad o país"
            />
          </InputGroup>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <ButtonGroup>
            <Button type="submit" disabled={loading}>
              {loading ? 'Buscando...' : 'Buscar'}
            </Button>
            <Button variant="outline" type="button" onClick={handleClear}>
              Limpiar
            </Button>
          </ButtonGroup>
        </SearchForm>
      </SearchContainer>
    );
  };
  
  export default InstitutionSearch;