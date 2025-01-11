import React from "react";
import Dashboard from "./DashBoard.jsx"; // Adjust the path as per your folder structure
import HomePage from "./Home.jsx";
import ShopManagement from "./ShopManagement.jsx";
import BusinessDashboard from "./BusinessDashboard.jsx";
import AnveshanBox from "./AnveshanBox.jsx";
function App() {
  return (
    <div className="app">
    <HomePage/>
    <AnveshanBox/>
      <Dashboard />
      <BusinessDashboard/>
      <ShopManagement/>

    </div>
  );
}

export default App;
