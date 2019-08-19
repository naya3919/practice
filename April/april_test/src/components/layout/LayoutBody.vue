<template>
  <!-- contents -->
  <div id="contents-wrap">
      <div class="contents-inner">

        <Cover1 v-if="actIndex == 0"/>
        <APIL_00049 v-if="actIndex == 1"/>
      </div>

        <!-- pagenation btn -->
        <div class="contents-pagenation-btn-wrap">
            <button class="prev-btn" @click="prevAct"></button>
            <button class="next-btn" @click="nextAct"></button>
        </div>
        <!-- pagenation btn -->  
      
  </div>
  <!-- contents -->
</template>

<script>
import Cover1 from '@/components/activity/Cover1'
import APIL_00049 from '@/components/activity/APIL_00049'

export default {
  name: 'LayoutBody',
  components: {
    Cover1,
    APIL_00049
  },
  computed: {
    actIndex() {
      return this.$store.state.actIndex
    }
  },
  methods: {
    prevAct(){
      let newActIndex = this.actIndex - 1
      this.$store.commit('setActIndex', newActIndex)
    },
    nextAct(){
      let newActIndex = this.actIndex + 1
      this.$store.commit('setActIndex', newActIndex)
    }
  }
}
</script>

<style>

</style>