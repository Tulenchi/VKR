<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
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
      <a class="text-2xl text-primary-content">Карта серверов</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>
  <div class="min-h-screen p-4">
    <div class="h-full w-full bg-neutral rounded-box shadow-lg">
      <h1 class="text-center"> MAP </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  title: 'Карта серверов',
  ogTitle: 'Карта серверов',
  description: 'Карта показывающая связи',
  ogDescription: 'Карта показывающая связи'
})
</script>
