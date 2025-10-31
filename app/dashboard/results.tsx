"use client";

import React from "react";
import { Box, Grid, Card, CardHeader, CardContent, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const studentResults = [
  { id: 1, subject: "Maths", marks: 88 },
  { id: 2, subject: "Science", marks: 82 },
  { id: 3, subject: "English", marks: 91 },
  { id: 4, subject: "History", marks: 79 },
];

export default function Results() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title="Student Results" />
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Marks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentResults.map((res) => (
                    <TableRow key={res.id}>
                      <TableCell>{res.subject}</TableCell>
                      <TableCell>{res.marks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
