import React from 'react'
import Section from '../components/Section'
import styles from '../styles/About.module.css'
import { company } from '../data/company'

const About: React.FC = () => {
  return (
    <Section id="about" subtitle="About" title="会社情報" bg="none">
      {/* 上：代表メッセージ（1枚カード） */}
      <div className={styles.message}>
        <p className={styles.catch}><br /><br />「つながりを設計し、偶然を必然に。」<br /><br /></p>
        <p>
          私たちは、人と人・人とキャラクタ・人とAIの出会いをデザインし、<br />
          国境や価値観の違いを超えた協働から、新しいシナジーを<strong>仕掛ける</strong>チームです。
        </p>
        <p>
          小さく早く試し（Small Bets）、現場に寄り添う Human-in-the-Loop を軸に本番運用と横展開へ。<br />
          データとナレッジは資産化し、責任あるAIの原則で「成果が続く仕組み」を残します。
        </p>
        <p>
          伴走しながら、皆様の組織に<strong>内在化</strong>する力までつくる——<br /><br />それがE&amp;Jスタジオの約束です。<br /><br /><br />
        </p>
        <p className={styles.sign}>
          <br /><br />代表社員　{company.representative}<br />
          {company.name}<br /><br />
        </p>
      </div>

      {/* 下：会社情報（1枚カード） */}
      <table className={styles.table}>
        <tbody>
          <tr><th>社名</th><td>{company.name}</td></tr>
          <tr>
            <th>所在地</th>
            <td>
              {company.address.map((line, i) => (
                <span key={i}>{i > 0 && <br />}{line}</span>
              ))}
            </td>
          </tr>
          <tr><th>設立</th><td>{company.established}</td></tr>
          <tr><th>代表</th><td>{company.representative}</td></tr>
          <tr>
            <th>事業内容</th>
            <td>
              <ul className={styles.bullets}>
                {company.businessSummary.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  )
}

export default About
