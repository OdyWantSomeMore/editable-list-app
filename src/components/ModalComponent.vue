<template>
  <div
    class="fixed left-0 top-0 h-full w-full overflow-auto bg-black/30"
    @click.self="close()"
  >
    <div
      class="fixed left-[5vw] top-[10vh] h-[80vh] w-[90vw] rounded bg-[#f5f5f5]"
    >
      <div class="flex justify-between px-6 py-4">
        <div>
          {{ header }}
        </div>
        <button
          class="h-7 w-7"
          @click="close()"
        >
          X
        </button>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: '',
    },
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>

</style>
