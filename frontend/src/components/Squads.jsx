import React from 'react';
import "../style/squads.css"

const Squads = () => {
    const teams = [
        { name: 'Biratnagar Kings', link: 'biratnagar.html' },
        { name: 'Janakpur Bolts', link: 'janakpur.html' },
        { name: 'Kathmandu Gurkhas', link: 'ktm.html' },
        { name: 'Pokhara Avengers', link: 'pokhara.html' },
        { name: 'Lumbini Lions', link: 'lumbini.html' },
        { name: 'Chitwan Rhinos', link: 'chitwan.html' },
        { name: 'Karnali Yaks', link: 'karnali.html' },
        { name: 'Sudurpaschim Royals', link: 'suderpaschim.html' },
    ];

    return (
        <div className="containers">
            <div className="under_container">Squads</div>
            {teams.map((team, index) => (
                <div className="one" key={index}>
                    <a href={team.link}>{team.name}</a>
                </div>
            ))}
        </div>
    );
};

export default Squads;