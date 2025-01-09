import React from 'react';

interface CardProps {
  message: string;
  className: string;
}

const Card: React.FC<CardProps> = ({ message, className }) => {
  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  );
};

export default Card;
