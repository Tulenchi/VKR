<template>
  <div>
    <label :for="modalId" :class="['btn', customButtonClass]">
      <slot>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </slot>
    </label>

    <input type="checkbox" :id="modalId" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-left">Подтверждение удаления</h3>
        <p class="py-4 text-left">Вы уверены, что хотите удалить этот объект?</p>
        <div class="modal-action">
          <label :for="modalId" class="btn">Отмена</label>
          <button class="btn btn-neutral" @click="$emit('confirm')">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modalId: {
    type: String,
    required: true
  },
  customButtonClass: {
    type: String,
    default: 'btn-sm btn-square bg-neutral-50 text-neutral-50-content hover:bg-neutral-100 hover:text-neutral-50-content'
  }
});

defineEmits(['confirm']);
</script>