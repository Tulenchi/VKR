<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
        <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
        </button>
      <NuxtLink to="/">
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
      <a class="text-2xl text-primary-content">Система</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <div class="min-h-screen px-12 py-4">
    <div class="card bg-neutral text-neutral-content shadow-xl mb-3">
      <div class="card-body">

        <!-- Название системы -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Название</h3>
            <span class="w-auto min-w-50 px-5 py-2 truncate bg-base-100 text-base-content flex items-center justify-center rounded-sm font-semibold">SystemName</span>
          </div>
        </div>

        <!-- Тип -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Кластер</h3>
            <button class="btn w-auto min-w-50 px-5 truncate bg-base-100 text-neutral-50-content"
                    popovertarget="popover-1"
                    style="anchor-name:--anchor-1">
              {{ selectedType }}
            </button>
            <ul class="dropdown menu min-w-50 truncate rounded-box bg-base-100 text-neutral-50-content shadow-sm"
                popover id="popover-1"
                style="position-anchor:--anchor-1">
              <li v-for="Type in types" :key="Type">
                <a @click="selectedType = Type">{{ Type }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Операционные системы -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Операционные системы</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
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
              <tr v-for="(item, index) in operatingSystem" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.version }}</td>
                <td>{{ item.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-2">
                    <button class="btn btn-square bg-neutral-50 text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>ff</th>
                <th>ff</th>
                <th>ff</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in software" :key="index">
                <td>{{ item.protocol }}</td>
                <td>{{ item.port }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.description }}</td>
                <td class="text-right">
                  <button class="btn btn-square bg-neutral-50 text-neutral-50-content">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
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
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
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
              <template v-for="(serverGroup, groupIndex) in serverGroups" :key="groupIndex">
                <tr class="active">
                  <td colspan="5" class="relative text-center font-semibold bg-base-100 text-base-content py-3">
                    <div class="flex justify-between items-center">
                      <span class="flex-1 text-center">{{ serverGroup.name }}</span>
                      <button class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-for="(server, serverIndex) in serverGroup.servers" :key="serverIndex">
                  <td>{{ server.ip }}</td>
                  <td>{{ server.port }}</td>
                  <td>{{ server.mapping }}</td>
                  <td>{{ server.description }}</td>
                  <td class="text-right">
                    <button class="btn btn-square bg-neutral-50 text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </template>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Связи -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Связи</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
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
              <tr v-for="(item, index) in communications" :key="index">
                <td>{{ item.server }}</td>
                <td>{{ item.port }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.description }}</td>
                <td class="text-right">
                  <button class="btn btn-square bg-neutral-50 text-neutral-50-content">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
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

<script lang="ts" setup>
const router = useRouter()

const goBack = () => {
  router.go(-1)
}

// Тип системы
const types = ['Приложение', 'БД', 'Сетевое хранилище']
const selectedType = ref(types[0])

// Данные для таблиц
const operatingSystem = ref([
  { name: 'Ubunty', version: '14.*.*', description: 'Null' },
  { name: 'ff', version: 'ff', description: 'Null' }
])

const software = ref([
  { protocol: 'ff', port: 'ff', ip: 'ff', description: 'Null' },
  { protocol: 'ff', port: 'ff', ip: 'ff', description: 'Null' }
])

const serverGroups = [
  {
    name: "Cepвep №1",
    servers: [
      { ip: "10.128.211.44", port: "80", mapping: "127.0.0:8080", description: "Null"},
      { ip: "127.0.0.1", port: "8080", mapping: "Null", description: "Null"}
    ]
  },
  {
    name: "Cepвep №2",
    servers: [
      { ip: "192.168.1.100", port: "80", mapping: "127.0.0:8080", description: "Null"},
      { ip: "192.168.1.101", port: "8080", mapping: "Null", description: "Null"}
    ]
  }
]

const communications = ref([
  { server: 'ff', port: 'ff', ip: 'ff', description: 'Null' },
  { server: 'ff', port: 'ff', ip: 'ff', description: 'Null' }
])

useSeoMeta({
  title: 'Информация о системе',
  ogTitle: 'Информация о системе',
  description: 'Подробная информация о системе',
  ogDescription: 'Подробная информация о системе'
})
</script>
