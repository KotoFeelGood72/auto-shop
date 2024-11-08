import { defineStore, storeToRefs } from "pinia";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: null as any,
  }),
  actions: {
    async fetchContacts() {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get("/contacts");
        this.contacts = response.data;
      } catch (error) {}
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});

export const useContactsStoreRefs = () => storeToRefs(useContactsStore());
