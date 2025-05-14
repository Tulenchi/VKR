<template>
  <div class="navbar bg-primary shadow-xl sticky top-0 z-40">
    <div class="navbar-start">
      <NuxtLink :to="{ name: 'index' }">
        <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1 hover:bg-secondary hover:text-neutral-50-content">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
            </svg>
          </span>
        </button>
      </NuxtLink>
      <NuxtLink :to="{ name: 'map_server-id', params: { id: serverId }}">
        <button class="btn btn-ghost btn-secondary h-12 w-12 hover:bg-secondary hover:text-neutral-50-content">
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
            <input type="text" class="input input-neutral" placeholder="Название кластера" list="clusters" :value="server.cluster_id.cluster_name" />
            <datalist id="clusters">
              <option v-for="cluster in allClusters" :key="cluster" :value="cluster">
                {{ cluster }}
              </option>
            </datalist>
          </div>
        </div>

        <!-- Группа -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Группы</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content" onclick="my_modal_1.showModal()"><span class="mb-1">+</span></button>
            <dialog id="my_modal_1" class="modal">
              <div class="modal-box">
                <h3 class="text-lg font-bold mb-8 text-center">Добавление группы</h3>
                <div class="flex justify-center mb-8">
                  <input
                      type="text"
                      class="input input-neutral w-full max-w-xs"
                      placeholder="Название группы"
                      list="availableGroups"
                  />
                  <datalist id="availableGroups">
                    <option
                        v-for="group in availableGroups"
                        :key="group.group_id"
                        :value="group.group_name"
                    >
                      {{ group.group_name }}
                    </option>
                  </datalist>
                </div>
                <div class="modal-action">
                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Отмена</button>
                  </form>
                  <button class="btn bg-neutral-50 hover:bg-neutral-100 hover:text-neutral-50-content">Сохранить</button>
                </div>
              </div>
            </dialog>
          </div>
          <div class="space-y-4">
            <div
                v-for="group in server?.group_id"
                :key="group.group_id"
                class="flex items-center justify-between"
            >
              <span class="text-lg">{{ group.group_name }}</span>
              <ConfirmDeleteModal
                  :modal-id="'delete-group-' + group.group_id"
                  :custom-button-class="'btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content'"
              />
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
                <td>{{ ip.id_type.name }}</td>
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
                    <ConfirmDeleteModal
                        :modal-id="'delete-ip-' + ip.id_ip"
                    />
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
              <template v-for="(ip, index) in server.id_ip" :key="ip.id_ip">
                <tr v-for="(protocol, portIndex) in ip.id_port.id_network" :key="protocol.id_network">
                  <td>{{ protocol.network_type }}</td>
                  <td>{{ ip.id_port.port }}</td>
                  <td>{{ ip.ip }}</td>
                  <td>{{ ip.id_port.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <NuxtLink :to="{ name: 'information_server-id-tables-ports-rowId', params: { id: serverId, rowId: ip.id_port.id_port },
                     query: {
                        protocol: protocol.network_type,
                        port: ip.id_port.port,
                        ip: ip.ip,
                        description: ip.id_port.description
                      }
                    }" >
                      <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </NuxtLink>
                    <ConfirmDeleteModal
                        :modal-id="'delete-port-' + ip.id_port.id_port"
                    />
                  </div>
                </td>
              </tr>
              </template>
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
              <template v-for="domain in server.domain_id" :key="domain.domain_id">
                <tr v-for="(dns, dnsIndex) in domain.dnsr_id" :key="dns.dnsr_id">
                  <td>{{ dns.type }}</td>
                  <td>{{ dns.value }}</td>
                  <td>{{ domain.domain_name }}</td>
                  <td>{{ domain.description }}</td>
                  <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <NuxtLink :to="{
                        name: 'information_server-id-tables-domains-rowId',
                        params: { id: serverId, rowId: domain.domain_id },
                        query: {
                          dns: dns.type,
                          value: dns.value,
                          domain: domain.domain_name,
                          description: domain.description
                        }
                      }">
                      <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </NuxtLink>
                    <ConfirmDeleteModal
                        :modal-id="'delete-domain-' + domain.domain_id"
                    />
                  </div>
                </td>
              </tr>
              </template>
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
                <th>Name</th>
                <th>Type</th>
                <th>Value</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(hardware, index) in server.hardware_id" :key="index">
                <td>{{ hardware.hardware_name }}</td>
                <td>{{ hardware.hardwaretype_id.type_name }}</td>
                <td>{{ hardware.value }}</td>
                <td>{{ hardware.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <NuxtLink :to="{
                        name: 'information_server-id-tables-configuration-rowId',
                        params: { id: serverId, rowId: hardware.hardware_id },
                        query: {
                          name: hardware.hardware_name,
                          type: hardware.hardwaretype_id.type_name,
                          value: hardware.value,
                          description: hardware.description
                        }
                      }">
                      <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </NuxtLink>
                    <ConfirmDeleteModal
                        :modal-id="'delete-configuration-' + hardware.hardware_id"
                    />
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
            <tr v-for="(sversion, index) in server.sversion_id" :key="index">
              <td>{{ sversion.software_id.software_name }}</td>
              <td>{{ sversion.version_name }}</td>
              <td>{{ sversion.software_id.softwaretype_id.software_type_name }}</td>
              <td>{{ sversion.software_id.softwaretype_id.provider }}</td>
              <td>{{ sversion.software_id.softwaretype_id.documentation }}</td>
              <td>{{ sversion.software_id.description }}</td>
              <td class="text-right">
                <div class="flex justify-end space-x-1">
                  <NuxtLink :to="{
                      name: 'information_server-id-tables-applications-rowId',
                      params: {
                        id: serverId,
                        rowId: sversion.softwareversion_id
                      },
                      query: {
                        name: sversion.software_id.software_name,
                        version: sversion.version_name,
                        type: sversion.software_id.softwaretype_id.software_type_name,
                        provider: sversion.software_id.softwaretype_id.provider,
                        documentation: sversion.software_id.softwaretype_id.documentation,
                        description: sversion.software_id.description
                      }
                    }">
                    <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </NuxtLink>
                  <ConfirmDeleteModal
                      :modal-id="'delete-applications-' + sversion.softwareversion_id"
                  />
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

  <ConfirmBigDeleteModal
      :modalBigId="'big-delete-server-' + serverId"
      customDataTip="Удаление сервера"
      customMessage="Вы уверены что хотите удалить этот сервер?"
  />

</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useServerStore } from '@/stores/ServerStore';
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue';
import ConfirmBigDeleteModal from '@/components/ConfirmBigDeleteModal.vue';

const route = useRoute();
const serverStore = useServerStore();

const serverId = computed(() => route.params.id);
const server = computed(() => serverStore.getServerById(serverId.value));
const loading = computed(() => serverStore.loading);
const allClusters = computed(() => serverStore.getAllClusters);
const availableGroups = computed(() => serverStore.getAvailableGroups(serverId.value));

watch(serverId, (newId) => {
  serverStore.fetchServerById(newId);
}, { immediate: true });

useSeoMeta({
  title: `Информация о сервере "${server.value.server_name}"`,
  ogTitle: `Информация о сервере "${server.value.server_name}"`,
  description: `Подробная информация о сервере "${server.value.server_name}"`,
  ogDescription: `Подробная информация о сервере "${server.value.server_name}"`
})
</script>

