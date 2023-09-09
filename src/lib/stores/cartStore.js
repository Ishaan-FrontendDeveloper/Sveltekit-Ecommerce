import { writable } from 'svelte/store';

const initialState = {
  items: [],
  total: 0,
};

function createCart() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addItem: (product) =>
      update((state) => {
        const index = state.items.findIndex((item) => item.id === product.uuid);

        if (index !== -1 || state.items.includes(product.uuid)) {
          state.items[index].quantity++;
        } else {
          state.items.push({ ...product, quantity: 1 });
        }
        console.log(state.items)
        state.total += Number(product.price);
        return state;
      }),
    removeItem: (productId) =>
      update((state) => {
        const index = state.items.findIndex((item) => item.id === productId);

        if (index !== -1) {
          state.total -= Number(state.items[index].price) * state.items[index].quantity;
          state.items.splice(index, 1);
        }
        
        return state;
      }),
    clear: () => set(initialState),
  };
}

export const cart = createCart();
