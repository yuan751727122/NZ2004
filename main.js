console.log("模块加载成功");


// 事先去配置引入模块的路径
require.config({
    paths:{
        // 自定义的名字：模块引入的路径
        "jquery":"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "ANTA":"ANTA",
        "banner":"banner",
        "nav":"nav"
    },
    shim:{
        //jquery.cookie 是依赖于 jquery开发
        //设置依赖关系
        "jquery-cookie":["jquery"]
    }
})

// 通过AMD规范引入模块
/*
    第一个参数是数组，引入我们引入模块的路径
    第二个参数是回调函数，模块引入以后，才执行的函数
*/

//调用首页模块上面的函数，实现对应的功能
require(["ANTA","banner","nav"],function(ANTA,banner,nav){
    banner.down();
    banner.banner();
    nav.tab1();
})