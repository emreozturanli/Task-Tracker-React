import { useState, useEffect } from "react";
import { Tasks } from "./Tasks";


const getTasks = () => {  
    const tasks = localStorage.getItem('tasks');  // get items from storage
    if (tasks) {  // if storage is not empty
        return JSON.parse(localStorage.getItem('tasks'))
    }
    else {   // if storage is empty
        return [];  
    }
}

export const AddTask = ({ isVisible }) => {
    const [input, setInput] = useState({
        task: '',
        date: '',
        id: '',
        isDone: false
    });       // to store the input values
    const [list, setList] = useState(getTasks);  // to store the tasks

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.task && input.date) { // if input boxes are filled
            const tasks = list.map(item => item.task) // collecting all the tasks in an array.
            if (tasks.includes(input.task)) { // check wether new input is already in the list or not. if true alert
                alert('task is already exist')
            }
            else {      // if not in the list than add.
                setList([
                    ...list,
                    input,
                    
                ])
                setInput({  // clear input fields
                    task: '',
                    date: '',
                    id:'',
                    isDone: false
                })
            }
        }
        else {   // if inputs are empty
            alert('task and date are required')
        }
        console.log(list);
    };

    const removeItems = (id) => {
        setList(list.filter((item,index) => item.id !== id));
    }

    const doneItems = (id) =>{
        setList(list.map((item,index)=>{
            if(item.id === id){
                item.isDone = !item.isDone;
            }
            return item;
        }))
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(list))
    }, [list])   // adding new list to storage. 

    return (
        <>
            <form
                className={isVisible ? 'show' : 'hide'}
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="input-container">
                    <label htmlFor="task">Task</label> <br />
                    <input
                        onChange={(e) => setInput({ ...input, task: e.target.value, id: `${Math.random()}`})} type="text"
                        name="text"
                        value={input.task}
                        placeholder="AddTask" />
                </div>
                <div className="input-container">
                    <label htmlFor="task">Day & Time</label> <br />
                    <input
                        onChange={(e) => setInput({ ...input, date: e.target.value.replace('T', ' ') })} type="datetime-local"
                        name="text"
                        value={input.date.replace(' ', 'T')} />
                </div>
                <button onClick={(e) => handleSubmit(e)} className="btn-sm">Save Task</button>
            </form>
            <Tasks list={list} removeItems={removeItems} doneItems={doneItems} />
            <div className={isVisible ? 'btn-container' : 'btn-container hide'}>
                <button onClick={() => setList([])} className="btn-clear">Clear Tasks</button>
            </div>

        </>
    )
}


// const getTasks = () => {
//     const tasks = localStorage.getItem('tasks');
//     if (tasks) {
//         return JSON.parse(localStorage.getItem('tasks'))
//     }
//     else {
//         return [];
//     }
// }

// export const AddTask = ({ isVisible }) => {
//     const [task, setTask] = useState('');
//     const [date, setDate] = useState('');
//     const [list, setList] = useState(getTasks);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (task && date) {
//             setTask(task);
//             setDate(date);
//             setList([
//                 ...list,
//                 {
//                     task: task,
//                     date: date.replace('T', ' ')
//                 },
//             ])
//             setDate('')
//             setTask('')

//         }
//         else {
//             alert('task and date are required')
//         }
//     };

//     const removeItems = (id, isClicked) => {
//         setList(() => list.filter((item, index) => index !== id));
//     }

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(list))
//     }, [list])

//     return (
//         <>
//             <form
//                 className={isVisible ? 'show' : 'hide'}
//                 onSubmit={(e) => handleSubmit(e)}
//             >
//                 <div className="input-container">
//                     <label htmlFor="task">Task</label> <br />
//                     <input
//                         onChange={(e) => setTask(e.target.value)} type="text"
//                         name="text"
//                         value={task}
//                         placeholder="AddTask" />
//                 </div>
//                 <div className="input-container">
//                     <label htmlFor="task">Day & Time</label> <br />
//                     <input
//                         onChange={(e) => setDate(e.target.value)} type="datetime-local"
//                         name="text"
//                         value={date} />
//                 </div>
//             </form>
//                 <div className={isVisible ? 'btn-container' : 'btn-container hide'}>
//                     <button onClick={(e) => handleSubmit(e)} className="btn-sm">Save Task</button>
//                     <button onClick={()=>setList([])} className="btn-clear">Clear Tasks</button>
//                 </div>
//             <Tasks list={list} removeItems={removeItems} />

//         </>
//     )
// }