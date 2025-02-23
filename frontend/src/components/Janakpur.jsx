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
const Janakpur = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Aasif Sheikh  (C,WK)' },
        { name: 'Anil Sah' },
        { name: 'Hemant Dhami' },
        { name: 'Sher Malla' },
        { name: 'Lahiru Milantha', icon: true },
    ];
    
    const allRounders = [
        { name: 'James Neesham', icon: true },
        { name: 'Mohammad Mohsin', icon: true },
        { name: 'Shubh Kansakar' },
    ];
    
    const bowlers = [
        { name: 'Lalit Rajbanshi' },
        { name: 'Kishore Mahato' },
        { name: 'Rupesh Singh' },
        { name: 'Arniko Yadav' },
        { name: 'Tul Bahadur Thapa' },
        { name: 'Joshua Tromp', icon: true },
    ];

    return (
        <div className="container">
            <Category title="Batters" players={batters} />
            <Category title="All-Rounders" players={allRounders} />
            <Category title="Bowlers" players={bowlers} />
        </div>
    );
};

export default Janakpur;






