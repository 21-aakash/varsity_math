// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { StudentSchema, type Student } from "@/lib/prisma"; // put schema in lib/types.ts


// export default function Dashboard() {
//   const [student, setStudent] = useState<Student | null>(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchDetails() {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await fetch("/api/student/details", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!res.ok) {
//           router.push("/login");
//           return;
//         }

//         const data = await res.json();
//         const parsed = StudentSchema.safeParse(data);

//         if (!parsed.success) {
//           console.error("Invalid data:", parsed.error);
//           router.push("/login");
//           return;
//         }

//         if (!parsed.data.admission) {
//           router.push("/admission");
//         } else {
//           setStudent(parsed.data);
//           setLoading(false);
//         }
//       } catch (err) {
//         console.error("Error fetching student details:", err);
//         router.push("/login");
//       }
//     }
//     fetchDetails();
//   }, [router]);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (!student) return null;

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold">🎓 Student Dashboard</h1>

//       <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-2xl">
//         <div className="flex items-center space-x-4">
//           <img
//             src={student.admission?.profilePic || "/default-avatar.png"}
//             alt="Profile"
//             className="w-20 h-20 rounded-full border"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">{student.name}</h2>
//             <p className="text-gray-600">{student.email}</p>
//           </div>
//         </div>

//         {student.admission && (
//           <div className="mt-4">
//             <p><strong>Phone:</strong> {student.phone}</p>
//             <p><strong>Class:</strong> {student.admission.class}</p>
//             <p><strong>Board:</strong> {student.admission.board}</p>
//             <p><strong>Medium:</strong> {student.admission.medium}</p>
//             <p><strong>School:</strong> {student.admission.school}</p>
//             <p><strong>Admission Date:</strong> {student.admission.admissionDate}</p>
//           </div>
//         )}

//         <p className="mt-4">
//           Status:{" "}
//           <span
//             className={`px-2 py-1 rounded ${
//               student.admission?.admission
//                 ? "bg-green-200 text-green-800"
//                 : "bg-red-200 text-red-800"
//             }`}
//           >
//             {student.admission?.admission ? "🟢 Admitted" : "🔴 Pending"}
//           </span>
//         </p>

//         <button
//           className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//           onClick={() => {
//             localStorage.removeItem("token");
//             router.push("/");
//           }}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  CreditCard,
  BookOpen,
  BarChart,
  Bell,
  LogOut,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart as ReBarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data
const weeklyResults = [
  { week: "Week 1", Maths: 80, Science: 70 },
  { week: "Week 2", Maths: 85, Science: 75 },
  { week: "Week 3", Maths: 78, Science: 82 },
  { week: "Week 4", Maths: 90, Science: 88 },
];

const rankings = [
  { id: 1, name: "Ravi Sharma", rank: 1 },
  { id: 2, name: "Aakash Tembhare", rank: 2 },
  { id: 3, name: "Simran Kaur", rank: 3 },
  { id: 4, name: "Arjun Mehta", rank: 4 },
];

const instructors = [
  { id: 1, name: "Mr. Verma", subject: "Maths", photo: "https://i.pravatar.cc/100?img=5" },
  { id: 2, name: "Ms. Gupta", subject: "Science", photo: "https://i.pravatar.cc/100?img=6" },
  { id: 3, name: "Mr. Khan", subject: "English", photo: "https://i.pravatar.cc/100?img=7" },
];

// Theme variables
const theme = {
  primary: "bg-blue-600",
  primaryText: "text-blue-600",
  cardBg: "bg-white",
  cardShadow: "shadow-lg",
  sidebarBg: "bg-gray-900",
  sidebarText: "text-gray-100",
  sidebarHover: "hover:bg-gray-800",
};

export default function StudentDashboard() {
  const currentStudent = "Aakash Tembhare";

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`${theme.sidebarBg} text-white w-64 flex flex-col`}>
        <div className="p-6 text-xl font-bold border-b border-gray-700">
          Coaching Portal
        </div>
        <div className="flex-1">
          <ul className="p-4 space-y-2">
            <li className={`${theme.sidebarHover} p-2 rounded flex items-center gap-2 cursor-pointer`}>
              <Home size={18}/> Dashboard
            </li>
            <li className={`${theme.sidebarHover} p-2 rounded flex items-center gap-2 cursor-pointer`}>
              <CreditCard size={18}/> Payment Info
            </li>
            <li className={`${theme.sidebarHover} p-2 rounded flex items-center gap-2 cursor-pointer`}>
              <BookOpen size={18}/> Take Admission
            </li>
            <li className={`${theme.sidebarHover} p-2 rounded flex items-center gap-2 cursor-pointer`}>
              <BarChart size={18}/> Courses
            </li>
            <li className={`${theme.sidebarHover} p-2 rounded flex items-center gap-2 cursor-pointer`}>
              <Users size={18}/> Results
            </li>
            <li className={`${theme.sidebarHover} p-2 rounded flex items-center gap-2 cursor-pointer`}>
              <Bell size={18}/> Notices
            </li>
          </ul>
        </div>
        <div className="p-4 border-t border-gray-700">
          <Button variant="ghost" className="w-full text-red-400 hover:text-red-500">
            <LogOut className="mr-2 h-4 w-4"/> Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <Card className={`${theme.cardBg} ${theme.cardShadow} col-span-2`}>
            <CardHeader>
              <CardTitle>Welcome back, {currentStudent} 🎉</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-6">
              <img
                src="https://i.pravatar.cc/120?img=11"
                alt="student"
                className="w-28 h-28 rounded-full border-4 border-blue-500"
              />
              <div>
                <p className="text-gray-600">Batch: 2025</p>
                <p className="text-gray-600">Age: 20</p>
                <p className="text-gray-600">Location: Indore</p>
              </div>
            </CardContent>
          </Card>

          {/* Enrolled Course */}
          <Card className={`${theme.cardBg} ${theme.cardShadow}`}>
            <CardHeader>
              <CardTitle>Current Course</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Full Stack Development</p>
              <p className="text-sm text-gray-500">Started: July 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className={`${theme.cardBg} ${theme.cardShadow}`}>
            <CardHeader><CardTitle>Maths Weekly Results</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <ReBarChart data={weeklyResults}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Maths" fill="#2563eb" radius={[8, 8, 0, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className={`${theme.cardBg} ${theme.cardShadow}`}>
            <CardHeader><CardTitle>Science Weekly Results</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <ReBarChart data={weeklyResults}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Science" fill="#16a34a" radius={[8, 8, 0, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Rankings + Instructors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Rankings */}
          <Card className={`${theme.cardBg} ${theme.cardShadow}`}>
            <CardHeader><CardTitle>Student Rankings</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {rankings.map((student) => (
                  <motion.li
                    key={student.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-2 rounded flex justify-between items-center ${
                      student.name === currentStudent ? "bg-blue-100" : "bg-gray-50"
                    }`}
                  >
                    <span>{student.rank}. {student.name}</span>
                    {student.name === currentStudent && (
                      <span className="text-blue-600 font-bold">You</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Instructors */}
          <Card className={`${theme.cardBg} ${theme.cardShadow}`}>
            <CardHeader><CardTitle>Course Instructors</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {instructors.map((instructor) => (
                  <motion.div
                    key={instructor.id}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-2 rounded bg-gray-50"
                  >
                    <img
                      src={instructor.photo}
                      alt={instructor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{instructor.name}</p>
                      <p className="text-sm text-gray-500">{instructor.subject}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

