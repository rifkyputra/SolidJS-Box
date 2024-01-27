import { Show, For, createSignal, ParentProps } from "solid-js";
import TodoInputBox from "./TodoInputBox";
import { DragDropProvider, DragDropSensors, DragEventHandler, Id, createDraggable, createDroppable, useDragDropContext } from '@thisbeyond/solid-dnd';
import Draggable from "./Draggable";
import TodoItemCard from "./TodoItemCard";





interface DroppableProps extends ParentProps {
  id: number;

}

const Droppable = ({ id, children }: DroppableProps) => {

  const droppable = createDroppable(id);

  return (
    <div
      use:droppable
      class="droppable border-2 border border-dashed border-gray-400 p-3 bg-red rounded-md w-1/"
    // classList={{ "!droppable-accept": droppable.isActiveDroppable }}
    >
      <div>
        {droppable.isActiveDroppable ? "Drop here" : "..."}
      </div>
      {children}
    </div>
  );
};

export const Kanban = ({ id, children }: ParentProps & { id: number }) => {

  return (
    <>
      <div class="min-h-15">
        <Droppable id={id}>
          {children}
        </Droppable>
      </div>
    </>

  );
};

interface Kanban {
  id: number;
  todos: TodoItem[];
}

const TodoInputForms = () => {
  const [todos, setTodos] = createSignal<TodoItem[]>([]);
  const [kanbans, setKanbans] = createSignal<Kanban[]>([]);


  const onDragEnd: DragEventHandler = ({ droppable, draggable }) => {

    const kanbanNo = droppable.id;

    const todo = {
      id: draggable.data.id,
      text: draggable.data.text,
      done: false,
    };

    // remove todo from kanban todos if id existed 
    setKanbans(kanbans().map((kb) => {
      return {
        id: kb.id,
        todos: kb.todos.filter((t) => t.id !== draggable.data.id),
      };
    }));


    setKanbans(kanbans().map((kb) => {
      if (kb.id === kanbanNo) {
        console.log("kb", droppable.data.id)
        const todoItemData = {}
        return {
          id: kb.id,
          todos: [...kb.todos, todo],
        };
      }
      return {
        id: kb.id,
        todos: kb.todos,

      };
    }
    ));

    setTodos(todos().filter((t) => t.id !== draggable.data.id));

  };

  return (
    <>
      <DragDropProvider onDragEnd={onDragEnd}>
        <DragDropSensors>
          <TodoInputBox clearAction={() => {
            setTodos([]);
          }} addAction={(todo) => {
            setTodos([...todos(), {
              id: Math.random(),
              text: todo,
              done: false,
            }]);
          }} />


          <div class="mt-3"></div>

          <For each={todos()}>
            {
              todo => (
                <TodoItemCard todo={todo} onRemove={
                  (id) => {
                    setTodos(todos().filter((t) => t.id !== id));
                  }
                }>
                </TodoItemCard>
              )
            }
          </For>
          <For each={kanbans()}>
            {
              kanban => (
                <Kanban id={kanban.id}>
                  <For each={kanban.todos}>
                    {
                      todo => (
                        <TodoItemCard todo={todo} onRemove={
                          (id) => {
                            setKanbans(kanbans().map((kb) => {
                              return {
                                id: kb.id,
                                todos: kb.todos.filter((t) => t.id !== id),
                              };
                            }));
                          }
                        }>
                        </TodoItemCard>
                      )
                    }
                  </For>
                </Kanban>

              )
            }

          </For>
          add kanban
          <div class="px-3"></div>
          <button onclick={() => {
            setKanbans([...kanbans(), {
              id: kanbans().length,
              todos: todos(),
            }]);
            setTodos([]);
          }}>
            add
          </button>

        </DragDropSensors>
      </DragDropProvider>
    </>
  )

}


export default TodoInputForms;