import { useState } from 'react'
import styles from './App.module.scss'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { ITodo } from './types'

export function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
    fetchData()
  }, [])

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/about-us')
  }, [])

  return <div className={styles.layout}>
    <Link to='/about-us'>Go to about-us</Link>
    
    <ul>
      {todos?.map(todo => (<li key={todo.id}>
        {todo.title}
      </li>))}
    </ul>

  </div>
}