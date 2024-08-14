<template>
  <MainLayout>
    <template v-slot:main>
      <h5>Main content</h5>
    </template>
    <template v-slot:aux>
      <h5>Aux content</h5>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
</script>