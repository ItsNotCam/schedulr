import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Landing components
import Main from "../components/Main";
import Login from "../components/children/Login";
import Register from "../components/children/Register";

// Manager components
import Manager from "../components/Manager";
import ManagerHome from "../components/children/ManagerHome";
import ManagerEmployeeAll from "../components/children/ManagerEmployeeAll";
import ManagerSchedulesCreate from "../components/children/ManagerSchedulesCreate";

// Employee components
import Employee from "../components/Employee";
import EmployeeHome from "../components/children/EmployeeHome";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route index element={<Login />} />
          
          <Route path="manager" element={<Manager />}>
            <Route path="employeeAll" element={<ManagerEmployeeAll />} />
            <Route path="schedulesCreate" element={<ManagerSchedulesCreate />} />
            <Route index element={<ManagerHome />} />
          </Route>

          <Route path="employee" element={<Employee />}>
            <Route index element={<EmployeeHome />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
