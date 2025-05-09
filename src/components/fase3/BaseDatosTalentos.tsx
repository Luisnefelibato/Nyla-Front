import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div``;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--light-gray);
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  @media (max-width: 768px) {
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`;

const SearchSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid var(--light-gray);
  border-left: none;
  background-color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  @media (max-width: 768px) {
    border-left: 1px solid var(--light-gray);
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 1rem 1.5rem;
  background: transparent;
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

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const TalentCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TalentImage = styled.div`
  height: 180px;
  background-color: var(--light-gray);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TalentBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const TalentInfo = styled.div`
  padding: 1.5rem;
`;

const TalentName = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
`;

const TalentDetails = styled.div`
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const TalentDetail = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
`;

const DetailLabel = styled.span`
  width: 80px;
  color: var(--dark-gray);
`;

const DetailValue = styled.span`
  flex: 1;
`;

const TalentSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SkillTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: var(--light);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--dark-gray);
`;

const TalentActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TableView = styled.div`
  margin-bottom: 2rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  background-color: var(--light);
  border-bottom: 2px solid var(--light-gray);
`;

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--light-gray);
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button<{ active?: boolean }>`
  min-width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ active }) => active ? 'var(--primary)' : 'var(--light-gray)'};
  background-color: ${({ active }) => active ? 'var(--primary)' : 'white'};
  color: ${({ active }) => active ? 'white' : 'var(--dark)'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--primary);
    color: ${({ active }) => active ? 'white' : 'var(--primary)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type TalentData = {
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;
  disciplina: string;
  habilidades: string[];
  contacto: string;
  ubicacion: string;
  experiencia: string;
  disponibilidad: string;
  photo?: string;
};

export const BaseDatosTalentos: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  
  // Datos simulados para los talentos
  const talentos: TalentData[] = [
    {
      id: '1',
      nombre: 'Sofia',
      apellido: 'García',
      edad: 18,
      genero: 'Femenino',
      disciplina: 'Danza',
      habilidades: ['Ballet', 'Contemporáneo', 'Jazz'],
      contacto: 'sofia.garcia@example.com',
      ubicacion: 'New York, NY',
      experiencia: '5 años',
      disponibilidad: 'Completa',
      photo: '/images/talent-1.jpg'
    },
    {
      id: '2',
      nombre: 'Miguel',
      apellido: 'Rodríguez',
      edad: 20,
      genero: 'Masculino',
      disciplina: 'Teatro',
      habilidades: ['Drama', 'Comedia', 'Improvisación'],
      contacto: 'miguel.rodriguez@example.com',
      ubicacion: 'Los Angeles, CA',
      experiencia: '3 años',
      disponibilidad: 'Fines de semana',
      photo: '/images/talent-2.jpg'
    },
    {
      id: '3',
      nombre: 'Emma',
      apellido: 'Johnson',
      edad: 16,
      genero: 'Femenino',
      disciplina: 'Canto',
      habilidades: ['Soprano', 'Piano', 'Composición'],
      contacto: 'emma.johnson@example.com',
      ubicacion: 'Chicago, IL',
      experiencia: '2 años',
      disponibilidad: 'Parcial',
      photo: '/images/talent-3.jpg'
    },
    {
      id: '4',
      nombre: 'David',
      apellido: 'Smith',
      edad: 22,
      genero: 'Masculino',
      disciplina: 'Modelaje',
      habilidades: ['Pasarela', 'Fotografía', 'Actuación'],
      contacto: 'david.smith@example.com',
      ubicacion: 'Miami, FL',
      experiencia: '4 años',
      disponibilidad: 'Completa',
      photo: '/images/talent-4.jpg'
    },
    {
      id: '5',
      nombre: 'Isabella',
      apellido: 'Martínez',
      edad: 19,
      genero: 'Femenino',
      disciplina: 'Danza',
      habilidades: ['Flamenco', 'Salsa', 'Contemporáneo'],
      contacto: 'isabella.martinez@example.com',
      ubicacion: 'San Diego, CA',
      experiencia: '7 años',
      disponibilidad: 'Fines de semana',
      photo: '/images/talent-5.jpg'
    },
    {
      id: '6',
      nombre: 'Lucas',
      apellido: 'Wilson',
      edad: 17,
      genero: 'Masculino',
      disciplina: 'Canto',
      habilidades: ['Tenor', 'Guitarra', 'Composición'],
      contacto: 'lucas.wilson@example.com',
      ubicacion: 'Nashville, TN',
      experiencia: '3 años',
      disponibilidad: 'Parcial',
      photo: '/images/talent-6.jpg'
    }
  ];
  
  // Filtrar talentos según la búsqueda
  const filteredTalentos = talentos.filter(talento => {
    const fullName = `${talento.nombre} ${talento.apellido}`.toLowerCase();
    const searchTerms = searchQuery.toLowerCase();
    
    // Filtro por categoría
    if (searchCategory !== 'all' && talento.disciplina.toLowerCase() !== searchCategory.toLowerCase()) {
      return false;
    }
    
    // Filtro por texto de búsqueda
    if (searchQuery) {
      return (
        fullName.includes(searchTerms) ||
        talento.disciplina.toLowerCase().includes(searchTerms) ||
        talento.ubicacion.toLowerCase().includes(searchTerms) ||
        talento.habilidades.some(skill => skill.toLowerCase().includes(searchTerms))
      );
    }
    
    return true;
  });
  
  // Paginación
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredTalentos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTalentos = filteredTalentos.slice(startIndex, endIndex);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset page when search changes
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
    setCurrentPage(1); // Reset page when category changes
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // En una implementación real, aquí iría la lógica de búsqueda en la API
    console.log('Buscando:', { query: searchQuery, category: searchCategory });
  };
  
  return (
    <Container>
      <h2>Base de Datos de Talentos</h2>
      <p style={{ marginBottom: '2rem' }}>
        Organiza la información sobre los talentos potenciales, incluyendo sus datos personales,
        disciplinas, habilidades y disponibilidad para audiciones.
      </p>
      
      <form onSubmit={handleSearch}>
        <SearchBar>
          <SearchInput 
            type="text" 
            placeholder="Buscar por nombre, disciplina, ubicación..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchSelect 
            value={searchCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">Todas las disciplinas</option>
            <option value="danza">Danza</option>
            <option value="teatro">Teatro</option>
            <option value="canto">Canto</option>
            <option value="modelaje">Modelaje</option>
          </SearchSelect>
          <SearchButton type="submit">Buscar</SearchButton>
        </SearchBar>
      </form>
      
      <TabsContainer>
        <Tab 
          active={viewMode === 'grid'} 
          onClick={() => setViewMode('grid')}
        >
          Vista de Tarjetas
        </Tab>
        <Tab 
          active={viewMode === 'table'} 
          onClick={() => setViewMode('table')}
        >
          Vista de Tabla
        </Tab>
      </TabsContainer>
      
      {viewMode === 'grid' ? (
        <GridView>
          {displayedTalentos.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
              No se encontraron talentos que coincidan con los criterios de búsqueda.
            </div>
          ) : (
            displayedTalentos.map(talento => (
              <TalentCard key={talento.id}>
                <TalentImage>
                  <img src={talento.photo || '/images/placeholder.jpg'} alt={`${talento.nombre} ${talento.apellido}`} />
                  <TalentBadge>{talento.disciplina}</TalentBadge>
                </TalentImage>
                
                <TalentInfo>
                  <TalentName>{talento.nombre} {talento.apellido}</TalentName>
                  
                  <TalentDetails>
                    <TalentDetail>
                      <DetailLabel>Edad:</DetailLabel>
                      <DetailValue>{talento.edad} años</DetailValue>
                    </TalentDetail>
                    <TalentDetail>
                      <DetailLabel>Ubicación:</DetailLabel>
                      <DetailValue>{talento.ubicacion}</DetailValue>
                    </TalentDetail>
                    <TalentDetail>
                      <DetailLabel>Experiencia:</DetailLabel>
                      <DetailValue>{talento.experiencia}</DetailValue>
                    </TalentDetail>
                  </TalentDetails>
                  
                  <TalentSkills>
                    {talento.habilidades.map(skill => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </TalentSkills>
                  
                  <TalentActions>
                    <Button size="small">Ver Perfil</Button>
                    <Button size="small" variant="outline">Contactar</Button>
                  </TalentActions>
                </TalentInfo>
              </TalentCard>
            ))
          )}
        </GridView>
      ) : (
        <TableView>
          <Table>
            <thead>
              <tr>
                <Th>Nombre</Th>
                <Th>Edad</Th>
                <Th>Disciplina</Th>
                <Th>Ubicación</Th>
                <Th>Experiencia</Th>
                <Th>Disponibilidad</Th>
                <Th>Acciones</Th>
              </tr>
            </thead>
            <tbody>
              {displayedTalentos.length === 0 ? (
                <tr>
                  <Td colSpan={7} style={{ textAlign: 'center', padding: '2rem' }}>
                    No se encontraron talentos que coincidan con los criterios de búsqueda.
                  </Td>
                </tr>
              ) : (
                displayedTalentos.map(talento => (
                  <tr key={talento.id}>
                    <Td>{talento.nombre} {talento.apellido}</Td>
                    <Td>{talento.edad}</Td>
                    <Td>{talento.disciplina}</Td>
                    <Td>{talento.ubicacion}</Td>
                    <Td>{talento.experiencia}</Td>
                    <Td>{talento.disponibilidad}</Td>
                    <Td>
                      <Button size="small">Ver</Button>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </TableView>
      )}
      
      {totalPages > 1 && (
        <Pagination>
          <PageButton 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </PageButton>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageButton 
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
          
          <PageButton 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </PageButton>
        </Pagination>
      )}
    </Container>
  );
};
