import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./components/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TodoDashboard from "./components/TodoDashboard.tsx";
import TodoCreate from "./components/TodoCreate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todos",
    children: [
      { index: true, element: <TodoDashboard /> },
      { path: "new", element: <TodoCreate /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
