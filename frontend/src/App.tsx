import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/layout/Home";
import Layout from "./components/layout/Layout";
import About from "./components/layout/About";
import Register from "./components/user/Register";

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
