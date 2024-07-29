import React from "react";
import SearchDashboard from "./_components/search-dashboard";
import TemplateList from "./_components/template-list";

const Dashboard = () => {
  return (
    <div>
      <TemplateList />
      <SearchDashboard />
    </div>
  );
};

export default Dashboard;
