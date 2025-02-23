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
const Suderpashim = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Dipendra Singh Airee  (C)' },
        { name: 'Binod Bhandari  (WK)' },
        { name: 'Kiran Thagunna' },
        { name: 'Dilip Nath  (WK)' },
    ];
    
    const allRounders = [
        { name: 'Md Aarif Sheikh' },
        { name: 'Amit Shrestha' },
        { name: 'Khadak Bahadur Bhoara' },
        { name: 'Waqas Ali', icon: true },
    ];
    
    const bowlers = [
        { name: 'Naresh Budhayer' },
        { name: 'Bhoj Raj Bhatta' },
        { name: 'Naren Saud' },
        { name: 'Abinash Bohara' },
        { name: 'Junaid Siddique', icon: true },
    ];

    return (
        <div className="container">
            <Category title="Batters" players={batters} />
            <Category title="All-Rounders" players={allRounders} />
            <Category title="Bowlers" players={bowlers} />
        </div>
    );
};

export default Suderpashim;