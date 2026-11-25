import Home from "./Home";


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
      <h1>This is the App Component</h1>
      <h2>JS File</h2>
      <Home />
      <Data obj="SECE College" />
      <Players obj1={players_data} />
    </div>
  );
}



export default App;
