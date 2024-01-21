export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "www.api.development.example.com"
    : "www.api.example.com";
