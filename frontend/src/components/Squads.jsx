// import React from 'react';
// import "../style/squads.css"
// import { Link, useNavigate } from "react-router-dom";


// const Squads = () => {
//     const teams = [
//         { name: 'Biratnagar Kings', link: '/biratnagar' },
//         { name: 'Janakpur Bolts', link: 'janakpur.html' },
//         { name: 'Kathmandu Gurkhas', link: 'ktm.html' },
//         { name: 'Pokhara Avengers', link: 'pokhara.html' },
//         { name: 'Lumbini Lions', link: 'lumbini.html' },
//         { name: 'Chitwan Rhinos', link: 'chitwan.html' },
//         { name: 'Karnali Yaks', link: 'karnali.html' },
//         { name: 'Sudurpaschim Royals', link: 'suderpaschim.html' },
//     ];

//     return (
//         <div className="containers">
//             <div className="under_container">Squads</div>
//             {teams.map((team, index) => (
//                 <div className="one" key={index}>
//                     <a href={team.link}>{team.name}</a>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Squads;









import React from 'react';
import "../style/squads.css";
import { Link } from "react-router-dom"; // Import Link

const Squads = () => {
    const teams = [
        { name: 'Biratnagar Kings', link: '/biratnagar' },
        { name: 'Janakpur Bolts', link: '/janakpur' }, // Updated links to match React Router paths
        { name: 'Kathmandu Gurkhas', link: '/ktm' },
        { name: 'Pokhara Avengers', link: '/pokhara' },
        { name: 'Lumbini Lions', link: '/lumbini' },
        { name: 'Chitwan Rhinos', link: '/chitwan' },
        { name: 'Karnali Yaks', link: '/karnali' },
        { name: 'Sudurpaschim Royals', link: '/suderpaschim' },
    ];

    return (
        <div className="containers">
            <div className="under_container">Squads</div>
            {teams.map((team, index) => (
                <div className="one" key={index}>
                    {/* Use Link for navigation */}
                    <Link to={team.link} className="team-link">{team.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Squads;