import React, { useEffect, Suspense, useContext } from 'react'; // GÜNCELLENDİ: useEffect eklendi
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Redux ve Context ile ilgili importlar
import { store, RootState, AppDispatch } from './store/store';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { increment, decrement } from './store/counterSlice';
import { fetchProducts } from './store/productsSlice'; // GÜNCELLENDİ: Asenkron action import edildi

// Mikro uygulamaları tembel yükleme
const SuggestionsApp = React.lazy(() => import('mfe_suggestions/SuggestionsApp'));
const EthicApp = React.lazy(() => import('mfe_ethic/EthicApp'));

// Header bileşeni, hem tema hem de yönlendirme linklerini içerir
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/" style={{ marginRight: '1rem' }}>Ana Sayfa</Link>
        <Link to="/suggestions" style={{ marginRight: '1rem' }}>Suggestions</Link>
        <Link to="/ethic">Ethic</Link>
      </div>
      <button onClick={toggleTheme}>Tema Değiştir ({theme})</button>
    </nav>
  );
};

// Tüm arayüz mantığını barındıran ana bileşen
const AppLayout = () => {
  const { colors } = useContext(ThemeContext);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  // GÜNCELLENDİ: Uygulama ilk yüklendiğinde ürünleri çekmek için useEffect eklendi
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: '100vh', padding: '1rem' }}>
        <h1>Ana Uygulama (Shell) - Sayaç: {count}</h1>
        <div style={{ margin: '1rem 0' }}>
          <button onClick={() => dispatch(increment())} style={{ marginRight: '0.5rem' }}>Artır (+)</button>
          <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
        </div>
        
        <Header />
        
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Routes>
            <Route path="/suggestions" element={<SuggestionsApp />} />
            <Route path="/ethic" element={<EthicApp />} />
            <Route path="/" element={<h2>Ana Sayfaya Hoş Geldiniz</h2>} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};


// En üst seviye App bileşeni. Tek görevi Provider'ları sağlamak.
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;