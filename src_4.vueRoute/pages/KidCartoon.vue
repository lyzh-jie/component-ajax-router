<template>
  <div>
      <ul>
          <!-- 通过组件上的属性$route去接收参数 -->
          <li>{{$route.params.id}}</li>
          <li>{{cartoon.title}}</li>
          <li>{{cartoon.detail}}</li>
      </ul>
  </div>
</template>

<script>
// 模拟后台读到的数据
let cartoonList = [
    {id:1,title:'汪汪队',detail:'一群小狗狗'},
     {id:2,title:'萌鸡小队',detail:'一群小鸡'},
     {id:3,title:'瑞奇宝宝',detail:'一群小宝宝'}
]
export default {
    data(){
        return {
            cartoon:{}
        }
    },
    mounted(){
        /* 
        路由组件之间的切换，每一次都是销毁之前的路由，新建下一个路由，而这种情况是
        只改变了组件中的$route,整个组件并未销毁重建，故而mounted只执行了一次，若是
        想实现效果，则需要去监视$route 
        */
       /*  const id = value.params.id *1;
        console.log(typeof id);
        const detail = cartoonList.find(item => item.id === id);       
        console.log(detail);
        this.cartoon = detail;  */
       this.showUi(this.$route);
    },
    watch:{
        $route(value){
           this.showUi(value);
        }
    },
    methods:{
        showUi(value){
            const id = value.params.id *1;
            console.log(typeof id);
            const detail = cartoonList.find(item => item.id === id);       
            console.log(detail);
            this.cartoon = detail; 
        }
    }
}
</script>

<style>

</style>