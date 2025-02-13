// import React from 'react';

// // const Experience = (props) => {
// //   const icons = {
// //     python: 'fab fa-python',
// //     react: 'fab fa-react',
// //     node: 'fab fa-node',
// //     java: 'fab fa-java',
// //     html: 'fab fa-html5',
// //     css: 'fab fa-css3-alt',
// //     js: 'fab fa-js-square',
// //     mysql: 'fa-solid fa-database',
// //     aws: 'fab fa-aws',
// //     docker: 'fab fa-docker',
// //   };
// const Experience = props => {
//   const tech = {
//     sass: 'fab fa-sass',
//     css: 'fab fa-css3-alt',
//     js: 'fab fa-js-square',
//     react: 'fab fa-react',
//     vue: 'fab fa-vuejs',
//     d3: 'far fa-chart-bar',
//     node: 'fab fa-node',
//     python: 'fab fa-python',
//     mongo: 'fa-solid fa-database',
//     html: 'fab fa-html5'
//   };

//   const link = props.link || 'http://';
//   const repo = props.repo || 'http://';

//   return (
//     <div className="experience">
//       <div className="experience-link">
//         <div className="experience-title">
//           <p className="icons">
//             {props.tech.split(' ').map((t) => (
//               <i className={icons[t]} key={t} />
//             ))}
//           </p>
//           {props.title} - {props.company}
//         </div>
//         <div className="experience-duration">
//           <small>{props.duration}</small>
//         </div>
//         {props.children}
//         <div className="buttons">
//           {props.link && (
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               View Role <i className="fas fa-external-link-alt" />
//             </a>
//           )}
//           {props.repo && (
//             <a href={repo} target="_blank" rel="noopener noreferrer">
//               View Source <i className="fas fa-external-link-alt" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
import React from 'react';

const Experience = props => {
  const tech = {
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

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="experience">
      <a className="experience-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="experience-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="experience-details">
        <div className="experience-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        {/* <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
