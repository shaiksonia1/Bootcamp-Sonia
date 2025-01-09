import React from 'react';

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
