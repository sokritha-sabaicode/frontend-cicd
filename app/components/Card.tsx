import React from 'react';

interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => (
  <div className="border border-red-300 rounded-lg p-4 shadow-md max-w-sm">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="mb-4">{content}</p>
    {footer && (
      <div className="border-t border-gray-300 pt-2 mt-4">{footer}</div>
    )}
  </div>
);

export default Card;
