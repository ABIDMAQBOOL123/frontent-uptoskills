import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { Eye, EyeOff } from "lucide-react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const testimonials = [
  {
    text: "Realto's user-friendly interface made the process of relocating a breeze.",
    author: "- Emily Smith",
  },
  {
    text: "From start to finish, the registration process was seamless. Highly recommend!",
    author: "- John Doe",
  },
  {
    text: "I never thought it would be this easy to get started with Realto. Exceptional service!",
    author: "- Anna Lee",
  },
];

const Register = () => {
  // console.log("closeRegisterModal:", closeRegisterModal);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  // Separate state variables for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !password || !confirmPassword) {
      toast.error("All fields are required!"); // Show error toast
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!"); // Show error toast
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
      toast.error(
        "Password must have at least one uppercase letter, one number, and one special character."
      ); // Show error toast
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!"); // Show error toast
      return;
    }

    const phonePattern = /^\+\d{1,4}\d{7,14}$/; // Allowing phone numbers with 7-14 digits
    if (!phonePattern.test(phone)) {
      toast.error("Please enter a valid phone number with country code!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          phone,
          password,
          confirmPassword,
          role,
        },
        { withCredentials: true }
      );

      console.log("API Response:", res.data.user.role);

      toast.success("Registration successful!"); // Show success toast

      // Navigate based on the user's role
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
      toast.error(error.response?.data?.error || "Registration failed"); // Show error toast
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-50">
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Main content wrapper */}
        <div className="relative z-50 flex items-center justify-center min-h-screen bg-transparent p-3">
          <div className="flex flex-col md:flex-row border border-black bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl justify-center">
            {/* Left Panel */}
            <div className="w-[400px] p-5 bg-[#03BCA5] text-white rounded-l-2xl flex flex-col">
              <img
                className="bg-white w-full rounded-full"
                src="/UptoSkills.png"
                alt="UptoSkills"
              />
              <h2 className="text-3xl font-bold mt-4">
                Start your remarkable journey with us!
              </h2>
              <p className="mt-6">
                Step into a world where potential meets possibility. Welcome to
                UptoSkills!
              </p>
              <div className="relative h-32">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute transition-opacity duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="italic">{testimonial.text}</p>
                    <span className="block text-sm">{testimonial.author}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-full p-6 bg-white rounded-r-2xl flex flex-col items-center justify-center md:w-1/2">
              <div className="relative">
                <button
                  onClick={() => navigate("/")}
                  className="absolute -mt-7 ml-[160px] text-2xl hover:text-orange-500"
                >
                  ×
                </button>
              </div>
              <img
                className="h-12 mb-6"
                src="/UptoSkills.png"
                alt="UptoSkills"
              />

              <div className="bg-gray-200 h-10 mb-2 border rounded-lg">
                <div className="flex mb-3">
                  {["student", "hr", "faculty"].map((r) => (
                    <button
                      key={r}
                      className={`px-4 py-2 rounded-lg h-[38px] justify-center ${
                        role === r ? "bg-blue-600 text-white" : "bg-transparent"
                      }`}
                      onClick={() => setRole(r)}
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <form
                className="space-y-4 w-full border border-gray-400 shadow-2xl rounded-lg p-4 max-w-sm"
                onSubmit={handleRegister}
              >
                <p className="text-sm text-[#414143] font-normal text-center">
                  Empower your experience, sign up for a free account today.
                </p>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <div className="flex flex-col gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      aria-label="Username"
                      className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Official Email"
                      required
                      aria-label="Email"
                      className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <PhoneInput
                      country="in"
                      value={phone}
                      onChange={(phone) =>
                        setPhone(phone.startsWith("+") ? phone : "+" + phone)
                      } // Ensure "+" is always there
                      placeholder="Phone number"
                      inputClassName="w-full p-1 border border-gray-400 rounded" // Corrected input styling
                      className="w-[400px]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "🐵" : "🙈"}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      required
                      aria-label="Confirm Password"
                      className="w-full p-1 border border-gray-400 rounded-lg focus:border-[#FF6D34] outline-none"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? "🐵" : "🙈"}
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="updatesCheckbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                      <div>
                        <p className="text-xs">
                          Send me updates via <b>SMS, Email,</b> and{" "}
                          <b>WhatsApp.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-center">
                      By clicking Register, you agree to the{" "}
                      <b className="text-blue-600">Terms & Privacy Policy</b>.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded cursor-pointer"
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Register"}
                  </button>
                </div>
              </form>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="mt-4 w-full max-w-sm p-2 border border-gray-400 shadow-2xl rounded-lg focus:border-[#FF6D34] outline-none text-black-600 hover:border-orange-500"
              >
                Back to <span className="text-orange-500">Login</span>
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
