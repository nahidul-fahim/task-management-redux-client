

const TaskCard = () => {


    return (
        <div className="bg-[#e7e7e7] p-5 rounded-md flex flex-col justify-start items-start gap-3 mt-5">
            <h3 className="text-[#002292] text-xl font-medium">Task title</h3>
            <p className="text-body text-[15px]">Task description goes here. A very good task description. Let us assume that. We are currently happy with this task description. Cheers!</p>
            <p className="text-black text-[13px] font-medium">Assigned to: Mr.Nobody</p>
            <p className="text-body text-[15px]">Date: Good Date</p>

            {/* actions */}
            <div className="flex justify-between items-center w-full mt-2">
                <button className="text-[red] border border-[red] hover:bg-[red] hover:text-white rounded px-3 py-1 font-medium duration-300 text-[15px]">Remove task</button>
                <button className="text-primary border border-primary px-3 py-1 rounded font-medium duration-300 text-[15px] hover:text-white hover:bg-primary">Update status</button>
            </div>
        </div>
    );
};

export default TaskCard;