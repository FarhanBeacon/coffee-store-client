import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import AddCoffee from "./Pages/AddCoffee.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee.jsx";
import CoffeeView from "./Pages/CoffeeView.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./Pages/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("https://coffee-store-server-coral-sigma.vercel.app/coffees"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-coral-sigma.vercel.app/coffees/${params.id}`),
  },
  {
    path: "/coffeeView/:id",
    element: <CoffeeView />,
    loader: ({ params }) => fetch(`https://coffee-store-server-coral-sigma.vercel.app/coffees/${params.id}`),
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "users",
    element: <Users />,
    loader: ()=> fetch("https://coffee-store-server-coral-sigma.vercel.app/users"),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
