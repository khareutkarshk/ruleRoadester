import { create } from "zustand";

const useStore = create((set) => ({
  modalOpen: false,
  toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen })),
}));
