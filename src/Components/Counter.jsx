
const Counter = ({ count, increment, decrement, reset, multiplicar }) => {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-4">
            <h1 className="text-2xl font-mono">Contador</h1>
            <p className="text-2xl font-mono">{count}</p>
            <div className="flex justify-center items-center ">
                <button className="p-3 bg-purple-950 text-white" onClick={decrement} >-</button>
                <button className="p-3 bg-purple-950 text-white" onClick={reset}>Reset</button>
                {
                    multiplicar && <button className="p-3 bg-purple-950 text-white" onClick={multiplicar}>Multiplicar</button>
                }
                <button className="p-3 bg-purple-950 text-white" onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter