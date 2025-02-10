import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./src/components/AboutUS";
import ContactUs from "./src/components/ContactUs";
import Body from "./src/components/Body";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element : <ContactUs/>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes}/>);
