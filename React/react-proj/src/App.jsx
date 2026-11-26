import Home from "./Home";
import Counter from "./Hooks/UseState/Counter";
import Score from "./Hooks/UseState/Score";
import Run from "./Hooks/UseState/Run";

function Data(props) {
  return (
    <div>
      <h1>Welcome to {props.obj}</h1>
    </div>
  );
}

function Players(data) {
  return (
    <div>
      <h2>List of Players</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {data.obj1.map((player, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">{player.name}</h3>
            <p className="card-text">Team: {player.Team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {

  let players_data = [{
    name: "Virat Kohli",
    Team: "India",
  },
  {
    name: "Rohit Sharma",
    Team: "India",
  },
  {
  name: "MS Dhoni",
  Team: "India",
}
]
  return (
    <div>
      <h1>Cricket Score Board</h1>
      <Counter /><Data obj="INDIA" />
      <Players obj1={players_data} />
      <Run />
      <Score />
    </div>
  );
}





export default App;
