import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard/:id",
                element: <Dashboard />
            }
        ]
    }
])

export default router;