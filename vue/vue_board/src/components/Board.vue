<template>
  <div class="board"> {{ msg }}
    <table id="board">
      <tr>
        <td>글번호</td>
        <td>제목</td>
        <td>작성자</td>
        <td>조회수</td>
      </tr>
    </table>
    <input type="text" id="searchVal" v-on:keyup.enter="onKeyUp()" placeholder="검색어를 입력하세요"/>
  </div>
</template>

<script>
export default {
  name: 'board',
  props: {
    msg: String
  },
  data: function() {
    return {
      tableData: []
    }
  },
  mounted: function() {
    this.setData()
  },
  methods: {
    setData() {
      this.axios
      .get('http://localhost:3005/board')
      .then((res) => {
        this.tableData = res.data;
        this.tableData.sort(function(a,b) {
          return a.number - b.number;
        })
        this.list(this.tableData);
      })
    },
    
    list() {
      this.tableData.forEach(item => {
        this.setTable(item);
      });
    },

    onKeyUp(event) {
      this.searchCilck();
    },

    setTable(item) {
      let tr = document.createElement('tr');
      let number = document.createElement('td');
      let title = document.createElement('td');
      let writer = document.createElement('td');
      let view = document.createElement('td');
      tr.appendChild(number).innerHTML = item.number;
      tr.appendChild(title).innerHTML = item.title;
      tr.appendChild(writer).innerHTML = item.writer;
      tr.appendChild(view).innerHTML = item.view;
      board.appendChild(tr);
    },

    searchCilck(){
      this.cellDelete();
      let searchValDate = document.getElementById("searchVal").value;
      let filterData = this.tableData.filter(function(item) {
        return item.writer == searchValDate
      });
      filterData.forEach(item =>{
        this.setTable(item);
      });
      console.log("searchValDate:", searchValDate);
    },

    cellDelete() {
      let cell = document.getElementById("board");
      cell.innerHTML="";
    }
  }
}
</script>

<style scoped>

</style>