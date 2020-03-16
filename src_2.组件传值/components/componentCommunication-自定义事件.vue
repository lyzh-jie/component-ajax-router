<template>
  <div>
      <input type="text" v-model="name">
      <button @click="addProtagonist">add protagonist</button>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            name:''
        }
    },
    methods:{
        addProtagonist:function(){
            console.log('1');
            //得到数据
            const title = this.name.trim();
            console.log(title);
            // 检查数据的合法性
            if(!title){
                return;
            }
            //触发、分发事件
            this.$emit('addItem',title);
            //清空输入框
            this.name = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>