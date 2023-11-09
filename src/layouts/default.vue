<template>
  <div class="h-screen">
    <HeaderComponent />
    <div class="flex min-h-[calc(100vh-66px)]">
      <slot />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>
