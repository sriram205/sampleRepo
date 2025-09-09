import React, { useState } from "react";
import { BiListCheck } from "react-icons/bi";

function Tolist() {
    const [tasks, setTasks] = useState([]);
    const [newtask, setnewTask] = useState("");
    function handletask(event) {
        setnewTask(event.target.value)

    }
    function addtask() {

        if (newtask.trim() != "") {
            setTasks([...tasks, newtask])
            setnewTask("");

        }


    }
    function deletetask(index) {
        const t = tasks.filter((_, i) => i != index)
        setTasks(t);

    }
    function moveuptask(index) {
        if (index > 0) {
            const updatetasks = [...tasks];
            [updatetasks[index - 1], updatetasks[index]] = [updatetasks[index], updatetasks[index - 1]];
            setTasks(updatetasks);

        }

    }
    function movedowntask(index) {
        const t = tasks.length-1;

        if (index < t) {
            const updatetasks = [...tasks];
            [updatetasks[index], updatetasks[index + 1]] = [updatetasks[index + 1], updatetasks[index]];
            setTasks(updatetasks);


        }

    }
    addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addtask();
        }

    })
    return (

        <div className="mylist">

            <h1>TO DO LIST ❤️</h1>
            <div className="myinput">
                <input type="text" className="inputtext" placeholder="Add Task" value={newtask} onChange={handletask} />
                <button onClick={addtask}>ADD</button>
            </div>

            <ol className="orli">
                {tasks.map((tasks, index) =>
                    <li key={index}>
                        <p className="textt">{index + 1}.{tasks}</p>
                        <div className="threebtn">
                            <button className="deletebtn" onClick={() => deletetask(index)}>🗑️</button>
                            <button className="moveupbtn" onClick={() => moveuptask(index)}>⬆️</button>
                            <button className="movedownbtn" onClick={() => movedowntask(index)}>⬇️</button>
                        </div>
                    </li>)}

            </ol>

        </div>
    )


}
export default Tolist