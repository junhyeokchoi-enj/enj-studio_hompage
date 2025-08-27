import React from 'react'
import Section from './Section'
import styles from '../styles/Approach.module.css'
import { strategySteps } from '../data/approach'
import { Search, PencilRuler, Hammer, Rocket, LineChart, BookOpen } from 'lucide-react'

const icons: Record<string, React.ReactNode> = {
  discover: <Search />,
  design: <PencilRuler />,
  build: <Hammer />,
  launch: <Rocket />,
  scale: <LineChart />,
  embed: <BookOpen />,
}

const Strategy: React.FC = () => {
  const gridClass =
    strategySteps.length === 6 ? styles.gridSix : styles.gridPyramid

  return (
    <Section id="approach" subtitle="Approach" title="伴走型アプローチ" bg="none">
      <p className={styles.lead}>企画から実装・運用定着までを段階的に進めることで、スピードと再現性を両立します。</p>

      <ol className={gridClass}>
        {strategySteps.map((s, idx) => (
          <li key={s.key} className={styles.card} data-step={idx + 1}>
            <div className={styles.head}>
              <span className={styles.stepNo}>STEP {idx + 1}</span>
              <h3 className={styles.title} title={s.title}>{s.title}</h3>
              <span className={styles.icon}>{icons[s.key]}</span>
            </div>
            <ul className={styles.points}>
              {s.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>

      <p className={styles.note}>各フェーズは固定ではなく、状況に応じて短サイクルで往復しながらスコープを磨き込みます。</p>
    </Section>
  )
}

export default Strategy