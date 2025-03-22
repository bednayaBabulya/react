import styles from './App.module.scss'
import { Details } from './Details'

// const MENU = [
//   {
//     name: 'Home',
//     link: '/'
//   },
//   {
//     name: 'Products',
//     link: '/products'
//   }
// ]

// const isAuth = false

export function App() {
  return <div className={styles.layout}>
    <img src='/AtomicHeart_sample.jpg' width={400} />
    {/* {MENU.map(item => 
      <span key={item.link}>{item.name}</span>
    )} */}
    {/* {isAuth ? 'Авторизирован' : 'Войдите в систему'} */}

    <Details />
  </div>
}