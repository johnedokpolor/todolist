import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import DashboardHome from "../components/DashboardHome";

const Dashboard = () => {
  return (
    <div className="w-screen bg-[#f5f8ff]">
      <Navbar />
      <div className="relative flex gap-10 pt-10">
        <SideNav />
        <DashboardHome />
      </div>
    </div>
  );
};

export default Dashboard;
