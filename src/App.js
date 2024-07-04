import React from "react";
import "./App.css";

const skill = [
  {
    skill: "React",
    level: "beginner",
    color: "#85C1E9",
  },
  {
    skill: "Node",
    level: "intermediate",
    color: "#76D7C4",
  },
  {
    skill: "Express",
    level: "intermediate",
    color: "#85929E",
  },
  {
    skill: "MongoDB",
    level: "intermediate",
    color: "#28B463",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#F7DC6F",
  },
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#D2B4DE",
  },
];

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
    <img className="avatar" src="AvatarImage/Avatar.jpeg" alt="Avatar-image" />
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
      {skill.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "🙆🏽‍♂️"}
        {level === "advanced" && "🧔🏽"}
      </span>
    </div>
  );
}

export default App;
