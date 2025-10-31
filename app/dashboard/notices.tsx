"use client";

import React from "react";
import { Box, Grid, Card, CardHeader, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const notices = [
  { id: 1, title: "School Reopens", date: "2025-06-01" },
  { id: 2, title: "Parent-Teacher Meeting", date: "2025-06-15" },
  { id: 3, title: "Exam Schedule Released", date: "2025-06-20" },
];

export default function Notices() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {notices.map((notice) => (
          <Grid item xs={12} sm={6} md={4} key={notice.id}>
            <Card elevation={3}>
              <CardHeader title={notice.title} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Date: {notice.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
