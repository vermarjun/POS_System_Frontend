import React from "react";
import styled from "styled-components";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

// Registering necessary components for charts
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function FinancialAnalytics() {
  // Demo data
  const profitMargins = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Profit Margin (%)",
        data: [20, 25, 30, 22, 28],
        backgroundColor: "#36A2EB",
        borderColor: "#0044CC",
        borderWidth: 1,
      },
    ],
  };

  const expenseBreakdown = {
    labels: ["Salaries", "Rent", "Utilities", "Marketing", "Miscellaneous"],
    datasets: [
      {
        label: "Expenses",
        data: [5000, 3000, 2000, 1500, 1000],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Wrapper>
      <h3>Financial Analytics</h3>
      <div className="analytics-section">
  {/* Profit Margins */}
  <div className="analytics-card">
    <h4>Profit Margins</h4>
    <Bar data={profitMargins} />
  </div>

  {/* Expense Breakdown */}
  <div className="analytics-card full-width">
    <h4>Expense Breakdown</h4>
    <Pie data={expenseBreakdown} />
  </div>
</div>

      
    </Wrapper>
  );
}

export default FinancialAnalytics;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
    border-bottom: 2px solid #0044cc;
    padding-bottom: 10px;
  }

  .analytics-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Flexible grid layout */
    gap: 20px;

    .analytics-card {
      padding: 20px;
      background: #f5f7fa;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;

      h4 {
        font-size: 1.4rem;
        color: #555;
        margin-bottom: 15px;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }

      /* Specific styling for Expense Breakdown to span full width */
      &.full-width {
        grid-column: span 2; /* Spans two columns in the grid */
      }
    }
  }
`;
