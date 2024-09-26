import { defineStore } from "pinia";

interface ModalsState {
  burger: boolean;
  filter: boolean;
  modalCallback: boolean;
  modalConsult: boolean;
  ModalCar: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): { modals: ModalsState } => ({
    modals: {
      burger: false,
      filter: false,
      modalCallback: false,
      modalConsult: false,
      ModalCar: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState): void {
      this.modals[modalName] = false;
    },
    closeAllModals() {
      Object.keys(this.modals).forEach((modalName) => {
        this.modals[modalName as keyof ModalsState] = false;
      });
    },
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
