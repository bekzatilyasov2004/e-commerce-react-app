import create from 'zustand';

const useProductStore = create((set) => ({
  selectedProduct: null,
  cart: [],
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product]
  })),
}));

export default useProductStore;
