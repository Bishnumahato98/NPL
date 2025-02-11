import React from 'react';
import "../style/status.css"

const Status = () => {
    return (
        <div className="stats-menu">
            <div className="category">
                <div className="category-header">Batting</div>
                <ul>
                    <li>Most Runs</li>
                    <li>Highest Scores</li>
                    <li>Best Batting Average</li>
                    <li>Best Batting Strike Rate</li>
                    <li>Most Hundreds</li>
                    <li>Most Fifties</li>
                    <li>Most Fours</li>
                    <li>Most Sixes</li>
                    <li>Most Nineties</li>
                </ul>
            </div>
            <div className="category">
                <div className="category-header">Bowling</div>
                <ul>
                    <li>Most Wickets</li>
                    <li>Best Bowling Average</li>
                    <li>Best Bowling</li>
                    <li>Most 5 Wickets Haul</li>
                    <li>Best Economy</li>
                    <li>Best Bowling Strike Rate</li>
                </ul>
            </div>
        </div>
    );
};

export default Status;