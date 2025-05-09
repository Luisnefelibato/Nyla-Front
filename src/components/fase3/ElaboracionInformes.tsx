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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const TemplateSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TemplateOption = styled.div<{ selected: boolean }>`
  padding: 1rem;
  border: 2px solid ${({ selected }) => selected ? 'var(--primary)' : 'var(--light-gray)'};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => selected ? 'var(--primary-light)' : 'white'};
  text-align: center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--primary);
    background-color: ${({ selected }) => selected ? 'var(--primary-light)' : 'var(--light)'};
  }
`;

const TemplateTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
`;

const TemplateDescription = styled.p`
  font-size: 0.75rem;
  color: var(--dark-gray);
`;

export const ElaboracionInformes: React.FC = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: 'semanal',
    fechaInicio: '',
    fechaFin: '',
    destinatarios: '',
    contenido: '',
    template: 'general'
  });
  
  // Plantillas de informes
  const templates = [
    {
      id: 'general',
      titulo: 'Informe General',
      descripcion: 'Resumen completo de actividades, resultados y estadísticas'
    },
    {
      id: 'llamadas',
      titulo: 'Informe de Llamadas',
      descripcion: 'Enfocado en métricas y resultados de llamadas realizadas'
    },
    {
      id: 'interesados',
      titulo: 'Reporte de Interesados',
      descripcion: 'Detalle de instituciones interesadas y próximos pasos'
    },
    {
      id: 'seguimiento',
      titulo: 'Plan de Seguimiento',
      descripcion: 'Calendario y estrategia para seguimientos pendientes'
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleTemplateSelect = (templateId: string) => {
    setFormData({
      ...formData,
      template: templateId
    });
    
    // En una implementación real, aquí se actualizaría el contenido
    // del informe según la plantilla seleccionada
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de generación de informes
    console.log('Informe a generar:', formData);
  };
  
  return (
    <Container>
      <h3>Generar Nuevo Informe</h3>
      
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="titulo">Título del Informe</Label>
            <Input 
              id="titulo" 
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ej: Informe Semanal de Actividades - Semana 20"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="tipo">Tipo de Informe</Label>
            <Select 
              id="tipo" 
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="diario">Diario</option>
              <option value="semanal">Semanal</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
              <option value="personalizado">Personalizado</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Período</Label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <Label htmlFor="fechaInicio" style={{ fontSize: '0.875rem' }}>Fecha Inicial</Label>
                <Input 
                  id="fechaInicio" 
                  name="fechaInicio"
                  type="date"
                  value={formData.fechaInicio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fechaFin" style={{ fontSize: '0.875rem' }}>Fecha Final</Label>
                <Input 
                  id="fechaFin" 
                  name="fechaFin"
                  type="date"
                  value={formData.fechaFin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="destinatarios">Destinatarios (separados por coma)</Label>
            <Input 
              id="destinatarios" 
              name="destinatarios"
              value={formData.destinatarios}
              onChange={handleChange}
              placeholder="Ej: naila@example.com, equipo@example.com"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Plantilla</Label>
            <TemplateSelector>
              {templates.map(template => (
                <TemplateOption 
                  key={template.id}
                  selected={formData.template === template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                >
                  <TemplateTitle>{template.titulo}</TemplateTitle>
                  <TemplateDescription>{template.descripcion}</TemplateDescription>
                </TemplateOption>
              ))}
            </TemplateSelector>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="contenido">Contenido Adicional</Label>
            <TextArea 
              id="contenido" 
              name="contenido"
              value={formData.contenido}
              onChange={handleChange}
              placeholder="Notas adicionales para incluir en el informe..."
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="submit">Generar Informe</Button>
            <Button type="button" variant="outline">Vista Previa</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </Container>
  );
};
