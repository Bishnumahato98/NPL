import React from 'react';
import { FaPlane } from 'react-icons/fa'; // Importing plane icon from react-icons
import "../style/team.css"

// Functional component for each category (Batters, All-Rounders, Bowlers)
const Category = ({ title, players }) => {
    return (
        <div className="category">
            <h2>{title}</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.icon && <FaPlane className="icon" />} {/* Render icon if present */}
                        {player.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Main App Component
const Karnali = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Rit Gautam' },
        { name: 'Dipendra Rawat' },
        { name: 'Shikhar Dhawan', icon: true },
        { name: 'Babar Hayat', icon: true },
        { name: 'Unish Bikram Singh Thakuri' },
        { name: 'Arjun Gharti' },
        { name: 'Dev Khanal' },
    ];
    
    const allRounders = [
        { name: 'Sompal Kami  (C)' },
        { name: 'Gulshan Kumar Jha' },
        { name: 'Chadwick Walton  (WK)', icon: true },
        { name: 'Hussain Talat', icon: true },
    ];
    
    const bowlers = [
        { name: 'Mausam Dhakal' },
        { name: 'Bhuvan Karki' },
        { name: 'Nandan Yadav' },
        { name: 'Dipak Dumre' },
        { name: 'Raymon Reifer', icon: true },
    ];
    

    return (
        <div className="container">
            <Category title="Batters" players={batters} />
            <Category title="All-Rounders" players={allRounders} />
            <Category title="Bowlers" players={bowlers} />
        </div>
    );
};

export default Karnali;