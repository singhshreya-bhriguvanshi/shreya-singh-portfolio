// import React from 'react';
// import Experience from './experience';
// import './experiences.css'; // Make sure to create a separate CSS for experience section
// import ExperienceIcon1 from './Images/hcl.png'; // Example icons for experience
// import ExperienceIcon2 from './Images/infosys.png'; 
// import ExperienceIcon3 from './Images/pragati.png'; 

// const Experience = props => {
//   return (
//     <section id="experience">
//       <div className="experience-container">
//         <div className="heading">
//           <h3 className="title">My Experience</h3>
//           <p className="separator" />
//           <p className="subtitle">
//             Here's a list of the experiences and roles I've taken on.
//           </p>
//         </div>
//         <div className="experience-wrapper">
//           <div className="experience-item">
//             <img src={ExperienceIcon1} alt="Role Icon 1" />
//             <div className="experience-details">
//               <h4>AI/ML Mentor</h4>
//               <small>Department AI Club | 2024 - Present</small>
//               <p>
//                 Led AI/ML mentoring sessions for students, providing guidance on real-world applications and projects. Organized large-scale events with over 600 participants, helping enhance the knowledge of over 200 students.
//               </p>
//             </div>
//           </div>

//           <div className="experience-item">
//             <img src={ExperienceIcon2} alt="Role Icon 2" />
//             <div className="experience-details">
//               <h4>Project Lead - SMS Spam Detector</h4>
//               <small>Personal Project | 2024</small>
//               <p>
//                 Led the development of an SMS spam detection system using BERT. Deployed the model and created a seamless interface using Python and Gradio to help users filter spam messages effectively.
//               </p>
//             </div>
//           </div>

//           <div className="experience-item">
//             <img src={ExperienceIcon3} alt="Role Icon 3" />
//             <div className="experience-details">
//               <h4>Event Manager</h4>
//               <small>AI/ML Department Event | 2024</small>
//               <p>
//                 Managed and coordinated all aspects of an AI/ML event attended by over 600 people. Took charge of speaker coordination, logistics, and planning to ensure smooth execution.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from 'react';
import Experience from './experience';
import './experiences.css';
import Rentalhub from './Images/hcl.png';
import FreshFruitHub  from './Images/infosys.png';
import Rentify  from './Images/pragati.png';
// import infosys  from './Images/infosys.png';
// import hcl  from './Images/hcl.png';
// import pragati  from './Images/pragati.png';

const Experiences = props => {
  return (
    <section id="experiences">
      <div className="experiences-container">
        <div className="heading">
          <h3 className="title">My Experiences</h3>
          <p className="separator" />
          <p className="subtitle">
          Here's a list of the experiences and roles I've taken on.
          </p>
        </div>
        <div className="experiences-wrapper">
         

          
          <Experience
            title="Infosys Sprinboard Internship"
            img={FreshFruitHub}
            tech=""
            // link="https://fresh-fruit-hub.onrender.com/"
            // repo="https://github.com/MIHIR2006/Fruit-hub"
          >
            <small style={{ color: 'white' }}>
            AI/ML Internship.
            </small>
            <p>
            "At Infosys, I gained hands-on experience in software development and AI/ML applications. I worked on industry-level projects, enhancing my coding and problem-solving skills. As part of my learning, I built a language translator using MarianMTModel and MarianTokenizer, enabling accurate English-French translations. This project highlights my expertise in NLP and model deployment."
            </p>
          </Experience>

          <Experience
            title="HCL Tech Internship"
            img={Rentalhub}
            tech=""
            link="https://singhshreya-bhriguvanshi.github.io/Mini-Project/current/index.html"
            repo="https://github.com/singhshreya-bhriguvanshi/Mini-Project"
          >
            <small>
            Data Analysis Internship.
            </small>
            <p>
            "As a data analysis intern at HCL, I work on real-world projects involving data-driven solutions, enhancing my analytical, problem-solving, and technical skills. Additionally, I am developing a TRAM data analysis project that integrates AI, automation, and analytics to optimize tram operations, showcasing my expertise in AI/ML and real-time data processing."
            </p>
          </Experience>

          
          <Experience
            title="Pragati Cohort 2 program"
            img={Rentify}
            tech=""
            link="https://github.com/singhshreya-bhriguvanshi/Spam-Detector"
            repo="https://github.com/singhshreya-bhriguvanshi/Spam-Detector"
          >
            <small>
            A 12 week program
            </small>
            <p>
            "Completed a 12-week program at Pragati Infosys, attending lectures on workplace ethics, database management systems (DBMS), and other essential industry topics. This program enhanced my understanding of professional conduct, data management, and best practices in the tech industry."
            </p>
          </Experience>
          
        </div>
        
         

          
          
          
        </div>
      {/* </div> */}
    </section>
  );
};

export default Experiences;


