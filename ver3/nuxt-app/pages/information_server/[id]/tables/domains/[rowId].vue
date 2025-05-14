<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <ConfirmCancelRedactModal
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
      <a class="text-2xl text-primary-content">Изменение домена</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
      <ConfirmChangeModal
          :modalId="'changes-modal' + form.id"
      />
    </div>
  </div>

  <main class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="card bg-neutral text-neutral-content shadow-xl">
      <div class="card-body">
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Домен</h3>
          </div>
        </div>

        <!-- DNS -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">DNS</h3>
            <input type="text" v-model="form.dns" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Value -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Value</h3>
            <input type="text" v-model="form.value" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Domain -->
        <div class="mb-2">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">Domain</h3>
            <input type="text" v-model="form.domain" class="input input-neutral input-base-100" />
          </div>
        </div>

        <!-- Description -->
        <div class="mb-2">
          <div class="flex justify-between mb-2">
            <h3 class="text-xl font-semibold">Description</h3>
            <textarea v-model="form.description" class="textarea textarea-neutral resize-none overflow-hidden" rows="5" @input="autoResizeTextarea" ref="textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </main>

  <ConfirmBigDeleteModal
      :modalBigId="'big-delete-domain-' + form.id"
      customDataTip="Удаление домена"
      customMessage="Вы точно хотите удалить этот домен?"
  />

</template>

<script lang="ts" setup>
import {ref, onMounted, computed} from 'vue';
import { useRoute } from 'vue-router';
import ConfirmBigDeleteModal from '@/components/ConfirmBigDeleteModal.vue';
import ConfirmChangeModal from "~/components/ConfirmChangeModal.vue";
import ConfirmCancelRedactModal from "~/components/ConfirmCancelRedactModal.vue";

const route = useRoute();
const textarea = ref<HTMLTextAreaElement | null>(null);
const rowId = computed(() => route.params.rowId);

const autoResizeTextarea = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
  }
};

const form = ref({
  dns: '',
  value: '',
  domain: '',
  description: '',
  id: ''
});

onMounted(() => {
  if (route.query) {
    form.value = {
      dns: route.query.dns as string || '',
      value: route.query.value as string || '',
      domain: route.query.domain as string || '',
      description: route.query.description as string || '',
      id: rowId.value as string || ''
    }
  }
});

useSeoMeta({
  title: 'Изменение домена',
  ogTitle: 'Изменение домена',
  description: 'Изменение параметров сервера/системы',
  ogDescription: 'Изменение параметров сервера/системы'
})
</script>
