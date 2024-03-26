import Content from "@/components/Admin/Content";
import Navbar from "@/components/Admin/Navbar";
import Sidebar from "@/components/Admin/Sidebar";
import React, { useState } from "react";

const AdminHomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
      />
      <div
        className={
          isSidebarOpen
            ? "md:w-[calc(100%-256px)] ml-64 bg-gray-200 min-h-screen transition-all main "
            : "w-full  ml-0 bg-gray-200 min-h-screen transition-all main"
        }
      >
        <Navbar onSidebarToggle={handleSidebarToggle} />
        <Content />
      </div>
    </div>
  );
};

export default AdminHomePage;
