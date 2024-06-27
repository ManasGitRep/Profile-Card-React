import "./App.css";

function App() {
  return;

  <div className="card">
    <Avatar />
    <div className="data">
      <Intro />

      <SkillList />
    </div>
  </div>;
}

function Avatar() {
  return <img className="avatar" src="Sanji.jpg" alt="Manas Choudhary" />;
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
    <div className="skill-list" style={{ backgroundColor: props.color }}>
      <span>{Props.skill}</span>
      <span>{Props.emoji}</span>
    </div>
  );
}

export default App;
