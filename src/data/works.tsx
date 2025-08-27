import type { CategoryName } from './categories'

export type WorkItem = {
  id: number
  categories: CategoryName[]   // ← 文字列直書きじゃなく型保証
  text: string
}

export const works: WorkItem[] = [
  {
    id: 1,
    categories: ["マーケッティング・リサーチ"],
    text: "海外企業のeコマース向けプロモーション戦略検討支援",
  },
  {
    id: 2,
    categories: ["広告・SNSコンテンツ制作"],
    text: "韓国化粧品メーカーの日本市場参入に向けたSNSプロモーション支援",
  },
  {
    id: 3,
    categories: ["生成AI活用支援", "人材育成・研修プログラム"],
    text: "国内製造業の生成AI同伴型市民開発推進体制の検討支援",
  },
  {
    id: 4,
    categories: ["RAG・AIエージェント開発", "人材育成・研修プログラム"],
    text: "国内中堅ビルメンテナンス企業のRAG構想策定およびPoC開発",
  },
  {
    id: 5,
    categories: ["データ管理・基盤設計・構築"],
    text: "国内大手製造業のデータマネジメント仕組みの検討支援",
  },
  {
    id: 6,
    categories: ["ソフトウェア開発・PM支援"],
    text: "国内大手自動車OEMのグローバルITシステム開発PM支援",
  },
  {
    id: 7,
    categories: ["人材育成・研修プログラム", "ソフトウェア開発・PM支援"],
    text: "国内大手自動車OEMの社内DX人材育成の伴走型支援",
  },
  {
    id: 8,
    categories: ["地域活性化・国際協力支援"],
    text: "インバウンド向け観光プロモーションの企画・実施支援",
  },
  {
    id: 9,
    categories: ["RAG・AIエージェント開発"],
    text: "国内製造業向け人事採用・評価・評価者評価AIエージェント開発",
  },
  {
    id: 10,
    categories: ["生成AI活用支援"],
    text: "国内SIerの社内営業向けRAG開発の伴走型支援",
  },
]