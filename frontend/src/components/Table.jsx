import React from 'react';
import "../style/table.css"

const Table = () => {
  const teams = [
    { team: 'Sudurpaschim Royals', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Janakpur Bolts', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Kathmandu Gurkhas', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Lumbini Lions', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Karnali Yaks', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Biratnagar Kings', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Pokhara Avengers', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
    { team: 'Chitwan Tigers', mat: 0, won: 0, lost: 0, tied: 0, nr: 0, pts: 0, nrr: 0 },
  ];

  return (
    <div className="table-container">
      <h1>Points Table</h1>
      <table className="points-table">
        <thead>
          <tr>
            <th>Teams</th>
            <th>Match</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NR</th>
            <th>Pts</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.team}</td>
              <td>{team.mat}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.tied}</td>
              <td>{team.nr}</td>
              <td>{team.pts}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
