<template>
  <div class="delete">
    <div class="tooltip tooltip-primary tooltip-left" :data-tip="customDataTip">
      <label :for="modalBigId" class="btn btn-xl btn-square bg-neutral-50 text-neutral-50-content shadow-md hover:bg-neutral-100 hover:text-neutral-50-content">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6L20 6M6 6l0 15M17 6l0 15M6 21L17 21M8 2L15 2" /></svg>
      </label>
      <input type="checkbox" :id="modalBigId" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-left text-neutral-content">Подтверждение удаления</h3>
          <p class="py-4 text-left text-neutral-content">{{ customMessage }}</p>
          <div class="modal-action">
            <label :for="modalBigId" class="btn">Отмена</label>
            <button class="btn btn-neutral" @click="$emit('confirm')">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modalBigId: {
    type: String,
    required: true
  },
  customDataTip: {
    type: String,
    default: 'Удалить'
  },
  customMessage: {
    type: String,
    default: 'Вы уверены, что хотите удалить этот элемент?'
  }
});

defineEmits(['confirm']);
</script>

<style scoped>
.delete{
  position: fixed;
  bottom: 20px;
  right: 15px;
}
</style>