import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div`
  margin-top: 2rem;
`;

const FormContainer = styled.div`
  background-color: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Form = styled.form``;

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

const TableContainer = styled.div`
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

const Status = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ status }) => status === 'pending' && `
    background-color: #fff7e6;
    color: #fa8c16;
  `}
  
  ${({ status }) => status === 'completed' && `
    background-color: #f6ffed;
    color: #52c41a;
  `}
  
  ${({ status }) => status === 'overdue' && `
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

const PriorityTag = styled.span<{ priority: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ priority }) => priority === 'high' && `
    background-color: #fff1f0;
    color: #f5222d;
  `}
  
  ${({ priority }) => priority === 'medium' && `
    background-color: #fff7e6;
    color: #fa8c16;
  `}
  
  ${({ priority }) => priority === 'low' && `
    background-color: #e6f7ff;
    color: #1890ff;
  `}
`;

export const ControlCompromisos: React.FC = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: 'llamada',
    institucion: '',
    contacto: '',
    fecha: '',
    hora: '',
    prioridad: 'medium',
    notas: '',
    estado: 'pending'
  });
  
  // Datos simulados para los compromisos
  const compromisos = [
    {
      id: '1',
      titulo: 'Llamada de seguimiento',
      tipo: 'llamada',
      institucion: 'Academia de Danza Moderna',
      contacto: 'María López',
      fecha: '2023-05-25',
      hora: '10:30',
      prioridad: 'high',
      notas: 'Discutir detalles sobre la participación en el programa.',
      estado: 'pending'
    },
    {
      id: '2',
      titulo: 'Envío de propuesta',
      tipo: 'email',
      institucion: 'Escuela de Teatro Broadway Stars',
      contacto: 'John Smith',
      fecha: '2023-05-24',
      hora: '12:00',
      prioridad: 'medium',
      notas: 'Enviar propuesta formal con todos los detalles del programa.',
      estado: 'pending'
    },
    {
      id: '3',
      titulo: 'Reunión virtual',
      tipo: 'reunion',
      institucion: 'Instituto de Artes Escénicas',
      contacto: 'Amanda Johnson',
      fecha: '2023-05-26',
      hora: '15:45',
      prioridad: 'high',
      notas: 'Reunión con el equipo directivo para presentar el programa.',
      estado: 'pending'
    },
    {
      id: '4',
      titulo: 'Envío de formularios',
      tipo: 'tarea',
      institucion: 'Elite Model Academy',
      contacto: 'Robert Brown',
      fecha: '2023-05-20',
      hora: '09:00',
      prioridad: 'low',
      notas: 'Enviar formularios de inscripción y documentación adicional.',
      estado: 'overdue'
    },
    {
      id: '5',
      titulo: 'Llamada inicial',
      tipo: 'llamada',
      institucion: 'Miami Dance Academy',
      contacto: 'Michael Rodriguez',
      fecha: '2023-05-19',
      hora: '14:30',
      prioridad: 'medium',
      notas: 'Primera llamada para presentar el programa.',
      estado: 'completed'
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de guardado
    console.log('Compromiso a guardar:', formData);
    
    // Limpiar formulario
    setFormData({
      titulo: '',
      tipo: 'llamada',
      institucion: '',
      contacto: '',
      fecha: '',
      hora: '',
      prioridad: 'medium',
      notas: '',
      estado: 'pending'
    });
  };
  
  // Ordenar compromisos por fecha
  const sortedCompromisos = [...compromisos].sort((a, b) => {
    const dateA = new Date(`${a.fecha}T${a.hora}`);
    const dateB = new Date(`${b.fecha}T${b.hora}`);
    return dateA.getTime() - dateB.getTime();
  });
  
  // Clasificar compromisos por estado
  const pendingCompromisos = sortedCompromisos.filter(c => c.estado === 'pending');
  const overdueCompromisos = sortedCompromisos.filter(c => c.estado === 'overdue');
  const completedCompromisos = sortedCompromisos.filter(c => c.estado === 'completed');
  
  return (
    <Container>
      <h3>Registrar Nuevo Compromiso</h3>
      
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="titulo">Título del Compromiso</Label>
            <Input 
              id="titulo" 
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ej: Llamada de seguimiento, Reunión virtual, etc."
              required
            />
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="tipo">Tipo de Compromiso</Label>
              <Select 
                id="tipo" 
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="llamada">Llamada</option>
                <option value="email">Email</option>
                <option value="reunion">Reunión</option>
                <option value="tarea">Tarea</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="prioridad">Prioridad</Label>
              <Select 
                id="prioridad" 
                name="prioridad"
                value={formData.prioridad}
                onChange={handleChange}
                required
              >
                <option value="high">Alta</option>
                <option value="medium">Media</option>
                <option value="low">Baja</option>
              </Select>
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="institucion">Institución</Label>
              <Input 
                id="institucion" 
                name="institucion"
                value={formData.institucion}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
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
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="fecha">Fecha</Label>
              <Input 
                id="fecha" 
                name="fecha"
                type="date"
                value={formData.fecha}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="hora">Hora</Label>
              <Input 
                id="hora" 
                name="hora"
                type="time"
                value={formData.hora}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label htmlFor="notas">Notas</Label>
            <TextArea 
              id="notas" 
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Detalles importantes sobre el compromiso..."
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="submit">Guardar Compromiso</Button>
            <Button type="button" variant="outline">Cancelar</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
      
      <h3>Compromisos Pendientes ({pendingCompromisos.length})</h3>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Compromiso</Th>
              <Th>Institución</Th>
              <Th>Contacto</Th>
              <Th>Fecha y Hora</Th>
              <Th>Prioridad</Th>
              <Th>Acciones</Th>
            </tr>
          </thead>
          <tbody>
            {pendingCompromisos.length === 0 ? (
              <tr>
                <Td colSpan={6} style={{ textAlign: 'center' }}>
                  No hay compromisos pendientes.
                </Td>
              </tr>
            ) : (
              pendingCompromisos.map(compromiso => (
                <tr key={compromiso.id}>
                  <Td>
                    <strong>{compromiso.titulo}</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>
                      {compromiso.tipo.charAt(0).toUpperCase() + compromiso.tipo.slice(1)}
                    </div>
                  </Td>
                  <Td>{compromiso.institucion}</Td>
                  <Td>{compromiso.contacto}</Td>
                  <Td>{compromiso.fecha} {compromiso.hora}</Td>
                  <Td>
                    <PriorityTag priority={compromiso.prioridad}>
                      {compromiso.prioridad === 'high' && 'Alta'}
                      {compromiso.prioridad === 'medium' && 'Media'}
                      {compromiso.prioridad === 'low' && 'Baja'}
                    </PriorityTag>
                  </Td>
                  <Td>
                    <ActionButtons>
                      <ActionButton title="Completar">
                        <span role="img" aria-label="completar">✓</span>
                      </ActionButton>
                      <ActionButton title="Editar">
                        <span role="img" aria-label="editar">✏️</span>
                      </ActionButton>
                      <ActionButton title="Eliminar">
                        <span role="img" aria-label="eliminar">���️</span>
                      </ActionButton>
                    </ActionButtons>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableContainer>
      
      <h3>Compromisos Vencidos ({overdueCompromisos.length})</h3>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Compromiso</Th>
              <Th>Institución</Th>
              <Th>Contacto</Th>
              <Th>Fecha y Hora</Th>
              <Th>Prioridad</Th>
              <Th>Acciones</Th>
            </tr>
          </thead>
          <tbody>
            {overdueCompromisos.length === 0 ? (
              <tr>
                <Td colSpan={6} style={{ textAlign: 'center' }}>
                  No hay compromisos vencidos.
                </Td>
              </tr>
            ) : (
              overdueCompromisos.map(compromiso => (
                <tr key={compromiso.id}>
                  <Td>
                    <strong>{compromiso.titulo}</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>
                      {compromiso.tipo.charAt(0).toUpperCase() + compromiso.tipo.slice(1)}
                    </div>
                  </Td>
                  <Td>{compromiso.institucion}</Td>
                  <Td>{compromiso.contacto}</Td>
                  <Td>
                    <span style={{ color: 'var(--error)' }}>
                      {compromiso.fecha} {compromiso.hora}
                    </span>
                  </Td>
                  <Td>
                    <PriorityTag priority={compromiso.prioridad}>
                      {compromiso.prioridad === 'high' && 'Alta'}
                      {compromiso.prioridad === 'medium' && 'Media'}
                      {compromiso.prioridad === 'low' && 'Baja'}
                    </PriorityTag>
                  </Td>
                  <Td>
                    <ActionButtons>
                      <ActionButton title="Completar">
                        <span role="img" aria-label="completar">✓</span>
                      </ActionButton>
                      <ActionButton title="Reprogramar">
                        <span role="img" aria-label="reprogramar">���</span>
                      </ActionButton>
                      <ActionButton title="Eliminar">
                        <span role="img" aria-label="eliminar">���️</span>
                      </ActionButton>
                    </ActionButtons>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableContainer>
      
      <h3>Compromisos Completados ({completedCompromisos.length})</h3>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Compromiso</Th>
              <Th>Institución</Th>
              <Th>Contacto</Th>
              <Th>Fecha y Hora</Th>
              <Th>Estado</Th>
            </tr>
          </thead>
          <tbody>
            {completedCompromisos.length === 0 ? (
              <tr>
                <Td colSpan={5} style={{ textAlign: 'center' }}>
                  No hay compromisos completados.
                </Td>
              </tr>
            ) : (
              completedCompromisos.map(compromiso => (
                <tr key={compromiso.id}>
                  <Td>
                    <strong>{compromiso.titulo}</strong>
                    <div style={{ fontSize: '0.875rem', color: 'var(--dark-gray)' }}>
                      {compromiso.tipo.charAt(0).toUpperCase() + compromiso.tipo.slice(1)}
                    </div>
                  </Td>
                  <Td>{compromiso.institucion}</Td>
                  <Td>{compromiso.contacto}</Td>
                  <Td>{compromiso.fecha} {compromiso.hora}</Td>
                  <Td>
                    <Status status="completed">Completado</Status>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

