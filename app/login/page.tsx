// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import {
// //   TextField,
// //   Button,
// //   IconButton,
// //   InputAdornment,
// //   Alert,
// // } from "@mui/material";
// // import { Visibility, VisibilityOff, Close } from "@mui/icons-material";


// // // Use public path for SVG image
// // const loginBgUrl = "/assets/7915118_3805103.svg";
// // import Navbar from "@/components/Navbar";
// // import BgUrl from "@/public/back.jpg";


// // export default function LoginForm() {
// //   const router = useRouter();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
// //     {}
// //   );
// //   const [authError, setAuthError] = useState<string>("");

// //   const handleLogin = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setAuthError("");

// //     if (!validate()) return;

// //     try {
// //       const res = await fetch("/api/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await res.json();

// //       if (res.ok && data.token) {
// //         localStorage.setItem("token", data.token);
// //         router.push("/dashboard");
// //       } else {
// //         setAuthError(data.message || "Invalid email or password");
// //       }
// //     } catch {
// //       setAuthError("Something went wrong. Please try again.");
// //     }
// //   };

// //   const validate = () => {
// //     const newErrors: { email?: string; password?: string } = {};
// //     if (!email) newErrors.email = "Email is required";
// //     else if (!/\S+@\S+\.\S+/.test(email))
// //       newErrors.email = "Enter a valid email";

// //     if (!password) newErrors.password = "Password is required";
// //     else if (password.length < 6)
// //       newErrors.password = "Password must be at least 6 characters";

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   return (

// //     <>
  
// //     <Navbar/>

// // <div
// //   style={{
// //     backgroundImage: `url(${BgUrl.src})`,
// //     backgroundSize: "cover",
// //     backgroundPosition: "center",
// //   }}
// //   className="min-h-screen  flex items-center justify-center px-2 py-8"
// // >
// //   <div className="mt-20 relative flex flex-col  md:flex-row bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden">
   

// //    <button
// //   onClick={() => router.push("/")}
// //   className="absolute top-2 right-2 !m-0 text-gray-700 hover:text-red-500 bg-white/70 dark:bg-gray-800/70  z-30"
// //   style={{ borderRadius: "50%" }}
// // >
// //   <Close fontSize="small" />
// // </button>



// //     {/* Left Side Image */}
// //     <div className="w-full md:w-1/2">
// //       <img
// //         src={loginBgUrl}
// //         alt="Login illustration"
// //         loading="lazy"
// //         className="w-full h-48 md:h-full object-cover"
// //       />
      
// //     </div>

// //     {/* Right Side Form */}
// //     <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
      
      
     
      
      
      
// //       <form onSubmit={handleLogin} className="w-full max-w-xs sm:max-w-sm">
// //         {/* Email Input */}
// //         <TextField
// //           fullWidth
// //           type="email"
// //           size="small"
// //           label="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           error={!!errors.email}
// //           helperText={errors.email}
// //           margin="normal"
// //           variant="outlined"
// //         />

// //         {/* Password Input */}
// //         <TextField
// //           fullWidth
// //           size="small"
// //           type={showPassword ? "text" : "password"}
// //           label="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           error={!!errors.password}
// //           helperText={errors.password}
// //           margin="normal"
// //           variant="outlined"
// //           InputProps={{
// //             endAdornment: (
// //               <InputAdornment position="end">
// //                 <IconButton
// //                   onClick={() => setShowPassword(!showPassword)}
// //                   edge="end"
// //                   size="small"
// //                 >
// //                   {showPassword ? <VisibilityOff /> : <Visibility />}
// //                 </IconButton>
// //               </InputAdornment>
// //             ),
// //           }}
// //         />

// //         {/* Error Alert */}
// //         {authError && (
// //           <Alert
// //             severity="error"
// //             className="mt-3 text-xs sm:text-sm"
// //             sx={{ borderRadius: "10px" }}
// //           >
// //             {authError}
// //           </Alert>
// //         )}

// //         {/* Submit Button */}
// //         <Button
// //           type="submit"
// //           fullWidth
// //           variant="contained"
// //           color="primary"
// //           className="mt-6"
// //           sx={{
// //             textTransform: "none",
// //             fontSize: "0.9rem",
// //             py: 1.2,
// //             borderRadius: "0.75rem",
// //             fontWeight: 700,
// //             letterSpacing: 1,
// //           }}
// //         >
// //           Login
// //         </Button>

// //         <p className="mt-4 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //           Don’t have an account?{" "}
// //           <span
// //             onClick={() => router.push("/register")}
// //             className="text-blue-700 dark:text-blue-400 hover:underline cursor-pointer font-semibold"
// //           >
// //             Register
// //           </span>
// //         </p>
// //       </form>
// //     </div>


// //   </div>





// // </div>



// //   </>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   TextField,
//   Button,
//   IconButton,
//   InputAdornment,
//   Alert,
//   CircularProgress,
// } from "@mui/material";
// import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const loginBgUrl = "/assets/7915118_3805103.svg";
// import Navbar from "@/components/Navbar";
// import BgUrl from "@/public/back.jpg";

// export default function LoginForm() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
//     {}
//   );
//   const [authError, setAuthError] = useState<string>("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setAuthError("");

//     if (!validate()) return;

//     setLoading(true); // start loader
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok && data.token) {
//         localStorage.setItem("token", data.token);
//         toast.success("Login successful 🎉", {
//           position: "top-right",
//           autoClose: 2000,
//         });

//         setTimeout(() => {
//           router.push("/dashboard/Sidebar");
//         }, 2000);
//       } else {
//         setAuthError(data.message || "Invalid email or password");
//         toast.error(data.message || "Invalid email or password");
//       }
//     } catch {
//       setAuthError("Something went wrong. Please try again.");
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false); // stop loader
//     }
//   };

//   const validate = () => {
//     const newErrors: { email?: string; password?: string } = {};
//     if (!email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email))
//       newErrors.email = "Enter a valid email";

//     if (!password) newErrors.password = "Password is required";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   return (
//     <>
//       <Navbar />
//       <ToastContainer /> {/* Toast container */}

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
//               src={loginBgUrl}
//               alt="Login illustration"
//               loading="lazy"
//               className="w-full h-48 md:h-full object-cover"
//             />
//           </div>

//           {/* Right Side Form */}
//           <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
//             <form onSubmit={handleLogin} className="w-full max-w-xs sm:max-w-sm">
//               {/* Email Input */}
//               <TextField
//                 fullWidth
//                 type="email"
//                 size="small"
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 error={!!errors.email}
//                 helperText={errors.email}
//                 margin="normal"
//                 variant="outlined"
//               />

//               {/* Password Input */}
//               <TextField
//                 fullWidth
//                 size="small"
//                 type={showPassword ? "text" : "password"}
//                 label="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 error={!!errors.password}
//                 helperText={errors.password}
//                 margin="normal"
//                 variant="outlined"
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

//               {/* Error Alert */}
//               {authError && (
//                 <Alert
//                   severity="error"
//                   className="mt-3 text-xs sm:text-sm"
//                   sx={{ borderRadius: "10px" }}
//                 >
//                   {authError}
//                 </Alert>
//               )}

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
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
//                 {loading ? <CircularProgress size={20} /> : "Login"}
//               </Button>

//               <p className="mt-4 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 Don’t have an account?{" "}
//                 <span
//                   onClick={() => router.push("/register")}
//                   className="text-blue-700 dark:text-blue-400 hover:underline cursor-pointer font-semibold"
//                 >
//                   Register
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
