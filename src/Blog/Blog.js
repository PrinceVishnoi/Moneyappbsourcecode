import React, { useState } from "react";
import './Blog.css'


function Blog() {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const AddTask = () => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: task,
                iscomplete: false,
            }
            setTaskList([...taskList, taskDetails]);
            setTask("");
        }
    };
    // ----------------------------------------

    const deletetask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id));
    }
    return (
        <div className="container">
            <textarea className="textarea" name="text" value={task} onChange={(e) => handleChange(e)} placeholder="Write Your Blog!!!..." /><br/><br/>
            <button className="add-btn" onClick={AddTask}>Add Me</button><br/><br/>

            {taskList !== [] ?
                <ul>
                    {taskList.map(t =>
                        <li style={{ textDecoration: t.isCompleted ? "line-through" : "none" }}>
                            {t.value}
                            <button className="deletebtn" onClick={(e) => deletetask(e, t.id)}>Let's Delete</button>
                        </li> )}
                </ul>
                : null }

        </div>
    );
}
export default Blog;