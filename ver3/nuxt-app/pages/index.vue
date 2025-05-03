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
      <div class="space-y-4">
        <ServerCardMain
            v-for="server in store.servers"
            :key="server.server_id"
            :title="server.server_name"
            :ip="server.id_ip"
            :domain="server.domain_id.domain_name"
            :server-id="server.server_id"
        />
      </div>
    </main>

  <div class="add">
    <div class="tooltip tooltip-primary tooltip-left" data-tip="Добавление сервера">
      <NuxtLink :to="{ name: 'server_add' }">
        <button class="btn btn-xl btn-square bg-neutral text-neutral-50-content shadow-md font-semibold text-3xl hover:bg-neutral-50 hover:text-neutral-50-content"><span class="mb-1">+</span></button>
      </NuxtLink>
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
</style>
