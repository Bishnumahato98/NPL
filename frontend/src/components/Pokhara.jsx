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
const Pokhara = () => {
    // Data for Batters, All-Rounders, and Bowlers
    const batters = [
        { name: 'Kushal Bhurtel  (C)' },
        { name: 'Trit Raj Das' },
        { name: 'Andries Gous', icon: true },
        { name: 'Kiran Thagunna' },
        { name: 'Dilip Nath  (WK)' },
    ];
    
    const allRounders = [
        { name: 'Sunam Gautam' },
        { name: 'Narayan Joshi' },
        { name: 'Bipin Khatri' },
        { name: 'Amrit Gurung' },
        { name: 'Bas de Leede', icon: true },
        { name: 'Michael Leask', icon: true },
        { name: 'Matt Critchley', icon: true },
    ];
    
    const bowlers = [
        { name: 'Sagar Dhakal' },
        { name: 'Dinesh Kharel' },
        { name: 'Aakash Chand' },
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

export default Pokhara;