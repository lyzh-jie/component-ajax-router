<template>
    <div>
        <p>{{msg}}</p>
        <!-- 调用组件的4种格式-->
        <CartoonS></CartoonS>
        <hr>
        <CartoonS/>
        <hr>
        <cartoon-s></cartoon-s>
        <hr>
        <cartoon-s/>
    </div>   
</template>

<script>
// 命名变量时使用大驼峰命名法
import CartoonS from './components/Cartoons';
export default {
    data:function(){
        return {
            msg:'cartoon'
        }
    },
    // 注册组件
    components:{
        CartoonS
    }
}
</script>

<style lang="scss" scoped>
    p{
        font-size: 100px;
        color: pink;
    }

</style>>

