import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link } from 'react-router-dom';

function Game() {
  const {gameId}=useParams()
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        setPlayer(res.data);
      })
      .catch((err) => console.log(err.response));
  }, [players]);
  const ChangeGameStatus = (id, newStatus) => {
    const newdata={}
    if(gameId==="1"){
      newdata.gameOneStatus = newStatus;
    }
    else if(gameId==="2"){
      newdata.gameTwoStatus = newStatus;
    }
    else{
      newdata.gameThreeStatus = newStatus;
    }
    console.log(newdata)
    axios.put(`http://localhost:5000/api/players/${id}`,newdata )
      .catch((err) => console.log(err.response));
  };
  
  return (
    <div>
      <h1> Player status - {gameId}</h1>
      <div>
        <Link to={'/game/1'}>Game 1</Link>
        <Link to={'/game/2'}>Game 2</Link>
        <Link to={'/game/3'}>Game 3</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {/*GAME 1*/}
        {gameId === "1" ? (
            players.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>
                    <button className={`${player.gameOneStatus === "Playing"
                        ? "greenbtn"
                        : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Playing",player)
                      }>Playing</button>
                    <button
                      className={`${player.gameOneStatus === "Not Playing"
                        ? "redbtn"
                        : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Not Playing")
                      }
                    >Not Playing</button>
                    <button
                      className={`${player.gameOneStatus === "Undecided"? 
                      "yellowbtn"
                      : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Undecided")
                      }
                    >Undecided</button>
                  </td>
                </tr>
              );
            })
          ) : (
            null
          )}
          
          
          
        {/*GAME 2*/}
        {gameId === "2" ? (
            players.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>
                    <button className={`${player.gameTwoStatus === "Playing"
                        ? "greenbtn"
                        : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Playing",player)
                      }>Playing</button>
                    <button
                      className={`${player.gameTwoStatus === "Not Playing"
                        ? "redbtn"
                        : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Not Playing")
                      }
                    >Not Playing</button>
                    <button
                      className={`${player.gameTwoStatus === "Undecided"? 
                      "yellowbtn"
                      : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Undecided")
                      }
                    >Undecided</button>
                  </td>
                </tr>
              );
            })
          ) : (
            null
          )}

        
        
        
        
        {/*GAME 3*/}

        {gameId === "3" ? (
            players.map((player, index) => {
              return (
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td>
                    <button className={`${player.gameThreeStatus === "Playing"
                        ? "greenbtn"
                        : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Playing",player)
                      }>Playing</button>
                    <button
                      className={`${player.gameThreeStatus === "Not Playing"
                        ? "redbtn"
                        : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Not Playing")
                      }
                    >Not Playing</button>
                    <button
                      className={`${player.gameThreeStatus === "Undecided"? 
                      "yellowbtn"
                      : ""
                      }`}
                      onClick={() =>
                        ChangeGameStatus(player._id, "Undecided")
                      }
                    >Undecided</button>
                  </td>
                </tr>
              );
            })
          ) : (
            null
          )}

        </tbody>
      </table>
    </div>
  )
}

export default Game