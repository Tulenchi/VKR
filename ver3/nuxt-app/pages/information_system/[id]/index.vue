<template>
  <div class="navbar bg-primary shadow-xl sticky top-0 z-40">
    <div class="navbar-start">
        <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
        </button>
      <NuxtLink :to="{ name: 'index' }">
        <button class="btn btn-ghost btn-secondary h-12 w-12">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
            </svg>
          </span>
        </button>
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <a class="text-2xl text-primary-content">{{ system.system_name }}</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <div class="min-h-screen px-12 py-4">
    <div class="card bg-neutral text-neutral-content shadow-xl mb-3">
      <div class="card-body">

        <!-- Название системы -->
        <div class="mb-2 ">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Название</h3>
            <!--<span class="w-auto px-5 py-2 truncate bg-base-100 text-base-content flex items-center justify-center rounded-sm font-semibold sm:min-w-60 md:min-w-80">{{ system.system_name }}</span>-->
            <div class="join">
              <div>
                <label class="input input-neutral join-item sm:min-w-50 md:min-w-70 focus:outline-none border-none focus:border-none">
                  <input
                      v-model="editableSystemName"
                      placeholder="Название системы"
                      required
                      class="focus:outline-none focus:ring-0 border-none focus:border-none"
                  />
                </label>
              </div>
              <button class="btn btn-square bg-neutral-50 text-neutral-50-content join-item hover:bg-neutral-100 hover:text-neutral-50-content">
                <span class="text-neutral-50-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
              </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Тип -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Тип</h3>
            <select class="select select-neutral" v-model="system.systemtype_id.type">
              <option disabled selected>Выберите тип</option>
              <option v-for="Type in types" :key="Type" :value="Type">
                {{ Type }}
              </option>
            </select>
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
                      list="availableGroupsSystem"
                  />
                  <datalist id="availableGroupsSystem">
                    <option
                        v-for="group in availableGroupsSystem"
                        :key="group.group_id"
                        :value="group.group_name"
                    >
                      {{ group.group_name }}
                    </option>
                  </datalist>
                </div>
                <div class="modal-action">
                  <button class="btn bg-neutral-50 hover:bg-neutral-100 hover:text-neutral-50-content">Сохранить</button>
                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Отмена</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div class="space-y-4">
            <div
                v-for="group in system?.group_id"
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

        <!-- Операционные системы -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Операционные системы</h3>
            <NuxtLink :to="{ name: 'information_system-id-tables-operation_system-add', params: { id: systemId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <!-- head -->
              <thead>
              <tr>
                <th>Name</th>
                <th>Version</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(sversion, index) in operatingSystems" :key="index">
                <td>{{ sversion.software_id.software_name }}</td>
                <td>{{ sversion.version_name }}</td>
                <td>{{ sversion.software_id.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <NuxtLink :to="{
                      name: 'information_system-id-tables-operation_system-rowId',
                      params: {
                        id: systemId,
                        rowId: sversion.softwareversion_id
                      },
                      query: {
                        name: sversion.software_id.software_name,
                        version: sversion.version_name,
                        description: sversion.software_id.description
                      }
                    }">
                      <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </NuxtLink>
                    <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

        <!-- Софт -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Софт</h3>
            <NuxtLink :to="{ name: 'information_system-id-tables-soft-add', params: { id: systemId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Version</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(sversion, index) in otherSoftware" :key="index">
                <td>{{ sversion.software_id.software_name }}</td>
                <td>{{ sversion.version_name }}</td>
                <td>{{ sversion.software_id.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <NuxtLink :to="{
                      name: 'information_system-id-tables-soft-rowId',
                      params: {
                        id: systemId,
                        rowId: sversion.softwareversion_id
                      },
                      query: {
                        name: sversion.software_id.software_name,
                        version: sversion.version_name,
                        description: sversion.software_id.description
                      }
                    }">
                      <button class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </NuxtLink>
                    <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

        <!-- Сервера -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Сервера</h3>
            <NuxtLink :to="{ name: 'information_system-id-tables-servers_connection-add', params: { id: systemId }}">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
            </NuxtLink>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>IP</th>
                <th>Port</th>
                <th>Mapping</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <template v-for="(connection, index) in systemServerConnections" :key="index">
                <tr class="active">
                  <td colspan="5" class="relative text-center font-semibold bg-base-100 text-base-content py-3">
                    <div class="flex justify-between items-center">
                      <span class="flex-1 text-center text-lg">{{ getServerName(connection.server_id) }}</span>
                      <div class="flex justify-end space-x-1">
                        <NuxtLink :to="{ name: 'information_system-id-tables-server_connect-add', params: { id: systemId }}">
                          <button class=" text-xl btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
                        </NuxtLink>
                        <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr v-for="(connection, index) in systemServerConnections" :key="index">
                  <td>{{ getServerIp(connection.server_id) }}</td>
                  <td>{{ getServerPort(connection.server_id) }}</td>
                  <td>{{ connection.mapping }}</td>
                  <td>{{ connection.description }}</td>
                  <td class="text-right">
                    <div class="flex justify-end space-x-1">
                      <NuxtLink :to="{
                          name: 'information_system-id-tables-server_connect-rowId',
                          params: {
                            id: systemId,
                            rowId: connection.connection_id
                          },
                          query: {
                            ip: getServerIp(connection.server_id),
                            port: getServerPort(connection.server_id),
                            mapping: connection.mapping,
                            description: connection.description || ''
                          }
                        }">
                        <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                      </NuxtLink>
                      <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </template>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Связи -->
        <!--<div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Связи</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>Server</th>
                <th>Port</th>
                <th>IP</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(connection, index) in systemServerConnections" :key="index">
                <td>{{ getServerName(connection.server_id) }}</td>
                <td>{{ getServerPort(connection.server_id) }}</td>
                <td>{{ getServerIp(connection.server_id) }}</td>
                <td>{{ connection.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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
        </div>-->
      </div>
    </div>
  </div>

  <div class="delete">
    <div class="tooltip tooltip-primary tooltip-left" data-tip="Удаление системы">
        <button class="btn btn-xl btn-square bg-neutral-50 text-neutral-50-content shadow-md hover:bg-neutral-100 hover:text-neutral-50-content">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6L20 6M6 6l0 15M17 6l0 15M6 21L17 21M8 2L15 2" /></svg>
        </button>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSystemStore } from '@/stores/SystemStore';
import { useServerStore } from '@/stores/ServerStore';
import { useSystemServerStore } from '@/stores/SystemServerStore';

const systemServerStore = useSystemServerStore();
const serverStore = useServerStore();
const route = useRoute();
const systemStore = useSystemStore();

const systemId = computed(() => route.params.id);
const system = computed(() => systemStore.getSystemById(systemId.value));
const loading = computed(() => systemStore.loading);
const availableGroupsSystem = computed(() => systemStore.getAvailableGroupsSystem(systemId.value));

watch(systemId, (newId) => {
  systemStore.fetchSystemById(newId);
}, { immediate: true });

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const editableSystemName = ref(system.value?.system_name || '');

// Получаем связи для текущей системы
const systemServerConnections = computed(() => {
  return systemServerStore.getConnectionsBySystemId(systemId.value);
});

// Вспомогательные функции для получения данных сервера
const getServerName = (serverId: string) => {
  const server = serverStore.getServerById(serverId);
  return server?.server_name || 'Неизвестно';
};

const getServerIp = (serverId: string) => {
  const server = serverStore.getServerById(serverId);
  return server?.id_ip[0]?.ip || 'Неизвестно';
};

const getServerPort = (serverId: string) => {
  const server = serverStore.getServerById(serverId);
  return server?.id_port[0]?.port || 'Неизвестно';
};

const operatingSystems = computed(() => {
  return system.value?.sversion_id?.filter(sv =>
      sv.software_id.softwaretype_id.type_id.includes('operational-system')
  ) || [];
});

const otherSoftware = computed(() => {
  return system.value?.sversion_id?.filter(sv =>
      !sv.software_id.softwaretype_id.type_id.includes('operational-system')
  ) || [];
});

onMounted(async () => {
  await systemStore.fetchSystems();
  await systemServerStore.fetchConnections();
  await serverStore.fetchServers();
});

// Тип системы
const types = computed(() => systemStore.getAllTypes);

useSeoMeta({
  title: `Информация о системе "${system.value.system_name}"`,
  ogTitle: `Информация о системе "${system.value.system_name}"`,
  description: 'Подробная информация о системе',
  ogDescription: 'Подробная информация о системе'
})
</script>

<style lang="css" scoped>
.delete{
  position: fixed;
  bottom: 20px;
  right: 15px;
}
</style>