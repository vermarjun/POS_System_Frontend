import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

// Sample data
const data = [
  { name: "Jan", sales: 300 },
  { name: "Feb", sales: 600 },
  { name: "Mar", sales: 800 },
  { name: "Apr", sales: 500 },
  { name: "May", sales: 700 },
  { name: "Jun", sales: 900 },
];

function BusinessCharts() {
  return (
    <ChartWrapper>
      <h2>Business Performance Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="sales" stroke="#0077cc" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" label={{ value: "Months", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Sales ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f4f4f4",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            labelStyle={{ fontWeight: "bold" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default BusinessCharts;

// Styled Components
const ChartWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    color: #0044cc;
    text-align: center;
    margin-bottom: 20px;
  }

  .recharts-wrapper {
    display: flex;
    justify-content: center;
  }
`;
