import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskAsignTo, setTaskAsignTo] = useState("");

 const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    title: taskTitle,
    description: taskDescription,
    date: taskDate,
    category: taskCategory,
    active: true,
    newTask: true,
    completed: false,
    failed: false,
  };

  let data = JSON.parse(localStorage.getItem("employees")) || [];

  const updatedData = data.map((employee) => {
    if (taskAsignTo === employee.firstName) {
      const updatedEmployee = {
        ...employee,
        tasks: [...employee.tasks, newTask],
        taskNumbers: {
          ...employee.taskNumbers,
          active: employee.taskNumbers.active + 1,
          newTask: employee.taskNumbers.newTask + 1,
        }
      };

      // Update loggedInUser if this employee is currently logged in
      const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedIn?.role === "employee" && loggedIn.data.firstName === employee.firstName) {
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: updatedEmployee }));
      }

      return updatedEmployee;
    }
    return employee;
  });

  localStorage.setItem("employees", JSON.stringify(updatedData));

  // Clear form
  setTaskTitle("");
  setTaskDescription("");
  setTaskDate("");
  setTaskCategory("");
  setTaskAsignTo("");
  alert("Task created successfully!");
};

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full items-start justify-between"
      >
        <div>
          <div className="mb-3">
            <h3 className="font-semibold">Task Title</h3>
            <input
              className="border w-full px-2 py-1 rounded placeholder:text-gray-200"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>

          <div className="mb-3">
            <h3 className="font-semibold">Date</h3>
            <input
              className="border w-full px-2 py-1 rounded placeholder:text-gray-200"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <h3 className="font-semibold">Assign to</h3>
            <input
              className="border w-full px-2 py-1 rounded placeholder:text-gray-200"
              type="text"
              placeholder="employee name"
              value={taskAsignTo}
              onChange={(e) => setTaskAsignTo(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <h3 className="font-semibold">Category</h3>
            <input
              className="border w-full px-2 py-1 rounded placeholder:text-gray-200"
              type="text"
              placeholder="design, development"
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <div>
            <h3 className="font-semibold mb-1">Task Description</h3>
            <textarea
              className="border w-full h-[175px] px-2 py-1 rounded placeholder:text-gray-200"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </div>
          <button className="bg-emerald-500 w-full py-2 rounded mt-5">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
