import React from 'react';
import noPoster from '../assets/img/no-poster.jpg';

const PosterImage = ({className, posterSrc, alt = ''}) => {
  const poster = posterSrc !== 'N/A' ? posterSrc : noPoster;

  function onImageError(e) {
    e.target.onerror = null;
    e.target.src = noPoster;
  }

  return (
    <img
      className={className}
      src={poster}
      onError={(e) => onImageError(e)}
      alt={alt}
    />
  );
};

export default PosterImage;
