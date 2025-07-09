import React from "react";
import "./App.css";
import CarSelection from "./components/CarSelection";
import Timer from "./components/Timer";
import Clock from './components/Clock';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <>
    //   {/* <CarSelection /> */}
    //   {/* <Timer /> */}
    //   {/* <Clock/> */}
    // </>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <NavLink
                to="/car-selection"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold underline"
                    : "text-white hover:text-blue-200"
                }
              >
                Car Selection
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timer"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold underline"
                    : "text-white hover:text-blue-200"
                }
              >
                Timer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/clock"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold underline"
                    : "text-white hover:text-blue-200"
                }
              >
                Clock
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/car-selection"
            element={<CarSelection />}
          />
          <Route
            path="/timer"
            element={<Timer />}
          />
          <Route
            path="/clock"
            element={<Clock />}
          />
          <Route
            path="/"
            element={
              <div className="p-4 text-center">
                Welcome! Please select a page from the navigation above.
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
