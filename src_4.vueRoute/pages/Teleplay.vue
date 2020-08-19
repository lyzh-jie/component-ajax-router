<template>
  <div>
      <input type="text" placeholder="喜欢的电视剧">
      <router-link :to="{name:'teleplaylist',query:{password:123}}">电视剧列表</router-link>
      <router-view/>
  </div>
</template>

<script>
export default {
  

}
</script>

<style>

</style>
