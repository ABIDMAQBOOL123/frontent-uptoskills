import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LinkedInCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    const state = queryParams.get("state");
    const storedState = localStorage.getItem("linkedin_oauth_state");
    const role = localStorage.getItem("linkedin_role");

    const handleCallback = async () => {
      try {
        if (!code || !state || state !== storedState) {
          throw new Error("Invalid authorization state");
        }

        const response = await axios.post(
          "http://localhost:5000/api/auth/linkedin-signin",
          {
            code,
            redirectUri: "http://localhost:5173/auth/linkedin/callback", // Ensure this matches LinkedIn App settings
            role,
          }
        );

        // console.log(response);

        // Handle successful login
        localStorage.removeItem("linkedin_oauth_state");
        localStorage.removeItem("linkedin_role");

        switch (response.data.user.role) {
          case "student":
            navigate("/student-dashboard");
            break;
          case "hr":
            navigate("/hrdashboard");
            break;
          case "faculty":
            navigate("/facultydashboard");
            break;
          default:
            navigate("/");
        }
      } catch (error) {
        toast.error(error.response?.data?.error || "LinkedIn login failed");
      }
    };

    handleCallback();
  }, [location, navigate]);

  return <div>Processing LinkedIn login...</div>;
};

export default LinkedInCallback;
