"use client";

import React from "react";
import { Box, Grid, Card, CardHeader, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const payments = [
  { id: 1, type: "Tuition Fee", amount: 5000, status: "Paid" },
  { id: 2, type: "Lab Fee", amount: 1000, status: "Pending" },
  { id: 3, type: "Library Fee", amount: 500, status: "Paid" },
];

export default function PaymentInfo() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {payments.map((pay) => (
          <Grid item xs={12} sm={6} md={4} key={pay.id}>
            <Card elevation={3}>
              <CardHeader title={pay.type} />
              <CardContent>
                <Typography variant="body2">Amount: ₹{pay.amount}</Typography>
                <Typography
                  variant="body2"
                  color={pay.status === "Paid" ? "green" : "error"}
                  fontWeight="bold"
                >
                  Status: {pay.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
