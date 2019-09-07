import React from 'react'
import { useStarWarsQuote } from '@jsjoeio/react-use-star-wars-quote'

const App = () => {
  const { data, loading, error } = useStarWarsQuote()
  return (
    <div>{data}</div>
  )
}
export default App