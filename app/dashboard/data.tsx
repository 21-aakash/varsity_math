"use client";
import React from "react";
import DashboardLayout from "./DashboardLayout";
import WelcomeCard from "./Cards/WelcomeCard";
import CourseCard from "./Cards/CourseCard";
import WeeklyBarChart from "./Charts/WeeklyBarChart";
import RankingsCard from "./Cards/RankingsCard";
import InstructorsCard from "./Cards/InstructorsCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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

export default function DasshboardPage() {
  const currentStudent = { name: "Aakash Tembhare", batch: 2025, age: 20, location: "Indore" };

  return (
    
    <DashboardLayout>
     
<Box sx={{ flexGrow: 1 }}>
    {/* TODO: Fetch real dashboard data from API using useEffect and state */}
    {/* TODO: Check for valid auth token/session before rendering */}
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 8 }}>
        <WelcomeCard student={currentStudent} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <CourseCard course={{ name: "Full Stack Development", start: "July 2025" }} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <WeeklyBarChart title="Maths Weekly Results" dataKey="Maths" color="#2563eb" data={weeklyResults} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <WeeklyBarChart title="Science Weekly Results" dataKey="Science" color="#16a34a" data={weeklyResults} />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <RankingsCard rankings={rankings} currentStudent={currentStudent.name} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <InstructorsCard instructors={instructors} />
      </Grid>
    </Grid>
</Box>
    </DashboardLayout>
  );
}
