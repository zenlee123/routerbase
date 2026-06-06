import { ROUTERBASE_DEFAULT_BASE_URL, routerbaseLinks } from "./links.js";
import { modelPresets } from "./presets.js";
import type { RouterBaseConfig, RouterBaseConfigInput } from "./types.js";

export function createRouterBaseConfig(input: RouterBaseConfigInput): RouterBaseConfig {
  return {
    apiKey: input.apiKey,
    model: input.model,
    baseURL: input.baseURL ?? ROUTERBASE_DEFAULT_BASE_URL,
    routingStrategy: input.routingStrategy ?? "balanced",
    fallbackModels: input.fallbackModels ?? [],
    ...(input.project ? { project: input.project } : {}),
    maxRetries: input.maxRetries ?? 2
  };
}

export function getRouterBaseHeaders(config: RouterBaseConfig): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${config.apiKey}`,
    "X-RouterBase-Routing": config.routingStrategy
  };

  if (config.fallbackModels.length > 0) {
    headers["X-RouterBase-Fallback-Models"] = config.fallbackModels.join(",");
  }

  if (config.project) {
    headers["X-RouterBase-Project"] = config.project;
  }

  return headers;
}

export function createOpenAICompatibleClientOptions(config: RouterBaseConfig): {
  apiKey: string;
  baseURL: string;
  defaultHeaders: Record<string, string>;
  maxRetries: number;
} {
  return {
    apiKey: config.apiKey,
    baseURL: config.baseURL,
    defaultHeaders: getRouterBaseHeaders(config),
    maxRetries: config.maxRetries
  };
}

export { ROUTERBASE_DEFAULT_BASE_URL, modelPresets, routerbaseLinks };
export type {
  RouterBaseConfig,
  RouterBaseConfigInput,
  RouterBaseModelPreset,
  RouterBaseRoutingStrategy
} from "./types.js";
