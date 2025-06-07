import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { MCPClient } from "@mastra/mcp";

export const mcp = new MCPClient({
  id: "filesystem-agent",
  servers: {
    filesystem: {
      command: "npx",
      args: [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "<ファイルの読み書きを許可するパス>"
      ]
    },
  },
});

export const filesystemAgent = new Agent({
    name: "FileSystem Agent",
    instructions: `あなたは、ファイルの操作を行うアシスタントです。`,
    model: google('gemini-2.5-flash-preview-05-20'),
    tools: await mcp.getTools(),
});