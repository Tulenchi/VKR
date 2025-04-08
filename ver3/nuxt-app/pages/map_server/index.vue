<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
const router = useRouter()

const goBack = () => {
  router.go(-1)
}

useSeoMeta({
  title: 'Карта сервера',
  ogTitle: 'Карта сервера',
  description: 'Карта показывающая связи определенного сервера',
  ogDescription: 'Карта показывающая связи определенного сервера'
})
</script>
