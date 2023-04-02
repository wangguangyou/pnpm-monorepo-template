<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { toUpperCase } from 'utils'
import type { UserInfo } from 'types'
const userInfo: UserInfo = {
  id: 1,
  age: 1,
  name: 'needahouse',
  avatar: 'base64',
}
console.log(userInfo)
</script>

<template>
  <HelloWorld :msg="toUpperCase('page1')"></HelloWorld>
</template>
