import React, { useMemo, useState, useRef, useEffect } from 'react'
import Section from '../components/Section'
import styles from '../styles/Works.module.css'
import { works } from '../data/works'

const Works: React.FC = () => {
  // ユニークなカテゴリ一覧（先頭に "すべて"）
  const categories = useMemo(() => {
    const allCats = works.flatMap(w => w.categories)
    const uniq = Array.from(new Set(allCats))
    return ["すべて", ...uniq]
  }, [])

  const [active, setActive] = useState<string>(categories[0])
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // ← 追記：URLハッシュと連動（#works:カテゴリ名 でタブ切替）
  useEffect(() => {
    const applyFromHash = () => {
      const raw = window.location.hash || ''
      const m = raw.match(/^#works:(.+)$/)
      if (!m) return
      const cat = decodeURIComponent(m[1])
      if (categories.includes(cat)) {
        setActive(cat)
        // ハッシュ指定で来た時だけスクロール（通常アクセスでは動かない）
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    applyFromHash()
    window.addEventListener('hashchange', applyFromHash)
    return () => window.removeEventListener('hashchange', applyFromHash)
  }, [categories])

  // キーボード操作（← →）に対応
  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const idx = categories.indexOf(active)
    if (e.key === 'ArrowRight') {
      const next = (idx + 1) % categories.length
      setActive(categories[next])
      tabRefs.current[next]?.focus()
    } else if (e.key === 'ArrowLeft') {
      const prev = (idx - 1 + categories.length) % categories.length
      setActive(categories[prev])
      tabRefs.current[prev]?.focus()
    }
  }

  const filtered = useMemo(
    () => active === "すべて"
      ? works
      : works.filter(w => w.categories.includes(active)),
    [active]
  )

  return (
    <Section id="works" subtitle="Works" title="主要プロジェクト実績" bg="gray">
      <div className={styles.text}>
        <p>
          これまで、外資系企業から国内大手企業、スタートアップに至るまで、幅広い顧客層に対し、
          新規事業開発・戦略立案・組織変革など多岐にわたるテーマで支援してきました。
        </p>
        <p>
          テクノロジーと経営、人材開発を結節点としたアプローチに強みを持ち、以下のような実績を重ねています。
        </p>
      </div>

      {/* タブ */}
      <div
        className={styles.tablist}
        role="tablist"
        aria-label="実績カテゴリ"
        onKeyDown={onKeyDown}
      >
        {categories.map((c, i) => {
          const selected = c === active
          return (
            <button
              key={c}
              ref={(el) => { tabRefs.current[i] = el }}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              className={`${styles.tab} ${selected ? styles.active : ''}`}
              onClick={() => {
                setActive(c)
                // 任意：クリック時にURLハッシュも同期したい場合は以下の行を有効化
                // if (c === 'すべて') history.replaceState(null, '', '#works')
                // else history.replaceState(null, '', `#works:${encodeURIComponent(c)}`)
              }}
              type="button"
            >
              {c}
            </button>
          )
        })}
      </div>

      {/* パネル */}
      <div
        role="tabpanel"
        id={`panel-${categories.indexOf(active)}`}
        aria-labelledby={`tab-${categories.indexOf(active)}`}
        className={styles.panel}
      >
        <ul className={styles.list}>
          {filtered.map(item => (
            <li key={item.id}>
              <div className={styles.catBlock}>
                {item.categories.map(cat => (
                  <div key={cat} className={styles.cat}>{cat}</div>
                ))}
              </div>
              <div className={styles.textItem}>{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Works
