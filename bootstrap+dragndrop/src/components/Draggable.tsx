import { createDraggable } from "@thisbeyond/solid-dnd";
import { ParentProps } from "solid-js";

interface DraggableProps extends ParentProps {
    todo: TodoItem;
  
  }
  
const Draggable = ({ children, todo }: DraggableProps) => {
    const draggable = createDraggable(todo.id, todo);
    return (
      <div use:draggable class="draggable $enable-button-pointers ">
        {children}
      </div>
    );
  };

  export default Draggable;