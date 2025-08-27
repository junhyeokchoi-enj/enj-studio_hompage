import {
  BarChart2,
  Megaphone,
  Sparkles,
  Bot,
  Database,
  Code2,
  Users,
  Globe2,
} from "lucide-react"

export type Category = {
  name: string
  description?: string
  icon?: React.ComponentType<any>   // JSXじゃなくコンポーネント参照
}

export const categories: Category[] = [
  { name: "マーケティング・リサーチ", description: "市場調査から示唆出し、戦略設計まで一気通貫で伴走", icon: BarChart2 },
  { name: "広告・SNSコンテンツ制作", description: "SNS運用・プロモ設計、クリエイティブ制作〜運用まで", icon: Megaphone },
  { name: "生成AI活用支援", description: "ユースケース設計、PoC、運用定着とガバナンスまで支援", icon: Sparkles },
  { name: "RAG・AIエージェント開発", description: "社内文書検索RAGや業務特化エージェントを設計・実装", icon: Bot },
  { name: "データ管理・基盤設計・構築", description: "メタデータ管理、DWH/ETL設計、運用パイプライン整備", icon: Database },
  { name: "ソフトウェア開発・PM支援", description: "要件整理、アーキ設計、実装、PM・品質管理を支援", icon: Code2 },
  { name: "人材育成・研修プログラム", description: "DX/AI・プロダクト思考の研修を実務に繋げて提供", icon: Users },
  { name: "地域活性化・国際協力支援", description: "観光・地域資源の磨き上げと発信、連携・実装を支援", icon: Globe2 },
]

export type CategoryName = typeof categories[number]['name'];