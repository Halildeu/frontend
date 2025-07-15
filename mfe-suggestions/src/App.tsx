import { useSelector, useDispatch } from 'react-redux';
import { CounterState } from '@mfe/shared-types';
import { increment } from 'mfe_shell/logic';
import { Button } from 'mfe_ui_kit/Button'; // Paylaşılan butonu import ediyoruz.

interface RootState {
  counter: CounterState;
}

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '1em', border: '2px dashed blue' }}>
      <h2>Burası "Suggestions" Mikro Uygulaması</h2>
      <hr />
      <h3>Paylaşılan Sayaç Değeri: {count}</h3>
      {/* GÜNCELLENDİ: Standart <button> yerine paylaşılan <Button> bileşeni kullanıldı. */}
      <Button onClick={() => dispatch(increment())}>
        Shell'deki Sayacı Artır
      </Button>
    </div>
  );
};

export default App;