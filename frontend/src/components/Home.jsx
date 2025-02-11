// import React from 'react';
// import { Link, useNavigate} from 'react-router-dom';
// import "../style/home.css"

// const Home = () => {
//   const navigate = useNavigate();

//   const sendImage = (event) => {
//     const imgSrc = event.target.previousElementSibling.src;
//     navigate('/zone', { state: { imgSrc } });
//   };

//   const matchData = [
//     { src: '/media/jk vs bk.jpeg', alt: 'Example Image' },
//     { src: '/media/ktmvsch.jpeg', alt: 'Example Image' },
//     { src: '/media/jkpvskar.jpeg', alt: 'Example Image' },
//     { src: '/media/btvssu.jpeg', alt: 'Example Image' },
//     { src: '/media/chtvspok.jpeg', alt: 'Example Image' },
//     { src: '/media/karnvskatm.jpeg', alt: 'Example Image' },
//     { src: '/media/lumvsbirat.jpeg', alt: 'Example Image' },
//     { src: '/media/jnpvspok.jpeg', alt: 'Example Image' },
//     { src: '/media/karvschitwan.jpeg', alt: 'Example Image' },
//     { src: '/media/lmvspok.jpeg', alt: 'Example Image' },
//     { src: '/media/lumvssuder.jpeg', alt: 'Example Image' },
//     { src: '/media/krvsbt.jpeg', alt: 'Example Image' },
//     { src: '/media/jnkvslum.jpeg', alt: 'Example Image' },
//     { src: '/media/chitvssudrer.jpeg', alt: 'Example Image' },
//     { src: '/media/chitwan vs lumbini.jpeg', alt: 'Example Image' },
//     { src: '/media/krnvspok].jpeg', alt: 'Example Image' },
//     { src: '/media/jnkvssud.jpeg', alt: 'Example Image' },
//     { src: '/media/karvslum.jpeg', alt: 'Example Image' },
//     { src: '/media/pok vs birat.jpeg', alt: 'Example Image' },
//     { src: '/media/jnkvskatm.jpeg', alt: 'Example Image' },
//     { src: '/media/karvslum.jpeg', alt: 'Example Image' },
//     { src: '/media/brtvschitw.jpeg', alt: 'Example Image' },
//     { src: '/media/pokvsktm.jpeg', alt: 'Example Image' },
//     { src: '/media/chtvsjnp.jpeg', alt: 'Example Image' },
//     { src: '/media/brtvsktm.jpeg', alt: 'Example Image' },
//     { src: '/media/lumvsbirat.jpeg', alt: 'Example Image' },
//     { src: '/media/lmvspok.jpeg', alt: 'Example Image' },
//     { src: '/media/spsvskar.jpeg', alt: 'Example Image' },

//   ];

//   return (
//     <div>
//       <div className="container">
//         <Link to="/">Home</Link>
//         <Link to="/match">Match</Link>
//         <Link to="/table">Table</Link>
//         <Link to="/squads">Squads</Link>
//         <Link to="/Status">Status</Link>
//         <Link to="/venue">Venus</Link>
//         <Link to="/news">News</Link>
//       </div>

//       <section>
//         {matchData.map((match, index) => (
//           <div className="box" key={index}>
//             <img id="sourceImage" src={match.src} alt={match.alt} />
//             <button
//               onClick={sendImage}
//               // id='sendimage'
//               className="button">
//               BuyTicket
//             </button>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/home.css";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Predefined fixtures data
  const fixturesData = [
    { src: "/media/jk vs bk.jpeg", alt: "Example Image", date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: "/media/ktmvsch.jpeg", alt: "Example Image", date: "2 Dec", day: "Monday", time: "09:15 AM", match: "Kathmandu Gurkhas vs Chitwan Rhinos" },
    { src: "/media/jkpvskar.jpeg", alt: "Example Image", date: "2 Dec", day: "Monday", time: "01:15 PM", match: "Janakpur Bolts vs Karnali Yaks" },
    { src: '/media/btvssu.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/chtvspok.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/karnvskatm.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/lumvsbirat.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/jnpvspok.jpeg', alt: 'Example Image', date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: '/media/karvschitwan.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/lmvspok.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/lumvssuder.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/krvsbt.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/jnkvslum.jpeg', alt: 'Example Image', date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: '/media/chitvssudrer.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/chitwan vs lumbini.jpeg', alt: 'Example Image', date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: '/media/krnvspok].jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/jnkvssud.jpeg', alt: 'Example Image', date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: '/media/karvslum.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/pok vs birat.jpeg', alt: 'Example Image', date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: '/media/jnkvskatm.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/karvslum.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/brtvschitw.jpeg', alt: 'Example Image', date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: '/media/pokvsktm.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/chtvsjnp.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/brtvsktm.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/lumvsbirat.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/lmvspok.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
    { src: '/media/spsvskar.jpeg', alt: 'Example Image' , date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts"},
  ];

  // Function to handle BuyTicket button click
  const sendImage = (event) => {
    const imgSrc = event.target.previousElementSibling.src; // Get the image source
    const selectedFixture = fixturesData.find((fixture) => fixture.src === imgSrc); // Find the matching fixture
    navigate("/zone", { state: { imgSrc, fixture: selectedFixture } }); // Pass both image and fixture data to Zone page
  };

  return (
    <div>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/match">Match</Link>
        <Link to="/table">Table</Link>
        <Link to="/squads">Squads</Link>
        <Link to="/Status">Status</Link>
        <Link to="/venue">Venus</Link>
        <Link to="/news">News</Link>
      </div>
      <section>
        {fixturesData.map((match, index) => (
          <div className="box" key={index}>
            <img id="sourceImage" src={match.src} alt={match.alt} />
            <button onClick={sendImage} className="button">
              BuyTicket
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;