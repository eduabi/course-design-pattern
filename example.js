var proxy = {
    proxyService: function (src, tar, success, error) { //代理模式=》代理服务
        var _filter = function (src) { //代理处理程序,根据规则筛选掉不满足条件的请求者
            return true;
        }
        var _resConfig = {
            complete: false,
            results: '不满足条件!'
        }
        if (_filter(src)) {
            var res = tar.receiver(src.requestParams)
            _resConfig.complete = true;
            _resConfig.results = res;
        }
        return _resConfig;
    }

}
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
console.log(proxy.proxyService(source, tar));