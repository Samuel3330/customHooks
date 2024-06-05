import { useState } from "react"
const useCount = (initialValue) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => { setCount(count + 1) }
    const decrement = () => { setCount(count - 1) }
    const reset = () => { setCount(initialValue) }
    const multiplicar = () => { setCount(count * 2) }

    return { count, increment, decrement, reset, multiplicar }
}

export default useCount