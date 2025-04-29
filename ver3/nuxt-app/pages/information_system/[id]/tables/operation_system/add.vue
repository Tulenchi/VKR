<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
      <a class="text-2xl text-primary-content">Добавление операционной системы</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
      <button class="btn btn-ghost btn-secondary h-12 w-12 ml-2" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
            </svg>
          </span>
      </button>
    </div>
  </div>

  <main class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="card bg-neutral text-neutral-content shadow-xl">
      <div class="card-body">

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Операционная система</h3>
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Name</h3>
            <input type="text" placeholder="Type here" class="input input-neutral input-base-100" />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Version</h3>
            <input type="text" placeholder="Type here" class="input input-neutral input-base-100" />
          </div>
        </div>

        <div class="mb-2">
          <div class="flex justify-between mb-2">
            <h3 class="text-xl font-semibold">Description</h3>
            <textarea type="text" placeholder="Type here" class="textarea textarea-neutral resize-none overflow-hidden" rows="5" @input="autoResizeTextarea" ref="textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="delete">
    <button class="btn btn-xl btn-square shadow-md bg-neutral-50 text-neutral-50-content" @click="showPopup">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6L20 6M6 6l0 15M17 6l0 15M6 21L17 21M8 2L15 2" /></svg>
    </button>
  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue';

const textarea = ref(null);

const autoResizeTextarea = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto'; // Сначала сбрасываем высоту
    textarea.value.style.height = `${textarea.value.scrollHeight}px`; // Устанавливаем новую высоту
  }
};

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
  title: 'Добавление операционной системы',
  ogTitle: 'Добавление операционной системы',
  description: 'Изменение параметров сервера/системы',
  ogDescription: 'Изменение параметров сервера/системы'
})
</script>

<style lang="css" scoped>
.delete{
  position: fixed;
  bottom: 20px;
  right: 15px;
}
</style>