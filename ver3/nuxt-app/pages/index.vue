<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <NuxtLink :to="{ name: 'map_servers' }">
        <button class="btn btn-ghost btn-secondary h-12 w-12 ">
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
      <a class="text-2xl text-primary-content">Сервера ОИС</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <!--<div class="flex justify-center px-4 py-7 ">
      <label class="input input-neutral w-full max-w-xl">
        <svg class="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" class="grow" placeholder="Поиск серверов..." />
      </label>
  </div>
  -->

    <main class="container mx-auto px-4 py-8 max-w-3xl">
      <div v-if="store.loading" class="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div class="text-center">
          <span class="loading loading-spinner text-[#D5DCE8] loading-xl"></span>
        </div>
      </div>
      <div v-else-if="store.error" class="fixed inset-0 flex items-center justify-center">
        <div class="text-center alert alert-error">
          {{store.error}}
        </div>
      </div>
      <div v-else class="space-y-4">
        <ServerCardMain
            v-for="server in store.servers"
            :key="server.server_id"
            :title="server.server_name"
            :ip="server.id_ip"
            :domain="server.domain_id"
            :server-id="server.server_id"
        />
      </div>
    </main>

  <div class="add">
    <div class="dropdown dropdown-top dropdown-end dropdown-hover">
      <button class="btn btn-neutral btn-circle btn-xl shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-2xl bg-neutral-50 text-neutral-content rounded-box w-56 space-y-1 mb-1">
        <li>
          <NuxtLink :to="{ name: 'server_add' }" class="justify-between">
            Добавить сервер
           </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'system_add' }" class="justify-between">
            Добавить систему
           </NuxtLink>
        </li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useServerStore } from '@/stores/ServerStore';

const store = useServerStore();

store.fetchServers();

  useSeoMeta({
  title: 'Сервера ОИС',
  ogTitle: 'Сервера ОИС',
  description: 'Главная страница со всеми серверами',
  ogDescription: 'Главная страница со всеми серверами'
  })

</script>

<style lang="css" scoped>
.add{
  position: fixed;
  bottom: 20px;
  right: 15px;
}

.dropdown-content {
  transform-origin: bottom right;
  animation: scaleIn 0.2s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
