import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { makeCall } from '../../services/telnyxApi';

const CallContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CallHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CallTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CallDescription = styled.p`
  color: var(--gray);
`;

const CallForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  
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

const StatusMessage = styled.div<{ type: 'success' | 'error' | 'info' }>`
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  
  ${({ type }) => 
    type === 'success' && `
      background-color: rgba(107, 255, 139, 0.2);
      border: 1px solid var(--success);
      color: #2a8d40;
    `}
  
  ${({ type }) => 
    type === 'error' && `
      background-color: rgba(255, 107, 107, 0.2);
      border: 1px solid var(--error);
      color: #c73737;
    `}
  
  ${({ type }) => 
    type === 'info' && `
      background-color: rgba(78, 205, 196, 0.2);
      border: 1px solid var(--secondary);
      color: #2a8d8d;
    `}
`;

const CallInterface: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  const handleMakeCall = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber) {
      setMessage({
        text: 'Por favor, ingresa un número de teléfono válido.',
        type: 'error'
      });
      return;
    }
    
    setLoading(true);
    setMessage(null);
    
    try {
      // Configuración para la llamada con Telnyx
      const callParams = {
        to: phoneNumber,
        from: '+12345678901', // Número de teléfono de salida (configurable)
        connectionId: 'your-connection-id' // ID de conexión de Telnyx
      };
      
      // Realizar la llamada a través de la API de Telnyx
      const result = await makeCall(callParams);
      
      setMessage({
        text: `Llamada iniciada correctamente a ${phoneNumber}.`,
        type: 'success'
      });
      
      // Registrar la llamada con información adicional
      // Aquí se podría implementar la lógica para guardar el registro de la llamada
      
    } catch (error) {
      console.error('Error al realizar la llamada:', error);
      setMessage({
        text: 'Ocurrió un error al iniciar la llamada. Por favor, inténtalo de nuevo.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleReset = () => {
    setPhoneNumber('');
    setName('');
    setNotes('');
    setMessage(null);
  };
  
  return (
    <CallContainer>
      <CallHeader>
        <CallTitle>Realizar Llamada</CallTitle>
        <CallDescription>
          Utiliza la integración con Telnyx para realizar llamadas a instituciones o talentos.
        </CallDescription>
      </CallHeader>
      
      <CallForm onSubmit={handleMakeCall}>
        <InputGroup>
          <Label htmlFor="phone-number">Número de Teléfono</Label>
          <Input
            id="phone-number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+52 55 1234 5678"
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="name">Nombre de Contacto</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre de la persona o institución"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="notes">Notas de la Llamada</Label>
          <TextArea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Escribe cualquier información relevante para la llamada..."
          />
        </InputGroup>
        
        <ButtonGroup>
          <Button type="submit" disabled={loading}>
            {loading ? 'Iniciando llamada...' : 'Iniciar Llamada'}
          </Button>
          <Button variant="outline" type="button" onClick={handleReset}>
            Limpiar
          </Button>
        </ButtonGroup>
      </CallForm>
      
      {message && (
        <StatusMessage type={message.type}>
          {message.text}
        </StatusMessage>
      )}
    </CallContainer>
  );
};

export default CallInterface;