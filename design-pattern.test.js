'use strict'

//单例模式测试
var case1 = DesignPattern.SingleDivByProto('div');
var case11 = DesignPattern.SingleDivByProto('div');
console.info('单例测试结果', case1 === case11);

//发布订阅模式测试
DesignPattern.publisher.bindEvent('updateMessage', function (msg) {
    console.info('我监听了updateMessage事件', msg);
})
DesignPattern.publisher.bindEvent('openPanel', function (msg) {
    console.info('我监听了openPanel事件', msg);
})
DesignPattern.publisher.broadcast('openPanel', '打开聊天面板');

//策略模式测试
var strategyRules = {
    'hello': function () {
        console.log('我说的hello');
    },
    'hi': function () {
        console.log('我说的hi')
    }
}
DesignPattern.matchStrategy('hi', strategyRules, function (key) {
    alert(key)
})

//代理模式测试
var source = {
    requestParams: {
        url: 'http://www.baidu.com',
        port: '8080',
    },
    sendRequest: function () {
        console.log('自己动手丰衣足食!');
    }
}
var tar = {
    receiver: function (msg) {
        console.log('我来看看有人给我发了什么' + msg);
        return '给你想要的东西';
    }
}
console.log(DesignPattern.proxyService.syncProcess(source, tar));

//代理模式测试
var ball = {
    toLeft: function (a) {
        console.log('toLeft');
    },
    toRight: function (b) {
        console.log('toRight');
    },
    toTop: function () {
        console.log('toTop');
    },
    toBottom: function () {
        console.log('toBottom');
    }
}
var ballToLeft = DesignPattern.executeCommand(ball, 'toLeft');
ballToLeft();

//迭代器模式测试
var eachList = [1, 25, 55, 66];
var eachListRes = DesignPattern.ergEach(eachList, function (val, key, item) {
    if (val < 50) {
        return {
            str: val + '_' + key
        }
    } else {
        return [val, key]
    }
});
console.log(eachListRes);
var eachObj = {
    name: 'jack',
    age: 55,
    address: '陕西省',
    lang: '汉语'
};
var eachObjRes = DesignPattern.ergEach(eachObj, function (val, key, item) {
    return {key:val,val:val}
});
console.log(eachObjRes);