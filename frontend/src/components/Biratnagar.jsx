import React from 'react';
import { FaPlane } from 'react-icons/fa'; // Importing plane icon from react-icons
import "../style/team.css"

// Functional component for each category (Batters, All-Rounders, Bowlers). 
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
const Biratnagar = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Lokesh Bam  (WK)' },
        { name: 'Dipak Bohara' },
        { name: 'Nicholas Kirton', icon: true },
        { name: 'Naren Bhatta' },
        { name: 'Mrinal Gurung' },
        { name: 'Martin Guptill', icon: true },
    ];

    const allRounders = [
        { name: 'Rajesh Pulami Magar' },
        { name: 'Jitendra Kumar Mukhiya' },
        { name: 'Pratish GC' },
        { name: 'Basir Ahmad' },
        { name: 'Aqib Ilyas', icon: true },
    ];

    const bowlers = [
        { name: 'Sandeep Lamichhanes  (C)' },
        { name: 'Subash Bhandari' },
        { name: 'Anil Kharel' },
        { name: 'Chris Sole', icon: true },
    ];

    return (
        <div className="container">
            <Category title="Batters" players={batters} />
            <Category title="All-Rounders" players={allRounders} />
            <Category title="Bowlers" players={bowlers} />
        </div>
    );
};

export default Biratnagar;

