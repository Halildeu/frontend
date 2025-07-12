// src/types.d.ts
/// <reference types="vite/client" />

// 👉 Remote bileşenin tipi (şimdilik "any")
// Host uygulama, uzak "Suggestions" uygulamasındaki "SuggestionsApp"
// bileşenini yüklerken aşağıdaki modül tanımını kullanır.
declare module 'suggestions/SuggestionsApp' {
  const Component: React.ComponentType;
  export default Component;
}