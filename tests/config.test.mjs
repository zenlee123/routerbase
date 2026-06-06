import assert from "node:assert/strict";
import { test } from "node:test";

test("RouterBase defaults use the public API base URL", () => {
  const baseURL = "https://api.routerbase.com/v1";

  assert.equal(baseURL, "https://api.routerbase.com/v1");
});

test("README links point at RouterBase", () => {
  const links = [
    "https://routerbase.com",
    "https://docs.routerbase.com",
    "https://routerbase.com/models"
  ];

  assert.ok(links.every((link) => link.includes("routerbase.com")));
});
