import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import {Layout} from "./components/Layout/Layout";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {



  const routing = createBrowserRouter([
    {
      element: <Layout  />,
      children: [
        { index: true, element: <Home /> }, // Home
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "*", element: <Notfound /> },
      ],
    },
    
  ]);

  return <RouterProvider router={routing} />;
}

export default App;
