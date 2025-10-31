"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import {
  Box,
 
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdmissionForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    board: "",
    medium: "",
    school: "",
    admissionDate: "",
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      toast.error("Please confirm that all details are correct.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      formData.append(key, value)
    );
    if (profilePic) formData.append("profilePic", profilePic);
    if (paymentProof) formData.append("paymentProof", paymentProof);

    try {
      const res = await fetch("/api/student/admission", {
        method: "POST",
        body: formData,
      });
      setLoading(false);
      if (res.ok) {
        toast.success("Admission submitted successfully!");
        router.push("/dashboard");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Server error!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f3f4f6",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 800, width: "100%", p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Admission Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                size="small"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                size="small"
                required
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                size="small"
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Class"
                name="class"
                value={form.class}
                onChange={handleChange}
                fullWidth
                size="small"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Board"
                name="board"
                value={form.board}
                onChange={handleChange}
                fullWidth
                size="small"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Medium"
                name="medium"
                value={form.medium}
                onChange={handleChange}
                fullWidth
                size="small"
                select
                required
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="School Name"
                name="school"
                value={form.school}
                onChange={handleChange}
                fullWidth
                size="small"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Admission Date"
                name="admissionDate"
                value={form.admissionDate}
                onChange={handleChange}
                fullWidth
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>

            {/* File Upload Previews */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Profile Picture</Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setProfilePic(e.target.files?.[0] || null)
                }
              />
              {profilePic && (
                <Avatar
                  src={URL.createObjectURL(profilePic)}
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Payment Proof</Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setPaymentProof(e.target.files?.[0] || null)
                }
              />
              {paymentProof && (
                <Avatar
                  src={URL.createObjectURL(paymentProof)}
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
              )}
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                }
                label="I confirm that all the details entered are correct"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? "Submitting..." : "Submit Admission Form"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
}
