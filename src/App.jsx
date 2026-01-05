import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

function App() {
  const [theme, Settheme] = useState(localStorage.getItem("theme") || "light");

  function toggle() {
    if (theme === "light") {
      Settheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      Settheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const routing = createBrowserRouter([
    {
      element: <Layout theme={theme} toggle={toggle} />,
      children: [
        { index: true, element: <Home /> }, // Home
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "*", element: <Notfound /> },
      ],
    },
    
  ]);

  return <RouterProvider router={routing} />;
}

export default App;
