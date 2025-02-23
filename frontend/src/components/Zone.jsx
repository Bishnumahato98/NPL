

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../style/zone.css";

// const Zone = () => {
//   const location = useLocation(); // Access the state passed from Home page
//   const { imgSrc, match, date, day, time } = location.state || {}; // Extract image and fixture data
//   const price = "Rs 300-500"; // Static price
//   const venue = "TU Cricket Ground"; // Static venue

//   // State to track ticket counts for each zone
//   const [ticketCounts, setTicketCounts] = useState({
//     softwarica: 0,
//     coventry: 0,
//     vip: 0,
//   });

//   // State to track the currently selected zone
//   const [selectedZone, setSelectedZone] = useState(null);

//   // Function to handle adding/selecting a zone
//   const addZone = (zone) => {
//     // Reset all ticket counts to 0
//     setTicketCounts({
//       softwarica: 0,
//       coventry: 0,
//       vip: 0,
//     });
//     // Set the selected zone
//     setSelectedZone(zone);
//   };

//   // Function to increment ticket count (with max limit of 10)
//   const incrementTicket = () => {
//     if (selectedZone) {
//       setTicketCounts((prev) => ({
//         ...prev,
//         [selectedZone]: prev[selectedZone] < 10 ? prev[selectedZone] + 1 : 10,
//       }));
//     }
//   };

//   // Function to decrement ticket count
//   const decrementTicket = () => {
//     if (selectedZone) {
//       setTicketCounts((prev) => ({
//         ...prev,
//         [selectedZone]: prev[selectedZone] > 0 ? prev[selectedZone] - 1 : 0,
//       }));
//     }
//   };

//   return (
//     <div className="container">
//       {/* Display the transferred image */}
//       <img src={imgSrc || "https://via.placeholder.com/1000x400"} alt="Match Banner" className="banner" />
//       <div className="content">
//         <div className="leftside">
//           <p>
//             <strong>Match:</strong> {match || "N/A"}
//           </p>
//           <p>
//             <strong>Date:</strong> {date || "N/A"}
//           </p>
//           <p>
//             <strong>Day:</strong> {day || "N/A"}
//           </p>
//           <p>
//             <strong>Time:</strong> {time || "N/A"}
//           </p>
//           <p>
//             <strong>Venue:</strong> {venue}
//           </p>
//           <p>
//             <strong>Price:</strong> {price}
//           </p>
//         </div>
//         <div className="rightside">
//           <h3>Ticket</h3>
//           {/* Softwarica Zone */}
//           <div className="softwarica">
//             <h4>Softwarica Zone</h4>
//             <p>Rs 300</p>
//             {selectedZone === "softwarica" ? (
//               <div className="ticket-controls">
//                 <button onClick={decrementTicket}>-</button>
//                 <span>{ticketCounts.softwarica}</span>
//                 <button onClick={incrementTicket}>+</button>
//               </div>
//             ) : (
//               <button className="add-btn" onClick={() => addZone("softwarica")}>
//                 Add
//               </button>
//             )}
//           </div>
//           {/* Coventry Zone */}
//           <div className="coventry">
//             <h4>Coventry Zone</h4>
//             <p>Rs 300</p>
//             {selectedZone === "coventry" ? (
//               <div className="ticket-controls">
//                 <button onClick={decrementTicket}>-</button>
//                 <span>{ticketCounts.coventry}</span>
//                 <button onClick={incrementTicket}>+</button>
//               </div>
//             ) : (
//               <button className="add-btn" onClick={() => addZone("coventry")}>
//                 Add
//               </button>
//             )}
//           </div>
//           {/* VIP Zone */}
//           <div className="vip">
//             <h4>VIP Zone</h4>
//             <p>Rs 500</p>
//             {selectedZone === "vip" ? (
//               <div className="ticket-controls">
//                 <button onClick={decrementTicket}>-</button>
//                 <span>{ticketCounts.vip}</span>
//                 <button onClick={incrementTicket}>+</button>
//               </div>
//             ) : (
//               <button className="add-btn" onClick={() => addZone("vip")}>
//                 Add
//               </button>
//             )}
//           </div>
//           {/* Buy Ticket Button */}
//           <Link to="/buyticket">
//             <button className="main-btn">Click Me</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Zone;







import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/zone.css";

const Zone = () => {
  const location = useLocation();
  const { imgSrc, match, date, day, time } = location.state || {};
  const price = "Rs 300-500";
  const venue = "TU Cricket Ground";

  const [ticketCounts, setTicketCounts] = useState({
    softwarica: 0,
    coventry: 0,
    vip: 0,
  });

  const [selectedZone, setSelectedZone] = useState(null);

  const addZone = (zone) => {
    setTicketCounts({
      softwarica: 0,
      coventry: 0,
      vip: 0,
    });
    setSelectedZone(zone);
  };

  const incrementTicket = () => {
    if (selectedZone) {
      setTicketCounts((prev) => ({
        ...prev,
        [selectedZone]: prev[selectedZone] < 10 ? prev[selectedZone] + 1 : 10,
      }));
    }
  };

  const decrementTicket = () => {
    if (selectedZone) {
      setTicketCounts((prev) => ({
        ...prev,
        [selectedZone]: prev[selectedZone] > 0 ? prev[selectedZone] - 1 : 0,
      }));
    }
  };

  const calculateAmount = () => {
    if (!selectedZone) return 0;
    const ticketCount = ticketCounts[selectedZone];
    const zonePrice = selectedZone === "vip" ? 500 : 300;
    return ticketCount * zonePrice;
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    if (!selectedZone || ticketCounts[selectedZone] === 0) return;

    navigate("/buyticket", {
      state: {
        zone: selectedZone,
        ticketCount: ticketCounts[selectedZone],
        amount: calculateAmount(),
      },
    });
  };

  return (
    <div className="container">
      <img src={imgSrc || "https://via.placeholder.com/1000x400"} alt="Match Banner" className="banner" />
      <div className="content">
        <div className="leftside">
          <p><strong>Match:</strong> {match || "N/A"}</p>
          <p><strong>Date:</strong> {date || "N/A"}</p>
          <p><strong>Day:</strong> {day || "N/A"}</p>
          <p><strong>Time:</strong> {time || "N/A"}</p>
          <p><strong>Venue:</strong> {venue}</p>
          <p><strong>Price:</strong> {price}</p>
        </div>
        <div className="rightside">
          <h3>Ticket</h3>
          {/* Softwarica Zone */}
          <div className="softwarica">
            <h4>Softwarica Zone</h4>
            <p>Rs 300</p>
            {selectedZone === "softwarica" ? (
              <div className="ticket-controls">
                <button onClick={decrementTicket}>-</button>
                <span>{ticketCounts.softwarica}</span>
                <button onClick={incrementTicket}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addZone("softwarica")}>
                Add
              </button>
            )}
          </div>
          {/* Coventry Zone */}
          <div className="coventry">
            <h4>Coventry Zone</h4>
            <p>Rs 300</p>
            {selectedZone === "coventry" ? (
              <div className="ticket-controls">
                <button onClick={decrementTicket}>-</button>
                <span>{ticketCounts.coventry}</span>
                <button onClick={incrementTicket}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addZone("coventry")}>
                Add
              </button>
            )}
          </div>
          {/* VIP Zone */}
          <div className="vip">
            <h4>VIP Zone</h4>
            <p>Rs 500</p>
            {selectedZone === "vip" ? (
              <div className="ticket-controls">
                <button onClick={decrementTicket}>-</button>
                <span>{ticketCounts.vip}</span>
                <button onClick={incrementTicket}>+</button>
              </div>
            ) : (
              <button className="add-btn" onClick={() => addZone("vip")}>
                Add
              </button>
            )}
          </div>
          {/* Buy Ticket Button */}
          <button className="main-btn" onClick={handleNavigation} disabled={!selectedZone || ticketCounts[selectedZone] === 0}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Zone;