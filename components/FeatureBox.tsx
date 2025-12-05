import React from 'react';
import { FeatureBoxProps } from '@/types';

export const FeatureBox: React.FC<FeatureBoxProps> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="feature-box">
      <div className="feature-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
