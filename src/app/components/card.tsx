import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CardProps {
  title: string;
  imageSrc: Array<string>;
  link?: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, link, description }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [rightvisable , setRightVisable] = useState<boolean>(false);
  const [leftvisable , setLeftVisable] = useState<boolean>(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const nextImage = () => {
    if (currentImage < imageSrc.length - 1) {
      setCurrentImage(currentImage + 1);
      setLeftVisable(true);
      if (currentImage + 1 === imageSrc.length - 1) {
        setRightVisable(false);
      }
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
      setRightVisable(true);
      if (currentImage - 1 === 0) {
        setLeftVisable(false);
      }
    }
  };

  useEffect(() => {
    if (imageSrc.length > 1) {
      setRightVisable(true);
    }
  }, [imageSrc.length]);


  return (
    <div className="card-grid-item">
      <div className="card-grid-image-container">
        {link ? (
          <Link href={link} target='_blank'>
            <img src={imageSrc[currentImage]} alt={title} className="card-grid-image" loading="lazy" />
          </Link>
        ) : (
          <img src={imageSrc[currentImage]} alt={title} className="card-grid-image" loading="lazy" />
        )}
        <img src='./icons/arrow.png' alt='right arrow' loading='lazy' onClick={nextImage}
          className={`card-grid-btn-text card-grid-next ${rightvisable === false ? 'hide' : ''}`}/>
        <img src='./icons/arrow.png' alt='left arrow' loading='lazy' onClick={prevImage} 
          className={`card-grid-btn-text card-grid-prev ${leftvisable === false ? 'hide' : ''}`}/>
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
      <div className={`card-grid-description ${isDescriptionVisible ? 'visible' : ''}`}>
        {description}
      </div>
    </div>
  );
};

export default Card;
