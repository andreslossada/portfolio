import React from 'react';
import '../project-card/project-card.css';
function DemoCard({ name, description, image, url }) {
  return (
    <figure className="snip0019 mb-3">
      <img src={image} />
      <figcaption>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <a href={url} alt={name} target="_blank"></a>
      </figcaption>
    </figure>
  );
}

export default DemoCard;
