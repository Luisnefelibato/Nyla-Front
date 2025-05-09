import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  background-color: var(--light);
  padding: 1rem;
  border-radius: 8px;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-weight: 500;
  white-space: nowrap;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const ResultContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ResultCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-top: 4px solid var(--primary);
`;

const ResultHeader = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 1rem;
`;

const ResultTitle = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
`;

const ResultMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--dark-gray);
`;

const ResultType = styled.span<{ type: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ type }) => type === 'interesado' && `
    background-color: #f6ffed;
    color: #52c41a;
  `}
  
  ${({ type }) => type === 'no-interesado' && `
    background-color: #fff1f0;
    color: #f5222d;
  `}
  
  ${({ type }) => type === 'seguimiento' && `
    background-color: #fff7e6;
    color: #fa8c16;
  `}
`;

const ResultBody = styled.div`
  margin-bottom: 1rem;
`;

const ResultInfo = styled.div`
  margin-bottom: 0.75rem;
`;

const ResultLabel = styled.span`
  font-weight: 500;
  color: var(--dark-gray);
  font-size: 0.875rem;
`;

const ResultValue = styled.span`
  display: block;
  margin-top: 0.25rem;
`;

const ResultNotes = styled.p`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--dark-gray);
`;

const ResultFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--light-gray);
`;

const ResultDate = styled.span`
  font-size: 0.875rem;
  color: var(--dark-gray);
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

export const SeguimientoResultados: React.FC = () => {
  const [filters, setFilters] = useState({
    resultado: '',
    fechaDesde: '',
    fechaHasta: '',
    busqueda: ''
  });
  
  // Datos simulados para las estadísticas
  const stats = {
    totalLlamadas: 247,
    interesados: 68,
    noInteresados: 142,
    seguimientos: 37
  };
  
  // Datos simulados para los resultados
  const resultados = [
    {
      id: '1',
      institucion: 'Academia de Danza Moderna',
      tipo: 'interesado',
      fecha: '2023-05-20',
      contacto: 'María López',
      telefono: '+1 (212) 555-1234',
      notas: 'Muy interesada en participar. Solicita más información sobre requisitos y fechas.',
      seguimiento: '2023-05-25'
    },
    {
      id: '2',
      institucion: 'Escuela de Teatro Broadway Stars',
      tipo: 'no-interesado',
      fecha: '2023-05-20',
      contacto: 'John Smith',
      telefono: '+1 (212) 555-5678',
      notas: 'No están buscando nuevas colaboraciones este año. Sugiere contactar nuevamente el próximo semestre.',
      seguimiento: ''
    },
    {
      id: '3',
      institucion: 'Instituto de Artes Escénicas',
      tipo: 'interesado',
      fecha: '2023-05-19',
      contacto: 'Amanda Johnson',
      telefono: '+1 (212) 555-9012',
      notas: 'Muy entusiasmada con la propuesta. Quiere coordinar una reunión con el equipo directivo.',
      seguimiento: '2023-05-26'
    },
    {
      id: '4',
      institucion: 'Elite Model Academy',
      tipo: 'seguimiento',
      fecha: '2023-05-19',
      contacto: 'Robert Brown',
      telefono: '+1 (212) 555-3456',
      notas: 'Solicita más detalles sobre los beneficios del programa. Necesita consultarlo con otros miembros del staff.',
      seguimiento: '2023-05-22'
    },
    {
      id: '5',
      institucion: 'Los Angeles School of Performing Arts',
      tipo: 'interesado',
      fecha: '2023-05-18',
      contacto: 'Jennifer Davis',
      telefono: '+1 (323) 555-7890',
      notas: 'Tienen varios talentos que podrían encajar perfectamente con el programa. Solicita formularios de inscripción.',
      seguimiento: '2023-05-24'
    },
    {
      id: '6',
      institucion: 'Miami Dance Academy',
      tipo: 'no-interesado',
      fecha: '2023-05-18',
      contacto: 'Michael Rodriguez',
      telefono: '+1 (305) 555-6789',
      notas: 'Ya tienen acuerdos exclusivos con otras agencias de representación. No interesados en este momento.',
      seguimiento: ''
    }
  ];
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  // Filtrar resultados basados en los filtros aplicados
  const resultadosFiltrados = resultados.filter(resultado => {
    // Filtro por tipo de resultado
    if (filters.resultado && resultado.tipo !== filters.resultado) {
      return false;
    }
    
    // Filtro por fecha desde
    if (filters.fechaDesde && resultado.fecha < filters.fechaDesde) {
      return false;
    }
    
    // Filtro por fecha hasta
    if (filters.fechaHasta && resultado.fecha > filters.fechaHasta) {
      return false;
    }
    
    // Filtro por búsqueda (institución o contacto)
    if (filters.busqueda) {
      const searchTerm = filters.busqueda.toLowerCase();
      return (
        resultado.institucion.toLowerCase().includes(searchTerm) ||
        resultado.contacto.toLowerCase().includes(searchTerm)
      );
    }
    
    return true;
  });
  
  return (
    <Container>
      <h2>Seguimiento de Resultados</h2>
      <p style={{ marginBottom: '2rem' }}>
        Monitorea y analiza los resultados de las llamadas realizadas, identificando
        instituciones interesadas, no interesadas y aquellas que requieren seguimiento.
      </p>
      
      <Stats>
        <StatCard>
          <StatValue>{stats.totalLlamadas}</StatValue>
          <StatLabel>Total de Llamadas</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.interesados}</StatValue>
          <StatLabel>Interesados</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.noInteresados}</StatValue>
          <StatLabel>No Interesados</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.seguimientos}</StatValue>
          <StatLabel>Pendientes de Seguimiento</StatLabel>
        </StatCard>
      </Stats>
      
      <FilterContainer>
        <FilterGroup>
          <FilterLabel htmlFor="resultado">Resultado:</FilterLabel>
          <FilterSelect 
            id="resultado" 
            name="resultado" 
            value={filters.resultado}
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="interesado">Interesados</option>
            <option value="no-interesado">No interesados</option>
            <option value="seguimiento">Requieren seguimiento</option>
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel htmlFor="fechaDesde">Desde:</FilterLabel>
          <FilterInput 
            id="fechaDesde" 
            name="fechaDesde" 
            type="date" 
            value={filters.fechaDesde}
            onChange={handleFilterChange}
          />
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel htmlFor="fechaHasta">Hasta:</FilterLabel>
          <FilterInput 
            id="fechaHasta" 
            name="fechaHasta" 
            type="date" 
            value={filters.fechaHasta}
            onChange={handleFilterChange}
          />
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel htmlFor="busqueda">Buscar:</FilterLabel>
          <FilterInput 
            id="busqueda" 
            name="busqueda" 
            type="text" 
            placeholder="Institución o contacto..." 
            value={filters.busqueda}
            onChange={handleFilterChange}
          />
        </FilterGroup>
      </FilterContainer>
      
      <h3>Resultados de Llamadas ({resultadosFiltrados.length})</h3>
      
      <ResultContainer>
        {resultadosFiltrados.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
            No se encontraron resultados que coincidan con los filtros aplicados.
          </div>
        ) : (
          resultadosFiltrados.map(resultado => (
            <ResultCard key={resultado.id}>
              <ResultHeader>
                <ResultTitle>{resultado.institucion}</ResultTitle>
                <ResultMeta>
                  <ResultType type={resultado.tipo}>
                    {resultado.tipo === 'interesado' && 'Interesado'}
                    {resultado.tipo === 'no-interesado' && 'No Interesado'}
                    {resultado.tipo === 'seguimiento' && 'Seguimiento'}
                  </ResultType>
                  <span>{resultado.fecha}</span>
                </ResultMeta>
              </ResultHeader>
              
              <ResultBody>
                <ResultInfo>
                  <ResultLabel>Contacto:</ResultLabel>
                  <ResultValue>{resultado.contacto}</ResultValue>
                </ResultInfo>
                
                <ResultInfo>
                  <ResultLabel>Teléfono:</ResultLabel>
                  <ResultValue>{resultado.telefono}</ResultValue>
                </ResultInfo>
                
                <ResultInfo>
                  <ResultLabel>Notas:</ResultLabel>
                  <ResultNotes>{resultado.notas}</ResultNotes>
                </ResultInfo>
                
                {resultado.seguimiento && (
                  <ResultInfo>
                    <ResultLabel>Fecha de Seguimiento:</ResultLabel>
                    <ResultValue>{resultado.seguimiento}</ResultValue>
                  </ResultInfo>
                )}
              </ResultBody>
              
              <ResultFooter>
                <Button size="small">Ver Detalles</Button>
                {resultado.tipo === 'seguimiento' && (
                  <Button size="small" variant="outline">Programar Llamada</Button>
                )}
              </ResultFooter>
            </ResultCard>
          ))
        )}
      </ResultContainer>
    </Container>
  );
};
