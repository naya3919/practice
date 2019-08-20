<template>
    <div class="contents-box-wrap">
        <div class="main-cont">                  

            <!-- test -->
            <div class="test-wrap step1">
                <div class="test-inner">
                    <div class="sound-action-wrap">
                        <div class="sound-btn hidden"></div>
                    </div>
                    <div class="img-wrap on">
                        <img :src="image" alt=""/>
                        <div class="tap-hand-motion-wrap active"></div> <!-- active 클래스 추가시 동작 -->
                    </div>                                    
                </div>                         
            </div>
            <!-- test -->

        </div>
    </div>
</template>

<script>
export default {
    name: 'APIL_00017',
    data() {
        return {
            actCode: 'APIL_00017',
            image:'',
        }
    },
    computed: {
        contentData() {
            return this.$store.state.contentData
        },
        pageIndex() {
            return this.$store.state.pageIndex
        }
    },
    created() {
        this.setData()
    },
    mounted() {
        this.setLayout()
    },
    methods: {
        setData() {
            //필요한 데이터에 해당하는 항목의 값들만 가져오기
            let actDatas = this.contentData.querySelectorAll('ActInfo')
            console.log(actDatas)
            //가져온 데이터(actDatas)를 array로 재정의
            let actData = Object.values(actDatas).find(item => {
                // console.log('item',item)
                return item.getAttribute('act_code') === this.actCode
            })
            console.log('actData:', actData)

            let pageDatas = actData.querySelectorAll('PageInfo')
            console.log('pageDatas: ', pageDatas)

            this.image = 'http://tssue.com:3006/preview/seed2/lesson1/' + pageDatas[this.pageIndex].querySelector('image').innerHTML
            this.audio = 'http://tssue.com:3006/preview/seed2/lesson1/' + pageDatas[this.pageIndex].querySelector('audio').innerHTML
        },
        setLayout() {
            let appInner = document.querySelector('.app-inner')
            appInner.className = 'app-inner'
            appInner.classList.add('seed1-preivew')
            appInner.classList.add('listen-and-tap')
        }
    },
    watch: {
        pageIndex() {
            this.setData()
        }
    }
}
</script>

<style>
@import '../../assets/program/seed2/preview/css/seed2_preview.css';
</style>