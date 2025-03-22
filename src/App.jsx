import { useContext, useState } from 'react'
import styles from './App.module.scss'
import { Header } from './Header'
import { AuthContext } from './AuthContext'
import { useAuth } from './hooks/useAuth'


export function App() {
  const {isLoggedIn, setIsLoggedIn} = useAuth()
  
  return <div className={styles.layout}>
    
    <Header />

    <br />

    {isLoggedIn ?
      <button onClick={() => setIsLoggedIn(false)}>
        Выйти из акаунта
      </button> : <button onClick={() => setIsLoggedIn(true)}>
        Войти в акаунт
      </button>   
    }
  </div>
}