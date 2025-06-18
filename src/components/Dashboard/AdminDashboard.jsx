import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="p-5 sm:p-10   h-screen w-full">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
