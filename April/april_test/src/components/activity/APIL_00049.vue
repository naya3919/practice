<template>
    <div class="contents-box-wrap">
        <div class="main-cont">                  

            <!-- test -->
            <div class="test-wrap type1 step1">
                <div class="sound-action-wrap">
                    <div class="sound-playing"></div>                                 
                </div>                               
                <div class="choose-wrap">
                    <div class="choose-item-wrap left-wrap round-box-r-2"> 
                        <div class="choose-item-inner">
                            <div class="img-text-wrap hover-bg-wrap">
                                <div class="img-wrap">
                                    <img src="http://tssue.com:3006/preview/seedbed1/lesson1/TA_SB1_B1_L1_V4_bee.jpg" alt="bee">
                                </div>
                                <div class="text-wrap">
                                    <span>b</span>ee
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="choose-item-wrap right-wrap round-box-r2-2">
                        <div class="choose-item-inner">
                            <div class="correct-mark"><span></span></div>
                            <div class="img-text-wrap hover-bg-wrap">
                                <div class="img-wrap">
                                    <img src="http://tssue.com:3006/preview/seedbed1/lesson1/TA_SB1_B1_L1_V9_count.jpg" alt="count">
                                </div>
                                <div class="text-wrap">
                                    <span>c</span>ount
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- test -->

        </div>
    </div>


</template>

<script>
export default {
    name: 'APIL_00049',
    mounted() {
        this.setLayout()
    },
    methods: {
        setLayout() {
            let classUpdate = document.querySelector('.app-inner');
            classUpdate.className = "app-inner"
            classUpdate.classList.add('seedbed1-preivew')
            classUpdate.classList.add('listen-and-choose')
        }
    }
}
</script>

<style>
@import '../../assets/css/seedbed1_preview.css';

</style>