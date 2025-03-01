import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom"
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Write } from "./pages/Write";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer";
import "./style.scss"

const Layout = () => {
  return (

    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/single",
        element: <Single />
      },
      {
        path: "/white",
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>

    </div>
  );
}



export default App;
