import { Agent } from "@mastra/core/agent";
import { datetimeTool } from "../tools/datetime-tool";
import { google } from "@ai-sdk/google";

export const datetimeAgent = new Agent({
    name: "Datetime Agent",
    instructions: "あなたは、正確な日付と時刻の情報を提供する便利な日時アシスタントです。",
    model: google('gemini-2.5-flash-preview-05-20'),
    tools: { datetimeTool },
});
