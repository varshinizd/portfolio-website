import SkillCard from "./SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="Skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-gradient">
        <div className="skills-box">
          <SkillCard skillName="HTML" iconClass="devicon-html5-plain colored" />
          <SkillCard skillName="CSS" iconClass="devicon-css3-plain colored" />
          <SkillCard skillName="JavaScript" iconClass="devicon-javascript-plain colored" />
          <SkillCard skillName="React" iconClass="devicon-react-original colored" />
          <SkillCard skillName="Java" iconClass="devicon-java-plain colored" />
          <SkillCard skillName="Spring Boot" iconClass="devicon-spring-plain colored" />
          <SkillCard skillName="Python" iconClass="devicon-python-plain colored" />
          <SkillCard skillName="MySQL" iconClass="devicon-mysql-plain colored" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
