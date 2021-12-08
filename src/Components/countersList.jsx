import React, { useState } from "react"
import Counter from "./counter"

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ]

  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id)
    setCounters(newCounters)
  }
  const handleIncrement = (id) => {
    const newInitialState = [...counters]
    newInitialState.map(
      (elem) =>
        (elem.value =
          elem.id === id ? (elem.value = elem.value + 1) : elem.value)
    )
    setCounters(newInitialState)
  }
  const handleDecrement = (id) => {
    const newInitialState = [...counters]
    newInitialState.map(
      (elem) =>
        (elem.value =
          elem.id === id ? (elem.value = elem.value - 1) : elem.value)
    )
    setCounters(newInitialState)
  }
  const handleReset = () => {
    setCounters(initialState)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
