import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    const location = useLocation();
    const pathName = location.pathname;
    console.log(pathName)


    return (
        <div className="container mx-auto p-5 flex justify-between items-center">

            {/* logo */}
            <div>
                <Link to={"/"}><h2 className="text-primary uppercase text-2xl font-bold hover:scale-105 duration-300">Tasks</h2></Link>
            </div>

            {/* links */}
            <div className="flex justify-end items-center gap-10 font-medium">
                <Link to={"/"}>Home</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                {
                    pathName === "/dashboard" && <button className="bg-primary px-4 py-3 rounded-xl hover:bg-second duration-500 text-white">Add Task</button>
                }
            </div>
        </div>
    );
};

export default Navbar;