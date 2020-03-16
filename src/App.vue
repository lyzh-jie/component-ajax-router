<template>
  <div id="outer">
      <h1>路由组件</h1>
      <ul>
          <!-- 
              路由组件创建的步骤：
              ①创建组件
              ②创建路由器模块  在src中新建router文件夹，其中创建index.js
              ③在入口文件main.js的new Vue配置对象中注册路由器
              ④在index.js文件中注册路由
              ⑤在使用路由组件的组件中通过<router-link to='path'></router-link>进行路由链接
              ⑥在显示路由组件的位置使用渲染路由组件 <router-view></router-view>
              注：
              1.拆分路由需要注意的问题：
              ①分析原型图是由哪些路由组成，他们分别在哪一块区域显示
              ②路由组件之间的关系是兄弟，父子，爷孙等等关系（他们之间的关系由他们的位置确定）
           -->
          <li>
              <!-- 路由链接 -->
            <router-link to="/cartoon">cartoon</router-link>
          </li>
          <li>
            <router-link to="/teleplay">teleplay</router-link>
          </li>
      </ul>
      <!-- 用于渲染路由组件 -->
      <!-- <router-view></router-view> -->
      <!-- 
          缓存路由组件对象
          1.默认情况下，被切换的路由组件对象会销毁释放，再回来时是重新创建的
          2.如果可以缓存路由组件对象，可以提高用户体验
       -->
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #outer{
        width: 600px;
        border: 1px solid pink;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            height: 50px;
            border: 1px solid greenyellow;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                border: 1px solid red;
                .router-link-active{
                    color: pink;
                }
            }
        }
    }
</style>

