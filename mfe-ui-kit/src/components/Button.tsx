import React from 'react';

// Butonumuzun alacağı props'lar için tip tanımı
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// Paylaşılan Buton bileşenimiz
export const Button = ({ children, ...props }: ButtonProps) => {
  const style: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};