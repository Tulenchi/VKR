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
      <a class="text-2xl text-primary-content">Добавление системы</a>
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

        <!-- Система -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Система</h3>
            <input type="text" placeholder="Название системы" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Сервера -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Сервера</h3>
            <button @click="addservers" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>
          <div class="space-y-4">
            <div
                v-for="(server, index) in servers" :key="index"
                class="flex items-center justify-between"
            >
              <input v-model="server.name" type="text" class="input input-neutral" placeholder="Название сервера" list="Servers" />
              <datalist id="Servers">
                <option v-for="Server in Servers" :key="Server" :value="Server">
                  {{ Server }}
                </option>
              </datalist>
              <button @click="removeservers(index)" class="btn btn-md btn-square bg-neutral-50 text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content">
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

        <!-- Операционные системы -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">Операционные системы</h3>
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
              <tr v-for="(os, index) in opSystem" :key="index">
                <td><input v-model="os.name" type="text" placeholder="Название" class="input input-sm input-neutral input-base-100" /></td>
                <td><input v-model="os.version" type="text" placeholder="Версия" class="input input-sm input-neutral input-base-100" /></td>
                <td><textarea v-model="os.description" type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removeopSystem(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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
            <button @click="addopSystem" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>

        <!-- Софт -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold mb-2">Софт</h3>
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
              <tr v-for="(sf, index) in soft" :key="index">
                <td><input v-model="sf.name" type="text" placeholder="Название" class="input input-sm input-neutral input-base-100" /></td>
                <td><input v-model="sf.version" type="text" placeholder="Версия" class="input input-sm input-neutral input-base-100" /></td>
                <td><textarea v-model="sf.description" type="text" placeholder="Комментарий" class="textarea textarea-sm textarea-neutral" rows="3"></textarea></td>
                <td class="text-right">
                  <div class="flex justify-end space-x-1">
                    <button @click="removesoft(index)" class="btn btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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
            <button @click="addsoft" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>

        <!-- Связи -->
        <div class="mb-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold">Связи</h3>
          </div>
          <div class="overflow-x-auto bg-base-100 text-base-content">
            <table class="table">
              <thead>
              <tr>
                <th>IP</th>
                <th>Port</th>
                <th>Mapping</th>
                <th>Description</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <template v-for="(serverGroup, groupIndex) in serverGroups" :key="groupIndex">
                <tr class="active">
                  <td colspan="5" class="relative text-center font-semibold bg-base-100 text-base-content py-3">
                    <div class="flex justify-center items-center">
                      <input
                          v-model="serverGroup.name"
                          type="text"
                          placeholder="Название сервера"
                          class="input input-neutral input-base-100 text-center w-full max-w-xs"
                      >
                      <div class="flex justify-end space-x-1 absolute right-4">
                        <button @click="addServerConnection(groupIndex)" class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                          <span class="mb-1 text-xl">+</span>
                        </button>
                        <button @click="removeServerGroup(groupIndex)" class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr v-for="(server, serverIndex) in serverGroup.servers" :key="serverIndex">
                  <td><input v-model="server.ip" type="text" class="input input-sm input-neutral input-base-100" placeholder="IP"></td>
                  <td><input v-model="server.port" type="text" class="input input-sm input-neutral input-base-100" placeholder="Порт"></td>
                  <td><input v-model="server.mapping" type="text" class="input input-sm input-neutral input-base-100" placeholder="Mapping"></td>
                  <td><textarea v-model="server.description" type="text" class="textarea textarea-sm textarea-neutral textarea-base-100" placeholder="Комментарий" rows="3"></textarea></td>
                  <td class="text-right">
                    <div class="flex justify-end space-x-1">
                      <button @click="removeServerConnection(groupIndex, serverIndex)" class="btn btn-square btn-sm bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content">
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

          <div class="plus-note">
            <button @click="addServerGroup" class="btn btn-square bg-neutral-50 font-semibold text-2xl text-neutral-50-content mr-3 hover:bg-neutral-100 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>

const Servers = ['Сервер №1', 'Сервер №2', 'Сервер №3']
const Groups = ['Группа №1', 'Группа №2', 'Группа №3']

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const showPopup = () => {
  const confirmation = confirm("Вы уверены, что хотите удалить данный объект?");

  //if (confirmation) {
  //  noteStore.deleteNote(note.id);
  //  router.push('/');
  //}
}

useSeoMeta({
  title: 'Добавление сервера',
  ogTitle: 'Добавление сервера',
  description: 'Добавление нового сервера',
  ogDescription: 'Добавление нового сервера'
})

const opSystem = ref([
  { name: '', version: '', description: '' }
])

const addopSystem = () => {
  opSystem.value.push({ name: '', version: '', description: '' });
};

const removeopSystem = (index: number) => {
  if (opSystem.value.length > 1) {
    opSystem.value.splice(index, 1);
  } else {
    opSystem.value[0] = { name: '', version: '', description: '' };
  }
};

const soft = ref([
  { name: '', version: '', description: '' }
])

const addsoft = () => {
  soft.value.push({ name: '', version: '', description: '' });
};

const removesoft = (index: number) => {
  if (soft.value.length > 1) {
    soft.value.splice(index, 1);
  } else {
    soft.value[0] = { name: '', version: '', description: '' };
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

const servers = ref([
  { name: '' }
])

const addservers = () => {
  servers.value.push({ name: '' });
};

const removeservers = (index: number) => {
  if (servers.value.length > 1) {
    servers.value.splice(index, 1);
  } else {
    servers.value[0] = { name: '' };
  }
};

const serverGroups = ref([
  {
    name: "",
    servers: [
      { ip: "", port: "", mapping: "", description: ""}
    ]
  }
]);

const addServerGroup = () => {
  serverGroups.value.push({
    name: "",
    servers: [{ ip: "", port: "", mapping: "", description: "" }]
  });
};

const removeServerGroup = (index: number) => {
  if (serverGroups.value.length > 1) {
    serverGroups.value.splice(index, 1);
  } else {
    serverGroups.value[0] = {
      name: "",
      servers: [{ ip: "", port: "", mapping: "", description: "" }]
    };
  }
};

const addServerConnection = (groupIndex: number) => {
  serverGroups.value[groupIndex].servers.push({
    ip: "",
    port: "",
    mapping: "",
    description: ""
  });
};

const removeServerConnection = (groupIndex: number, serverIndex: number) => {
  const group = serverGroups.value[groupIndex];
  if (group.servers.length > 1) {
    group.servers.splice(serverIndex, 1);
  } else {
    group.servers[0] = { ip: "", port: "", mapping: "", description: "" };
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
