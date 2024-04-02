import { useState } from "react";
import AddTaskForm from "../../Components/AddTaskForm/AddTaskForm";
import TaskCard from "../../Components/TaskCard/TaskCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const Dashboard = () => {

    // getting the current signed in user id
    const { id } = useParams();

    // modal opening state management
    const [isOpen, setIsOpen] = useState(false);
    // redux hook
    const { tasks } = useSelector((state) => state.tasksSlice)

    // task length of different categories
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
            <div className="w-full grid grid-cols-3 gap-8">
                {/* Up next */}
                <div className="border border-lightGray rounded p-5">
                    {/* title bar */}
                    <div className="w-full px-4 py-2 bg-lightPrimary flex justify-between items-center">
                        <p className="w-full font-semibold rounded">Up Next</p>
                        <p className="bg-primary text-[14px] p-1 rounded text-white">{upNextTasks.length}</p>
                    </div>
                    {/* tasks list */}
                    {
                        upNextTasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                    }
                </div>

                {/* In progress */}
                <div className="border border-lightGray rounded p-5">
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

                {/* Completed */}
                <div className="border border-lightGray rounded p-5">
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

            </div>
        </div>
    );
};

export default Dashboard;