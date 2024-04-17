import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Feed from "../Pages/Feed/Feed";

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
            },
            {
                path: "/feed",
                element: <Feed />
            }
        ]
    }
])

export default router;