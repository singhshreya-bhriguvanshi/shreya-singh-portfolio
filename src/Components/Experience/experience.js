import React from 'react';

const Experience = props => {
  const techIcons = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node',
    python: 'fab fa-python',
    mongo: 'fa-solid fa-database',
    html: 'fab fa-html5'
  };

  const link = props.link || '#';
  const repo = props.repo || '#';

  return (
    <div className="experience">
      <a className="experience-link"  target="_blank" rel="noopener noreferrer">
        <img className="experience-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="experience-details">
        <div className="experience-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={techIcons[t]} key={t} />
            ))}
          </p>
          {props.title}
        </div>
        {props.children}
        {/* Uncomment and use the buttons if needed
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div> 
        */}
      </div>
    </div>
  );
};

export default Experience;
