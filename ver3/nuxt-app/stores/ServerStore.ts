import { defineStore } from "pinia";
import type { ServerUnit } from '@/models/ServerUnit';
import { testServerUnits } from '@/test_bd/test_bd';

export const useServerStore = defineStore('serverStore', {
    state: () => ({
        servers: [] as ServerUnit[],
        loading: false,
        currentServer: null as ServerUnit | null
    }),

    getters: {
        getServerById: (state) => (id: string) => {
            return state.servers.find(server => server.server_id === id)
        },
    },

    actions: {
        async fetchServers() {
            this.loading = true;
            try {
                this.servers = testServerUnits;
            } finally {
                this.loading = false;
            }
        },

        async fetchServerById(id: string) {
            this.loading = true;
            try {
                const server = testServerUnits.find(s => s.server_id === id);
                this.currentServer = server || null;
                return server;
            } finally {
                this.loading = false;
            }
        }
    }
});