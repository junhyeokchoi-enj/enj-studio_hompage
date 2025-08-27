import React from 'react'
import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">合同会社E&Jスタジオ</a>
      <nav className={styles.nav}>
        <a href="#services">事業</a>
        <a href="#works">実績</a>
        <a href="#about">会社情報</a>
        <a href="#contact">お問い合わせ</a>
      </nav>
    </header>
  )
}

export default Header
