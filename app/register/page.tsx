// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import {
//   TextField,
//   Button,
//   IconButton,
//   InputAdornment,
//   CircularProgress,
// } from "@mui/material";
// import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Left illustration
// const registerBgUrl = "/assets/7915126_3805173.svg";
// import Navbar from "@/components/Navbar";
// import BgUrl from "@/public/back.jpg";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState<{
//     name?: string;
//     email?: string;
//     phone?: string;
//     password?: string;
//   }>({});
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     const newErrors: {
//       name?: string;
//       email?: string;
//       phone?: string;
//       password?: string;
//     } = {};

//     if (!name) newErrors.name = "Name is required";
//     if (!email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email))
//       newErrors.email = "Enter a valid email";

//     if (!phone) newErrors.phone = "Phone is required";
//     else if (!/^\d{10}$/.test(phone))
//       newErrors.phone = "Enter a valid 10-digit phone";

//     if (!password) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, phone, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("Registration successful 🎉", {
//           position: "top-right",
//           autoClose: 2000,
//         });

//         setTimeout(() => {
//           router.push("/login");
//         }, 2000);
//       } else {
//         toast.error(data.message || "Registration failed");
//       }
//     } catch {
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <ToastContainer />

//       <div
//         style={{
//           backgroundImage: `url(${BgUrl.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="min-h-screen flex items-center justify-center px-2 py-8"
//       >
//         <div className="mt-20 relative flex flex-col md:flex-row bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
//           {/* Close Button */}
//           <button
//             onClick={() => router.push("/")}
//             className="absolute top-2 right-2 !m-0 text-gray-700 hover:text-red-500 bg-white/70 dark:bg-gray-800/70 z-30"
//             style={{ borderRadius: "50%" }}
//           >
//             <Close fontSize="small" />
//           </button>

//           {/* Left Side Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src={registerBgUrl}
//               alt="Register illustration"
//               loading="lazy"
//               className="w-full h-48 md:h-full object-cover"
//             />
//           </div>

//           {/* Right Side Form */}
//           <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
//             <form
//               onSubmit={handleRegister}
//               className="w-full max-w-xs sm:max-w-sm"
//             >
//               {/* Name */}
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 error={!!errors.name}
//                 helperText={errors.name}
//                 margin="normal"
//                 size="small"
//               />

//               {/* Email */}
//               <TextField
//                 fullWidth
//                 type="email"
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 error={!!errors.email}
//                 helperText={errors.email}
//                 margin="normal"
//                 size="small"
//               />

//               {/* Phone */}
//               <TextField
//                 fullWidth
//                 type="tel"
//                 label="Phone Number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 error={!!errors.phone}
//                 helperText={errors.phone}
//                 margin="normal"
//                 size="small"
//               />

//               {/* Password */}
//               <TextField
//                 fullWidth
//                 type={showPassword ? "text" : "password"}
//                 label="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 error={!!errors.password}
//                 helperText={errors.password}
//                 margin="normal"
//                 size="small"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                         size="small"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               {/* Submit */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="success"
//                 disabled={loading}
//                 className="mt-6 flex justify-center items-center"
//                 sx={{
//                   textTransform: "none",
//                   fontSize: "0.9rem",
//                   py: 1.2,
//                   borderRadius: "0.75rem",
//                   fontWeight: 700,
//                   letterSpacing: 1,
//                 }}
//               >
//                 {loading ? <CircularProgress size={20} /> : "Register"}
//               </Button>

//               <p className="mt-4 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 Already have an account?{" "}
//                 <span
//                   onClick={() => router.push("/login")}
//                   className="text-blue-700 dark:text-blue-400 hover:underline cursor-pointer font-semibold"
//                 >
//                   Login
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
