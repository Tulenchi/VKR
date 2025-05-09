import { defineStore } from "pinia";
import type { ServerUnit } from '@/models/ServerUnit';
import { testServerUnits, testServerCluster, testGroups } from '@/test_bd/test_bd';

export const useServerStore = defineStore('serverStore', {
    state: () => ({
        servers: [] as ServerUnit[],
        loading: false,
        currentServer: null as ServerUnit | null,
        cache: new Map<string, ServerUnit>() // кеш для избежания повторных загрузок
    }),

    getters: {
        getServerById: (state) => (id: string) => {
            return state.cache.get(id) || state.servers.find(server => server.server_id === id);
        },
        getAllClusters: (state) => {
            const clusters = new Set<string>();

            testServerCluster.forEach(cluster => {
                clusters.add(cluster.cluster_name);
            });
            return Array.from(clusters);
        },
        getAvailableGroups: (state) => (serverId: string) => {
            const server = state.cache.get(serverId) || state.servers.find(s => s.server_id === serverId);
            if (!server) return testGroups;

            const serverGroupIds = server.group_id.map(g => g.group_id);
            return testGroups.filter(group => !serverGroupIds.includes(group.group_id));
        }
    },

    actions: {
        async fetchServers() {
            if (this.servers.length > 0) return; // если уже загружены

            this.loading = true;
            try {
                this.servers = testServerUnits;
                testServerUnits.forEach(server => {
                    this.cache.set(server.server_id, server);
                }); // заполняем кеш
            } finally {
                this.loading = false;
            }
        },

        async fetchServerById(id: string) {
            if (this.cache.has(id)) {
                this.currentServer = this.cache.get(id)!;
                return;
            } // проверка кеша перед запросом

            this.loading = true;
            try {
                const server = testServerUnits.find(s => s.server_id === id);
                if (server) {
                    this.currentServer = server;
                    this.cache.set(id, server);
                }
                return server;
            } finally {
                this.loading = false;
            }
        }
    }
});