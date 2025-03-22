import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'


export function App() {
  const [details, setDetails] = useState({
    isLoading: true,
    title: 'useEffect',
    description: 'Hello, World!',
    buttonText: 'Click'
  })



  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetails(prev => ({ ...prev, isLoading: false }))
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    setDetails(prev => ({
      ...prev,
      description: 'title has changed!'
    }))
  }, [details.title])

  const imageRef = useRef(null)

  const onClick = () => {
    if (!imageRef.current) return

    imageRef.current.style.borderRadius = '20px'

  }

  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(10)

  const result = useMemo(() => {
    return count * multiplier
  }, [count, multiplier])

  const handleLoading = useCallback(() => {
    setDetails(prev => ({ ...prev, isLoading: !prev.isLoading }))
  }, [])

  return (
    <div className={styles.layout}>
      <img ref={imageRef} src='/AtomicHeart_sample.jpg' width={400} />

      <div>Результат: {result}</div>

      <button onClick={() => setCount(count + 1)}
      >Увеличить счетчик</button>

      <button onClick={() => setMultiplier(multiplier +
        10)}>Увеличить множитель</button>

      <button onClick={onClick}>Change image</button>

      {details.isLoading && <p>Loading...</p>}

      <Details details={details} setDetails={setDetails} handleLoading={handleLoading} />
    </div>
  )
}