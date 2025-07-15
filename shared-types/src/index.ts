// Redux'taki counter state'inin yapısını tanımlar.
export interface CounterState {
  value: number;
}

// Gelecekte paylaşmak isteyebileceğimiz başka bir tip örneği
export interface UserProfile {
  id: string;
  username: string;
  email: string;
}

// Bu dosyanın en altına yeni tipleri ekleyin

export interface Product {
  id: number;
  name: string;
}

export interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}