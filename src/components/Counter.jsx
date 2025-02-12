import { useState } from "react"

export default function Counter() {
    const [count, setCounter] = useState(0)
    return (
        <div>
            <div>Counter: <span>{count}</span></div>
            <button onClick={()=>setCounter(count + 1)}>Increase</button>
        </div>
    )
}