# RouterBase TypeScript Starter

[RouterBase](https://routerbase.com) is an OpenAI-compatible AI model router that gives developers one API for GPT, Claude, Gemini, Meta, Mistral, DeepSeek, xAI, image, video, audio, and other frontier models.

This repository is a TypeScript starter kit for teams that want to build AI products with [RouterBase](https://routerbase.com), including model selection helpers, fallback plans, request configuration utilities, and copy-paste examples for OpenAI-compatible SDK setups.

## Why RouterBase

- One OpenAI-compatible API for 200+ AI models.
- Swap your OpenAI SDK base URL instead of rewriting your app.
- Route requests by cost, latency, availability, or task type.
- Add automatic fallback across providers.
- Keep billing, usage analytics, and provider access in one place.

## Install

```bash
npm install routerbase-typescript-starter
```

You can also copy the small helpers in `src/` directly into an existing TypeScript project.

## Quick Start

```typescript
import {
  createRouterBaseConfig,
  getRouterBaseHeaders,
  modelPresets,
  routerbaseLinks
} from "routerbase-typescript-starter";

const config = createRouterBaseConfig({
  apiKey: process.env.ROUTERBASE_API_KEY ?? "",
  model: modelPresets.balancedChat.primary,
  fallbackModels: modelPresets.balancedChat.fallbacks
});

console.log(config.baseURL);
console.log(getRouterBaseHeaders(config));
console.log(routerbaseLinks.docs);
```

Use the config with any OpenAI-compatible SDK by setting the base URL to RouterBase.

```typescript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.ROUTERBASE_API_KEY,
  baseURL: "https://api.routerbase.com/v1"
});

const response = await client.chat.completions.create({
  model: "openai/gpt-5",
  messages: [{ role: "user", content: "Explain RouterBase in one sentence." }]
});

console.log(response.choices[0]?.message.content);
```

## RouterBase Links

- [RouterBase homepage](https://routerbase.com)
- [RouterBase documentation](https://docs.routerbase.com)
- [RouterBase models](https://routerbase.com/models)
- [RouterBase API docs](https://docs.routerbase.com/apis)

## Model Routing Presets

This starter includes simple routing presets:

- `balancedChat`: general chat with strong fallback coverage.
- `lowLatency`: fast user-facing responses.
- `codingAgent`: code generation, debugging, and refactoring.
- `visionReasoning`: multimodal and visual reasoning tasks.
- `creativeMedia`: image, video, and audio generation workflows.

## Environment

```bash
ROUTERBASE_API_KEY=sk-rb-your-key
```

Create an API key from [RouterBase](https://routerbase.com), then point your OpenAI-compatible client at the RouterBase base URL.

## Development

```bash
npm install
npm run typecheck
npm run build
npm test
```

## Disclaimer

This is an independent community starter kit. RouterBase product names, URLs, and model availability belong to their respective owners and may change over time.
