<template>
  <div>
    <label
        :for="shouldShowModal ? modalId : null"
        class="btn btn-ghost btn-secondary h-12 w-12 mr-1"
        @click="handleClick"
    >
      <span class="text-primary-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </span>
    </label>

    <input type="checkbox" :id="modalId" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-left text-neutral-content">Отмена изменений</h3>
        <p class="py-4 text-left text-neutral-content">Вы уверены что хотите отменить изменения?</p>
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
import { computed } from 'vue';

const router = useRouter();
const props = defineProps({
  modalId: {
    type: String,
    required: true
  },
  formData: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

const emit = defineEmits(['confirm']);

const hasFormData = computed(() => {
  return Object.values(props.formData).some(value => value !== '');
});

const shouldShowModal = computed(() => {
  return hasFormData.value;
});

const handleClick = (e) => {
  if (!hasFormData.value) {
    router.go(-1);
    e.preventDefault();
  }
};

const confirmAction = () => {
  emit('confirm');
  router.go(-1);
};
</script>