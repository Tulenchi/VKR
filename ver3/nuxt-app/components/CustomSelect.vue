<template>
  <div class="relative sm:min-w-60 md:min-w-80" ref="selectContainer">
    <!-- Выбранное значение + иконка -->
    <div
        class="flex items-center justify-between h-11 px-4 border rounded-sm cursor-pointer bg-base-100 border-neutral hover:border-neutral-focus"
        @click.stop="toggleDropdown"
    >
      <span :class="{ 'text-neutral-content/50': !selectedOption }">
        {{ selectedOption || placeholder }}
      </span>
      <svg
          class="w-4 h-4 text-neutral-content transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Выпадающий список -->
    <div
        v-if="isOpen"
        class="absolute z-10 w-full mt-1 bg-base-100 border rounded-md shadow-lg"
    >
      <div
          v-for="(option, index) in options"
          :key="index"
          class="px-4 py-2 cursor-pointer hover:bg-gray-200"
          @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => ["Первый", "Второй"],
    },
    placeholder: {
      type: String,
      default: "Выберите",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isOpen: false,
      selectedOption: this.modelValue,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit("update:modelValue", option);
    },
    handleClickOutside(event) {
      if (this.$refs.selectContainer && !this.$refs.selectContainer.contains(event.target)) {
        this.isOpen = false;
      }
    }
  },
  watch: {
    modelValue(newVal) {
      this.selectedOption = newVal;
    },
  },
};
</script>