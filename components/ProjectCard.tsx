import React from 'react';
import { ProjectCardProps } from '@/types';

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  imageUrl 
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {imageUrl && <img src={imageUrl} alt={title} />}
        <div className="project-overlay">
          <button className="btn-view">View Project</button>
        </div>
      </div>
      <div className="project-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
