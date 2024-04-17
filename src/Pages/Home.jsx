import { Link, useNavigate } from "react-router-dom";

const assignersName = ["Nahidul Islan", "Nazmul Islam", "Karib Shahriar", "Imtiaz Hossain", "S M Rasel", "Mashub Yousuf"];

const Home = () => {

    // hooks
    const navigate = useNavigate();


    // handle person selection
    const handleChoosePerson = (e) => {
        e.preventDefault();
        const fullName = e.target.value;
        const person = fullName.split(' ').join('').toLowerCase();
        navigate(`/dashboard/${person}`)
    }


    return (
        <div className="min-h-screen mt-[-100px] flex flex-col justify-center items-center gap-5">

            {/* links routes */}
            <div className="flex justify-center items-center gap-7 my-8">
                <Link to={"/feed"} className="text-xl text-primary border border-primary px-2 py-1 rounded hover:scale-105 duration-300">Feed</Link>
            </div>


            <h2 className="text-5xl font-bold text-black">Go to Task Management</h2>

            {/* assign to */}
            <div className="w-[35%] flex flex-col justify-center items-center gap-2">
                <label htmlFor="assignTo" className="text-xl font-semibold">Choose who you are</label>
                <select onChange={handleChoosePerson} required name="person" id="person" className="w-full px-3 py-2 rounded focus:outline-none border border-lightGray focus:border-body mt-4">
                    {
                        assignersName.map((person, index) =>
                            <option key={index} value={person}>{person}</option>)
                    }
                </select>
            </div>


        </div>
    );
};

export default Home;