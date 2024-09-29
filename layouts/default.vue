<template>
  <div class="flex h-screen bg-[#F3F7FC]">
    <div class="flex-1 flex flex-col">
      <AppHeader />
      <main class="flex-1 bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
      <AppFooter />
    </div>
  </div>
</template>
<script setup>
import AppHeader from "~/components/app/AppHeader.vue";
import AppFooter from "~/components/app/AppFooter.vue";
</script>
