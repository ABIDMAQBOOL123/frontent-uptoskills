import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("Verifying your email...");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Token from URL:", token);
    const verifyEmail = async () => {
      try {
        // Send the token to your backend for verification
        const response = await axios.post(
          `http://localhost:5000/verifyEmail/${token}`
        );
        setMessage(response.data.message || "Email verified successfully!");
      } catch (err) {
        console.error("Email verification error:", err);
        setError(
          err.response?.data?.error || "Verification failed. Please try again."
        );
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="verify-email-container">
      {error ? (
        <div className="error-message">
          <h2>Verification Failed</h2>
          <p>{error}</p>
        </div>
      ) : (
        <div className="success-message">
          <h2>Email Verification</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
