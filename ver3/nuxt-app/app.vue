<template>
  <div>
    <Transition name="fade" mode="out-in">
      <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div class="text-center">
          <span class="loading loading-spinner text-info loading-xl"></span>
        </div>
      </div>
    </Transition>

    <NuxtPage />
  </div>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000) // Adjust time as needed
})
</script>

