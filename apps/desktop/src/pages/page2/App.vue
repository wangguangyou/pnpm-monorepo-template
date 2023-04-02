<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { toUpperCase } from 'utils'
</script>

<template>
  <HelloWorld :msg="toUpperCase('page2')"></HelloWorld>
</template>
