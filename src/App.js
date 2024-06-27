import React from "react";
import "./App.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="AvatarImage/Avatar.jpg" alt="Avatar-image" />
  );
}
function Intro() {
  return (
    <div>
      <h1>Manas Choudhary</h1>
      <p>
        Passionate and skilled web developer with experience in designing,
        developing, and maintaining websites and web applications.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div>
      <Skill skill="React" emoji="😛" color="#1E90FF" />
      <Skill skill="Node" emoji="😒" color="#006400" />
      <Skill skill="Express" emoji="😉" color="#F0FFFF" />
      <Skill skill="Mongo" emoji="🙃" color="#7FFF00" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
