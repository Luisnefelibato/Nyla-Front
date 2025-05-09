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

const SuccessMessage = styled.div`
  background-color: #e6f7e6;
  border-left: 3px solid #52c41a;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
`;

export const RecopilacionInformacion: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    estado: '',
    codigoPostal: '',
    telefono: '',
    email: '',
    sitioWeb: '',
    contactoPrincipal: '',
    notas: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Datos simulados para la tabla
  const instituciones = [
    {
      id: '1',
      nombre: 'Academia de Danza Moderna',
      ciudad: 'New York',
      estado: 'NY',
      telefono: '+1 (212) 555-1234',
      email: 'info@danzamoderna.com'
    },
    {
      id: '2',
      nombre: 'Escuela de Teatro Broadway Stars',
      ciudad: 'New York',
      estado: 'NY',
      telefono: '+1 (212) 555-5678',
      email: 'contact@broadwaystars.edu'
    },
    {
      id: '3',
      nombre: 'Instituto de Artes Esc茅nicas',
      ciudad: 'New York',
      estado: 'NY',
      telefono: '+1 (212) 555-9012',
      email: 'admissions@artsinstitute.org'
    },
    {
      id: '4',
      nombre: 'Elite Model Academy',
      ciudad: 'New York',
      estado: 'NY',
      telefono: '+1 (212) 555-3456',
      email: 'info@elitemodel.com'
    },
    {
      id: '5',
      nombre: 'Los Angeles School of Performing Arts',
      ciudad: 'Los Angeles',
      estado: 'CA',
      telefono: '+1 (323) 555-7890',
      email: 'info@laspa.edu'
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqu铆 ir铆a la l贸gica real de guardado
    console.log('Datos a guardar:', formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    // Limpiar formulario
    setFormData({
      nombre: '',
      direccion: '',
      ciudad: '',
      estado: '',
      codigoPostal: '',
      telefono: '',
      email: '',
      sitioWeb: '',
      contactoPrincipal: '',
      notas: ''
    });
  };
  
  return (
    <Container>
      <h2>Recopilaci贸n de Informaci贸n de Contacto</h2>
      <p style={{ marginBottom: '2rem' }}>
        Registra la informaci贸n detallada de las instituciones identificadas. Es importante
        capturar datos precisos y completos para facilitar el contacto en la siguiente fase.
      </p>
      
      <FormContainer>
        <h3>Ingresar Nueva Instituci贸n</h3>
        
        {showSuccess && (
          <SuccessMessage>
            La informaci贸n de la instituci贸n ha sido guardada correctamente.
          </SuccessMessage>
        )}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nombre">Nombre de la Instituci贸n</Label>
            <Input 
              id="nombre" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="direccion">Direcci贸n</Label>
            <Input 
              id="direccion" 
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="ciudad">Ciudad</Label>
              <Input 
                id="ciudad" 
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="estado">Estado</Label>
              <Input 
                id="estado" 
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="codigoPostal">C贸digo Postal</Label>
              <Input 
                id="codigoPostal" 
                name="codigoPostal"
                value={formData.codigoPostal}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="telefono">Tel茅fono</Label>
              <Input 
                id="telefono" 
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="sitioWeb">Sitio Web</Label>
              <Input 
                id="sitioWeb" 
                name="sitioWeb"
                value={formData.sitioWeb}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="contactoPrincipal">Contacto Principal</Label>
              <Input 
                id="contactoPrincipal" 
                name="contactoPrincipal"
                value={formData.contactoPrincipal}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label htmlFor="notas">Notas Adicionales</Label>
            <TextArea 
              id="notas" 
              name="notas"
              value={formData.notas}
              onChange={handleChange}
            />
          </FormGroup>
          
          <ButtonGroup>
            <Button type="submit">Guardar Instituci贸n</Button>
            <Button type="button" variant="outline">Cancelar</Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
      
      <h3>Instituciones Registradas</h3>
      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th>Ubicaci贸n</Th>
            <Th>Contacto</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {instituciones.map(institucion => (
            <tr key={institucion.id}>
              <Td>{institucion.nombre}</Td>
              <Td>{institucion.ciudad}, {institucion.estado}</Td>
              <Td>
                {institucion.telefono}<br />
                {institucion.email}
              </Td>
              <Td>
                <ActionButtons>
                  <ActionButton type="button">
                    <span role="img" aria-label="editar">鉁忥笍</span>
                  </ActionButton>
                  <ActionButton type="button">
                    <span role="img" aria-label="eliminar">矸戯笍</span>
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
