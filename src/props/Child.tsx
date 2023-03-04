import React from 'react';

interface ChildProps {
  color: string;
  children?: React.ReactNode;
}

const Child: React.FC<ChildProps> = ({ color }): any => {
  return <div>{color}</div>;
};

export default Child;
