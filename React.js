// Sample React component (Front-End)
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Email Sent Successfully");
      } else {
        setMessage("Email Sending Failed");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <div>
      <h1>Subscribe to Our Newsletter</h1>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
