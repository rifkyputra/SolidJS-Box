import { createSignal } from "solid-js";


type Props = {
    clearAction: () => void;
    addAction: (task: string) => void;
}

const TodoInputBox = ({clearAction, addAction}: Props) => {
    const [input, setInput] = createSignal<string>('');
    return (
        <div class="d-flex">
            <div class="todo-input-box form-group">
                <input type="text" placeholder="Add a task"  class="form-control" onChange={(v) => {
                    const userInput = v.target.value.trim();
                    if(userInput === null) return;
                    if(userInput === '') {
                        setInput('');
                        return;
                    }
                    setInput(`${userInput}`)
                }}/>
            </div>
            <div class="px-1"></div>
            <div >
                <button class="btn btn-primary" onclick={() =>{
                    if(input() === '') return;
                    addAction(input());
                }}>Add</button>
            </div>
            <div class="px-1"></div>

            <div>
                <button class="btn btn-secondary" onclick={() => {
                    setInput
                    clearAction();
                }}>Clear</button>
            </div>
        </div>
    )
}

export default TodoInputBox;