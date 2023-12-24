

<template>
  <div id='app'>
    <h1>离骚ipsum</h1>
    <button @click="word"> 生成一行文字</button>
  </div>
</template>

<script>
  import word from './word.vue'
  export default {
    components: {
      word
    },
    methods:{
      word(){
        this.$router.push("/word")
      }
    }
  }
</script>

