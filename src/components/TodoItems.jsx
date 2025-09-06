import TodoItem from "./TodoItem"

const TodoItems = ({todoItems , onDeleteItem}) =>{
    return <>
    {todoItems.map((item , index) => (
        <TodoItem key = {index}  index={index} todoName = {item.name} todoDate = {item.dueDate} onDeleteItem = {onDeleteItem}></TodoItem>
    ))}
    </>
}

export default TodoItems