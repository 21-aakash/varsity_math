import React from "react";
import { Card, CardHeader, CardContent, Avatar, Typography, Box } from "@mui/material";

interface Instructor {
  id: number;
  name: string;
  subject: string;
  photo: string;
}

interface InstructorsCardProps {
  instructors: Instructor[];
}

export default function InstructorsCard({ instructors }: InstructorsCardProps) {
  return (
    <Card elevation={3}>
      <CardHeader title="Course Instructors" />
      <CardContent>
        {instructors.map((ins) => (
          <Box
            key={ins.id}
            display="flex"
            alignItems="center"
            gap={2}
            p={1}
            mb={1}
            style={{ background: "#f9fafb", borderRadius: "8px" }}
          >
            <Avatar src={ins.photo} />
            <div>
              <Typography variant="subtitle1">{ins.name}</Typography>
              <Typography variant="body2" color="textSecondary">{ins.subject}</Typography>
            </div>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
