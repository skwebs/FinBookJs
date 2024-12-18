// import create from 'zustand';

// export const useAuthStore = create((set) => ({
//   user: null, // Current user
//   setUser: (user) => set({ user }),
//   clearUser: () => set({ user: null }),
// }));
// import { create } from 'zustand';

// const useAuthStore = create((set) => ({
//   user: null,
//   setUser: (userDetails) => set({ user: userDetails }),
// }));

// export default useAuthStore;


import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  setUser: (userDetails) => set({ user: userDetails }),
}));

export default useAuthStore;
