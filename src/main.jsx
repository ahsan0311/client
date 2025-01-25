// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from "./pages/Register.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Logout from "./pages/Logout.jsx";
// import Home from "./pages/Home.jsx";
// import { store } from "../Redux/store/store.js";
// import { Provider } from "react-redux";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/Register",
//         element: <Register />,
//       },
//       // {
//       //   path: "/Home",
//       //   element: <Home />,
//       // },
//       {
//         path: "/Login",
//         element: <Login />,
//       },
//       {
//         path: "/Dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/Logout",
//         element: <Logout />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//     <Provider store={store}>
//   <RouterProvider router={router}>

//       <App />
   
   
//   </RouterProvider>
//     </Provider>
// );


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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Default route for Home
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
      <Provider store={store}>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
      </Provider>
);
