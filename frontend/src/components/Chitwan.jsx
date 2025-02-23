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
const Chitwan = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Kushal Malla  (C)' },
        { name: 'Sharad Vesawkar  (WK)' },
        { name: 'Hassan Eisakhil', icon: true },
        { name: 'Bipin Rawal' },
        { name: 'Santosh Karki' },
    ];
    
    const allRounders = [
        { name: 'Deepak Bohara' },
        { name: 'Amar Singh Rautela' },
        { name: 'Ravi Bopara', icon: true },
        { name: 'Jan Nicol Loftie-Eaton', icon: true },
        { name: 'Luc Benkenstein', icon: true },
    ];
    
    const bowlers = [
        { name: 'Gautam KC' },
        { name: 'Ranjeet Kumar' },
        { name: 'Dipesh Shrestha' },
        { name: 'Kamal Singh Airee' },
        { name: 'Rijan Dhakal' },
        { name: 'Marchant de Lange', icon: true },
    ];
    

    return (
        <div className="container">
            <Category title="Batters" players={batters} />
            <Category title="All-Rounders" players={allRounders} />
            <Category title="Bowlers" players={bowlers} />
        </div>
    );
};

export default Chitwan;