import { useState, useEffect } from 'react'

export function useStarWarsQuote() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)

  useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true)
      try {
        const response = await fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
        const { starWarsQuote } = await response.json().catch(error => setError(error))
        setLoading(false)
        setData(starWarsQuote)
      } catch (e) {
        setLoading(false)
        setError(e.message)
      }
    }
    getStarWarsQuote()
  }, [])
  return { data, loading, error }
}
