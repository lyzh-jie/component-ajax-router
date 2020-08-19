<template>
  <div>
      <ul>
          <li v-for="kidItem in kidList" :key="kidItem.id">
              <router-link :to="`/cartoon/kidcartoonlist/kidcartoon/${kidItem.id}`">{{kidItem.id}}:{{kidItem.cartoon}}</router-link>      
              <button @click="pushShow">push</button>  
              <button @click="replaceShow">replace</button>      
          </li>
      </ul>
      <router-view/>
      <button @click="$router.back()">返回</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            kidList:[
                {id:1,cartoon:'汪汪队'},
                {id:2,cartoon:'萌鸡小队'},
                {id:3,cartoon:'瑞奇宝宝'}
            ]
        }
    },
    methods:{
        pushShow(){
            this.$router.push('/teleplay');
        },
        replaceShow(){
            this.$router.replace('/cartoon');
        }
    }

}
</script>

<style lang="scss" scoped>
    .router-link-active{
        color: pink;
    }
</style>