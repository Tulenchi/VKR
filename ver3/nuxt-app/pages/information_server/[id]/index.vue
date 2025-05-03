<template>
  <div class="navbar bg-primary shadow-xl sticky top-0 z-40">
    <div class="navbar-start">
      <NuxtLink :to="{ name: 'index' }">
        <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1 hover:bg-neutral-100 hover:text-neutral-50-content">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
            </svg>
          </span>
        </button>
      </NuxtLink>
      <NuxtLink :to="{ name: 'map_server'}">
        <button class="btn btn-ghost btn-secondary h-12 w-12 hover:bg-neutral-100 hover:text-neutral-50-content">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
          </span>
        </button>
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <a class="text-2xl text-primary-content">{{ server.server_name }}</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <div class="min-h-screen px-12 py-4">
    <div class="card bg-neutral text-neutral-content shadow-xl mb-3">
      <div class="card-body">

        <!-- Система -->
        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-2">Системы</h3>
          <div class="space-y-2">
            <div
                v-for="system in server?.system_id"
                :key="system.system_id"
                class="flex items-center justify-between"
            >
              <span class="text-lg">{{ system.system_name }}</span>
              <NuxtLink :to="{ name: 'information_system-id', params: { id: system.system_id } }">
                <button class="btn px-5 truncate bg-neutral-50 text-neutral-50-content sm:min-w-60 md:min-w-80 hover:bg-neutral-100 hover:text-neutral-50-content">
                  Подробнее
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Кластер -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Кластер</h3>
            <select class="select select-neutral" v-model="selectedCluster">
              <option disabled selected>Выберите кластер</option>
              <option v-for="cluster in clusters" :key="cluster" :value="cluster">
                {{ cluster }}
              </option>
            </select>
          </div>
        </div>

        <!-- Группа -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Группы</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>
          <div class="space-y-4">
            <div
                v-for="group in server?.group_id"
                :key="group.group_id"
                class="flex items-center justify-between"
            >
              <span class="text-lg">{{ group.group_name }}</span>
              <button class="btn btn-md btn-square bg-neutral-50 text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- IP-адреса -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">IP-адреса</h3>
            <NuxtLink :to="{ name: 'information_server-id-tables-ip_address-add', params: { id: serverId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <!-- head -->
              <thead>
              <tr>
                <th>IP</th>
                <th>Version</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(ip, index) in server.id_ip" :key="index">
                <td>{{ ip.ip }}</td>
                <td>{{ ip.version }}</td>
                <td>{{ ip.identifier.identifier }}</td>
                <td>{{ ip.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <NuxtLink :to="{ name: 'information_server-id-tables-ip_address-rowId', params: { id: serverId, rowId: ip.id_ip }}" >
                      <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </NuxtLink>
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Порты -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Порты</h3>
            <NuxtLink :to="{ name: 'information_server-id-tables-ports-add', params: { id: serverId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>Protocol</th>
                <th>Port</th>
                <th>IP</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(ip, index) in server.id_ip" :key="index">
                <td>{{ ip.id_port.id_network.map(np => np.network_type).join(', ') }}</td>
                <td>{{ ip.id_port.port }}</td>
                <td>{{ ip.ip }}</td>
                <td>{{ ip.id_port.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Домены -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Домены</h3>
            <NuxtLink :to="{ name: 'information_server-id-tables-domains-add', params: { id: serverId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>DNS</th>
                <th>Value</th>
                <th>Domain</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(dnsr, index) in server.dnsr_id">
                <td>{{ dnsr.type }}</td>
                <td>{{ dnsr.value }}</td>
                <td>{{ server.domain_id.domain_name }}</td>
                <td>{{ server.domain_id.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Конфигурация -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Конфигурация</h3>
            <NuxtLink :to="{ name: 'information_server-id-tables-configuration-add', params: { id: serverId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in configurations" :key="index">
                <td>{{ item.type }}</td>
                <td>{{ item.value }}</td>
                <td>{{ item.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>


      <!-- Раздел приложений -->
        <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">Приложения</h3>
          <NuxtLink :to="{ name: 'information_server-id-tables-applications-add', params: { id: serverId }}">
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </NuxtLink>
        </div>
        <div class="overflow-x-auto bg-base-100 text-base-content">
          <table class="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Type</th>
              <th>Provider</th>
              <th>Documentation</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in applications" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.version }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.provider }}</td>
              <td>{{ item.documentation }}</td>
              <td>{{ item.description }}</td>
              <td class="text-right">
                <div class="flex justify-end space-x-1">
                  <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useServerStore } from '@/stores/ServerStore';

const route = useRoute();
const serverStore = useServerStore();

const serverId = computed(() => route.params.id);
const server = computed(() => serverStore.getServerById(serverId.value));
const loading = computed(() => serverStore.loading);

watch(serverId, (newId) => {
  serverStore.fetchServerById(newId);
}, { immediate: true });

// Кластер
const clusters = ['Кластер №1', 'Кластер №2', 'Кластер №3']
const selectedCluster = ref(clusters[0])

const configurations = ref([
  { type: 'If', value: 'If', description: 'Null' },
  { type: 'If', value: 'If', description: 'Null' }
])

const applications = ref([
  { name: 'Postgress', version: '16.1', type: 'ff', provider: 'ff', documentation: 'ff', description: 'Null' },
  { name: 'ff', version: 'ff', type: 'ff', provider: 'ff', documentation: 'ff', description: 'Null' }
])

useSeoMeta({
  title: `Информация о сервере "${server.value.server_name}"`,
  ogTitle: `Информация о сервере "${server.value.server_name}"`,
  description: `Подробная информация о сервере "${server.value.server_name}"`,
  ogDescription: `Подробная информация о сервере "${server.value.server_name}"`
})
</script>
