import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@mui/material";

interface WeeklyBarChartProps {
  title: string;
  dataKey: string;
  color: string;
  data: { week: string; [key: string]: number | string }[]; // flexible for multiple keys
}

export default function WeeklyBarChart({
  title,
  dataKey,
  color,
  data,
}: WeeklyBarChartProps) {
  return (
    <Card elevation={3}>
      <CardHeader title={title} />
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
