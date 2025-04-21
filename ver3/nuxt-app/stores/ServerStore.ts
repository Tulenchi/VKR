import { defineStore } from "pinia";
import type { ServerUnit } from '@/models/ServerUnit';
import { testServerUnits } from '@/test_bd/server_units';

export const useServerStore = defineStore('serverStore', {
    state: () => ({
        servers: [] as ServerUnit[],
        loading: false
    }),

    //getters: {
    //    getAllServers: (state) => state.servers,

        // Получение сервера по ID
    //    getServerById: (state) => (id: string) => {
    //        return state.servers.find(server => server.id === id)
    //    },

    //},

    actions: {
        async fetchServers() {
            this.loading = true;
            try {
                this.servers = testServerUnits;
            } finally {
                this.loading = false;
            }
        }
    }
});