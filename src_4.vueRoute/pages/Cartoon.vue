<template>
  <div id="outer">
      <ul class="list">
          <li>
              <router-link to="/cartoon/kidcartoonlist">kid</router-link>
          </li>
          <li>
              <router-link to="/cartoon/teenagercartoonlist">teenager</router-link>
          </li>
      </ul>
      <!-- 传递数据 -->
      <router-view :teenagerList='teenagerList'></router-view>
  </div>
</template>

<script>
export default {
      data(){
        return {
            teenagerList:[
                {title:'犬夜叉'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
    }
   #outer{
       display: flex;
       .list{
           width: 20%;
           border: 1px solid purple;
           li{
               height: 40px;
               .router-link-active{
                   color: red;
               }
           }
       }
   }
</style>