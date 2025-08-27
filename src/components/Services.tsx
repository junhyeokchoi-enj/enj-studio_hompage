import React, { useMemo } from 'react'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import styles from '../styles/Services.module.css'
import { works } from '../data/works'
import { categories as categoryDefs } from '../data/categories'

const Services: React.FC = () => {
  // Worksに実際に登場するカテゴリ（重複排除）
  const usedCategorySet = useMemo(() => {
    const all = works.flatMap(w => w.categories) // 単一カテゴリなら .map(w => w.category)
    return new Set(all)
  }, [])

  // 定義ファイルにあるカテゴリのうち「Worksで使われているもの」だけを順序維持で抽出
  const cards = useMemo(() => {
    return categoryDefs.filter(c => usedCategorySet.has(c.name))
  }, [usedCategorySet])

  return (
    <Section id="services" subtitle="Services" title="事業紹介" bg="tint">
      <div className={styles.grid}>
        {cards.map(c => (
          <ServiceCard
            key={c.name}
            title={c.name}
            description={c.description}
            icon={c.icon}
            href={`#works:${encodeURIComponent(c.name)}`}
          />
        ))}
      </div>
    </Section>
  )
}

export default Services