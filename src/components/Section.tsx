import React from 'react'
import type { PropsWithChildren } from 'react'
import styles from '../styles/Section.module.css'

type Props = {
  id?: string
  title?: string
  subtitle?: string
  /** セクションの色面（グラデなしのベタ塗り） */
  bg?: 'none' | 'neutral' | 'tint' | 'gray' | 'brand'
}

const Section: React.FC<PropsWithChildren<Props>> = ({
  id, title, subtitle, bg = 'none', children
}) => {
  const bgClass =
    bg === 'neutral' ? styles.fillNeutral :
    bg === 'tint'    ? styles.fillTint    :
    bg === 'gray'    ? styles.fillGray    :
    bg === 'brand'   ? styles.fillBrand   :
    styles.fillNone

  return (
    <section id={id} className={`${styles.section} ${bgClass}`}>
      {(title || subtitle) && (
        <header className={styles.heading}>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {title && <h2 className={styles.title}>{title}</h2>}
        </header>
      )}
      <div className={styles.content}>{children}</div>
    </section>
  )
}

export default Section