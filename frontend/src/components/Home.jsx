
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/home.css";

const Home = () => {
  const navigate = useNavigate();

  const fixturesData = [
    { src: "/media/jk vs bk.jpeg", alt: "Example Image", date: "30 Nov", day: "Saturday", time: "12:15 PM", match: "Biratnagar Kings vs Janakpur Bolts" },
    { src: "/media/ktmvsch.jpeg", alt: "Example Image", date: "2 Dec", day: "Monday", time: "09:15 AM", match: "Kathmandu Gurkhas vs Chitwan Rhinos" },
    { src: "/media/jkpvskar.jpeg", alt: "Example Image", date: "2 Dec", day: "Monday", time: "01:15 PM", match: "Janakpur Bolts vs Karnali Yaks" },
    { src: '/media/btvssu.jpeg', alt: 'Example Image', date: "3 Dec", day: "Tuesday", time: "09:15 AM", match: "Sudurpaschim Royals vs Biratnagar Kings" },
    { src: '/media/chtvspok.jpeg', alt: 'Example Image', date: "3 Dec", day: "Tuesday", time: "01:15 PM", match: "Chitwan Rhinos vs Pokhara Avengers" },
    { src: '/media/karnvskatm.jpeg', alt: 'Example Image', date: "4 Dec", day: "Wednesday", time: "09:15 AM", match: "Karnali Yaks vs Kathmandu Gurkhas" },
    { src: '/media/lumvsbirat.jpeg', alt: 'Example Image', date: "4 Dec", day: "Wednesday", time: "01:15 PM", match: "Biratnagar Kings vs Lumbini Lions" },
    { src: '/media/jnpvspok.jpeg', alt: 'Example Image', date: "5 Dec", day: "Thursday", time: "09:15 AM", match: "Pokhara Avengers vs Janakpur Bolts" },
    { src: '/media/ktmvssuder.jpeg', alt: 'Example Image', date: "5 Dec", day: "Thursday", time: "01:15 PM", match: "Kathmandu Gurkhas vs Sudurpaschim Royals" },
    { src: '/media/karvschitwan.jpeg', alt: 'Example Image', date: "6 Dec", day: "Friday", time: "09:15 AM", match: "Karnali Yaks vs Chitwan Rhinos" },
    { src: '/media/lmvspok.jpeg', alt: 'Example Image', date: "6 Dec", day: "Friday", time: "01:15 PM", match: "Lumbini Lions vs Pokhara Avengers" },
    { src: '/media/sudervslum.jpeg', alt: 'Example Image', date: "7 Dec", day: "Saturday", time: "09:15 AM", match: "Lumbini Lions vs Sudurpaschim Royals" },
    { src: '/media/brtvskar.jpeg', alt: 'Example Image', date: "7 Dec", day: "Saturday", time: "01:15 PM", match: "Karnali Yaks vs Biratnagar Kings" },
    { src: '/media/jnkvslum.jpeg', alt: 'Example Image', date: "8 Dec", day: "Sunday", time: "09:15 AM", match: "Janakpur Bolts vs Lumbini Lions" },
    { src: '/media/chitvssudrer.jpeg', alt: 'Example Image', date: "8 Dec", day: "Sunday", time: "01:15 PM", match: "Suderpaschim Royals vs Chitwan Rhinos" },
    { src: '/media/chitwan vs lumbini.jpeg', alt: 'Example Image', date: "10 Dec", day: "Tuesday", time: "09:15 AM", match: "Chitwan Rhinos vs Lumbini Lions" },
    { src: '/media/krnvspok].jpeg', alt: 'Example Image', date: "10 Dec", day: "Tuesday", time: "01:15 PM", match: "Karnali Yaks vs Pokhara Avengers" },
    { src: '/media/jnkvssud.jpeg', alt: 'Example Image', date: "11 Dec", day: "Wednesday", time: "09:15 AM", match: "Janakpur Bolts vs Suderpaschim Royals" },
    { src: '/media/ktmvslum.jpeg', alt: 'Example Image', date: "11 Dec", day: "Wednesday", time: "01:15 PM", match: "Kathmandu Gurkhas vs Lumbini Lions" },
    { src: '/media/pok vs birat.jpeg', alt: 'Example Image', date: "12 Dec", day: "Thursday", time: "09:15 AM", match: "Pokhara Avengers vs Biratnagar Kings" },
    { src: '/media/jnkvskatm.jpeg', alt: 'Example Image', date: "12 Dec", day: "Thursday", time: "01:15 PM", match: "Janakpur Bolts vs Kathmandu Gurkhas" },
    { src: '/media/karvslum.jpeg', alt: 'Example Image', date: "13 Dec", day: "Friday", time: "09:15 AM", match: "Lumbini Lions vs Karnali Yaks" },
    { src: '/media/brtvschitw.jpeg', alt: 'Example Image', date: "13 Dec", day: "Friday", time: "01:15 PM", match: "Biratnagar Kings vs Chitwan Rhinos" },
    { src: '/media/pokvsktm.jpeg', alt: 'Example Image', date: "14 Dec", day: "Saturday", time: "09:15 AM", match: "Pokhara Avengers vs Kathmandu Gurkhas" },
    { src: '/media/chtvsjnp.jpeg', alt: 'Example Image', date: "14 Dec", day: "Saturday", time: "01:15 PM", match: "Chitwan Rhinos vs Janakpur Bolts" },
    { src: '/media/brtvsktm.jpeg', alt: 'Example Image', date: "15 Dec", day: "Sunday", time: "09:15 AM", match: "Biratnagar Kings vs Kathmandu Gurkhas" },
    { src: '/media/pokvssud.jpeg', alt: 'Example Image', date: "15 Dec", day: "Sunday", time: "01:15 PM", match: "Pokhara Avengers vs Suderpaschim Royals" },
    { src: '/media/spsvskar.jpeg', alt: 'Example Image', date: "16 Dec", day: "Monday", time: "09:15 AM", match: "Sudurpaschim Royals vs Karnali Yaks" }
  ];

  const sendImage = (event) => {
    const imgSrc = event.target.dataset.src; // Get the src from the data attribute
    console.log("Image Source:", imgSrc); // Debugging line
    const selectedFixture = fixturesData.find((fixture) => fixture.src === imgSrc); // Find the matching fixture
    console.log("Selected Fixture:", selectedFixture); // Debugging line
    if (!selectedFixture) {
      console.error("No matching fixture found for src:", imgSrc);
      return;
    }
    
    navigate("/zone", {
      state: {
        imgSrc,
        match: selectedFixture.match,
        date: selectedFixture.date,
        day: selectedFixture.day,
        time: selectedFixture.time,
      },
    });
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
            <button
              onClick={sendImage}
              className="button"
              data-src={match.src} // Pass the src as a data attribute
            >
              BuyTicket
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;