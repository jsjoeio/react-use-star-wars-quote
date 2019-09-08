import { renderHook, act } from '@testing-library/react-hooks'
import { useStarWarsQuote } from './'

describe('useStarWarsQuote', () => {
  test('should return an object with the keys: loading, error, data', () => {
    const { result } = renderHook(() => useStarWarsQuote())

    expect(result.current).toHaveProperty('loading')
    expect(result.current).toHaveProperty('error')
    expect(result.current).toHaveProperty('data')
  })

  test('should set loading to true after initial call', () => {
    const { result } = renderHook(() => useStarWarsQuote())

    expect(result.current.loading).toBe(true)
  })

  test('should return a joke and set loading to false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStarWarsQuote())

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    // By now we should have the quote
    expect(typeof result.current.data).toBe('string')
    // Since it's a random string
    // We can only make generic assertions
    expect(result.current.data).not.toBeNull()
    expect(result.current.data).not.toBe('')
    // And loading should be set to false
    expect(result.current.loading).toBe(false)
  })
})
