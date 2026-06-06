import {
  createOpenAICompatibleClientOptions,
  createRouterBaseConfig,
  modelPresets
} from "../src/index.js";

const config = createRouterBaseConfig({
  apiKey: process.env.ROUTERBASE_API_KEY ?? "",
  model: modelPresets.balancedChat.primary,
  fallbackModels: modelPresets.balancedChat.fallbacks,
  routingStrategy: modelPresets.balancedChat.routingStrategy,
  project: "routerbase-demo"
});

const clientOptions = createOpenAICompatibleClientOptions(config);

console.log(clientOptions);
