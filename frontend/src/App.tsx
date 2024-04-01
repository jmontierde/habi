import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import About from "./components/layout/About";
import Register from "./features/user/Register";
import Login from "./features/user/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",

        element: <Register />,
      },
      {
        path: "/login",

        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
