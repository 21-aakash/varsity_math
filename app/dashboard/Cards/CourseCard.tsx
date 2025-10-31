import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

interface Course {
  name: string;
  start: string; // e.g., "July 2025"
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card elevation={3}>
      <CardHeader title="Current Course" />
      <CardContent>
        <Typography variant="h6">{course.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Started: {course.start}
        </Typography>
      </CardContent>
    </Card>
  );
}
