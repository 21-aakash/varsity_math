import React from "react";
import { Card, CardHeader, CardContent, Typography, List, ListItem } from "@mui/material";

interface StudentRanking {
  id: number;
  name: string;
  rank: number;
}

interface RankingsCardProps {
  rankings: StudentRanking[];
  currentStudent: string;
}

export default function RankingsCard({ rankings, currentStudent }: RankingsCardProps) {
  return (
    <Card elevation={3}>
      <CardHeader title="Student Rankings" />
      <CardContent>
        <List>
          {rankings.map((student) => (
            <ListItem
              key={student.id}
              style={{
                backgroundColor: student.name === currentStudent ? "#dbeafe" : "#f9fafb",
                borderRadius: "8px",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>
                {student.rank}. {student.name}
              </Typography>
              {student.name === currentStudent && (
                <Typography style={{ color: "#2563eb", fontWeight: "bold" }}>You</Typography>
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
