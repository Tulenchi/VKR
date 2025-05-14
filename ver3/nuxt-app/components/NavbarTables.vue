<template>
  <div class="navbar bg-primary shadow-sm">
  <div class="navbar-start">
    <ConfirmCancelModal
        :modalId="'cancel-changes-modal'"
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
    <a class="text-2xl text-primary-content">{{ titleNavbar }}</a>
  </div>
  <div class="navbar-end text-primary-content">
    <ThemeSwitcher />
    <ConfirmAddModal
        :modalId="'add-modal'"
    />
  </div>
  </div>

</template>
<script setup lang="ts">
import ConfirmCancelModal from "~/components/ConfirmCancelModal.vue";
import ConfirmAddModal from "~/components/ConfirmAddModal.vue";

defineProps({
  titleNavbar: {
    type: String
  }
});
</script>
