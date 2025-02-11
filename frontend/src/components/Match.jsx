// import React from "react";
// import "../style/match.css"


// const fixturesData = [
//   { date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
//   { date: "2 Dec", day: "Monday", time: "09:15 AM", match: "Kathmandu Gurkhas vs Chitwan Rhinos" },
//   { date: "2 Dec", day: "Monday", time: "01:15 PM", match: "Janakpur Bolts vs Karnali Yaks" },
//   { date: "3 Dec", day: "Tuesday", time: "09:15 AM", match: "Sudurpaschim Royals vs Biratnagar Kings" },
//   { date: "3 Dec", day: "Tuesday", time: "01:15 PM", match: "Chitwan Rhinos vs Pokhara Avengers" },
//   { date: "4 Dec", day: "Wednesday", time: "09:15 AM", match: "Karnali Yaks vs Kathmandu Gurkhas" },
//   { date: "4 Dec", day: "Wednesday", time: "01:15 PM", match: "Biratnagar Kings vs Lumbini Lions" },
//   { date: "5 Dec", day: "Thursday", time: "09:15 AM", match: "Pokhara Avengers vs Janakpur Bolts" },
//   { date: "5 Dec", day: "Thursday", time: "01:15 PM", match: "Kathmandu Gurkhas vs Sudurpaschim Royals" },
//   { date: "6 Dec", day: "Friday", time: "09:15 AM", match: "Karnali Yaks vs Lumbini Lions" },
//   { date: "6 Dec", day: "Friday", time: "01:15 PM", match: "Biratnagar Kings vs Pokhara Avengers" },
//   { date: "7 Dec", day: "Saturday", time: "09:15 AM", match: "Lumbini Lions vs Sudurpaschim Royals" },
//   { date: "7 Dec", day: "Saturday", time: "01:15 PM", match: "Janakpur Bolts vs Lumbini Lions" },
//   { date: "8 Dec", day: "Sunday", time: "09:15 AM", match: "Sudurpaschim Royals vs Chitwan Rhinos" },
//   { date: "8 Dec", day: "Sunday", time: "01:15 PM", match: "Karnali Yaks vs Pokhara Avengers" },
//   { date: "10 Dec", day: "Tuesday", time: "09:15 AM", match: "Chitwan Rhinos vs Karnali Yaks" },
//   { date: "10 Dec", day: "Tuesday", time: "01:15 PM", match: "Janakpur Bolts vs Sudurpaschim Royals" },
//   { date: "11 Dec", day: "Wednesday", time: "09:15 AM", match: "Kathmandu Gurkhas vs Lumbini Lions" },
//   { date: "11 Dec", day: "Wednesday", time: "01:15 PM", match: "Pokhara Avengers vs Biratnagar Kings" },
//   { date: "12 Dec", day: "Thursday", time: "09:15 AM", match: "Pokhara Avengers vs Kathmandu Gurkhas" },
//   { date: "12 Dec", day: "Thursday", time: "01:15 PM", match: "Janakpur Bolts vs Lumbini Lions" },
//   { date: "13 Dec", day: "Friday", time: "09:15 AM", match: "Sudurpaschim Royals vs Karnali Yaks" },
//   { date: "13 Dec", day: "Friday", time: "01:15 PM", match: "Biratnagar Kings vs Chitwan Rhinos" },
//   { date: "14 Dec", day: "Saturday", time: "09:15 AM", match: "Pokhara Avengers vs Kathmandu Gurkhas" },
//   { date: "14 Dec", day: "Saturday", time: "01:15 PM", match: "Chitwan Rhinos vs Lumbini Lions" },
//   { date: "15 Dec", day: "Sunday", time: "09:15 AM", match: "Biratnagar Kings vs Karnali Yaks" },
//   { date: "15 Dec", day: "Sunday", time: "01:15 PM", match: "Pokhara Avengers vs Lumbini Lions" },
//   { date: "16 Dec", day: "Monday", time: "09:15 AM", match: "Sudurpaschim Royals vs Karnali Yaks" }
// ];

// const Match = () => {
//   return (
//     <div className="fixtures-container">
//       <h1 className="fixtures-header">NPL Fixtures</h1>
//       <table className="fixtures-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Matches</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fixturesData.map((fixture, index) => (
//             <tr key={index}>
//               <td className="date-day">
//                 <span>{fixture.date}</span>
//                 <span className="day">{fixture.day}</span>
//               </td>
//               <td>{fixture.time}</td>
//               <td>{fixture.match}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Match;













import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../style/match.css";

const fixturesData = [
  { date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
  { date: "2 Dec", day: "Monday", time: "09:15 AM", match: "Kathmandu Gurkhas vs Chitwan Rhinos" },
  { date: "2 Dec", day: "Monday", time: "01:15 PM", match: "Janakpur Bolts vs Karnali Yaks" },
  { date: "3 Dec", day: "Tuesday", time: "09:15 AM", match: "Sudurpaschim Royals vs Biratnagar Kings" },
  { date: "3 Dec", day: "Tuesday", time: "01:15 PM", match: "Chitwan Rhinos vs Pokhara Avengers" },
  { date: "4 Dec", day: "Wednesday", time: "09:15 AM", match: "Karnali Yaks vs Kathmandu Gurkhas" },
  { date: "4 Dec", day: "Wednesday", time: "01:15 PM", match: "Biratnagar Kings vs Lumbini Lions" },
  { date: "5 Dec", day: "Thursday", time: "09:15 AM", match: "Pokhara Avengers vs Janakpur Bolts" },
  { date: "5 Dec", day: "Thursday", time: "01:15 PM", match: "Kathmandu Gurkhas vs Sudurpaschim Royals" },
  { date: "6 Dec", day: "Friday", time: "09:15 AM", match: "Karnali Yaks vs Lumbini Lions" },
  { date: "6 Dec", day: "Friday", time: "01:15 PM", match: "Biratnagar Kings vs Pokhara Avengers" },
  { date: "7 Dec", day: "Saturday", time: "09:15 AM", match: "Lumbini Lions vs Sudurpaschim Royals" },
  { date: "7 Dec", day: "Saturday", time: "01:15 PM", match: "Janakpur Bolts vs Lumbini Lions" },
  { date: "8 Dec", day: "Sunday", time: "09:15 AM", match: "Sudurpaschim Royals vs Chitwan Rhinos" },
  { date: "8 Dec", day: "Sunday", time: "01:15 PM", match: "Karnali Yaks vs Pokhara Avengers" },
  { date: "10 Dec", day: "Tuesday", time: "09:15 AM", match: "Chitwan Rhinos vs Karnali Yaks" },
  { date: "10 Dec", day: "Tuesday", time: "01:15 PM", match: "Janakpur Bolts vs Sudurpaschim Royals" },
  { date: "11 Dec", day: "Wednesday", time: "09:15 AM", match: "Kathmandu Gurkhas vs Lumbini Lions" },
  { date: "11 Dec", day: "Wednesday", time: "01:15 PM", match: "Pokhara Avengers vs Biratnagar Kings" },
  { date: "12 Dec", day: "Thursday", time: "09:15 AM", match: "Pokhara Avengers vs Kathmandu Gurkhas" },
  { date: "12 Dec", day: "Thursday", time: "01:15 PM", match: "Janakpur Bolts vs Lumbini Lions" },
  { date: "13 Dec", day: "Friday", time: "09:15 AM", match: "Sudurpaschim Royals vs Karnali Yaks" },
  { date: "13 Dec", day: "Friday", time: "01:15 PM", match: "Biratnagar Kings vs Chitwan Rhinos" },
  { date: "14 Dec", day: "Saturday", time: "09:15 AM", match: "Pokhara Avengers vs Kathmandu Gurkhas" },
  { date: "14 Dec", day: "Saturday", time: "01:15 PM", match: "Chitwan Rhinos vs Lumbini Lions" },
  { date: "15 Dec", day: "Sunday", time: "09:15 AM", match: "Biratnagar Kings vs Karnali Yaks" },
  { date: "15 Dec", day: "Sunday", time: "01:15 PM", match: "Pokhara Avengers vs Lumbini Lions" },
  { date: "16 Dec", day: "Monday", time: "09:15 AM", match: "Sudurpaschim Royals vs Karnali Yaks" }
  
  
];

const Match = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle row click and navigate to Home page
  const handleRowClick = (fixture) => {
    navigate("/", { state: { fixture } }); // Pass fixture data to Home page
  };

  return (
    <div className="fixtures-container">
      <h1 className="fixtures-header">NPL Fixtures</h1>
      <table className="fixtures-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Matches</th>
          </tr>
        </thead>
        <tbody>
          {fixturesData.map((fixture, index) => (
            <tr key={index} onClick={() => handleRowClick(fixture)} style={{ cursor: "pointer" }}>
              <td className="date-day">
                <span>{fixture.date}</span>
                <span className="day">{fixture.day}</span>
              </td>
              <td>{fixture.time}</td>
              <td>{fixture.match}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Match;