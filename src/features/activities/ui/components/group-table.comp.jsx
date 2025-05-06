import React from "react";

function GroupTable() {
    const rowsInTableOfGroups = [
        {
          position: 1,
          team: "21-2",
          gamesPlayed: 5,
          wins: 3,
          draws: 1,
          losses: 1,
          goalsFor: 20,
          goalsAgainst: 16,
          points: 200,
        },
        {
          position: 2,
          team: "21-1",
          gamesPlayed: 5,
          wins: 3,
          draws: 1,
          losses: 1,
          goalsFor: 20,
          goalsAgainst: 16,
          points: 200,
        },
        {
          position: 3,
          team: "22-1",
          gamesPlayed: 5,
          wins: 3,
          draws: 1,
          losses: 1,
          goalsFor: 20,
          goalsAgainst: 16,
          points: 200,
        },
        {
          position: 4,
          team: "22-2",
          gamesPlayed: 5,
          wins: 3,
          draws: 1,
          losses: 1,
          goalsFor: 20,
          goalsAgainst: 16,
          points: 200,
        },
      ];
  return (
    <div className="grid grid-cols-11 bg-black  gap-y-6 text-center  text-xs rounded-4xl overflow-hidden pb-4 ">
      <div className="col-span-11 grid grid-cols-11 gap-2 gap-y-6 bg-gradient-to-r from-secondary to-black  px-4 py-4 justify-items-center">
        <div>POS</div>
        <div className="col-span-3">Equipo</div>
        <div>PJ</div>
        <div>V</div>
        <div>D</div>
        <div>E</div>
        <div>PF</div>
        <div>PC</div>
        <div>PTS</div>
      </div>
      {rowsInTableOfGroups.map((row, index) => (
        <div
          key={index}
          className="col-span-11 grid grid-cols-11 gap-2 gap-y-6 text-center px-4 items-center "
        >
          <div>{row.position}</div>
          <div className="col-span-3 flex items-center gap-x-2 justify-center">
            <img src="/teams/21-2.png" alt="" className="w-5 md:w-7 rounded-xl" />
            <div>{row.team}</div>
          </div>
          <div>{row.gamesPlayed}</div>
          <div>{row.wins}</div>
          <div>{row.draws}</div>
          <div>{row.losses}</div>
          <div>{row.goalsFor}</div>
          <div>{row.goalsAgainst}</div>
          <div>{row.points}</div>
        </div>
      ))}
    </div>
  );
}

export default GroupTable;
