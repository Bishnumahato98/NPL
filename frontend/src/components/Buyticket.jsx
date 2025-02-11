import React, { useState } from 'react';
import "../style/buyticket.css"

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [showQR, setShowQR] = useState(false);

  const createQR = () => {
    // Validate input
    if (!name || !number || !email) {
      alert('Please fill out all fields before generating the QR code.');
      return;
    }

    // Define total amount
    const totalAmount = 'Rs. 1,500';

    // Combine data into a single string for QR code
    const qrData = `Name: ${name}\nContact: ${number}\nEmail: ${email}\nTotal: ${totalAmount}`;

    // Generate the QR code URL
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
    setQrUrl(qrCodeUrl);
    setShowQR(true);
  };

  return (
    <div className="form-container">
      <h3>Contact Person Details</h3>
      <div className="form-group">
        <label htmlFor="contactName">Contact Name</label>
        <input
          type="text"
          id="contactName"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="text"
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
        />
      </div>
      <div className="summary-container">
        <div className="total-payable">
          <p><strong>Rs. 1,500</strong></p>
          <p>Total Payable Amount</p>
        </div>
        <div className="ticket-summary">
          <p><strong>Total Tickets:</strong> <span>5</span></p>
          <p><strong>Ticket Summary:</strong></p>
          <div className="ticket-details">
            <p>5 General: Zone 2 x Rs. 300</p>
            <p>1,500.00</p>
          </div>
          <div className="total-amount">
            <p><strong>Total Amount:</strong></p>
            <p><strong>Rs. 1,500</strong></p>
          </div>
        </div>
      </div>
      <button className="buy-btn" onClick={createQR}>
        Generate QR Code
      </button>
      {showQR && (
        <div className="qr-container" id="qr-container">
          <img src={qrUrl} alt="QR Code" id="img" />
          <a
            id="download-link"
            href={qrUrl}
            download="QRCode.png"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
}

export default App;