<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <NuxtLink to="/map_servers">
        <button class="btn btn-ghost btn-secondary h-12 w-12">
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

    <main class="container mx-auto px-4 py-8 max-w-3xl">
      <div class="space-y-4">
        <ServerCardMain
            title="Личный кабинет"
            ip="10.136.2.40"
            domain="lk.etu.ru"
            serverId = "1"
        />
        <ServerCardMain
            title="Посещаемость"
            ip="10.136.2.40"
            domain="digital.etu.ru"
            serverId = "2"
        />
        <ServerCardMain
            title="Медиатека"
            ip="10.136.2.40"
            domain="media.etu.ru"
            serverId = "3"
        />
        <ServerCardMain
            title="Библиотека"
            ip="10.136.2.40"
            domain="library.etu.ru"
            serverId = "4"
        />
        <ServerCardMain
            title="Moodle"
            ip="10.136.2.40"
            domain="vec.etu.ru"
            serverId = "5"
        />
        <ServerCardMain
            title="Лэти"
            ip="10.136.2.40"
            domain="etu.ru"
            serverId = "6"
        />
      </div>
    </main>
</template>

<script>
  useSeoMeta({
  title: 'Сервера ОИС',
  ogTitle: 'Сервера ОИС',
  description: 'Главная страница со всеми серверами',
  ogDescription: 'Главная страница со всеми серверами'
  })

</script>
