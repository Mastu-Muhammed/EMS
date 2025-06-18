import { useState, useContext, useEffect } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDasahboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";// ✅ Import this function


function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // ✅ Set default localStorage values on initial app load
 useEffect(() => {
  const employees = localStorage.getItem("employees");
  const admin = localStorage.getItem("admin");

  if (!employees || !admin) {
    setLocalStorage(); // ✅ only set default values if missing
  }

  const loggedInUser = localStorage.getItem("loggedInUser");
  // if (loggedInUser) {
  //   const userData = JSON.parse(loggedInUser);
  //   setUser(userData.role);
  //   setLoggedInUserData(userData.data);
  // }
  
if (loggedInUser) {
  const allEmployees = JSON.parse(localStorage.getItem("employees"));
  const refreshedUserData = loggedInUser.role === "employee"
    ? allEmployees.find((emp) => emp.email === loggedInUser.data.email)
    : loggedInUser.data;

  setUser(loggedInUser.role);
  setLoggedInUserData(refreshedUserData);
}
}, []);


  const handleLogin = (email, password) => {
    if (
      authData?.admin?.email === email &&
      authData?.admin?.password === password
    ) {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: authData.admin })
      );
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (emp) => emp.email === email && emp.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
