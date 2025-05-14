<template>
  <div>
    <label :for="modalId" class="btn btn-ghost btn-secondary h-12 w-12 ml-1">
        <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
            </svg>
        </span>
    </label>
    <input type="checkbox" :id="modalId" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-left text-neutral-content">Добавление</h3>
        <p class="py-4 text-left text-neutral-content">Вы уверены что хотите добавить этот элемент?</p>
        <div class="modal-action">
          <label :for="modalId" class="btn">Нет</label>
          <button class="btn btn-neutral" @click="confirmAction">Да</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  modalId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['confirm']);

const confirmAction = () => {
  emit('confirm');
  router.go(-1);
};
</script>