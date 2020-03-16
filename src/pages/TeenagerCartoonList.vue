<template>
  <div>
      <ul>
          <li v-for="(item,index) in teenagerList" :key="index">
              {{item.title}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    // 接收数据
    props:['teenagerList']
}
</script>

<style>

</style>