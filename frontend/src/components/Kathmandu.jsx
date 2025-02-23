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
const Kathmandu = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Bhim Sharki  (WK)' },
        { name: 'Dipak Bohara' },
        { name: 'Stevie Sean Eskinazi', icon: true },
        { name: 'Shankar Rana' },
        { name: 'Sumit Maharjan' },
        { name: 'Michael Levitt', icon: true },
    ];
    
    const allRounders = [
        { name: 'Karan KC  (C)' },
        { name: 'Raju Rizal' },
        { name: 'Pratik Shrestha' },
        { name: 'Dan Douthwaite', icon: true },
        { name: 'Gerhard Erasmus', icon: true },
    ];
    
    const bowlers = [
        { name: 'Shahab Alam' },
        { name: 'Rashid Khan' },
        { name: 'Krishna Karki' },
        { name: 'Dipesh Kandel' },
        { name: 'Nathan Sowter', icon: true },
    ];
    

    return (
        <div className="container">
            <Category title="Batters" players={batters} />
            <Category title="All-Rounders" players={allRounders} />
            <Category title="Bowlers" players={bowlers} />
        </div>
    );
};

export default Kathmandu;