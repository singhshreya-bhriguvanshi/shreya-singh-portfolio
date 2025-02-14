// import React from 'react';
// import Experience from './experience';
// import './experiences.css'; // Make sure to create a separate CSS for experience section
import ExperienceIcon1 from './Images/hcl.png'; // Example icons for experience
import ExperienceIcon2 from './Images/infosys.png'; 
import ExperienceIcon3 from './Images/pragati.png'; 
import ExperienceIcon4 from './Images/BB logo.png';

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

// Sample experience data
const experienceData = [
  {
    img: ExperienceIcon1,
    title: "HCL Tech Internship",
    tech: "python",
    // link: "https://example.com/sms-spam-detector",
    // repo: "https://github.com/your-repo/sms-spam-detector",
    duration: "Nov,2024 - Present",
    children: (
      <>
        <small>Data Analysis Internship. | Nov,2024 - Present</small>
        <p>
        "As a data analysis intern at HCL, I am developing a TRAM data analysis project that integrates AI, automation, and analytics to optimize traffic management operations, showcasing my expertise in AI/ML and real-time data processing."
        </p>
      </>
    ),
  },
  {
    img: ExperienceIcon4,
    title: "AI/ML Mentor",
    tech: "python react node",
    // link: "https://example.com/event-manager",
    // repo: "https://github.com/your-repo/event-manager",
    duration: "2024 - Present",
    children: (
      <>
        <small>AI/ML Department Event | 2024 - Present</small>
        <p>
        Mentored and guided students on AI/ML concepts, helping them develop practical skills and understanding. Contributed to the management of a college-level event with over 600 attendees. Taught and engaged 200 students during a 3-day event, providing hands-on learning experiences and interactive sessions on AI/ML.
        </p>
      </>
    ),
  },
  {
    img: ExperienceIcon3,
    title: "Pragati Cohort 2 program",
    tech: "python",
    // link: "https://example.com/mentor",
    // repo: "https://github.com/your-repo/mentor",
    duration: "Jul,2024 - Nov,2024",
    children: (
      <>
        <small>12 week program | Jul,2024 - Nov,2024</small>
        <p>
        "Completed a 12-week program at Pragati Infosys, attending lectures on workplace ethics, database management systems (DBMS), and other essential industry topics. This program enhanced my understanding of professional conduct, data management, and best practices in the tech industry."
        </p>
      </>
    ),
  },
  {
    img: ExperienceIcon2,
    title: "Infosys Sprinboard Internship",
    tech: "python",
    // link: "https://example.com/mentor",
    // repo: "https://github.com/your-repo/mentor",
    duration: "Oct,2024 - Dec,2024",
    children: (
      <>
        <small>AI/ML Internship | Oct,2024 - Dec,2024</small>
        <p>
        "At Infosys, I gained hands-on experience in software development and AI/ML applications. As part of my learning, I built a language translator using MarianMTModel, enabling accurate English-French translations. This project highlights my expertise in NLP and model deployment."
        </p>
      </>
    ),
  },
  // Add more experiences as needed
];

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="experiences-container">
        <div className="heading">
          <h3 className="title">My Experiences</h3>
          <p className="separator" />
          <p className="subtitle">
           
             {/* <br></br> */}
          </p>
        </div>
        <div className="experiences-wrapper">
          {experienceData.map((exp, index) => (
            <Experience
              key={index}
              img={exp.img}
              title={exp.title}
              tech={exp.tech}
              // link={exp.link}
              // repo={exp.repo}
              duration={exp.duration}
            >
              {exp.children}
            </Experience>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;


