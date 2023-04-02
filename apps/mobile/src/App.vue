<script setup lang="ts">
import { foo } from 'apis'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <HelloWorld :msg="foo('hello')"></HelloWorld>
</template>

<style scoped></style>
