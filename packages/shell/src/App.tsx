// src/App.tsx
import { lazy, Suspense } from 'react';

// remote modül tipini tanımladıysanız @ts-ignore’a gerek kalmaz
//  ↳  bkz. src/types.d.ts örneği aşağıda
const Suggestion = lazy(() => import('suggestions/Suggestion'));

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