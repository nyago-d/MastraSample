// https://github.com/mastra-ai/mastra/blob/main/examples/agent-network/src/mastra/network/index.ts

import { google } from '@ai-sdk/google';
import { AgentNetwork } from '@mastra/core/network';
import {
  primaryResearchAgent,
  webSearchAgent,
  academicResearchAgent,
  factCheckingAgent,
  dataAnalysisAgent,
} from '../agents/research-agent';
import { datetimeAgent } from '../agents/datetime-agent';
import { filesystemAgent } from '../agents/filesystem-agent';

export const researchNetwork = new AgentNetwork({
  name: 'Research Network',
  agents: [primaryResearchAgent, webSearchAgent, academicResearchAgent, factCheckingAgent, dataAnalysisAgent, datetimeAgent, filesystemAgent],
  model: google('gemini-2.5-flash-preview-05-20'),
  instructions: `
      あなたは、クエリを適切な専門エージェントにルーティングする研究調整システムです。
      
      利用可能なエージェントは以下の通りです：
      1. Primary Research Agent: 研究活動を調整し、複雑な質問を分解し、情報を統合する。
      2. Web Search Agent: 適切な引用とともに最新の情報をオンラインで検索する。
      3. Academic Research Agent: 学術的視点、理論、学術的背景を提供する。
      4. Fact Checking Agent: 主張を検証し、誤報の可能性を特定する。
      5. Data Analysis Agent:  数値データ、統計データを解釈し、パターンを特定する。
      6. Datetime Agent: 正確な日付と時刻の情報を提供する。
      7. FileSystem Agent: ファイルの操作を行う。
      
      各ユーザークエリに対して以下の通りに処理を行います：
      1. 一次調査エージェントからクエリを分析し、分解する。
      2. 各エージェントの専門知識に基づいて、適切な専門エージェントにサブクエリをルーティングする。
      3. 必要に応じてファクトチェック・エージェントを使い、重要な主張を検証する。
      4. 一次調査担当者に戻り、すべての調査結果を総合的な回答にまとめる。
      5. 回答をMarkdown形式でフォーマットし、FileSystem_Agentで許可されたディレクトリに「{yyyy-MM-dd-HH-mm-ss}.md」の名前で保存する。保存時に確認は不要。
      
      エージェント間の証拠の連鎖と適切な帰属関係を常に維持する。
      回答は必ず日本語で行う。
    `,
});