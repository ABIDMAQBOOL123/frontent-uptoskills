import React, { useEffect } from "react";

const SignInButton = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement("script");
    script.src = "https://www.phone.email/sign_in_button_v1.js";
    script.async = true;
    document.querySelector(".pe_signin_button").appendChild(script);

    // Define the listener function
    window.phoneEmailListener = function (userObj) {
      const user_json_url = userObj.user_json_url;

      fetch("https://upto-skills.onrender.com/verify-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_json_url }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error("Verification failed:", data.error);
          } else {
            console.log("User details received:", data);
            alert(`Welcome ${data.user_first_name} ${data.user_last_name}!`);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return () => {
      // Cleanup the listener function when the component unmounts
      window.phoneEmailListener = null;
    };
  }, []);

  return (
    <div
      className="pe_signin_button"
      data-client-id="16034658396659429576"
    ></div>
  );
};

export default SignInButton;
