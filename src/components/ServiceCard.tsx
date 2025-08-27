import React from 'react'
import styles from '../styles/ServiceCard.module.css'

type Props = {
  title: string
  description?: string
  icon?: React.ComponentType<any>
  href?: string
}

const ServiceCard: React.FC<Props> = ({ title, description, icon, href }) => {
  const Wrapper = href ? 'a' : 'div'
  const props = href
    ? { href, className: styles.card, target: '_self', rel: 'noreferrer' }
    : { className: styles.card }

  return React.createElement(
    Wrapper as any,
    props,
    <>
      {icon && <div className={styles.icon}>{React.createElement(icon)}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      {href && <span className={styles.link}>詳しく見る →</span>}
    </>
  )
}

export default ServiceCard