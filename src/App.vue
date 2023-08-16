<script>
  export default {
    data(){
      return {
          msg: "离骚 Ipsum",
          text: "生成一行文本",
          paragraph: "生成多个段落"
      }
    }
  }
</script>

<template>
  <h1 class = 'h1'>{{ msg }}</h1>
  <div>
    <a-button type = 'primary' block class = 'button'>{{ text }}</a-button>
    <a-button block>{{ paragraph }}</a-button>
  </div>
  
</template>

