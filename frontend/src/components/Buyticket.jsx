
// import React, { useState } from 'react';
// import QRCode from 'qrcode'; // Install this package: npm install qrcode
// import "../style/buyticket.css";

// function Buyticket() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [qrUrl, setQrUrl] = useState('');
//   const [showQR, setShowQR] = useState(false);
//   const [error, setError] = useState('');

//   // Function to validate email format
//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const createQR = async () => {
//     setError(''); // Reset error message

//     // Validate input fields
//     if (!name.trim() || !number.trim() || !email.trim()) {
//       setError('Please fill out all fields before generating the QR code.');
//       return;
//     }

//     // Validate contact number (basic length check)
//     if (number.length < 10) {
//       setError('Please enter a valid contact number with at least 10 digits.');
//       return;
//     }

//     // Validate email format
//     if (!isValidEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     // Define total amount
//     const totalAmount = 'Rs. 1,500';

//     // Combine data into a single string for QR code
//     const qrData = `Name: ${name}\nContact: ${number}\nEmail: ${email}\nTotal: ${totalAmount}`;

//     try {
//       // Generate QR code as a data URL (base64 encoded image)
//       const qrCodeUrl = await QRCode.toDataURL(qrData, {
//         width: 300, // Increase the size of the QR code (300x300 pixels)
//         margin: 2,  // Add some margin around the QR code
//       });

//       // Set the QR code URL and show the QR container
//       setQrUrl(qrCodeUrl);
//       setShowQR(true);
//     } catch (err) {
//       console.error('Error generating QR code:', err);
//       setError('An error occurred while generating the QR code.');
//     }
//   };

//   // Function to download the QR code as an image
//   const downloadQR = () => {
//     if (qrUrl) {
//       const link = document.createElement('a');
//       link.href = qrUrl;
//       link.download = 'QRCode.png'; // Name of the downloaded file
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h3>Register Your Details</h3>

//       {/* Display error message if any */}
//       {error && <p className="error-message">{error}</p>}

//       {/* Name Input */}
//       <div className="form-group">
//         <label htmlFor="contactName">Full Name</label>
//         <input
//           type="text"
//           id="contactName"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>

//       {/* Contact Number Input */}
//       <div className="form-group">
//         <label htmlFor="contactNumber">Contact Number</label>
//         <input
//           type="tel"
//           id="contactNumber"
//           placeholder="Contact"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           required
//         />
//       </div>

//       {/* Email Input */}
//       <div className="form-group">
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       {/* Ticket Summary */}
//       <div className="summary-container">
//         <div className="total-payable">
//           <p><strong>Rs. 1,500</strong></p>
//           <p>Total Payable Amount</p>
//         </div>
//         <div className="ticket-summary">
//           <p><strong>Total Tickets:</strong> <span>5</span></p>
//           <p><strong>Ticket Summary:</strong></p>
//           <div className="ticket-details">
//             <p>5 General: Zone 2 x Rs. 300</p>
//             <p>1,500.00</p>
//           </div>
//           <div className="total-amount">
//             <p><strong>Total Amount:</strong></p>
//             <p><strong>Rs. 1,500</strong></p>
//           </div>
//         </div>
//       </div>

//       {/* Generate QR Code Button */}
//       <button className="buy-btn" onClick={createQR}>
//         Generate QR Code
//       </button>

//       {/* Display QR Code if generated */}
//       {showQR && qrUrl && (
//         <div className="qr-container" id="qr-container">
//           <img src={qrUrl} alt="QR Code" id="img" style={{ width: '300px', height: '300px' }} />
//           <button className="download-btn" onClick={downloadQR}>
//             Download QR Code
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Buyticket;















import React, { useState } from "react";
import QRCode from "qrcode";
import { useLocation } from "react-router-dom";
import "../style/buyticket.css";

function Buyticket() {
  const location = useLocation();
  console.log("State Received in Buyticket:", location.state); // Debugging log

  if (!location.state || !location.state.zone || !location.state.ticketCount || !location.state.amount) {
    return <p>No ticket data available. Please go back and select tickets.</p>;
  }

  const { zone, ticketCount, amount } = location.state;

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const createQR = async () => {
    setError("");
    if (!name.trim() || !number.trim() || !email.trim()) {
      setError("Please fill out all fields before generating the QR code.");
      return;
    }
    if (number.length < 10) {
      setError("Please enter a valid contact number with at least 10 digits.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    // Include ticket summary in the QR code data
    const qrData = `
      Name: ${name}
      Contact: ${number}
      Email: ${email}
      Ticket Summary:
      ${ticketCount} ${zone.charAt(0).toUpperCase() + zone.slice(1)} Zone x Rs. ${
      zone === "vip" ? 500 : 300
    }
      Total Amount: Rs. ${amount}
    `.trim(); // Use .trim() to remove unnecessary whitespace
  
    try {
      const qrCodeUrl = await QRCode.toDataURL(qrData, { width: 300, margin: 2 });
      setQrUrl(qrCodeUrl);
      setShowQR(true);
    } catch (err) {
      console.error("Error generating QR code:", err);
      setError("An error occurred while generating the QR code.");
    }
  };






  const downloadQR = () => {
    if (qrUrl) {
      const link = document.createElement("a");
      link.href = qrUrl;
      link.download = "QRCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="form-container">
      <h3>Register Your Details</h3>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="contactName">Full Name</label>
        <input
          type="text"
          id="contactName"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="tel"
          id="contactNumber"
          placeholder="Contact"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="summary-container">
        <div className="total-payable">
          <p><strong>Rs. {amount}</strong></p>
          <p>Total Payable Amount</p>
        </div>
        <div className="ticket-summary">
          <p><strong>Total Tickets:</strong> <span>{ticketCount}</span></p>
          <p><strong>Ticket Summary:</strong></p>
          <div className="ticket-details">
            <p>
              {ticketCount} {zone.charAt(0).toUpperCase() + zone.slice(1)} Zone x Rs.{" "}
              {zone === "vip" ? 500 : 300}
            </p>
            <p>{amount}.00</p>
          </div>
          <div className="total-amount">
            <p><strong>Total Amount:</strong></p>
            <p><strong>Rs. {amount}</strong></p>
          </div>
        </div>
      </div>
      <button className="buy-btn" onClick={createQR}>
        Generate QR Code
      </button>
      {showQR && qrUrl && (
        <div className="qr-container" id="qr-container">
          <img src={qrUrl} alt="QR Code" id="img" style={{ width: "300px", height: "300px" }} />
          <button className="download-btn" onClick={downloadQR}>
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

export default Buyticket;