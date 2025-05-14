<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <ConfirmCancelRedactModal
          :modalId="'cancel-changes-modal'"
      />
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
      <a class="text-2xl text-primary-content">Изменение IP-адреса</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
      <ConfirmChangeModal
          :modalId="'changes-modal' + form.id"
      />
    </div>
  </div>

  <main class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="card bg-neutral text-neutral-content shadow-xl">
      <div class="card-body">

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">IP-адрес</h3>
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">IP</h3>
            <input type="text" v-model="form.ip" placeholder="Введите текст" class="input input-neutral input-base-100" />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Version</h3>
            <input type="text" v-model="form.version" placeholder="Введите текст" class="input input-neutral input-base-100" />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-semibold">Type</h3>
            <input type="text" v-model="form.type" placeholder="Введите текст" class="input input-neutral input-base-100" />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex justify-between mb-2">
            <h3 class="text-xl font-semibold">Description</h3>
            <textarea type="text" v-model="form.description" placeholder="Введите текст" class="textarea textarea-neutral resize-none overflow-hidden" rows="5" @input="autoResizeTextarea" ref="textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </main>

  <ConfirmBigDeleteModal
      :modalBigId="'big-delete-ip-' + form.id"
      customDataTip="Удаление IP-адреса"
      customMessage="Вы точно хотите удалить этот IP-адрес?"
  />

</template>

<script lang="ts" setup>
import {ref, onMounted, computed} from 'vue';
import { useRoute } from 'vue-router';
import { useServerStore } from '@/stores/ServerStore';
import ConfirmBigDeleteModal from '@/components/ConfirmBigDeleteModal.vue';
import ConfirmChangeModal from '@/components/ConfirmChangeModal.vue';
import ConfirmCancelRedactModal from "~/components/ConfirmCancelRedactModal.vue";

const route = useRoute();
const serverStore = useServerStore();
const loading = ref(false);
const textarea = ref<HTMLTextAreaElement | null>(null);

const autoResizeTextarea = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
  }
};

const serverId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
const server = computed(() => serverStore.getServerById(serverId.value));
const rowId = computed(() => route.params.rowId);

const selectedIp = computed(() => {
  return server.value?.id_ip.find(ip => ip.id_ip === rowId.value);
});

const form = ref({
  ip: '',
  version: '',
  type: '',
  description: '',
  id: ''
});

// Сохранение данных в localStorage при изменении
watch(form, (newValue) => {
  localStorage.setItem('ipFormData', JSON.stringify(newValue))
}, { deep: true })

// Восстановление данных при загрузке
onMounted(() => {
  const savedData = localStorage.getItem('ipFormData')
  if (savedData) {
    form.value = JSON.parse(savedData)
  }

  if (selectedIp.value) {
    form.value = {
      ...form.value,
      ip: selectedIp.value.ip,
      version: selectedIp.value.version,
      type: selectedIp.value.id_type.name,
      description: selectedIp.value.description,
      id: rowId.value as string || ''
    }
  }

  autoResizeTextarea()
})

onBeforeUnmount(() => {
  localStorage.removeItem('ipFormData')
})

useSeoMeta({
  title: 'Добавление IP-адреса',
  ogTitle: 'Добавление IP-адреса',
  description: 'Изменение параметров сервера/системы',
  ogDescription: 'Изменение параметров сервера/системы'
})
</script>
