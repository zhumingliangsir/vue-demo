<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">我是主页</router-link>
      <router-link to="/user">我是用户页面</router-link>
      <router-link to="/news">我说新闻页</router-link>
    </div>
      
    <div>
      <router-view></router-view>
      <hr>
      <button class="btn btn-block btn-success" @click="get">点击发送请求</button>
      <span id="data_you">测试</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    get:function(){
      this.$http.get('./src/1.txt').then(function(res){
        $("#data_you").html(res.data)

      })
    }
  }
}
</script>

<style>
#nav{
  display:flex;
  height:50px;
  line-height:50px;
}
a{
  color:#fff;
  flex:1;
  text-align:center;
  text-decoration:none;
}
a:nth-child(1){
  background-color:#f00;
}
a:nth-child(2){
  background-color:#0f0;
}
a:nth-child(3){
  background-color:#00f;
}
</style>
