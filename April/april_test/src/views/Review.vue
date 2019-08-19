<template>
    <div class="app-inner seedbed1-preivew listen-and-choose">
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
    name: 'Review',
    components: {
        LayoutHeader,
        LayoutBody,
        LayoutFooter
    }
}
</script>

<style>

</style>