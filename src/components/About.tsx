import React from 'react'
import Section from '../components/Section'
import styles from '../styles/About.module.css'
import { company } from '../data/company'

const About: React.FC = () => {
  return (
    <Section id="about" subtitle="About" title="会社情報" bg="none">
      <div className={styles.wrap}>
        <div className={styles.text}>
          <p>
            {company.name}
            はテクノロジーと現場実装の双方に強みを持ち、成果起点での伴走を重視します。
          </p>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>社名</th>
              <td>{company.name}</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                {/* 所在地は2行表示 */}
                {company.address.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <th>設立</th>
              <td>{company.established}</td>
            </tr>
            <tr>
              <th>代表</th>
              <td>{company.representative}</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                {/* ブレット表示 */}
                <ul className={styles.bullets}>
                {company.businessSummary.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export default About
