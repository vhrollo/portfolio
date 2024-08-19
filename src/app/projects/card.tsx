import { useState } from 'react';

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="card-grid-item">
      <div className="card-grid-image-container">
      	<img src={imageSrc} alt={title} className="card-grid-image" loading="lazy" />
			</div>
			<div className="card-grid-title">
        <div className="card-grid-title-bar">
          <div className="card-grid-title-content">
            <div className="card-grid-title-text">{title}</div>
          </div>
        </div>
      </div>
      <div className="card-grid-btn">
        <p className="card-grid-action" onClick={toggleDescription}>
          {isDescriptionVisible ? 'Less..' : 'More..'}
        </p>
      </div>
      {isDescriptionVisible && (
        <div className="card-grid-description">
          {description}
        </div>
      )}
    </div>
  );
};

export default Card;
