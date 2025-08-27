import React from 'react'
import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">合同会社E&Jスタジオ</a>
      <nav className={styles.nav}>
        <a href="#services">services</a>
        <a href="#strategy">mission</a>
        <a href="#works">case studies</a>
        <a href="#about">about us</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  )
}

export default Header
