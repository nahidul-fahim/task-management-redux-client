import TasksModal from "../TasksModal/TasksModal";

const AddTaskForm = ({ isOpen, setIsOpen }) => {

    // date
    const todayDate = new Date().toISOString().split('T')[0];
    const assignersName = ["Nahidul Islan", "Nazmul Islam", "Karib Shahriar", "Imtiaz Hossain", "S M Rasel", "Mashub Yousuf"];
    const priorityList = ["low", "moderate", "important"]

    // modal closing function
    function closeModal() {
        setIsOpen(false)
    }


    // form data
    const handleTaskAssign = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const assignTo = form.assignTo.value;
        const priority = form.priority.value;
        
        const newTaskData = {title, description, deadline, assignTo, priority};
        console.log(newTaskData)
    }


    return (
        <TasksModal isOpen={isOpen} setIsOpen={setIsOpen} title="Task Details">

            {/* task adding form */}
            <form
            onSubmit={handleTaskAssign}
            className="w-full flex flex-col justify-center items-center gap-5">

                {/* title */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <label htmlFor="title">Title</label>
                    <input required type="text" name="title" id="title" className="w-full px-3 py-2 rounded focus:outline-none border border-lightGray focus:border-body" />
                </div>

                {/* description */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <label htmlFor="description">Description</label>
                    <textarea required name="description" id="description" min className="w-full px-3 py-2 rounded focus:outline-none border border-lightGray focus:border-body"></textarea>
                </div>

                {/* deadline */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <label htmlFor="deadline">Deadline</label>
                    <input required type="date" name="deadline" id="deadline" min={todayDate} className="w-full px-3 py-2 rounded focus:outline-none border border-lightGray focus:border-body" />
                </div>

                {/* assign to */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <label htmlFor="assignTo" >Assign to</label>
                    <select required name="assignTo" id="assignTo" className="w-full px-3 py-2 rounded focus:outline-none border border-lightGray focus:border-body">
                        {
                            assignersName.map((person, index) =>
                                <option key={index} value={person}>{person}</option>)
                        }
                    </select>
                </div>

                {/* priority list */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <label htmlFor="priority" >Priority</label>
                    <select required name="priority" id="priority" className="w-full px-3 py-2 rounded focus:outline-none border border-lightGray focus:border-body">
                        {
                            priorityList.map((priority, index) =>
                                <option key={index} value={priority} className="capitalize">{priority}</option>)
                        }
                    </select>
                </div>

                {/* submit button */}
                <input type="submit" value="Assign Task" className="bg-primary w-full py-2 rounded hover:bg-second text-white cursor-pointer" />
            </form>

            <button
                onClick={closeModal}
                className="bg-[#b31515] w-full mt-3 py-2 rounded hover:bg-[#8d2c2c] text-white cursor-pointer">Cancel</button>

        </TasksModal>
    )
};

export default AddTaskForm;