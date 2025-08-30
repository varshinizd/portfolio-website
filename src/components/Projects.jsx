import ProjectCard from "./ProjectCard";
import "./Projects.css";
import study_chatbot from "../assets/study_chatbot.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import notes_app from "../assets/notes_app.jpg";
import personal_portfolio from "../assets/personal_portfolio.jpg";
const Projects = () => {
  const projectList = [
    {
        title: "Study Chatbot",
        description: "Developed a study-focused chatbot that answers questions strictly from uploaded files, functioning like a RAG(Retrieval-Augmented Generation) system by retrieving relevant content to generate responses. Managed off-topic messages with predefined responses like “Let’s study” to maintain focus and enhance user experience. Built a RESTful backend returning JSON responses from the Gemini API, integrated with a responsive HTML, CSS,and JavaScript frontend.",
        techstack: "Spring Boot, HTML, CSS",
        image: study_chatbot,
        github: "https://github.com/varshinizd/gemini_study_partner",
        demo: null, // no live demo
    },
    {
        title: "E-Commerce",
        description: "Designed and developed a role-based e-commerce platform with separate admin and customer workflows. Implemented secure OTP-based signup and password recovery using JavaMail API to enhance account safety. Applied MVC architecture with DAO pattern to ensure modular and maintainable backend code. Enhanced user experience through JavaScript-based form validation and interactive UI elements.",
        techstack: "Java, Servlet, JSP, MySQL, JavaScript",
        image: ecommerce,
        github: "https://github.com/varshinizd/crop_recommendation_system",
    },
    {
        title: "Notes App",
        description: "Built a secure notes web application with session-based login and authentication, allowing users to safely access their notes with credentials from any system. Implemented dynamic mood-based color coding by detecting sentiment keywords in notes, enhancing personalization and overall user experience.",
        techstack: "Java, Servlet, JSP, MySQL",
        image: notes_app,
        github: "https://github.com/varshinizd/notes_web_app"
    },
        {
        title: "Portfolio Website",
        description: "Developed a responsive portfolio website to showcase projects and skills. Implemented interactive UI elements and animations for enhanced user experience. Deployed the application with a clean and professional layout.",
        techstack: "React, CSS",
        image: personal_portfolio,
        demo: "https://portfolio-website-teal-theta-86.vercel.app/",
        github: "https://github.com/username/portfolio"
    }
  ];

  return (
    <section id="projects">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
