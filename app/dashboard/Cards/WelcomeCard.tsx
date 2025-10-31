import React from "react";
import { Card, CardContent, CardHeader, Typography, Avatar } from "@mui/material";

interface Student {
  name: string;
  batch: number;
  age: number;
  location: string;
}

interface WelcomeCardProps {
  student: Student;
}

export default function WelcomeCard({ student }: WelcomeCardProps) {
  return (
    <Card elevation={3} style={{ gridColumn: "span 2" }}>
      <CardHeader title={`Welcome back, ${student.name} 🎉`} />
      <CardContent style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Avatar
          src="https://i.pravatar.cc/120?img=11"
          sx={{ width: 100, height: 100, border: "3px solid #2563eb" }}
        />
        <div>
          <Typography variant="body1">Batch: {student.batch}</Typography>
          <Typography variant="body1">Age: {student.age}</Typography>
          <Typography variant="body1">Location: {student.location}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
