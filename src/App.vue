<template>
  <div id="app">
    <HeartEffect>
      <router-view v-wechat-title="$route.meta.title" />
    </HeartEffect>
  </div>
</template>

<script>
import HeartEffect from './components/HeartEffect.vue'

export default {
  name: 'App',
  components: {
    HeartEffect
  }
}
</script>

