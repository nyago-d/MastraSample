import 'dotenv/config';
import { researchNetwork } from './mastra/network/research-network';
import { mcp } from './mastra/agents/filesystem-agent';

async function main() {

  console.log('🔍 リサーチ中です...\n');

  const result = await researchNetwork.stream('昨日～今日にかけての生成AIに関するニュースをまとめて', {
    maxSteps: 20
  });

  for await (const part of result.fullStream) {
    switch (part.type) {
      case 'error':
        console.error(part.error);
        break;
      case 'text-delta':
        process.stdout.write(part.textDelta);
        break;
      case 'tool-call':
        console.log(`calling tool ${part.toolName} with args ${JSON.stringify(part.args, null, 2)}`);
        break;
      case 'tool-result':
        console.log(`tool result ${JSON.stringify(part.result, null, 2)}`);
        break;
    }
  }

  await mcp.disconnect();

  console.log('\n🏁 リサーチが完了しました');
}

main();