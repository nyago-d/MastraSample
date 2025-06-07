import { createTool } from "@mastra/core";
import { z } from 'zod';

export const datetimeTool = createTool({
    id: "get-current-datetime",
    description: "現在の日時を取得します",
    outputSchema: z.object({
        datetime: z.string().describe("現在の日時（日本時間）"),
    }),
    execute: async () => {
        const now = new Date();
        return { datetime: now.toString() };
    },
});