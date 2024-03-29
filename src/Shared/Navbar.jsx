import { Link } from "react-router-dom";


const Navbar = () => {


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
            </div>
        </div>
    );
};

export default Navbar;