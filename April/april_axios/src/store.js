import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentData: {},
    pageIndex: 0,
    actIndex: 0
  },
  mutations: {
    setActIndex(state, payload) {
      state.actIndex = payload
    },
    setPageIndex(state, payload) {
      state.pageIndex = payload
    },
    contentData(state, payload) {
      state.contentData = payload
    }
  },
  actions: {
    contentData(content, vm) {
      let contentUrl = 'http://tssue.com:3006/preview/seed2/lesson1/Content.xml'

      return vm.axios({
        url : contentUrl,
        dataType : 'Application/Xml'
      })
      .then(res => {
        console.log('see2 XML data : ', res);
        let contentData = res.request.responseXML
        console.log('contentData : ', contentData)
        content.commit('contentData', contentData)
      })
    }
  }
})
