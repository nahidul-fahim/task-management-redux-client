import { useEffect, useState } from "react";
import AddTaskForm from "../../Components/AddTaskForm/AddTaskForm";
import TaskCard from "../../Components/TaskCard/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentUserTasks } from "../../redux/features/tasksSlice";


const Dashboard = () => {

    // getting the current signed in user id
    const { id: currentUser } = useParams();

    // hooks
    const dispatch = useDispatch();
    const { tasks, currentUserTasks } = useSelector((state) => state.tasksSlice)
    const [isOpen, setIsOpen] = useState(false);

    // show current user tasks only
    useEffect(() => {
        dispatch(setCurrentUserTasks(currentUser))
        console.log("request going from useEffect")
    }, [currentUser, dispatch, tasks])

    console.log("current user task", currentUserTasks)


    // getting the task length of different categories
    const upNextTasks = tasks.filter(task => task.status === "pending");
    const inProgressTasks = tasks.filter(task => task.status === "running");
    const completedTasks = tasks.filter(task => task.status === "done");


    return (
        <div className="container mx-auto p-5 flex flex-col justify-center items-center gap-8">

            {/* task adding button */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-primary px-4 py-3 rounded hover:bg-second duration-500 text-white">Add Task</button>
            {/* Task adding form component */}
            <AddTaskForm isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* tasks showing div */}
            <div className="w-full grid grid-cols-4 gap-4">
                {/* Up next */}
                <div className="border border-lightGray rounded p-3">
                    {/* title bar */}
                    <div className="w-full px-4 py-2 bg-lightPrimary flex justify-between items-center">
                        <p className="w-full font-semibold rounded">Up Next</p>
                        <p className="bg-primary text-[14px] p-1 rounded text-white">{upNextTasks.length}</p>
                    </div>
                    {/* tasks list */}
                    {
                        upNextTasks.map(task => <TaskCard key={task.id} task={task} currentUser={currentUser}></TaskCard>)
                    }
                </div>

                {/* In progress tasks */}
                <div className="border border-lightGray rounded p-3">
                    {/* title bar */}
                    <div className="w-full px-4 py-2 bg-[#d5d5ff] flex justify-between items-center">
                        <p className="w-full font-semibold rounded">In progress</p>
                        <p className="bg-[#4545ff] text-[14px] p-1 rounded text-white">{inProgressTasks.length}</p>
                    </div>
                    {/* tasks list */}
                    {
                        inProgressTasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                    }
                </div>

                {/* Completed tasks */}
                <div className="border border-lightGray rounded p-3">
                    {/* title bar */}
                    <div className="w-full px-4 py-2 bg-[#c9ffcd] flex justify-between items-center">
                        <p className="w-full font-semibold rounded">Completed</p>
                        <p className="bg-[#128a40] text-[14px] p-1 rounded text-white">{completedTasks.length}</p>
                    </div>
                    {/* tasks list */}
                    {
                        completedTasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                    }
                </div>

                {/* tasks assigned to */}
                <div className="bg-[#eeeeee] rounded p-3">
                    {/* title bar */}
                    <div className="w-full px-4 py-2 flex justify-between items-center">
                        <p className="w-full font-semibold rounded">My Tasks</p>
                        <p className="text-[14px] p-1 bg-[#181818] rounded text-[white]">{currentUserTasks.length}</p>
                    </div>

                    {/* tasks list */}
                    {
                        currentUserTasks.map(task => <p key={task.id} className="font-medium text-[17px] my-3">{task.title}</p>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Dashboard;