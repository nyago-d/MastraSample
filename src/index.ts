import 'dotenv/config';
import { mastra } from './mastra';
import { filesystemAgent, mcp } from './mastra/agents/filesystem-agent';

async function main() {

//     const agent = mastra.getAgent('weatherAgent');
//     const result = await agent.generate('今日の東京の天気は？');
//     console.log(result.text);

//     const agent = mastra.getAgent('datetimeAgent');
//     const result = await agent.generate('現在の日時は？');
//     console.log(result.text);

    const result = await filesystemAgent.generate(`許可されたディレクトリにファイルを作成して、内容を書き込んでください。
ファイル名は "example.txt" で、内容は "Hello, Mastra!" としてください。
確認を求められた場合は許可してください。`);
    console.log(result.text);
    
    await mcp.disconnect();
}

main();