import Content from "@/components/Admin/Content";
import Navbar from "@/components/Admin/Navbar";
import Sidebar from "@/components/Admin/Sidebar";
import { useLocalStorage } from "@/hooks/useStorage";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const [user] = useLocalStorage("user", {});
  let isAdmin = false;
  if (user?.token) {
    const decodedToken = jwtDecode(user.token);
    isAdmin = decodedToken?.role === "admin";
  }
  console.log(isAdmin);

  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return user?.token && isAdmin ? (
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
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminHomePage;
