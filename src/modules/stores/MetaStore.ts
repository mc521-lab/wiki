import { defineStore } from "pinia";

interface IMeta {
    [key: string]: any;
}

const useMetaStore = defineStore("meta", {
    state: () => ({
        meta: {} as IMeta,
    }),

    getters: {
        getMeta: (state) => state.meta,
    },

    actions: {
        setMeta(meta: object) {
            this.meta = meta;
        },
    },
});

export default useMetaStore;
