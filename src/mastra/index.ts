
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';

import { researchNetwork } from './network/research-network';
import { webSearchAgent } from './agents/research-agent';
import { weatherAgent } from './agents/weather-agent';
import { datetimeAgent } from './agents/datetime-agent';
import { filesystemAgent, mcp } from './agents/filesystem-agent';

export const mastra = new Mastra({
  agents: { weatherAgent, webSearchAgent, datetimeAgent, filesystemAgent },
  networks: { researchNetwork },
  storage: new LibSQLStore({
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
