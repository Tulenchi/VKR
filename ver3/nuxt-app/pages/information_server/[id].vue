<template>
  <div class="navbar bg-primary shadow-sm sticky top-0 z-40">
    <div class="navbar-start">
      <NuxtLink to="/">
        <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
            </svg>
          </span>
        </button>
      </NuxtLink>
      <NuxtLink to="/map_server">
        <button class="btn btn-ghost btn-secondary h-12 w-12">
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
      <a class="text-2xl text-primary-content">{{ serverData.title }}</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <div class="min-h-screen px-12 py-4">
    <div class="card bg-neutral text-neutral-content shadow-xl mb-3">
      <div class="card-body">

        <!-- Система -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Система</h3>
            <NuxtLink to="/information_system">
              <button class="btn px-5 truncate bg-neutral-50 text-neutral-50-content sm:min-w-60 md:min-w-80">SystemName</button>
            </NuxtLink>
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

        <!-- IP-адреса -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">IP-адреса</h3>
            <NuxtLink to="/redaction">
              <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
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
              <tr v-for="(item, index) in ipAddresses" :key="index">
                <td>{{ item.ip }}</td>
                <td>{{ item.version }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.description }}</td>
                <td class="text-right">
                  <div class="flex justify-end space-x-2">
                    <button class="btn btn-square bg-neutral-50 text-neutral-50-content">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="btn btn-square bg-neutral-50 text-neutral-50-content" @click="deleteIpAddress(index)">
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
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
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
              <tr v-for="(item, index) in ports" :key="index">
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

        <!-- Домены -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Домены</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>DNS</th>
                <th>IP</th>
                <th>Domain</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in domains" :key="index">
                <td>{{ item.dns }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.domain }}</td>
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

        <!-- Конфигурация -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Конфигурация</h3>
            <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
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


      <!-- Раздел приложений -->
        <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-xl font-semibold">Приложения</h3>
          <button class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content "><span class="mb-1">+</span></button>
        </div>
        <div class="overflow-x-auto bg-base-100 text-base-content">
          <table class="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in applications" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.version }}</td>
              <td>{{ item.type }}</td>
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

<script setup>
const route = useRoute()

// Кластер
const clusters = ['Кластер №1', 'Кластер №2', 'Кластер №3']
const selectedCluster = ref(clusters[0])

// Данные серверов
const serversData = {
  1: { title: "Личный кабинет", ip: "10.136.2.40", domain: "lk.etu.ru", serverId: 1 },
  2: { title: "Посещаемость", ip: "10.136.2.40", domain: "digital.etu.ru", serverId: 2 },
  3: { title: "Медиатека", ip: "10.136.2.40", domain: "media.etu.ru", serverId: 3 },
  4: { title: "Библиотека", ip: "10.136.2.40", domain: "library.etu.ru", serverId: 4 },
  5: { title: "Moodle", ip: "10.136.2.40", domain: "vec.etu.ru", serverId: 5 },
  6: { title: "Лэти", ip: "10.136.2.40", domain: "etu.ru", serverId: 6 }
}

// Получаем данные сервера по ID из URL
const serverData = serversData[route.params.id]

// Данные для таблиц
const ipAddresses = ref([
  { ip: '10.136.2.40', version: 'IPv4', type: '192.168.11', description: 'Null' },
  { ip: '10.136.2.40', version: 'IPv4', type: '203.0.113.1', description: 'Null' }
])

const ports = ref([
  { protocol: 'HTTP', port: '8080', ip: '192.168.11', description: 'Null' },
  { protocol: 'HTTPS', port: '443', ip: '203.0.113.1', description: 'Null' }
])

const domains = ref([
  { dns: 'DNS', ip: '_', domain: '192.168.11', description: 'Null' },
  { dns: 'DNS', ip: '_', domain: 'If', description: 'Null' }
])

const configurations = ref([
  { type: 'If', value: 'If', description: 'Null' },
  { type: 'If', value: 'If', description: 'Null' }
])

const applications = ref([
  { name: 'Postgress', version: '16.1', type: 'If', description: 'Null' },
  { name: 'If', version: 'If', type: 'If', description: 'Null' }
])

// Методы для удаления
const deleteIpAddress = (index) => {
  ipAddresses.value.splice(index, 1)
}

const deletePort = (index) => {
  ports.value.splice(index, 1)
}

const deleteDomain = (index) => {
  domains.value.splice(index, 1)
}

const deleteConfiguration = (index) => {
  configurations.value.splice(index, 1)
}

const deleteApplication = (index) => {
  applications.value.splice(index, 1)
}

useSeoMeta({
  title: `Информация о сервере "${serverData.title}"`,
  ogTitle: `Информация о сервере "${serverData.title}"`,
  description: `Подробная информация о сервере "${serverData.title}"`,
  ogDescription: `Подробная информация о сервере "${serverData.title}"`
})
</script>
