<template>
  <div>
      <ul>
          <li v-for="(protagonist,index) in protagonists" :key="index">
              <span>{{protagonist.name}}</span>
              <button @click="delItem">删除</button>
          </li>
      </ul>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
    props:['protagonists'],
    methods:{
        delItem:function(){
            // 发布消息
            PubSub.publish('delProtagonist',this.index);
        }
    }

}
</script>

<style>

</style>