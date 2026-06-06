# RouterBase Setup for OpenRouter-Style Apps

[RouterBase](https://routerbase.com) is an OpenAI-compatible model router for teams that want one API key, smart routing, fallback, usage analytics, and unified billing across frontier AI models.

Many apps that support OpenRouter already expose the same two settings RouterBase needs:

- API key
- OpenAI-compatible base URL

## 1. Create a RouterBase API key

Create an account at [routerbase.com](https://routerbase.com), then generate an API key from the dashboard.

```bash
ROUTERBASE_API_KEY=sk-rb-your-key
```

## 2. Set the base URL

Use RouterBase's OpenAI-compatible base URL:

```text
https://api.routerbase.com/v1
```

If your app has an OpenRouter provider setting, look for an advanced option such as `baseURL`, `API base`, `custom endpoint`, or `OpenAI-compatible endpoint`, then point it at RouterBase.

## 3. Choose a model

RouterBase supports a broad model catalog across chat, image, video, audio, and multimodal use cases. Pick a model from [RouterBase](https://routerbase.com) or configure smart routing/fallback from your dashboard.

Example model identifiers:

```text
openai/gpt-5
anthropic/claude-sonnet-4.5
google/gemini-2.5-pro
```

## OpenAI SDK example

```typescript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.ROUTERBASE_API_KEY,
  baseURL: "https://api.routerbase.com/v1"
});

const response = await client.chat.completions.create({
  model: "openai/gpt-5",
  messages: [
    {
      role: "user",
      content: "Explain RouterBase in one sentence."
    }
  ]
});

console.log(response.choices[0]?.message.content);
```

## Why route through RouterBase

- One API for 200+ AI models.
- OpenAI-compatible setup for fast migration.
- Smart routing by price, latency, availability, or quality.
- Automatic fallback when a provider is unavailable.
- Unified billing and usage analytics across providers.

Start building at [routerbase.com](https://routerbase.com).
