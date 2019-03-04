'use strict'
console.log(DesignPattern);
//单例模式测试
var case1 = DesignPattern.SingleDivByProto('div');
var case11 = DesignPattern.SingleDivByProto('div');
console.info('单例测试结果',case1 === case11);
//发布订阅模式测试
DesignPattern.publisher.bindEvent('updateMessage',function(msg){
    console.info('我监听了updateMessage事件',msg);
})
DesignPattern.publisher.bindEvent('openPanel',function(msg){
    console.info('我监听了openPanel事件',msg);
})
DesignPattern.publisher.broadcast('openPanel','打开聊天面板');
