import React, { useState } from "react";
import styled from "styled-components";
import Transactions from "./Transactions.jsx";
import BusinessCharts from "./BusinessCharts.jsx";
import StockAvailability from "./StockAvailability.jsx";
import FinancialAnalytics from "./FinancialAnalytics.jsx";

function Dashboard() {
    
  

  return (
    <Wrapper>
     

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {/* Transactions Section */}
        <section className="dashboard-section">
          <h2>Transaction Overview</h2>
          <Transactions />
          <div className="filters">
            <label>
              Date Range:
              <input type="date" /> to <input type="date" />
            </label>
            <label>
              Payment Method:
              <select>
                <option value="all">All</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="cash">Cash</option>
              </select>
            </label>
          </div>
        </section>

        {/* Sales Insights Section */}
        <section className="dashboard-section">
          <h2>Sales Insights</h2>
          <BusinessCharts />
          <p className="description">Analyze revenue trends and sales performance over daily, weekly, and monthly periods.</p>
        </section>

        {/* Stock Availability Section */}
        <section className="dashboard-section">
          <h2>Inventory Tracking</h2>
          <StockAvailability />
          <p className="description">Track low-stock items and get restocking recommendations to avoid shortages.</p>
        </section>

        {/* Financial Analytics Section */}
        <section className="dashboard-section">
          <h2>Financial Analytics</h2>
          <FinancialAnalytics />
          <p className="description">Gain insights into profit margins, expenses, and AI-powered cost analysis.</p>
        </section>
      </div>
      
    </Wrapper>
  );
}

export default Dashboard;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background: linear-gradient(to bottom, #f5f7fa, #c3cfe2);

  /* Header styles */
  .dashboard-header {
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 3rem;
      color: #0044cc;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      color: #555;
    }
  }
  // language sallections
  .language-selection {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
   color:#000;
  label {
    font-size: 1rem;
    color: #911b1b;
  }
  .language{
    color:#000;
  }
  select {
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;
  }
}

  /* Grid layout for content */
  .dashboard-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Default grid */
    gap: 20px;
    align-items: stretch;

    /* Financial Analytics section to span full width */
    .financial-analytics-section {
      grid-column: span 2; /* Span full width for two columns */
    }
  }

  /* Section styles */
  .dashboard-section {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    overflow: hidden;

    h2 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 15px;
      border-bottom: 2px solid #e92424;
      padding-bottom: 10px;
    }

    p.description {
      font-size: 1rem;
      color: #555;
      margin-top: 10px;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .filters {
      display: flex;
      gap: 10px;
      margin-top: 10px;

      label {
        font-size: 0.9rem;
        color: #444;
      }

      input,
      select {
        margin-left: 5px;
        padding: 5px;
        font-size: 0.9rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
  }

  /* Adjustments for larger screens */
  @media (min-width: 768px) {
    .dashboard-section {
      padding: 30px;
    }

    h2 {
      font-size: 2rem;
    }
  }

  /* Fullscreen adjustment for extra large screens */
  @media (min-width: 1200px) {
    .dashboard-content {
      grid-template-columns: repeat(2
        , 1fr); /* Two sections per row */
      
        align-items: stretch;
    }

    .financial-analytics-section {
      grid-column: span 2; /* Ensure it spans across all columns */
    }
  }
`;
