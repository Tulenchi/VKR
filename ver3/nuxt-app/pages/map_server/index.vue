<template>
  <div class="navbar bg-primary shadow-sm ">
    <div class="navbar-start">
      <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
      </button>
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
      <a class="text-2xl text-primary-content">Карта серверов</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-base-100 min-h-[calc(100vh-4rem)]">
    <div class="col-span-2 bg-neutral rounded-box p-4 shadow-md">
      <div class="h-full w-full flex items-center justify-center bg-neutral">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
          <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
        </svg>
      </div>
    </div>

    <div class="flex flex-col gap-4">

      <div class="bg-neutral p-4 rounded-box shadow">
        <p class="bg-neutral text-neutral-content text-center text-lg font-semibold">Основная информация</p>
      </div>
      <div class="bg-neutral p-6 rounded-box shadow">
        <p>Сервер: Личный кабинет</p>
        <p>Система: SystemName</p>
        <p>Кластер: Кластер №1</p>
      </div>

      <div class="bg-neutral p-4 rounded-box shadow">
        <p>Нагрузка:</p>
        <div class="bg-base-100 p-10 mt-3 rounded-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
          </svg>
        </div>
      </div>
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
