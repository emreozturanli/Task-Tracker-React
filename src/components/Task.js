import { TiTrash } from 'react-icons/ti';

export const Task = ({ task, date, removeItems, id, isDone, doneItems }) => {
  

  const handleRemove = () => {
    removeItems(id);
  }

  const handleDone = () => {
    doneItems(id)
  }

  return (
    <li

      style={{
        borderLeft: isDone && '10px solid purple'
      }}
    >
      <div
        onClick={handleDone}
        className='task-info'
        style={{
          textDecoration: isDone && 'line-through',
        }}
      >
        <h3>{task}</h3>
        <p >{date}</p>
      </div>
      <div className="btn-container">
        <button onClick={handleRemove} className='btn-remove'>
          <TiTrash style={{ color: 'red', fontSize: "2rem" }} />
        </button>
      </div>
    </li>
  )
}
