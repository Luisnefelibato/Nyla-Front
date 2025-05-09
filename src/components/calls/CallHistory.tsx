import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCallHistory } from '../../services/telnyxApi';

const HistoryContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HistoryHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const HistoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const HistoryDescription = styled.p`
  color: var(--gray);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f8f8f8;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: #fafafa;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--dark);
`;

const TableCell = styled.td`
  padding: 1rem;
  color: var(--gray);
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  
  ${({ status }) => 
    status === 'completed' && `
      background-color: rgba(107, 255, 139, 0.2);
      color: #2a8d40;
    `}
  
  ${({ status }) => 
    status === 'failed' && `
      background-color: rgba(255, 107, 107, 0.2);
      color: #c73737;
    `}
  
  ${({ status }) => 
    status === 'ongoing' && `
      background-color: rgba(78, 205, 196, 0.2);
      color: #2a8d8d;
    `}
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--gray);
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--gray);
`;

interface Call {
  id: string;
  to: string;
  from: string;
  status: 'completed' | 'failed' | 'ongoing';
  duration: number;
  startTime: string;
  notes?: string;
}

const CallHistory: React.FC = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    fetchCallHistory();
  }, []);
  
  const fetchCallHistory = async () => {
    try {
      setLoading(true);
      
      // Obtener historial de llamadas de la API de Telnyx
      const data = await getCallHistory();
      
      // Procesar y formatear los datos
      const formattedCalls = data.data.map((call: any) => ({
        id: call.call_control_id,
        to: call.to,
        from: call.from,
        status: call.state,
        duration: call.duration,
        startTime: new Date(call.start_time).toLocaleString(),
        notes: call.notes
      }));
      
      setCalls(formattedCalls);
    } catch (err) {
      console.error('Error al obtener el historial de llamadas:', err);
      setError('No se pudo cargar el historial de llamadas. Por favor, inténtalo de nuevo más tarde.');
      
      // Para propósitos de desarrollo, cargamos datos de ejemplo
      setCalls([
        {
          id: '1',
          to: '+52 55 1234 5678',
          from: '+1 234 567 8901',
          status: 'completed',
          duration: 135,
          startTime: '2023-05-05 10:30:45',
          notes: 'Llamada de seguimiento con Academia de Danza Moderna'
        },
        {
          id: '2',
          to: '+34 612 345 678',
          from: '+1 234 567 8901',
          status: 'failed',
          duration: 0,
          startTime: '2023-05-04 15:20:10',
          notes: 'Intento de contacto con Escuela de Teatro'
        },
        {
          id: '3',
          to: '+1 987 654 3210',
          from: '+1 234 567 8901',
          status: 'completed',
          duration: 287,
          startTime: '2023-05-03 09:15:30',
          notes: 'Discusión sobre colaboración con Agencia de Modelos'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };
  
  const formatDuration = (seconds: number) => {
    if (seconds === 0) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  if (loading) {
    return (
      <HistoryContainer>
        <HistoryHeader>
          <HistoryTitle>Historial de Llamadas</HistoryTitle>
        </HistoryHeader>
        <LoadingState>Cargando historial de llamadas...</LoadingState>
      </HistoryContainer>
    );
  }
  
  if (error) {
    return (
      <HistoryContainer>
        <HistoryHeader>
          <HistoryTitle>Historial de Llamadas</HistoryTitle>
        </HistoryHeader>
        <EmptyState>{error}</EmptyState>
      </HistoryContainer>
    );
  }
  
  return (
    <HistoryContainer>
      <HistoryHeader>
        <HistoryTitle>Historial de Llamadas</HistoryTitle>
        <HistoryDescription>
          Registro de las llamadas realizadas a través de la plataforma.
        </HistoryDescription>
      </HistoryHeader>
      
      {calls.length === 0 ? (
        <EmptyState>No hay registro de llamadas realizadas.</EmptyState>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Fecha y Hora</TableHeader>
              <TableHeader>Destino</TableHeader>
              <TableHeader>Duración</TableHeader>
              <TableHeader>Estado</TableHeader>
              <TableHeader>Notas</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {calls.map((call) => (
              <TableRow key={call.id}>
                <TableCell>{call.startTime}</TableCell>
                <TableCell>{call.to}</TableCell>
                <TableCell>{formatDuration(call.duration)}</TableCell>
                <TableCell>
                  <StatusBadge status={call.status}>
                    {call.status === 'completed' && 'Completada'}
                    {call.status === 'failed' && 'Fallida'}
                    {call.status === 'ongoing' && 'En curso'}
                  </StatusBadge>
                </TableCell>
                <TableCell>{call.notes || '-'}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </HistoryContainer>
  );
};

export default CallHistory;