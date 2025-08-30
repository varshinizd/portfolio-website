import "./SkillCard.css"
const SkillCard = ({ skillName, iconClass }) => {
  return (
    <div className="skill-card">
      <i className={`${iconClass} colored`}></i>
      <span>{skillName}</span>
    </div>
  );
};
export default SkillCard;