import react from "react";
import Todo from "./Todo";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css';





const TodoList = ({todos,setTodos, filteredTodos }) => {
    
  
     


return(
        <div className="todo-container">
        <ul className="todo-list" />
        {filteredTodos.map((todo) => (

            <Todo 
            setTodos={setTodos}
            todos={todos} 
            todo={todo}
            key={todo.id} 
            text={todo.text}
             />
  
        ))}
          
        </div>
     );
};
export default TodoList;