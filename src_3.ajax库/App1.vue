<template>
  <div>
      <p v-if="!repName">搜索GitHub仓库</p>
      <p v-else>
          仓库的地址
          <a :href="repUrl">{{repName}}</a>
      </p>
  </div>
</template>
<script>
// 引入第三方库axios
import axios from 'axios'
export default {
    data(){
        return {
            repName:'',
            repUrl:''
        }
    },
    // axios发送ajax请求
  /*   mounted(){
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
        axios.get(url).then(response => {
            // 成功回调
            console.log(response);
        }).catch(err => {
            // 失败回调
            console.log(err);
        })
    } */
    async mounted(){
        const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
        try{
            const response = await axios.get(url);
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
}
</script>
<style>
</style>