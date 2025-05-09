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
    </div>
    <div class="navbar-center">
      <a class="text-2xl text-primary-content">Добавление сервера</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
      <button class="btn btn-ghost btn-secondary h-12 w-12 ml-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
            </svg>
          </span>
      </button>
    </div>
  </div>

  <div class="min-h-screen px-12 py-4">
    <div class="card bg-neutral text-neutral-content shadow-xl mb-3">
      <div class="card-body">

        <!-- Сервер -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Сервер</h3>
            <input type="text" placeholder="Название сервера" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Кластер -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Кластер</h3>
            <input type="text" class="input input-neutral" placeholder="Название кластера" list="clusters" />
            <datalist id="clusters">
              <option v-for="cluster in clusters" :key="cluster" :value="cluster">
                {{ cluster }}
              </option>
            </datalist>
          </div>
        </div>

        <!-- Система -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Системы</h3>
            <button @click="addSystems" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>
          <div class="space-y-4">
            <div
                v-for="(system, index) in systems" :key="index"
                class="flex items-center justify-between"
            >
              <input v-model="system.name" type="text" class="input input-neutral" placeholder="Название системы" list="Systems" />
              <datalist id="Systems">
                <option v-for="System in Systems" :key="System" :value="System">
                  {{ System }}
                </option>
              </datalist>
              <button @click="removeSystems(index)" class="btn btn-md btn-square bg-neutral-50 text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Группа -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Группы</h3>
            <button @click="addGroups" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>
          <div class="space-y-4">
            <div
                v-for="(group, index) in groups" :key="index"
                class="flex items-center justify-between"
            >
              <input v-model="group.name" type="text" class="input input-neutral" placeholder="Название группы" list="Groups" />
              <datalist id="Groups">
                <option v-for="Group in Groups" :key="Group" :value="Group">
                  {{ Group }}
                </option>
              </datalist>
              <button @click="removeGroups(index)" class="btn btn-md btn-square bg-neutral-50 text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- IP-адреса -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">IP-адреса</h3>
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
              <tr v-for="(ip, index) in ipAddresses" :key="index">
                <td><input v-model="ip.ip" type="text" placeholder="IP" class="input input-sm input-neutral input-base-100" /></td>
                <td>
                  <select v-model="ip.version" class="select select-sm select-neutral">
                    <option disabled :selected="!ip.version">Выберите версию</option>
                    <option>IpV4</option>
                    <option>IpV6</option>
                  </select>
                </td>
                <td>
                  <select v-model="ip.type" class="select select-sm select-neutral">
                    <option disabled :selected="!ip.type">Выберите тип</option>
                    <option>Внешний</option>
                    <option>Внутренний</option>
                  </select>
                </td>
                <td><textarea v-model="ip.description" type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removeIpAddress(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

          <div class="plus-note">
            <button @click="addIpAddress" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>

        <!-- Порты -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">Порты</h3>
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
                <td><input type="text" placeholder="Протокол" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Порт" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="IP" class="input input-sm input-neutral input-base-100" /></td>
                <td><textarea type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removePorts(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

          <div class="plus-note">
            <button @click="addPorts" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>

        <!-- Домены -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">Домены</h3>
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
              <tr v-for="(item, index) in domains" :key="index">
                <td><input type="text" placeholder="DNS" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Значение" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Домен" class="input input-sm input-neutral input-base-100" /></td>
                <td><textarea type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removeDomains(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

          <div class="plus-note">
            <button @click="addDomains" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>

        <!-- Конфигурация -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">Конфигурация</h3>
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
                <td><input type="text" placeholder="Тип" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Значение" class="input input-sm input-neutral input-base-100" /></td>
                <td><textarea type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removeConfigurations(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

          <div class="plus-note">
            <button @click="addConfigurations" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>


        <!-- Раздел приложений -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">Приложения</h3>
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
                <td><input type="text" placeholder="Название" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Версия" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Тип" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Поставщик" class="input input-sm input-neutral input-base-100" /></td>
                <td><input type="text" placeholder="Документация" class="input input-sm input-neutral input-base-100" /></td>
                <td><textarea type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removeApplications(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

          <div class="plus-note">
            <button @click="addApplications" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>

const clusters = ['Кластер №1', 'Кластер №2', 'Кластер №3']
const Systems = ['Система №1', 'Система №2', 'Система №3']
const Groups = ['Группа №1', 'Группа №2', 'Группа №3']

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

useSeoMeta({
  title: 'Добавление сервера',
  ogTitle: 'Добавление сервера',
  description: 'Добавление нового сервера',
  ogDescription: 'Добавление нового сервера'
})

const ipAddresses = ref([
  { ip: '', version: '', type: '', description: '' }
])

const addIpAddress = () => {
  ipAddresses.value.push({ ip: '', version: '', type: '', description: '' });
};

const removeIpAddress = (index: number) => {
  if (ipAddresses.value.length > 1) {
    ipAddresses.value.splice(index, 1);
  } else {
    ipAddresses.value[0] = { ip: '', version: '', type: '', description: '' };
  }
};

const ports = ref([
  { protocol: '', port: '', ip: '', description: '' }
])

const addPorts = () => {
  ports.value.push({ protocol: '', port: '', ip: '', description: '' });
};

const removePorts = (index: number) => {
  if (ports.value.length > 1) {
    ports.value.splice(index, 1);
  } else {
    ports.value[0] = { protocol: '', port: '', ip: '', description: '' };
  }
};

const domains = ref([
  { dns: '', ip: '', domain: '', description: '' }
])

const addDomains = () => {
  domains.value.push({ dns: '', ip: '', domain: '', description: '' });
};

const removeDomains = (index: number) => {
  if (domains.value.length > 1) {
    domains.value.splice(index, 1);
  } else {
    domains.value[0] = { dns: '', ip: '', domain: '', description: '' };
  }
};

const configurations = ref([
  { type: '', value: '', description: '' }
])

const addConfigurations = () => {
  configurations.value.push({ type: '', value: '', description: '' });
};

const removeConfigurations = (index: number) => {
  if (configurations.value.length > 1) {
    configurations.value.splice(index, 1);
  } else {
    configurations.value[0] = { type: '', value: '', description: '' };
  }
};

const applications = ref([
  { name: '', version: '', type: '', provider: '', documentation: '', description: '' }
])

const addApplications = () => {
  applications.value.push({ name: '', version: '', type: '', provider: '', documentation: '', description: '' });
};

const removeApplications = (index: number) => {
  if (applications.value.length > 1) {
    applications.value.splice(index, 1);
  } else {
    applications.value[0] = { name: '', version: '', type: '', provider: '', documentation: '', description: '' };
  }
};

const groups = ref([
  { name: '' }
])

const addGroups = () => {
  groups.value.push({ name: '' });
};

const removeGroups = (index: number) => {
  if (groups.value.length > 1) {
    groups.value.splice(index, 1);
  } else {
    groups.value[0] = { name: '' };
  }
};

const systems = ref([
  { name: '' }
])

const addSystems = () => {
  systems.value.push({ name: '' });
};

const removeSystems = (index: number) => {
  if (systems.value.length > 1) {
    systems.value.splice(index, 1);
  } else {
    systems.value[0] = { name: '' };
  }
};

</script>

<style lang="css" scoped>
.plus-note{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

</style>
