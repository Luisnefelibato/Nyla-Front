import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Container = styled.div``;

const MetricSection = styled.div`
  margin-bottom: 3rem;
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MetricTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const MetricActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ChartContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 300px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  border: 1px dashed var(--light-gray);
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

const ProgressContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProgressTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const ProgressCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProgressName = styled.span`
  font-weight: 500;
`;

const ProgressValue = styled.span`
  font-weight: 600;
  color: var(--primary);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--light-gray);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ value: number }>`
  height: 100%;
  width: ${({ value }) => `${value}%`};
  background-color: var(--primary);
  border-radius: 4px;
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EvaluacionContinua: React.FC = () => {
  const [goals, setGoals] = useState({
    llamadasDiarias: 40,
    tazaRespuesta: 70,
    interesados: 60,
    seguimiento: 90
  });
  
  const [formData, setFormData] = useState({
    metrica: '',
    objetivo: '',
    actual: '',
    notas: ''
  });
  
  // Datos simulados para métricas
  const metricas = {
    llamadas: {
      total: 1240,
      completadas: 1180,
      exitosas: 850,
      interesados: 310,
      noInteresados: 540,
      sinContacto: 330
    },
    rendimiento: {
      tazaRespuesta: 65,
      tazaInteres: 26,
      llamadasPorDia: 36,
      tiempoPromedio: '6:45'
    },
    progresos: [
      {
        nombre: 'Llamadas Diarias',
        actual: 36,
        objetivo: goals.llamadasDiarias,
        porcentaje: Math.round((36 / goals.llamadasDiarias) * 100)
      },
      {
        nombre: 'Taza de Respuesta',
        actual: 65,
        objetivo: goals.tazaRespuesta,
        porcentaje: Math.round((65 / goals.tazaRespuesta) * 100)
      },
      {
        nombre: 'Contactos Interesados',
        actual: 26,
        objetivo: goals.interesados,
        porcentaje: Math.round((26 / goals.interesados) * 100)
      },
      {
        nombre: 'Seguimiento Completado',
        actual: 85,
        objetivo: goals.seguimiento,
        porcentaje: Math.round((85 / goals.seguimiento) * 100)
      }
    ]
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de actualización de métricas
    console.log('Métrica a actualizar:', formData);
    
    // Limpiar formulario
    setFormData({
      metrica: '',
      objetivo: '',
      actual: '',
      notas: ''
    });
  };
  
  return (
    <Container>
      <h3>Dashboard de Evaluación</h3>
      
      <StatsContainer>
        <StatCard>
          <StatValue>{metricas.llamadas.total}</StatValue>
          <StatLabel>Total de Llamadas</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{metricas.rendimiento.tazaRespuesta}%</StatValue>
          <StatLabel>Taza de Respuesta</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{metricas.rendimiento.tazaInteres}%</StatValue>
          <StatLabel>Taza de Interés</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{metricas.rendimiento.llamadasPorDia}</StatValue>
          <StatLabel>Promedio Diario</StatLabel>
        </StatCard>
      </StatsContainer>
      
      <MetricSection>
        <MetricHeader>
          <MetricTitle>Resultados de Llamadas</MetricTitle>
          <MetricActions>
            <Button size="small" variant="outline">Exportar</Button>
            <Button size="small" variant="outline">Filtrar</Button>
          </MetricActions>
        </MetricHeader>
        
        <ChartContainer>
          [Aquí iría el gráfico de resultados de llamadas]
        </ChartContainer>
      </MetricSection>
      
      <MetricSection>
        <MetricHeader>
          <MetricTitle>Tendencia de Llamadas</MetricTitle>
          <MetricActions>
            <Button size="small" variant="outline">Exportar</Button>
            <Button size="small" variant="outline">Filtrar</Button>
          </MetricActions>
        </MetricHeader>
        
        <ChartContainer>
          [Aquí iría el gráfico de tendencia de llamadas]
        </ChartContainer>
      </MetricSection>
      
      <ProgressContainer>
        <ProgressHeader>
          <ProgressTitle>Progreso hacia Objetivos</ProgressTitle>
        </ProgressHeader>
        
        <ProgressGrid>
          {metricas.progresos.map(progreso => (
            <ProgressCard key={progreso.nombre}>
              <ProgressLabel>
                <ProgressName>{progreso.nombre}</ProgressName>
                <ProgressValue>{progreso.actual} / {progreso.objetivo}</ProgressValue>
              </ProgressLabel>
              <ProgressBar>
                <ProgressFill value={progreso.porcentaje} />
              </ProgressBar>
              <div style={{ textAlign: 'right', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {progreso.porcentaje}% completado
              </div>
            </ProgressCard>
          ))}
        </ProgressGrid>
      </ProgressContainer>
      
      <h3>Actualizar Métricas y Objetivos</h3>
      
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="metrica">Métrica</Label>
              <Select
                id="metrica" 
                name="metrica"
                value={formData.metrica}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar métrica</option>
                <option value="llamadasDiarias">Llamadas Diarias</option>
                <option value="tazaRespuesta">Taza de Respuesta</option>
                <option value="interesados">Contactos Interesados</option>
                <option value="seguimiento">Seguimiento Completado</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="objetivo">Objetivo</Label>
              <Input 
                id="objetivo" 
                name="objetivo"
                type="number"
                value={formData.objetivo}
                onChange={handleChange}
                placeholder="Valor objetivo"
                required
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label htmlFor="actual">Valor Actual</Label>
            <Input 
              id="actual" 
              name="actual"
              type="number"
              value={formData.actual}
              onChange={handleChange}
              placeholder="Valor actual"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="notas">Notas</Label>
            <TextArea 
              id="notas" 
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              placeholder="Notas adicionales sobre la métrica..."
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="submit">Actualizar Métrica</Button>
            <Button type="button" variant="outline">Cancelar</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
      
      <MetricSection>
        <MetricHeader>
          <MetricTitle>Análisis de Eficiencia</MetricTitle>
        </MetricHeader>
        
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>Recomendaciones para Mejora</h4>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
            <li>
              <strong>Optimizar horarios de llamadas:</strong> Los datos muestran mayor tasa de respuesta entre 10:00-12:00 y 15:00-17:00. Concentrar esfuerzos en estas franjas horarias.
            </li>
            <li>
              <strong>Segmentar contactos por ubicación:</strong> Las instituciones en áreas urbanas muestran un 15% más de interés. Priorizar estas áreas para mejorar resultados.
            </li>
            <li>
              <strong>Mejorar script de llamada inicial:</strong> Las llamadas que mencionan resultados específicos de otros participantes tienen un 23% más de efectividad.
            </li>
            <li>
              <strong>Revisar proceso de seguimiento:</strong> El tiempo promedio de seguimiento es de 7 días, reducirlo a 3-4 días podría aumentar la tasa de conversión.
            </li>
          </ul>
          
          <h4 style={{ marginTop: '2rem' }}>Riesgos Identificados</h4>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
            <li>
              <strong>Tasa de respuesta por debajo del objetivo:</strong> Actual 65% vs objetivo 70%. Necesario revisar estrategia de contacto inicial.
            </li>
            <li>
              <strong>Desequilibrio regional:</strong> Concentración excesiva en regiones del Este, necesario expandir esfuerzos a regiones del Oeste y Centro.
            </li>
            <li>
              <strong>Llamadas diarias por debajo del objetivo:</strong> Promedio actual de 36 vs objetivo de 40. Evaluar eficiencia y distribución de tiempo.
            </li>
          </ul>
        </div>
      </MetricSection>
    </Container>
  );
};
