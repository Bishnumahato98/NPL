// import React from 'react';
// import "../style/venue.css"
// import "../media/stadium.png"
// const Venue = () => {
//     return (
//         <div className="stadium-card">
//             <img src="stadium.png" alt="Stadium Image" className="stadium-img" />
//             <div className="stadium-info">
//                 <h2>Tribhuvan International Cricket Ground</h2>
//                 <p className="country">Nepal</p>
//             </div>
//         </div>
//     );
// };

// export default Venue;


import React from 'react';
import "../style/venue.css";


const Venue = () => {
    return (
        <div className="stadium-card">
            <img src={'/media/stadium.png'} alt="Stadium Image" className="stadium-img" />
            <div className="stadium-info">
                <h2>Tribhuvan International Cricket Ground</h2>
                <p className="country">Nepal</p>
            </div>
        </div>
    );
};

export default Venue;
