import { createSignal } from "solid-js"

const Counter = () => {

    const [counter, setCounter]= createSignal(0);

    function increase() { 
        setCounter(counter() + 1)
    }

    function decrease() { 
        if(counter() <= 0) return setCounter(0)

        setCounter(counter() - 1)
    }


    return (
        <div>
            <h1>Counter</h1>
            <div class="mt-3"></div>
            <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-danger" onClick={() => decrease()}>-</button>

            <div class="value-counter mx-2 px-2">
                {counter()}
            </div>

            <button class="btn btn-primary" onclick={() => increase()}>+</button>
            </div>
        </div>
    )


}

export default Counter;