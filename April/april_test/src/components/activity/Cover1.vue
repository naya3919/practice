<template>
  <div class="contents-box-wrap">
      <div class="main-cont">      
                      
          <!-- test-wrap -->
          <div class="test-wrap">
              <div class="cover-title-wrap">
                  <div class="cover-lesson">
                      <span>Lesson1</span>
                  </div>
                  <div class="cover-title">
                      <div class="title">Ant And Cat BoxAnt And Cat Box</div>
                  </div>
              </div>
              <div class="test-info-wrap">
                  <div class="test-info-inner">
                      <div class="test-type">Preview</div>
                      <div class="test-progress">
                          <div class="step-wrap">
                              <span class="on">Vocabulary</span><span class="arr"></span>
                          </div>
                          <div class="step-wrap">
                              <span>Chunk</span><span class="arr"></span>
                          </div>
                          <div class="step-wrap">
                              <span>Sentence</span><span class="arr"></span>
                          </div>
                          <div class="step-wrap">
                              <span>Passage</span><span class="arr"></span>
                          </div>
                          <div class="step-wrap">
                              <span>Check Up</span>
                          </div>
                      </div>
                  </div>
              </div>                           
              <div class="test-status">
                  <strong class="normal">D-2 Thu.</strong>
              </div>
              <div class="cover-btn">
                  <button class="bg-blue" @click="startEvent">Start</button>
              </div>
          </div>
          <!-- test-wrap -->
          
      </div> 
  </div>
  <!-- contents -->
</template>

<script>
export default {
  name: 'Cover1',
  computed: {
    actIndex() {
        return this.$store.state.actIndex
    }
  },
  mounted() {
    this.setLayout()
  },
  methods: {
    startEvent() {
        let newActIndex = this.actIndex + 1
        this.$store.commit('setActIndex', newActIndex)
        console.log('startEvent 실행');
    },
    setLayout(){
        let classUpdate = document.querySelector('.app-inner');
        classUpdate.className = "app-inner"
        classUpdate.classList.add('cover');
    }
  }
}
</script>

<style>

</style>