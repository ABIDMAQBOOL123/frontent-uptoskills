// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// import "react-toastify/dist/ReactToastify.css";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// const testimonials = [
//   {
//     text: "With Realto, we have been able to move to another country in 4 weeks. Incredible!",
//     author: "- Eliska Trebalska",
//   },
//   {
//     text: "First touch with Realto has been amazing; the platform works effortlessly and delivers results.",
//     author: "- Jurek Jakowski",
//   },
//   {
//     text: "Realto made our dreams come true; highly recommend to anyone looking for seamless service.",
//     author: "- Alex Doe",
//   },
// ];

// const Login = () => {
//   useEffect(() => {
//     console.log("Google Client ID:", clientId);
//   }, []);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);
//   const [role, setRole] = useState("student");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("All fields are required!");
//       return;
//     }

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//       toast.error("Please enter a valid email address!");
//       return;
//     }

//     if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
//       toast.error(
//         "Password must have at least one uppercase letter, one number, and one special character."
//       );
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//         role,
//       });

//       console.log("API Response:", res.data.user.role);

//       switch (res.data.user.role) {
//         case "student":
//           navigate("/student-dashboard");
//           break;
//         case "hr":
//           navigate("/hrdashboard");
//           break;
//         case "faculty":
//           navigate("/facultydashboard");
//           break;
//         default:
//           alert("Invalid role!");
//       }
//     } catch (error) {
//       console.error("Registration Error:", error);
//       toast.error(error.response?.data?.error || "Registration failed");
//     }
//   };

//   const handleGoogleLoginSuccess = async (credentialResponse) => {
//     console.log("google client id", clientId);
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/google-signin",
//         {
//           token: credentialResponse.credential,
//           role: role,
//         }
//       );

//       console.log("Google Login Response:", res.data.user.role);

//       switch (res.data.user.role) {
//         case "student":
//           navigate("/student-dashboard");
//           break;
//         case "hr":
//           navigate("/hrdashboard");
//           break;
//         case "faculty":
//           navigate("/facultydashboard");
//           break;
//         default:
//           alert("Invalid role!");
//       }
//     } catch (error) {
//       toast.error("Google login failed. Please try again.");
//       console.error("Google Login Error:", error);
//     }
//   };

//   const handleGoogleLoginFailure = () => {
//     console.log("google client id", clientId);
//     toast.error("Google login failed. Please try again.");
//   };

//   const handleLinkedInLogin = () => {
//     // Redirect to LinkedIn OAuth URL or handle LinkedIn login logic
//     //   window.location.href =
//     //     "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86glg3suoipoz8&redirect_uri=http://localhost:5173/auth/linkedin/callback&state= randomsecurestring123;&scope=r_liteprofile%20r_emailaddress";
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex items-center justify-center">
//         {/* Blur overlay */}
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

//         {/* Modal content */}
//         <div className="relative z-50 w-full max-w-3xl mx-4">
//           <div className="flex flex-col md:flex-row border border-black bg-white rounded-2xl shadow-lg overflow-hidden">
//             {/* Left Panel */}
//             <div className="w-full md:w-[400px] p-5 bg-[#03BCA5] text-white rounded-l-2xl flex flex-col items-center">
//               <img
//                 src="/UptoSkills.png"
//                 alt="UptoSkills"
//                 className="bg-white w-[70%] rounded-full"
//               />
//               <h2 className="text-2xl font-bold mt-8 text-center">
//                 Start your remarkable <br />
//                 journey with us!
//               </h2>
//               <p className="text-sm mt-4 font-light text-center">
//                 Step into a world where potential meets possibility welcome to
//                 UptoSkills, where your journey to mastery begins!
//               </p>
//             </div>

//             {/* Right Panel */}
//             <div className="w-full md:w-1/2 p-6 bg-white rounded-r-2xl">
//               {/* Close button */}
//               <div className="relative">
//                 <button
//                   onClick={() => navigate("/")}
//                   className="absolute right-0 top-0 text-2xl hover:text-orange-500"
//                 >
//                   ×
//                 </button>
//               </div>

//               <div className="w-full max-w-[350px] mx-auto">
//                 <div className="flex justify-center mb-4 h-12">
//                   <img src="/UptoSkills.png" alt="UptoSkills" />
//                 </div>

//                 {/* Role selection */}
//                 <div className="flex justify-center mb-4">
//                   <div className="flex bg-gray-200 rounded-lg">
//                     {["student", "hr", "faculty"].map((r) => (
//                       <button
//                         key={r}
//                         className={`px-4 py-2 rounded-lg ${
//                           role === r
//                             ? "bg-blue-600 text-white"
//                             : "bg-transparent"
//                         }`}
//                         onClick={() => setRole(r)}
//                       >
//                         {r.charAt(0).toUpperCase() + r.slice(1)}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Login Form */}
//                 <form onSubmit={handleLogin} className="space-y-4">
//                   {error && (
//                     <div className="text-red-500 text-sm text-center">
//                       {error}
//                     </div>
//                   )}

//                   <div className="space-y-3">
//                     <div className="relative">
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF6D34] outline-none"
//                         required
//                       />
//                       <span className="absolute right-3 top-1/2 -translate-y-1/2">
//                         <img src="/Email-Icon.png" alt="" className="w-5 h-5" />
//                       </span>
//                     </div>

//                     <div className="relative">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF6D34] outline-none"
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 -translate-y-1/2"
//                       >
//                         {showPassword ? "🐵" : "🙈"}
//                       </button>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <a
//                       onClick={() => navigate("/forgot-password")}
//                       className="text-[#FF6D34] hover:text-[#ff5722] text-sm"
//                     >
//                       🔒 Forgot Password?
//                     </a>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
//                   >
//                     Login
//                   </button>
//                 </form>

//                 <Link to="/register">
//                   <button className="w-full mt-4 p-2 border border-gray-300 rounded-lg hover:border-orange-500 transition-colors">
//                     Don't have an Account{" "}
//                     <span className="text-orange-500">Sign Up</span>
//                   </button>
//                 </Link>

//                 <div className="mt-6">
//                   <div className="flex items-center">
//                     <div className="flex-1 h-px bg-gray-300"></div>
//                     <span className="px-4 text-sm text-gray-500">
//                       Or Continue With
//                     </span>
//                     <div className="flex-1 h-px bg-gray-300"></div>
//                   </div>

//                   <div className="flex flex-col md:flex-row gap-3 mt-4">
//                     <GoogleOAuthProvider clientId={clientId}>
//                       <GoogleLogin
//                         onSuccess={handleGoogleLoginSuccess}
//                         onError={handleGoogleLoginFailure}
//                         useOneTap
//                         render={(renderProps) => (
//                           <button
//                             className="flex items-center justify-center  border border-gray-300 rounded-lg hover:border-[#FF6D34] hover:bg-[#fef3ec] transition-colors w-full md:w-1/2"
//                             onClick={renderProps.onClick}
//                             disabled={renderProps.disabled}
//                           >
//                             <img
//                               src="/google-icon.png"
//                               alt="Google Icon"
//                               className="w-5 h-5"
//                             />
//                             Continue with Google
//                           </button>
//                         )}
//                       />
//                     </GoogleOAuthProvider>

//                     {/* LinkedIn Login Button */}
//                     <button
//                       onClick={handleLinkedInLogin}
//                       className="flex items-center justify-center  border border-gray-300 rounded-lg hover:border-[#FF6D34] hover:bg-[#fef3ec] transition-colors w-full md:w-1/2"
//                     >
//                       <img
//                         src="/linkedin-icon.png"
//                         alt="LinkedIn Icon"
//                         className="w-5 h-4"
//                       />
//                       Continue with LinkedIn
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const testimonials = [
  {
    text: "With Realto, we have been able to move to another country in 4 weeks. Incredible!",
    author: "- Eliska Trebalska",
  },
  {
    text: "First touch with Realto has been amazing; the platform works effortlessly and delivers results.",
    author: "- Jurek Jakowski",
  },
  {
    text: "Realto made our dreams come true; highly recommend to anyone looking for seamless service.",
    author: "- Alex Doe",
  },
];

const Login = () => {
  useEffect(() => {
    console.log("Google Client ID:", clientId);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false); // New state for forgot password
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
      toast.error(
        "Password must have at least one uppercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
        role,
      });

      console.log("API Response:", res.data.user.role);

      switch (res.data.user.role) {
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
          alert("Invalid role!");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(error.response?.data?.error || "Registration failed");
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    console.log("google client id", clientId);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/google-signin",
        {
          token: credentialResponse.credential,
          role: role,
        }
      );

      console.log("Google Login Response:", res.data.user.role);

      switch (res.data.user.role) {
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
          alert("Invalid role!");
      }
    } catch (error) {
      toast.error("Google login failed. Please try again.");
      console.error("Google Login Error:", error);
    }
  };

  const handleGoogleLoginFailure = () => {
    console.log("google client id", clientId);
    toast.error("Google login failed. Please try again.");
  };

  const handleLinkedInLogin = () => {
    // Redirect to LinkedIn OAuth URL or handle LinkedIn login logic
    //   window.location.href =
    //     "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86glg3suoipoz8&redirect_uri=http://localhost:5173/auth/linkedin/callback&state= randomsecurestring123;&scope=r_liteprofile%20r_emailaddress";
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          email,
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to send reset link.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Modal content */}
        <div className="relative z-50 w-full max-w-3xl mx-4">
          <div className="flex flex-col md:flex-row border border-black bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Left Panel */}
            <div className="w-full md:w-[400px] p-5 bg-[#03BCA5] text-white rounded-l-2xl flex flex-col items-center">
              <img
                src="/UptoSkills.png"
                alt="UptoSkills"
                className="bg-white w-[70%] rounded-full"
              />
              <h2 className="text-2xl font-bold mt-8 text-center">
                Start your remarkable <br />
                journey with us!
              </h2>
              <p className="text-sm mt-4 font-light text-center">
                Step into a world where potential meets possibility welcome to
                UptoSkills, where your journey to mastery begins!
              </p>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-1/2 p-6 bg-white rounded-r-2xl">
              {/* Close button */}
              <div className="relative">
                <button
                  onClick={() => navigate("/")}
                  className="absolute right-0 top-0 text-2xl hover:text-orange-500"
                >
                  ×
                </button>
              </div>

              <div className="w-full max-w-[350px] mx-auto">
                <div className="flex justify-center mb-4 h-12">
                  <img src="/UptoSkills.png" alt="UptoSkills" />
                </div>

                {/* Role selection */}
                {!isForgotPassword && (
                  <div className="flex justify-center mb-4">
                    <div className="flex bg-gray-200 rounded-lg">
                      {["student", "hr", "faculty"].map((r) => (
                        <button
                          key={r}
                          className={`px-4 py-2 rounded-lg ${
                            role === r
                              ? "bg-blue-600 text-white"
                              : "bg-transparent"
                          }`}
                          onClick={() => setRole(r)}
                        >
                          {r.charAt(0).toUpperCase() + r.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Login Form or Forgot Password Form */}
                {!isForgotPassword ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    {error && (
                      <div className="text-red-500 text-sm text-center">
                        {error}
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF6D34] outline-none"
                          required
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2">
                          <img
                            src="/Email-Icon.png"
                            alt=""
                            className="w-5 h-5"
                          />
                        </span>
                      </div>

                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF6D34] outline-none"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          {showPassword ? "🐵" : "🙈"}
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => setIsForgotPassword(true)}
                        className="text-[#FF6D34] hover:text-[#ff5722] text-sm"
                      >
                        🔒 Forgot Password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Login
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#FF6D34] outline-none"
                        required
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2">
                        <img src="/Email-Icon.png" alt="" className="w-5 h-5" />
                      </span>
                    </div>

                    <button
                      onClick={handleForgotPassword}
                      className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Send Reset Link
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsForgotPassword(false)}
                      className="w-full mt-4 p-2 border border-gray-300 rounded-lg hover:border-orange-500 transition-colors"
                    >
                      Back to Login
                    </button>
                  </div>
                )}

                {!isForgotPassword && (
                  <>
                    <Link to="/register">
                      <button className="w-full mt-4 p-2 border border-gray-300 rounded-lg hover:border-orange-500 transition-colors">
                        Don't have an Account{" "}
                        <span className="text-orange-500">Sign Up</span>
                      </button>
                    </Link>

                    <div className="mt-6">
                      <div className="flex items-center">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">
                          Or Continue With
                        </span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <GoogleOAuthProvider clientId={clientId}>
                          <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={handleGoogleLoginFailure}
                            useOneTap
                            render={(renderProps) => (
                              <button
                                className="flex items-center justify-center  border border-gray-300 rounded-lg hover:border-[#FF6D34] hover:bg-[#fef3ec] transition-colors w-full md:w-1/2"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                              >
                                <img
                                  src="/google-icon.png"
                                  alt="Google Icon"
                                  className="w-5 h-5"
                                />
                                Continue with Google
                              </button>
                            )}
                          />
                        </GoogleOAuthProvider>

                        {/* LinkedIn Login Button */}
                        <button
                          onClick={handleLinkedInLogin}
                          className="flex items-center justify-center  border border-gray-300 rounded-lg hover:border-[#FF6D34] hover:bg-[#fef3ec] transition-colors w-full md:w-1/2"
                        >
                          <img
                            src="/linkedin-icon.png"
                            alt="LinkedIn Icon"
                            className="w-5 h-4"
                          />
                          Continue with LinkedIn
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
