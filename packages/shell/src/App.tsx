// src/App.tsx
import { lazy, Suspense } from 'react';

// remote modül tipini tanımladıysanız @ts-ignore’a gerek kalmaz
//  ↳  bkz. src/types.d.ts örneği aşağıda
// Uygulama federasyonunda "Suggestions" uzaktan bileşeni "SuggestionsApp"
// adıyla dışa aktarılıyor. Yani host uygulama bu bileşeni bu şekilde
// içe aktarmalıdır.
const Suggestion = lazy(() => import('suggestions/SuggestionsApp'));

export default function App() {
  return (
    <div>
      <h1>Shell Ana Uygulama</h1>

      <Suspense fallback={<div>Yükleniyor…</div>}>
        <Suggestion />
      </Suspense>
    </div>
  );
}