<template>
<!-- 写组件的步骤
1.一般组件放到components文件夹中，组件的名字首字母大写，使用大驼峰命名法
2.template模板中必须要有一个根标签
3.注册组件，将写好的组件使用ES6模块化语法引入到父组件中，在vue的配置对象中的components中注册组件
4.调用组件（4种格式）
 -->
    <!-- <p>cartoon</p> -->
    <!-- 每个template模板中必须有跟标签，即所有内容都需要在跟标签中写 -->
    <div>
        <ul>
            <li v-for="item in cartoons" :key="item.id">
                <!-- 在脚手架中使用v-for需要加上key属性 -->
                {{item.id}}---{{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            cartoons:[
                {
                    id:1,
                    title:'汪汪队'
                },
                 {
                    id:2,
                    title:'小猪佩奇'
                },
                 {
                    id:3,
                    title:'恐龙阿旺'
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
        li{
            border-bottom: 1px solid yellow;
        }
    }
</style>