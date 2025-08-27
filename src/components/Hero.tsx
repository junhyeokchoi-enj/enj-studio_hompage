import React from 'react'
import styles from '../styles/Hero.module.css'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.inner}
      >
        <h1>多様な才能をつなぎ、価値を共創する</h1>
        <p>E&Jスタジオは、相互補完する複数の事業を通じて、お客様の変革を加速します。</p>
        <a className={styles.cta} href="#services">事業を見る</a>
      </motion.div>
    </section>
  )
}

export default Hero
