"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
      return;
    }

    if (!res.ok) {
      console.error("Login failed:", data.message);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center text-gray-700 hover:text-blue-600"
      >
        <span className="mr-1">←</span> Back
      </button>

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}


// // app/login/page.tsx
// "use client";

// import { useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");

//   // Step 1: Send OTP
//   const sendOtp = async () => {
//     const { error } = await supabase.auth.signInWithOtp({ email });
//     if (error) alert(error.message);
//     else setOtpSent(true);
//   };

//   // Step 2: Verify OTP
//   const verifyOtp = async () => {
//     const { error } = await supabase.auth.verifyOtp({
//       email,
//       token: otp,
//       type: "magiclink", // use "email" if using numeric OTP
//     });
//     if (error) alert(error.message);
//     else alert("Logged in successfully!");
//   };
 
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       {!otpSent ? (
//         <>
//           <input
//             type="email"
//             placeholder="Enter email"
//             className="p-2 border rounded"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button onClick={sendOtp} className="px-4 py-2 bg-blue-500 text-white rounded">
//             Send OTP
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             className="p-2 border rounded"
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={verifyOtp} className="px-4 py-2 bg-green-500 text-white rounded">
//             Verify OTP
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

