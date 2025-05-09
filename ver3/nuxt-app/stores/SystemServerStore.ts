import { defineStore } from "pinia";
import type { SystemServerConnection } from '@/models/SystemServerConnection';
import { testSystemServerConnections } from '@/test_bd/test_bd';

export const useSystemServerStore = defineStore('systemServerStore', {
    state: () => ({
        connections: [] as SystemServerConnection[],
        loading: false
    }),

    getters: {
        getConnectionsBySystemId: (state) => (systemId: string) => {
            return state.connections.filter(conn => conn.system_id === systemId);
        },
        getServerConnections: (state) => (serverId: string) => {
            return state.connections.filter(conn => conn.server_id === serverId);
        }
    },

    actions: {
        async fetchConnections() {
            if (this.connections.length > 0) return;

            this.loading = true;
            try {
                this.connections = testSystemServerConnections;
            } finally {
                this.loading = false;
            }
        },

        async fetchConnectionsBySystemId(systemId: string) {
            this.loading = true;
            try {
                return testSystemServerConnections.filter(conn => conn.system_id === systemId);
            } finally {
                this.loading = false;
            }
        }
    }
});