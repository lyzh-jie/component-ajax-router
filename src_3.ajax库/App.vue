<template>
  <div>
      <p v-if="!repName">搜索GitHub仓库</p>
      <p v-else>
          仓库地址
          <a :href="repUrl">vue</a>
      </p>
      <h1>APP1</h1>
      <App1></App1>
      <h1>APP2</h1>
      <App2></App2>  
  </div>
</template>

<script>
import App1 from './App1';
import App2 from './App2';
export default {
    data(){
        return {
            repName:'',
            repUrl:''
        }       
    },
    /* 
    vue-resource的用法
    */
    /* mounted(){
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
        //发送异步请求
        this.$http.get(url).then(response=>{
            // 请求成功
            console.log(response.body);
            response = response.body.items;
            this.repName = response[0].name;
            this.repUrl = response[0]['html_url']
        }).catch(err=>{
            // 请求失败
            console.log(err);
        })
    } */

    // asyce await用法
    /* async mounted(){
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
        // 请求成功
        let response = await this.$http.get(url);
        console.log(response);
    } */
  /*    async mounted(){
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
        // 处理异常
        try{
            // 请求成功
            let response = await this.$http.get(url);
            console.log(response);
        }catch(err){
            // 处理失败
            console.log(err)
        }
    }, */
    components:{
        App1,
        App2
    }
}
</script>
<style>
</style>