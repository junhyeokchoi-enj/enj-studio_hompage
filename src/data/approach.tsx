// Strategy セクションで使うステップ定義
export type StrategyStep = {
  key: string
  title: string
  points: string[]
}

export const strategySteps: StrategyStep[] = [
  {
    key: "discover",
    title: "現状把握・課題仮説",
    points: ["ヒアリングと現状分析", "KPI/制約の整理", "課題仮説の洗い出し"],
  },
  {
    key: "design",
    title: "プランニング・要件定義",
    points: ["成功条件と評価指標の明確化", "ユースケース/要件の確定", "ロードマップ策定"],
  },
  {
    key: "build",
    title: "実装・検証（PoC）",
    points: ["データ整備/基盤準備", "RAG/エージェント実装", "小規模ユーザで検証"],
  },
  {
    key: "launch",
    title: "本番運用・定着化",
    points: ["運用フロー/権限設計", "ガイド/教育・トレーニング", "監視/改善サイクル立上げ"],
  },
  {
    key: "scale",
    title: "拡張・横展開",
    points: ["追加ユースケース展開", "コスト/品質最適化", "ガバナンス/セキュリティ強化"],
  },
  {
    key: "embed",
    title: "振り返り・内在化",
    points: ["総括と知見の整理", "ナレッジの文書化", "運用ガイド・教育への反映"],
  },
]