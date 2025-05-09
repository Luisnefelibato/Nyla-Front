import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const SaveContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const SaveHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const SaveTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SaveDescription = styled.p`
  color: var(--gray);
`;

const ProgressContainer = styled.div`
  margin: 2rem 0;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: var(--primary);
  border-radius: 4px;
  transition: width 0.5s ease;
`;

const ProgressText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--gray);
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

interface Institution {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
  rating: number;
  contact: string;
}

interface SaveToDatabaseProps {
  institutions: Institution[];
}

const SaveToDatabase: React.FC<SaveToDatabaseProps> = ({ institutions }) => {
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  const handleSaveToDatabase = async () => {
    if (!institutions.length) {
      setMessage({
        text: 'No hay instituciones para guardar. Realiza una búsqueda primero.',
        type: 'info'
      });
      return;
    }
    
    setSaving(true);
    setProgress(0);
    setMessage(null);
    
    // Simulación del proceso de guardado en la base de datos
    try {
      // Simulamos un proceso de guardado
      for (let i = 0; i < institutions.length; i++) {
        // Simulamos un request para cada institución
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        // Actualizamos el progreso
        const newProgress = Math.round(((i + 1) / institutions.length) * 100);
        setProgress(newProgress);
      }
      
      setMessage({
        text: `${institutions.length} instituciones guardadas correctamente en la base de datos.`,
        type: 'success'
      });
    } catch (error) {
      console.error('Error al guardar en la base de datos:', error);
      setMessage({
        text: 'Ocurrió un error al guardar las instituciones. Por favor, inténtalo de nuevo.',
        type: 'error'
      });
    } finally {
      setSaving(false);
    }
  };
  
  return (
    <SaveContainer>
      <SaveHeader>
        <SaveTitle>Guardar Instituciones en Base de Datos</SaveTitle>
        <SaveDescription>
          Guarda las instituciones encontradas en la base de datos para futuras consultas.
        </SaveDescription>
      </SaveHeader>
      
      <Button 
        fullWidth 
        disabled={saving || !institutions.length} 
        onClick={handleSaveToDatabase}
      >
        {saving ? 'Guardando...' : 'Guardar Todas las Instituciones'}
      </Button>
      
      {saving && (
        <ProgressContainer>
          <ProgressBar>
            <Progress width={progress} />
          </ProgressBar>
          <ProgressText>Guardando... {progress}%</ProgressText>
        </ProgressContainer>
      )}
      
      {message && (
        <StatusMessage type={message.type}>
          {message.text}
        </StatusMessage>
      )}
    </SaveContainer>
  );
};

export default SaveToDatabase;