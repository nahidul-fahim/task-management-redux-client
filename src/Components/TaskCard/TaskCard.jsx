import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../redux/features/tasksSlice";


const TaskCard = ({ task }) => {

    // redux hook
    const dispatch = useDispatch();


    return (
        <div className="bg-[#e7e7e7] p-5 rounded-md flex flex-col justify-start items-start gap-3 mt-5">
            <h3 className="text-[#002292] text-xl font-medium">{task.title}</h3>
            <p className="text-body text-[15px]">{task.description}</p>
            <p className="text-black text-[13px] font-medium">Assigned to: {task.assignTo}</p>
            <p className="text-body text-[15px]">Deadline: {task.deadline}</p>

            {/* actions */}
            <div className="flex justify-between items-center w-full mt-2">

                {/* remove task */}
                <button
                    onClick={() => dispatch(removeTask(task.id))}
                    className="text-[red] border border-[red] hover:bg-[red] hover:text-white rounded px-3 py-1 font-medium duration-300 text-[15px]">Remove task</button>

                {/* update task */}
                <button
                    onClick={() => dispatch(updateTask(task.id))}
                    className="text-primary border border-primary px-3 py-1 rounded font-medium duration-300 text-[15px] hover:text-white hover:bg-primary">Update status</button>
            </div>
        </div>
    );
};

export default TaskCard;