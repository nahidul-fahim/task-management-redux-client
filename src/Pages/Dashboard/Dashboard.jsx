

const Dashboard = () => {
    return (
        <div className="container mx-auto p-5 grid grid-cols-3 gap-8">

            {/* Up next */}
            <div className="border border-lightGray rounded p-5">
                <p className="w-full px-4 py-2 bg-lightPrimary rounded">Up Next</p>
            </div>

            {/* In progress */}
            <div className="border border-lightGray rounded p-5">
                <p className="w-full px-4 py-2 bg-[#c7c7ff] rounded">In Progress</p>
            </div>

            {/* Completed */}
            <div className="border border-[#d2ffd2] rounded p-5">
                <p className="w-full px-4 py-2 bg-[#beffb8] rounded">Completed</p>
            </div>

        </div>
    );
};

export default Dashboard;