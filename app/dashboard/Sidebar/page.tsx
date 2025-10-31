"use client";
import React, { useState } from "react";
import PaymentInfo from "../paymentinfo";
import AdmissionForm from "../admissionForm";
import Results from "../results";
import Notices from "../notices";
import DashboardPage from "../data"; // Uncomment and fix path if file exists
import {
  Home,
  CreditCard,
  BookOpen,
  Bell,
  LogOut,
  Users,
} from "lucide-react";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./Sidebar.css";


const menuItems = [
  { icon: <Home size={20} />, label: "My data", key: "data" },
  { icon: <CreditCard size={20} />, label: "Payment History", key: "paymentinfo" },
  { icon: <BookOpen size={20} />, label: "Admission Form", key: "admissionForm" },
  { icon: <Users size={20} />, label: "My Results", key: "results" },
  { icon: <Bell size={20} />, label: "Notices", key: "notices" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState("dashboard");

  const renderContent = () => {
    switch (selected) {
      case "data":
        return <DashboardPage/>; // Replace with <DashboardPage /> when import is fixed
      case "paymentinfo":
        return <PaymentInfo />;
      case "admissionForm":
        return <AdmissionForm />;
      case "results":
        return <Results />;
      case "notices":
        return <Notices />;
      default:
        return <DashboardPage/>; // Replacse with <DashboardPage /> when import is fixed
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="sidebar w-64 bg-white dark:bg-gray-900 border-r">
        <div className="sidebar-header px-6 py-4 font-bold text-lg">
          Coaching Portal
        </div>
        <List>
          {menuItems.map((item, i) => (
            <ListItem key={i} className="sidebar-item" disablePadding>
              <ListItemButton
                selected={selected === item.key}
                onClick={() => setSelected(item.key)}
              >
                <ListItemIcon className="sidebar-icon">{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div className="sidebar-footer p-4">
          <Button
            variant="outlined"
            color="error"
            fullWidth
            startIcon={<LogOut size={18} />}
            sx={{ borderRadius: "8px" }}
          >
            Logout
          </Button>
        </div>
      </div>
      {/* Main content: render selected component */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
}


