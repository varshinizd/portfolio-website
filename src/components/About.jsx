import './About.css';
import bgImage from '../assets/pattern.jpg'; // 👈 import image
import myPhoto from '../assets/myimage.jpg';
const About = () => {
  return (
    <section className="hero" id="about">
      {/* Background div with inline style */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            Hi there, I'm
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Varshini D</span>
          </h1>
          <h2 className="hero-subtitle">Aspiring Software Developer</h2>
          <p className="hero-description">
            I am an aspiring software developer passionate about building dynamic web applications and exploring emerging technologies.
            I focus on creating end-to-end solutions that bring ideas to life while continuously learning and improving.
          </p>
          <div className="hero-buttons">
            <a className="mywork-btn-about" href="#projects">View My Work<i class="fa fa-arrow-down"></i>
            </a>
            <a href="/Varshini_D_Resume.pdf" download className="my-download-btn">My Resume<i class="fa fa-download"></i>
            </a>
          </div>

        </div>

        <div className="hero-image">
            <div className="circle-wrapper">
              <img src={myPhoto} alt="Varshini" className="profile-pic"/>
              <span className="circle circle1"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
