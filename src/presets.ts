import type { RouterBaseModelPreset } from "./types.js";

export const modelPresets = {
  balancedChat: {
    name: "Balanced chat",
    primary: "openai/gpt-5",
    fallbacks: ["anthropic/claude-sonnet-4.5", "google/gemini-2.5-pro"],
    routingStrategy: "balanced",
    useCase: "General-purpose chat, support bots, and app assistants"
  },
  lowLatency: {
    name: "Low latency",
    primary: "openai/gpt-5-mini",
    fallbacks: ["google/gemini-2.5-flash", "anthropic/claude-haiku-4.5"],
    routingStrategy: "lowest-latency",
    useCase: "Fast user-facing responses where responsiveness matters"
  },
  codingAgent: {
    name: "Coding agent",
    primary: "anthropic/claude-sonnet-4.5",
    fallbacks: ["openai/gpt-5", "google/gemini-2.5-pro"],
    routingStrategy: "highest-quality",
    useCase: "Code generation, debugging, refactoring, and technical reasoning"
  },
  visionReasoning: {
    name: "Vision reasoning",
    primary: "google/gemini-2.5-pro",
    fallbacks: ["openai/gpt-5", "anthropic/claude-sonnet-4.5"],
    routingStrategy: "balanced",
    useCase: "Image understanding, multimodal reasoning, and document analysis"
  },
  creativeMedia: {
    name: "Creative media",
    primary: "kling/v3",
    fallbacks: ["runway/gen-4", "black-forest-labs/flux-pro"],
    routingStrategy: "fallback-first",
    useCase: "Image, video, and audio generation pipelines"
  }
} satisfies Record<string, RouterBaseModelPreset>;

export type RouterBasePresetName = keyof typeof modelPresets;
