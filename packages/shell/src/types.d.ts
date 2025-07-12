// src/types.d.ts
/// <reference types="vite/client" />

// 👉 Remote bileşenin tipi (şimdilik "any")
declare module 'suggestions/Suggestion' {
  const Component: React.ComponentType;
  export default Component;
}