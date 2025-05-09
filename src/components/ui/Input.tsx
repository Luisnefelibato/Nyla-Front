import React from 'react';
import styled from 'styled-components';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const InputLabel = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ hasError }) => hasError ? 'var(--error)' : 'var(--gray)'};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ hasError }) => hasError ? 'var(--error)' : 'var(--primary)'};
    box-shadow: 0 0 0 2px ${({ hasError }) => hasError ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)'};
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: var(--error);
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  name,
  id,
  disabled = false,
}) => {
  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={id}>
          {label} {required && <span style={{ color: 'var(--error)' }}>*</span>}
        </InputLabel>
      )}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasError={!!error}
        required={required}
        disabled={disabled}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
