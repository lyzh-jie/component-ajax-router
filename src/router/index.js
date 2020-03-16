import Vue from 'vue';
// 引入路由器
import VueRouter from 'vue-router';
import Cartoon from '../pages/Cartoon';
import Teleplay from '../pages/Teleplay';
import KidCartoonList from '../pages/KidCartoonList'
import TeenagerCartoonList from '../pages/TeenagerCartoonList';
import KidCartoon from '../pages/KidCartoon';
import TeleplayList from '../pages/TeleplayList';

// 声明使用vue插件
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',//去掉路径中的#，在开发环境中没有问题，到生产环境中有问题，需要后台做响应的配置
    // 注册路由
    routes:[
        // 注册一级路由
        {
            path:'/cartoon',//路径左侧的/永远代表项目的根目录，路径中最好不要出现大写字母
            component:Cartoon,
            children:[
                {
                    path:'/cartoon/kidcartoonlist',
                    component:KidCartoonList,
                    children:[
                        {
                            // ：id占位符 利用param参数进行传值
                            path:'kidcartoon/:id',
                            component:KidCartoon
                        }
                    ]
                },
                {
                    path:'teenagercartoonlist',
                    component:TeenagerCartoonList
                },
                {
                    path:'',
                    redirect:'kidcartoonlist'
                }
            ],
            // alias:'/teleplay'//别名
        },
        {
            path:'/teleplay',
            component:Teleplay,
            children:[
                // 命名路由
                {
                    path:'teleplaylist?password=123',
                    name:'teleplaylist',
                    component:TeleplayList,
                }
            ]
        },
        // 打开页面默认显示哪个组件，称为路由重定向
        {
            path:'/',
             redirect:'/cartoon'
        },
        // 错误处理404
        {
            path:'*',
            redirect:'/'
        }
    ]
})