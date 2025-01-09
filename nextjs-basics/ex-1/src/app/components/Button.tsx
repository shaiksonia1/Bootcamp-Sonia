import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; 
  className: string;
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ onClick, type = "button", className, children }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
