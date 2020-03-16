<template>
    <div>
        <p>{{title}}</p>
        <ul>
            <li v-for="(protagonist,index) in protagonists" :key="index">
                {{protagonist.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    /* 
    1.组件相当于一个小的vue实例对象，通过props接收的属性都会成为组件对象的属性,props传
    递属性只能是父组件传递给子组件，单项数据流，不能是兄弟组件，也不能是隔代组件。
    2.prop声明接收的格式
    2.1  props:['title'] 只指定属性名，将属性名放到数组中
    2.2 
     props:{
        title:String,
        protagonists:Array        
    }
    指定属性名、属性值的类型   属性指的类型为8中：String Number Boolean Array Object
    Date Function Symbol
    2.3 
     props:{    
        protagonists:{
            type:Array,
            required:false
        }
    }
    指定属性名、属性值的类型、属性的必要性
    */
    // props:['title']
    props:{
        title:String,
        // protagonists:Array
        protagonists:{
            type:Array,
            required:false
        }      
    },
}
</script>
<style lang="scss" scoped>
</style>