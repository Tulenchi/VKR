<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <ConfirmCancelModal
          :modalId="'cancel-changes-modal'"
          :formData="form"
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
      <a class="text-2xl text-primary-content">Добавление софта</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
      <ConfirmAddModal
          :modalId="'add-modal'"
      />
    </div>
  </div>

  <main class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="card bg-neutral text-neutral-content shadow-xl">
      <div class="card-body">

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Софт</h3>
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Name</h3>
            <input type="text" v-model="form.name" placeholder="Введите текст" class="input input-neutral input-base-100" />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Version</h3>
            <input type="text" v-model="form.version" placeholder="Введите текст" class="input input-neutral input-base-100" />
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

</template>

<script lang="ts" setup>

import { ref } from 'vue';
import ConfirmCancelModal from "~/components/ConfirmCancelModal.vue";
import ConfirmAddModal from "~/components/ConfirmAddModal.vue";

const textarea = ref(null);

const autoResizeTextarea = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto'; // Сначала сбрасываем высоту
    textarea.value.style.height = `${textarea.value.scrollHeight}px`; // Устанавливаем новую высоту
  }
};

const form = ref({
  name: '',
  version: '',
  description: '',
  id: ''
});

useSeoMeta({
  title: 'Добавление софта',
  ogTitle: 'Добавление софта',
  description: 'Изменение параметров сервера/системы',
  ogDescription: 'Изменение параметров сервера/системы'
})
</script>
