import React from 'react'
import Section from '../components/Section'
import styles from '../styles/Contact.module.css'

const GOOGLE_FORM_SRC = "https://docs.google.com/forms/d/e/1FAIpQLSf2THQd5RUKxj80rciFPHYGzZDrn6A2Yy6_waOuc_YVVxK1mg/viewform?embedded=true"

const Contact: React.FC = () => {
  // フォームURLが未設定ならフォールバック（mailto）
  const hasForm = Boolean(GOOGLE_FORM_SRC)

  return (
    <Section id="contact" subtitle="Contact" title="お問い合わせ" bg="brand">
      {hasForm ? (
        <div className={styles.formEmbed}>
          <iframe
            src={GOOGLE_FORM_SRC}
            title="お問い合わせフォーム"
            loading="lazy"
          />
        </div>
      ) : (
        <p className={styles.alt}>
          フォームURLが未設定です。<a href="mailto:info@example.com">info@example.com</a> へご連絡ください。
        </p>
      )}

      {/* 任意：新規タブでフォームを開くボタン（埋め込みがブロックされた時の保険） */}
      {hasForm && (
        <p className={styles.alt}>
          うまく表示されない場合は
          <a href={GOOGLE_FORM_SRC!} target="_blank" rel="noreferrer">こちら</a> からお願い申し上げます。
        </p>
      )}
    </Section>
  )
}

export default Contact