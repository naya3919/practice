<template>
    <!-- contents -->
    <div id="contents-wrap">
        <div class="contents-inner">

            <Start v-if="actIndex == 0"/>
            <APIL_00017 v-if="actIndex == 1"/>

            <!-- pagenation btn -->
            <div class="contents-pagenation-btn-wrap">
                <button class="prev-btn" @click="prevPage"></button>
                <button class="next-btn" @click="nextPage"></button>
            </div>
            <!-- pagenation btn --> 
    
        </div>
    </div>
    <!-- contents -->

</template>

<script>
import Start from '@/components/activities/Start'
import APIL_00017 from '@/components/activities/APIL_00017'

export default {
    name: 'LayoutBody',
    components: {
        Start,
        APIL_00017
    },
    computed: {
        actIndex() {
            return this.$store.state.actIndex
        },
        pageIndex() {
            return this.$store.state.pageIndex
        }
    },
    methods: {
        prevPage() {
            let newPageIndex = Math.max(this.$store.state.pageIndex - 1, 0)
            this.$store.commit('setPageIndex', newPageIndex);
        },
        nextPage() {
            let actCode = 'APIL_00017'
            let actInfo = Object.values(this.$store.state.contentData.querySelectorAll('ActInfo')).find(item => item.getAttribute('act_code') == actCode)
            let pageCount = actInfo.querySelectorAll('PageInfo').length -1

            let newPageIndex = Math.min(this.$store.state.pageIndex + 1, pageCount) 
            this.$store.commit('setPageIndex', newPageIndex);
        },
    }

}
</script>

<style>

</style>