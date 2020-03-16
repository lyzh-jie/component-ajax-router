<template>
    <div>
        <p>{{msg}}</p>        
        <PropsTest title="小猪佩奇" :protagonists="protagonists"></PropsTest>   
             <!--绑定事件  -->
        <CustomEvent @addItem="addItem"></CustomEvent>
        <hr>
        <PubSubTest :protagonists="protagonists"></PubSubTest>
        <SlotTest>
            <ul slot="top">
                <li v-for="(protagonist,index) in protagonists" :key="index">
                    <p>{{protagonist.name}}</p>
                </li>
            </ul>
            <p slot="middle">天下第一</p>
            <p slot="bottom">萌鸡小队</p>
        </SlotTest>
    </div>
</template>

<script>
import PubSub from 'pubsub-js';
import PropsTest from './components/componentCommunication_props';
import CustomEvent from './components/componentCommunication-自定义事件';
import PubSubTest from './components/componentCommunications_订阅发布';
import SlotTest from './components/componentCommunication_slot';
export default {
    data:function(){
        return {
            msg:'汪汪队',
            protagonists:[
                {name:'莱德'},
                {name:'灰灰'},
                {name:'阿奇'}
            ],
        }
    },
    mounted(){
        // 订阅消息
        PubSub.subscribe('delProtagonist',(msg,index)=>{
            this.delProtagonist(index);
        })
    },
    methods:{
        addItem:function(title){
            console.log(this.protagonists);
            const obj = {};
            obj.name = title;
            this.protagonists.push(obj);
        },
        delProtagonist:function(index){
            this.protagonists.splice(index,1);
        }
    },
    components:{
        PropsTest,
        CustomEvent,
        PubSubTest,
        SlotTest,
    }

}
</script>
<style lang="scss" scoped>

</style>