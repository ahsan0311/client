import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Logout from "./pages/Logout.jsx";
import Home from "./pages/Home.jsx";
import { store } from "../Redux/store/store.js";
import { Provider } from "react-redux";
import WaitingApproval from "./pages/waiting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/waiting",
        element: <WaitingApproval />,
      },
    ],
  },
]);;

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
  <RouterProvider router={router}>

      <App />
   
   
  </RouterProvider>
    </Provider>
);
