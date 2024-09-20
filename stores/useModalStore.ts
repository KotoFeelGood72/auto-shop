import { defineStore } from "pinia";

interface ModalsState {
  burger: boolean;
  filter: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): { modals: ModalsState } => ({
    modals: {
      burger: false,
      filter: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState): void {
      this.modals[modalName] = false;
    },
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
