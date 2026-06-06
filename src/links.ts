export const routerbaseLinks = {
  home: "https://routerbase.com",
  docs: "https://docs.routerbase.com",
  apiDocs: "https://docs.routerbase.com/apis",
  models: "https://routerbase.com/models",
  signIn: "https://routerbase.com/sign-in"
} as const;

export const ROUTERBASE_DEFAULT_BASE_URL = "https://api.routerbase.com/v1";

export type RouterBaseLinkKey = keyof typeof routerbaseLinks;
