import Counter from "./Components/Counter"
import useCount from "./Logic/useCount"
function App() {

  const count1 = useCount(15)
  const count2 = useCount(30)
  const count3 = useCount(30)

  return (
    <>
      <Counter count={count1.count} increment={count1.increment} decrement={count1.decrement} reset={count1.reset} />

      <Counter count={count2.count} increment={count2.increment} decrement={count2.decrement} reset={count2.reset} multiplicar={count2.multiplicar} />

      <Counter count={count3.count} increment={count3.increment} decrement={count3.decrement} reset={count3.reset} />




    </>
  )
}

export default App
