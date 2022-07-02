import { Task } from "./Task";
export const Tasks = ({ list,removeItems,doneItems}) => {
 
    return (
        <ul >
            {
                list[0] ?   
                list.map((item, index) => {
                    return <Task
                        key={index}
                        id={item.id}
                        {...item}
                        removeItems={removeItems}
                        doneItems={doneItems}
                    />
                })
                : <h4>Nothing to show</h4>
            }
        </ul>
    )
}
