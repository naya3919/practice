<template>
  <!-- footer -->
  <div id="footer-wrap">
      <div class="footer-inner">
          <div class="footer-cont">

              <div class="hf-progress-nav-wrap">
                  <div class="progress-nav">
                      <ul class="clfix">
                          <li v-for="number in pageCount"
                            :class="number === (pageIndex+1) ? 'p-current' : '' + ' ' + number < (pageIndex+1) ? 'p-comp-o' : ''" 

                            >{{ number }}</li>
                          <!-- <li class="p-comp-o">1</li>
                          <li class="p-current">2</li>
                          <li>3</li>
                          <li>4</li> -->
                      </ul>
                  </div>
              </div>

          </div>
      </div>
  </div>
  <!-- footer -->
</template>

<script>
export default {
    name: 'LayoutFooter',
    computed: {
        actIndex() {
            return this.$store.state.actIndex
        },
        pageIndex() {
            return this.$store.state.pageIndex
        },
        pageCount() {
            let actCode = 'APIL_00017'
            let actInfo = Object.values(this.$store.state.contentData.querySelectorAll('ActInfo')).find(item => item.getAttribute('act_code') == actCode)
            //let pageCount = actInfo.querySelectorAll('PageInfo').length -1
            return actInfo.querySelectorAll('PageInfo').length
        }
    },
}
</script>

<style>

</style>