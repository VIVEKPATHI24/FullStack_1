import react, { useState ,useEffect} from "react";
import axios from "axios";

export const ArrayObjects = () => {
  const [playerList, setPlayerList] = useState([]);
  const [player, setPlayer] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [playerAge, setPlayerAge] = useState("");
  const [playerFranchise, setPlayerFranchise] = useState("");

  useEffect(()=>{
    console.log("hi")
  },[])

  function handleAddPlayer() {
    const addPlayerToList = {
      a: player,
      b: playerTeam,
      c: playerAge,
      d: playerFranchise,
    };
    setPlayerList(p => [...p, addPlayerToList]);
    // axios.post("http://localhost:8000/getData",playerList)
    // .then((res)=>console.log("success",res))
    // .catch((err)=>console.log('error'))
  }

  function handleRemovePlayer(index) {}

  function handleNewPlayer(event) {
    setPlayer(event.target.value);
  }

  function handlePlayerTeam(event) {
    setPlayerTeam(event.target.value);
  }

  function handlePlayerAge(event) {
    setPlayerAge(event.target.value);
  }

  function handlePlayerFranchise(event) {
    setPlayerFranchise(event.target.value);
  }

  const render = <div>
    {playerList.map((person, index) => {
          return (<li key={index}>
            {person.a} <br/>
            {person.b} <br/>
            {person.c} <br/>
            {person.d} <br/>
          </li>)
        })}
  </div>

  return (
    <div>
      <h2>list of players present</h2>
      <ul>
        {render}
      </ul>

      <input
        type="text"
        value={player}
        placeholder="enter player name"
        onChange={handleNewPlayer}
      />
      <input
        type="text"
        value={playerTeam}
        placeholder="enter player team"
        onChange={handlePlayerTeam}
      />
      <input
        type="number"
        value={playerAge}
        placeholder="enter player age"
        onChange={handlePlayerAge}
      />
      <input
        type="text"
        value={playerFranchise}
        placeholder="enter player franchise"
        onChange={handlePlayerFranchise}
      />
      <button onClick={()=>handleAddPlayer()}>Add Player</button>
    </div>
  );
};
