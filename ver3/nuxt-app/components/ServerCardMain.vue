<template>
  <NuxtLink :to="`/information_server/${serverId}`"
            class="block w-full transition-all hover:scale-[1.01] active:scale-[0.99]"
  >
  <div class="card bg-neutral text-neutral-content shadow-xl hover:shadow-2xl transition-shadow">
    <div class="card-body">
      <div class="flex items-center gap-4">
        <div class="flex-1">
          <h2 class="card-title text-lg md:text-xl">{{ title }}</h2>
          <div class="flex flex-col md:flex-row md:items-center md:gap-8 mt-2">
            <div class="flex items-center gap-2">
              <span class="font-mono text-sm md:text-base">{{ ip }}</span>
            </div>
            <div class="flex items-center gap-2">
              <a :href="'https://' + domain" target="_blank" class="link">{{ domain }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  ip: String,
  domain: String,
  serverId: Number
})
</script>
