import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Uzantının .ts olduğunu fark edin
import productsReducer from './productsSlice'; // <-- IMPORT ET

export const store = configureStore({
  reducer: {
    counter: counterReducer,
        products: productsReducer, // <-- EKLE
  },
});

// Bu tipleri, uygulamanın geri kalanında useSelector ve useDispatch için kullanacağız.
// Bu, Redux Toolkit'in resmi olarak tavsiye ettiği en iyi yöntemdir.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;