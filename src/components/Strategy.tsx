import React from 'react'
import Section from '../components/Section'
import styles from '../styles/Strategy.module.css'
import { pillars } from '../data/strategyPillars'
import { Globe2, Users, Sparkles, BookOpen } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  borderless: <Globe2 />,
  "co-evolution": <Users />,
  value: <Sparkles />,
  knowledge: <BookOpen />
}

const Strategy: React.FC = () => (
    <Section id="strategy" subtitle="Mission & Strategy" title="ミッションと戦略" bg="none">
    {/* アクセント線 */}
    <div className={styles.rule} />

    {/* 3段のリード（中央寄せ・幅狭） */}
    <p className={styles.lead}>
        私たちのミッションは、<br /><br />
        人と人、人とキャラクタ、人とAIをつなぎ、<br />
        国境や価値観を超えた関係性をコーディネートすることで、<br />
        シナジーを創り出すことです。<br /><br />
        その実現に向け、次の4つの戦略原則を掲げています。
    </p>

    <ul className={styles.grid}>
        {pillars.map((p, i) => (
        <li key={p.key} className={`${styles.card} ${i % 2 ? styles.alt : ''}`}>
            <span className={styles.iconRing}>{iconMap[p.key]}</span>
            <div className={styles.body}>
            <h3 className={styles.title} title={p.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            </div>
        </li>
        ))}
    </ul>
    </Section>
)

export default Strategy