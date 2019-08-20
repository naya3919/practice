<template>
  <div class="app-inner">
  <!-- <div class="app-inner seed1-preivew listen-and-tap"> -->
      <LayoutHeader/>
      <LayoutBody/>
      <LayoutFooter/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/LayoutHeader'
import LayoutBody from '@/components/layout/LayoutBody'
import LayoutFooter from '@/components/layout/LayoutFooter'

export default {
    name: 'Preview',
    components: {
      LayoutHeader,
      LayoutBody,
      LayoutFooter
    }
}
</script>

<style>
@import '../assets/css/april.css';
@import '../assets/css/reset.css';

</style>