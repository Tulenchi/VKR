import { defineStore } from "pinia";
import type { SystemName } from '@/models/SystemName';
import {testGroups, testSystemName, testSystemType} from '@/test_bd/test_bd';

export const useSystemStore = defineStore('systemStore', {
    state: () => ({
        systems: [] as SystemName[],
        loading: false,
        currentSystem: null as SystemName | null,
        cache: new Map<string, SystemName>() // кеш для избежания повторных загрузок
    }),

    getters: {
        getSystemById: (state) => (id: string) => {
            return state.cache.get(id) || state.systems.find(system => system.system_id === id);
        },
        getAllTypes: (state) => {
            const types = new Set<string>();
            state.systems.forEach(system => {
                if (system.systemtype_id) {
                    types.add(system.systemtype_id.type);
                }
            });
            testSystemType.forEach(type => {
                types.add(type.type);
            });
            return Array.from(types);
        },
        getAvailableGroupsSystem: (state) => (systemId: string) => {
            const system = state.cache.get(systemId) || state.systems.find(s => s.system_id === systemId);
            if (!system) return testGroups;

            const systemGroupIds = system.group_id.map(g => g.group_id);
            return testGroups.filter(group => !systemGroupIds.includes(group.group_id));
        }
    },

    actions: {
        async fetchSystems() {
            if (this.systems.length > 0) return; // если уже загружены

            this.loading = true;
            try {
                this.systems = testSystemName;
                testSystemName.forEach(system => {
                    this.cache.set(system.system_id, system);
                }); // заполняем кеш
            } finally {
                this.loading = false;
            }
        },

        async fetchSystemById(id: string) {
            if (this.cache.has(id)) {
                this.currentSystem = this.cache.get(id)!;
                return;
            } // проверка кеша перед запросом

            this.loading = true;
            try {
                const system = testSystemName.find(s => s.system_id === id);
                if (system) {
                    this.currentSystem = system;
                    this.cache.set(id, system);
                }
                return system;
            } finally {
                this.loading = false;
            }
        }
    }
});