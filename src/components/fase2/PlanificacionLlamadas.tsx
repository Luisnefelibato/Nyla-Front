import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div``;

const FormContainer = styled.div`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  background-color: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
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
  vertical-align: top;
`;

const Status = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ status }) => status === 'pendiente' && `
    background-color: #fff7e6;
    color: #fa8c16;
  `}
  
  ${({ status }) => status === 'completada' && `
    background-color: #f6ffed;
    color: #52c41a;
  `}
  
  ${({ status }) => status === 'cancelada' && `
    background-color: #fff1f0;
    color: #f5222d;
  `}
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: var(--primary);
  cursor: pointer;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const DatePickerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const DateButton = styled.button<{ active: boolean }>`
  padding: 0.75rem;
  border: 1px solid ${({ active }) => active ? 'var(--primary)' : 'var(--light-gray)'};
  background-color: ${({ active }) => active ? 'var(--primary-light)' : 'white'};
  color: ${({ active }) => active ? 'white' : 'var(--dark)'};
  border-radius: 4px;
  font-weight: ${({ active }) => active ? '500' : 'normal'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary)' : 'var(--light)'};
  }
`;

export const PlanificacionLlamadas: React.FC = () => {
  const [formData, setFormData] = useState({
    institucion: '',
    contacto: '',
    telefono: '',
    fecha: '',
    hora: '',
    notas: ''
  });
  
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  // Datos simulados para las instituciones
  const instituciones = [
    { id: '1', nombre: 'Academia de Danza Moderna' },
    { id: '2', nombre: 'Escuela de Teatro Broadway Stars' },
    { id: '3', nombre: 'Instituto de Artes Escénicas' },
    { id: '4', nombre: 'Elite Model Academy' },
    { id: '5', nombre: 'Los Angeles School of Performing Arts' }
  ];
  
  // Datos simulados para las llamadas programadas
  const llamadasProgramadas = [
    {
      id: '1',
      institucion: 'Academia de Danza Moderna',
      contacto: 'María López',
      telefono: '+1 (212) 555-1234',
      fecha: '2023-05-22',
      hora: '10:00',
      estado: 'pendiente'
    },
    {
      id: '2',
      institucion: 'Escuela de Teatro Broadway Stars',
      contacto: 'John Smith',
      telefono: '+1 (212) 555-5678',
      fecha: '2023-05-22',
      hora: '14:30',
      estado: 'pendiente'
    },
    {
      id: '3',
      institucion: 'Instituto de Artes Escénicas',
      contacto: 'Amanda Johnson',
      telefono: '+1 (212) 555-9012',
      fecha: '2023-05-21',
      hora: '11:15',
      estado: 'completada'
    },
    {
      id: '4',
      institucion: 'Elite Model Academy',
      contacto: 'Robert Brown',
      telefono: '+1 (212) 555-3456',
      fecha: '2023-05-20',
      hora: '09:30',
      estado: 'cancelada'
    }
  ];
  
  // Fechas para el selector de días
  const fechasProximas = [
    '2023-05-22', // Hoy
    '2023-05-23', // Mañana
    '2023-05-24',
    '2023-05-25',
    '2023-05-26'
  ];
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSelectDate = (date: string) => {
    setSelectedDate(date === selectedDate ? null : date);
    
    if (date !== selectedDate) {
      setFormData(prevData => ({
        ...prevData,
        fecha: date
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de programación de llamadas
    console.log('Llamada programada:', formData);
    
    // Limpiar formulario
    setFormData({
      institucion: '',
      contacto: '',
      telefono: '',
      fecha: '',
      hora: '',
      notas: ''
    });
    setSelectedDate(null);
  };
  
  return (
    <Container>
      <h2>Planificación de Llamadas</h2>
      <p style={{ marginBottom: '2rem' }}>
        Programa y organiza las llamadas a realizar a las instituciones identificadas.
        Se recomienda realizar entre 35 y 50 llamadas diarias para un seguimiento efectivo.
      </p>
      
      <FormContainer>
        <h3>Programar Nueva Llamada</h3>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="institucion">Institución</Label>
            <Select 
              id="institucion" 
              name="institucion"
              value={formData.institucion}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar institución</option>
              {instituciones.map(inst => (
                <option key={inst.id} value={inst.id}>{inst.nombre}</option>
              ))}
            </Select>
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="contacto">Persona de Contacto</Label>
              <Input 
                id="contacto" 
                name="contacto"
                value={formData.contacto}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input 
                id="telefono" 
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label>Fecha de Llamada</Label>
            <DatePickerRow>
              {fechasProximas.map(fecha => (
                <DateButton 
                  key={fecha}
                  type="button"
                  active={fecha === selectedDate}
                  onClick={() => handleSelectDate(fecha)}
                >
                  {formatDate(fecha)}
                </DateButton>
              ))}
            </DatePickerRow>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="hora">Hora de Llamada</Label>
            <Input 
              id="hora" 
              name="hora"
              type="time"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="notas">Notas para la Llamada</Label>
            <TextArea 
              id="notas" 
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Información importante a tener en cuenta durante la llamada..."
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="submit">Programar Llamada</Button>
            <Button type="button" variant="outline">Cancelar</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
      
      <h3>Llamadas Programadas</h3>
      <Table>
        <thead>
          <tr>
            <Th>Institución</Th>
            <Th>Contacto</Th>
            <Th>Fecha y Hora</Th>
            <Th>Estado</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {llamadasProgramadas.map(llamada => (
            <tr key={llamada.id}>
              <Td>{llamada.institucion}</Td>
              <Td>
                {llamada.contacto}<br />
                {llamada.telefono}
              </Td>
              <Td>{formatDate(llamada.fecha)} - {llamada.hora}</Td>
              <Td>
                <Status status={llamada.estado}>
                  {llamada.estado === 'pendiente' && 'Pendiente'}
                  {llamada.estado === 'completada' && 'Completada'}
                  {llamada.estado === 'cancelada' && 'Cancelada'}
                </Status>
              </Td>
              <Td>
                <ActionButtons>
                  <ActionButton type="button">
                    <span role="img" aria-label="realizar llamada">���</span>
                  </ActionButton>
                  <ActionButton type="button">
                    <span role="img" aria-label="editar">✏️</span>
                  </ActionButton>
                  <ActionButton type="button">
                    <span role="img" aria-label="eliminar">���️</span>
                  </ActionButton>
                </ActionButtons>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
