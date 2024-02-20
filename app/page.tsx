"use client";

import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    if (username === "") {
      setError("Please enter a username");
      return;
    }

    if (password === "") {
      setError("Please enter a password");
      return;
    }

    // Clear error message
    setError("");

    console.log("Logging in...");
  };

  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div>{error}</div>}
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
