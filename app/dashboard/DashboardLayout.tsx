import React, { ReactNode } from "react";
import Sidebar from "./Sidebar/page";
import "./DashboardLayout.css";

interface DashboardLayoutProps {
  children: ReactNode; // Type for React children content
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar always visible */}
      <Sidebar />

      {/* Main content area */}
      <main
        className="dashboard-content"
        style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}
      >
        {children}
      </main>
    </div>
  );
}
