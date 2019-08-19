<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Preview from '@/views/Preview'
import Review from '@/views/Review'
import Skill_Preactice from '@/views/Skill_Preactice'

export default {
  name: 'App',
  components: {
    Preview,
    Review,
    Skill_Preactice
  },
}
</script>

<style>
@import './assets/css/april.css';
@import './assets/css/reset.css';

</style>
