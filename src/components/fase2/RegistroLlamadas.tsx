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

const Result = styled.span<{ result: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ result }) => result === 'positivo' && `
    background-color: #f6ffed;
    color: #52c41a;
  `}
  
  ${({ result }) => result === 'negativo' && `
    background-color: #fff1f0;
    color: #f5222d;
  `}
  
  ${({ result }) => result === 'pendiente' && `
    background-color: #fff7e6;
    color: #fa8c16;
  `}
`;

const CallTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: var(--light);
  border-radius: 8px;
`;

const TimerDisplay = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: var(--primary);
`;

const TimerButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TimerButton = styled.button<{ variant: string }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  
  ${({ variant }) => variant === 'start' && `
    background-color: #52c41a;
    
    &:hover {
      background-color: #389e0d;
    }
  `}
  
  ${({ variant }) => variant === 'stop' && `
    background-color: #f5222d;
    
    &:hover {
      background-color: #cf1322;
    }
  `}
  
  ${({ variant }) => variant === 'reset' && `
    background-color: #faad14;
    
    &:hover {
      background-color: #d48806;
    }
  `}
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const RegistroLlamadas: React.FC = () => {
  const [formData, setFormData] = useState({
    institucion: '',
    contacto: '',
    telefono: '',
    duracion: '00:00',
    resultado: '',
    notas: '',
    seguimiento: false,
    fechaSeguimiento: '',
    horaSeguimiento: ''
  });
  
  const [timer, setTimer] = useState({
    running: false,
    seconds: 0
  });
  
  // Datos simulados para las llamadas registradas
  const llamadasRegistradas = [
    {
      id: '1',
      fecha: '2023-05-20',
      hora: '10:15',
      institucion: 'Academia de Danza Moderna',
      contacto: 'María López',
      duracion: '08:45',
      resultado: 'positivo',
      seguimiento: '2023-05-25'
    },
    {
      id: '2',
      fecha: '2023-05-20',
      hora: '11:30',
      institucion: 'Escuela de Teatro Broadway Stars',
      contacto: 'John Smith',
      duracion: '05:20',
      resultado: 'negativo',
      seguimiento: ''
    },
    {
      id: '3',
      fecha: '2023-05-19',
      hora: '16:00',
      institucion: 'Instituto de Artes Escénicas',
      contacto: 'Amanda Johnson',
      duracion: '12:10',
      resultado: 'positivo',
      seguimiento: '2023-05-26'
    },
    {
      id: '4',
      fecha: '2023-05-19',
      hora: '14:45',
      institucion: 'Elite Model Academy',
      contacto: 'Robert Brown',
      duracion: '03:30',
      resultado: 'pendiente',
      seguimiento: '2023-05-22'
    }
  ];
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleTimerStart = () => {
    setTimer({ ...timer, running: true });
    
    // En una implementación real, aquí se iniciaría un intervalo
    // para incrementar los segundos cada segundo
  };
  
  const handleTimerStop = () => {
    setTimer({ ...timer, running: false });
    // En una implementación real, aquí se detendría el intervalo
    
    // Actualizar la duración en el formulario
    setFormData({
      ...formData,
      duracion: formatTime(timer.seconds)
    });
  };
  
  const handleTimerReset = () => {
    setTimer({ running: false, seconds: 0 });
    // En una implementación real, aquí se detendría el intervalo y se reiniciaría el contador
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de registro de llamadas
    console.log('Llamada registrada:', formData);
    
    // Limpiar formulario
    setFormData({
      institucion: '',
      contacto: '',
      telefono: '',
      duracion: '00:00',
      resultado: '',
      notas: '',
      seguimiento: false,
      fechaSeguimiento: '',
      horaSeguimiento: ''
    });
    setTimer({ running: false, seconds: 0 });
  };
  
  return (
    <Container>
      <h2>Registro de Llamadas</h2>
      <p style={{ marginBottom: '2rem' }}>
        Documenta cada llamada realizada, incluyendo la hora, duración, persona contactada
        y el resultado obtenido. Esta información es crucial para el seguimiento posterior.
      </p>
      
      <FormContainer>
        <h3>Registrar Nueva Llamada</h3>
        
        <CallTimer>
          <TimerDisplay>
            {formatTime(timer.seconds)}
          </TimerDisplay>
          <TimerButtons>
            {!timer.running ? (
              <TimerButton variant="start" onClick={handleTimerStart}>
                Iniciar
              </TimerButton>
            ) : (
              <TimerButton variant="stop" onClick={handleTimerStop}>
                Detener
              </TimerButton>
            )}
            <TimerButton variant="reset" onClick={handleTimerReset}>
              Reiniciar
            </TimerButton>
          </TimerButtons>
        </CallTimer>
        
        <Form onSubmit={handleSubmit}>
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
              <Label htmlFor="contacto">Persona Contactada</Label>
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
              <Label htmlFor="telefono">Teléfono Marcado</Label>
              <Input 
                id="telefono" 
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="duracion">Duración de la Llamada</Label>
              <Input 
                id="duracion" 
                name="duracion"
                value={formData.duracion}
                onChange={handleChange}
                readOnly
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label>Resultado de la Llamada</Label>
            <RadioGroup>
              <RadioOption>
                <Input 
                  type="radio" 
                  name="resultado" 
                  value="positivo" 
                  checked={formData.resultado === 'positivo'}
                  onChange={handleChange}
                />
                Positivo (Interesado)
              </RadioOption>
              <RadioOption>
                <Input 
                  type="radio" 
                  name="resultado" 
                  value="negativo" 
                  checked={formData.resultado === 'negativo'}
                  onChange={handleChange}
                />
                Negativo (No interesado)
              </RadioOption>
              <RadioOption>
                <Input 
                  type="radio" 
                  name="resultado" 
                  value="pendiente" 
                  checked={formData.resultado === 'pendiente'}
                  onChange={handleChange}
                />
                Pendiente (Requiere seguimiento)
              </RadioOption>
            </RadioGroup>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="notas">Contenido de la Llamada</Label>
            <TextArea 
              id="notas" 
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Puntos discutidos, preguntas realizadas, respuestas obtenidas..."
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label style={{ marginBottom: '1rem' }}>Seguimiento</Label>
            <RadioOption style={{ marginBottom: '1rem' }}>
              <Input 
                type="checkbox" 
                name="seguimiento" 
                checked={formData.seguimiento}
                onChange={handleChange}
              />
              Requiere llamada de seguimiento
            </RadioOption>
            
            {formData.seguimiento && (
              <FormRow>
                <FormGroup>
                  <Label htmlFor="fechaSeguimiento">Fecha de Seguimiento</Label>
                  <Input 
                    id="fechaSeguimiento" 
                    name="fechaSeguimiento"
                    type="date"
                    value={formData.fechaSeguimiento}
                    onChange={handleChange}
                    required={formData.seguimiento}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="horaSeguimiento">Hora de Seguimiento</Label>
                  <Input 
                    id="horaSeguimiento" 
                    name="horaSeguimiento"
                    type="time"
                    value={formData.horaSeguimiento}
                    onChange={handleChange}
                    required={formData.seguimiento}
                  />
                </FormGroup>
              </FormRow>
            )}
          </FormGroup>
          
          <ButtonGroup>
            <Button type="submit">Registrar Llamada</Button>
            <Button type="button" variant="outline">Cancelar</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
      
      <h3>Historial de Llamadas Recientes</h3>
      <Table>
        <thead>
          <tr>
            <Th>Fecha y Hora</Th>
            <Th>Institución</Th>
            <Th>Contacto</Th>
            <Th>Duración</Th>
            <Th>Resultado</Th>
            <Th>Seguimiento</Th>
          </tr>
        </thead>
        <tbody>
          {llamadasRegistradas.map(llamada => (
            <tr key={llamada.id}>
              <Td>{llamada.fecha} {llamada.hora}</Td>
              <Td>{llamada.institucion}</Td>
              <Td>{llamada.contacto}</Td>
              <Td>{llamada.duracion}</Td>
              <Td>
                <Result result={llamada.resultado}>
                  {llamada.resultado === 'positivo' && 'Positivo'}
                  {llamada.resultado === 'negativo' && 'Negativo'}
                  {llamada.resultado === 'pendiente' && 'Pendiente'}
                </Result>
              </Td>
              <Td>{llamada.seguimiento || '-'}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
