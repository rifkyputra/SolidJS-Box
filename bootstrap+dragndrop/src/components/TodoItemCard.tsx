import Draggable from "./Draggable"

type TodoItemProps = {
    todo: TodoItem;
    onRemove?: (id: number) => void;
}

const TodoItemCard = (props: TodoItemProps) => {
    return (
        <Draggable todo={props.todo}>
            <div class="card w-25">
                <div class="d-flex px-2 py-1  card-body">
                    {props.todo.text}

                    <div class="px-3"></div>

                    <div onclick={() => {
                        props.onRemove(props.todo.id);
                        // setTodos(todos().filter((t) => t.id !== todo.id));
                    }}>
                        x
                    </div>

                </div>
            </div>
        </Draggable>
    )
}

export default TodoItemCard