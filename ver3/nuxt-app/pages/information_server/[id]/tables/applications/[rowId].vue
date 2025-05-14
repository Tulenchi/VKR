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
      <a class="text-2xl text-primary-content">Изменение приложения</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
      <ConfirmChangeModal
          :modalId="'changes-modal' + form.id"
      />
    </div>
  </div>

  <!-- Общий навбар (нужно сделать потвеждение чтобы работало для каждого, передавать также как и название айди например) -->

  <!--<NavbarTables
      :titleNavbar="'Изменение приложения'"
  />-->

  <main class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="card bg-neutral text-neutral-content shadow-xl">
      <div class="card-body">

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Приложение</h3>
          </div>
        </div>

        <!-- Name -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Name</h3>
            <input v-model="form.name" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Version -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Version</h3>
            <input v-model="form.version" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Type -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Type</h3>
            <input v-model="form.type" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Provider -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Provider</h3>
            <input v-model="form.provider" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Documentation -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Documentation</h3>
            <input v-model="form.documentation" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Description -->
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
      :modalBigId="'big-delete-app-' + form.id"
      customDataTip="Удаление приложения"
      customMessage="Вы точно хотите удалить это приложение?"
  />

</template>

<script lang="ts" setup>
import {ref, onMounted, computed} from 'vue';
import { useRoute } from 'vue-router';
import ConfirmBigDeleteModal from '@/components/ConfirmBigDeleteModal.vue';
import ConfirmCancelRedactModal from "~/components/ConfirmCancelRedactModal.vue";
import ConfirmChangeModal from "~/components/ConfirmChangeModal.vue";
import NavbarTables from "~/components/NavbarTables.vue";

const route = useRoute();
const textarea = ref<HTMLTextAreaElement | null>(null);
const rowId = computed(() => route.params.rowId);

const autoResizeTextarea = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
  }
};

const form = ref({
  name: '',
  version: '',
  type: '',
  provider: '',
  documentation: '',
  description: '',
  id: ''
});

onMounted(() => {
  if (route.query) {
    form.value = {
      name: route.query.name as string || '',
      version: route.query.version as string || '',
      type: route.query.type as string || '',
      provider: route.query.provider as string || '',
      documentation: route.query.documentation as string || '',
      description: route.query.description as string || '',
      id: rowId.value as string || ''
    }
  }
});

useSeoMeta({
  title: 'Изменение приложения',
  ogTitle: 'Изменение приложения',
  description: 'Изменение параметров сервера/системы',
  ogDescription: 'Изменение параметров сервера/системы'
})
</script>
