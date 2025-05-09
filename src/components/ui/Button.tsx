import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{
  variant: string;
  size: string;
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  ${({ variant }) => 
    variant === 'primary' && `
      background-color: var(--primary);
      color: white;
      
      &:hover:not(:disabled) {
        background-color: #ff5252;
      }
    `}
  
  ${({ variant }) => 
    variant === 'secondary' && `
      background-color: var(--secondary);
      color: white;
      
      &:hover:not(:disabled) {
        background-color: #3dbdb5;
      }
    `}
  
  ${({ variant }) => 
    variant === 'outline' && `
      background-color: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
      
      &:hover:not(:disabled) {
        background-color: var(--primary);
        color: white;
      }
    `}
  
  ${({ size }) => 
    size === 'small' && `
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `}
  
  ${({ size }) => 
    size === 'medium' && `
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `}
  
  ${({ size }) => 
    size === 'large' && `
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `}
  
  ${({ fullWidth }) => 
    fullWidth && `
      width: 100%;
    `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;