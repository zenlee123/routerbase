export type RouterBaseRoutingStrategy =
  | "balanced"
  | "lowest-cost"
  | "lowest-latency"
  | "highest-quality"
  | "fallback-first";

export interface RouterBaseConfigInput {
  apiKey: string;
  model: string;
  baseURL?: string;
  routingStrategy?: RouterBaseRoutingStrategy;
  fallbackModels?: string[];
  project?: string;
  maxRetries?: number;
}

export interface RouterBaseConfig {
  apiKey: string;
  model: string;
  baseURL: string;
  routingStrategy: RouterBaseRoutingStrategy;
  fallbackModels: string[];
  project?: string;
  maxRetries: number;
}

export interface RouterBaseModelPreset {
  name: string;
  primary: string;
  fallbacks: string[];
  routingStrategy: RouterBaseRoutingStrategy;
  useCase: string;
}
