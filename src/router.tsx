import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CreateOrderPage } from "./pages/createOrderPage/CreateOrderPage";
import HomePage from "./pages/homePage/HomePage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/create-order", element: <CreateOrderPage /> },
]);
