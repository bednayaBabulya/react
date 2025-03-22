import styles from './App.module.scss'

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

export function App() {
  return <div className={styles.layout}>
    <img src='/AtomicHeart_sample.jpg' width={400} />
    {/* {MENU.map(item => 
      <span key={item.link}>{item.name}</span>
    )} */}
    <h1>First component</h1>
    <div>Hello, world! </div>
    <button>Click</button>
  </div>
}