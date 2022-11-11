import React, { useState, useEffect } from "react";
import socket from "../Hooks/WebsocketHook";
import { /*getData,*/ postData } from "../ApiHelper";

function Game() {
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    socket.on("connection", () => {
      console.log("socket open");
    });

    socket.on("create_team", (team) => {
      const teamList = document.getElementById("teamList");
      const item = document.createElement("h4");
      item.textContent = team;
      teamList ? teamList.appendChild(item) : null;
    });

    return () => {
      socket.off("connection");
      socket.off("create_team");
    };
  }, []);

  const createTeam = (e: React.FormEvent) => {
    e.preventDefault();
    teamName ? socket.emit("create_team", teamName) : null;
    teamName
      ? postData("/teams", { teamName: teamName.toString() })
      : console.log("error: no team name");
  };

  return (
    <div>
      <form id="createTeam" onSubmit={createTeam}>
        <input
          type="text"
          name="teamName"
          placeholder="Enter Team Name"
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button type="submit">Create Team</button>
      </form>
      <div id="teamList" />
    </div>
  );
}

export default Game;
