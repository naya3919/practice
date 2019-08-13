<template>
  <div id="vFor">
    <!-- v-for 학습 -->
    <h2>Number 일 경우의 v-for</h2>
    <ul id="test1">
      <li v-for="(item, index) in test1">index: {{ index }}, item: {{ item }}</li>
    </ul>
    <br>

    <h2>String 일 경우의 v-for</h2>
    <ul id="test2">
      <li v-for="(item, index) in test2">index: {{ index }}, item: {{ item }}</li>
    </ul>
    <br>

    <h2>Array 일 경우의 v-for</h2>
    <ul id="test3">
      <li v-for="(item, index) in test3">index: {{ index }}, item: {{ item }}</li>
    </ul>
    <br>

    <h2>Object 일 경우의 v-for</h2>
    <ul id="test4">
      <li v-for="(item, key, index) in test4">index: {{ index }}, key: {{ key }}, item: {{ item }}</li>
    </ul>
    <!-- v-for 학습 -->
  </div>
</template>

<script>
export default {
  data: () => ({
    test1: 7,
    test2: 'string_test', // string
    test3: ['item1', 'item2', 'item3', 4, 5, 6, { name: 'Robin', content: 'Fighting!' }, { name: 'Vue', content: 'Easy!' }],
    test4: {item1: '첫번째 항목', item2: '두번째 항목', item3: '세번째 항목', item4: '네번째 항목', item5: '다섯번째 항목', },
  }),
}
</script>

<style>

</style>