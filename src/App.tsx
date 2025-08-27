import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Contact from './components/Contact'
import styles from './styles/App.module.css'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Services />
        <Works />
        <About />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <small>© {new Date().getFullYear()} 合同会社E&Jスタジオ All rights reserved</small>
      </footer>
    </>
  )
}

export default App