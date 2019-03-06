/**
 * @version v0.0.1 
 * @author eduabi
 * @description 设计模式Javascript实现
 *  */
'use strict'
var DesignPattern = { //全局命名空间
    SingleDivByProto: (function () { //原型方式的单例模式实现
        var _instance;
        var SingleDiv = function (html) {
            if (!_instance) {
                this.instance = function () {
                    return document.createElement('div');
                }();
                return _instance = this;
            }
            return _instance;
        }
        return SingleDiv;
    })(),
    SingleDivByLiteral: { //对象字面量形式的单例模式实现
        instance: null,
        getInstance: function (config) {
            var _config = config || {}
            if (!this.instance) {
                this.instance = function (config) {
                    var _name = config.name || 'div';
                    _instance = document.createElement(_name);
                    return _instance;
                };
            }
            return this.instance;
        }
    },
    publisher: { //发布订阅模式中的发布器
        infoStorage: {}, //事件订阅信息存储器
        bindEvent: function (eventName, callback) { //订阅事件
            if (!this.infoStorage[eventName]) {
                this.infoStorage[eventName] = [callback];
                return;
            }
            this.infoStorage[eventName].push(callback);
        },
        broadcast: function (eventName) { //发布事件通知
            if (!this.infoStorage[eventName]) {
                return;
            }
            for (var i = 0, fn; fn = this.infoStorage[eventName][i++];) {
                fn.apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }
    },
    matchStrategy: (key, patObj, fn) => { //策略模式=>策略匹配方法
        patObj instanceof Object && patObj.hasOwnProperty(key) && fn(patObj[key])
    },
    proxyService: {
        syncProcess: function (src, tar) { //代理模式=》逻辑处理
            var _resConfig = {
                complete: false,
                results: '不满足条件!'
            }
            if (this.filter(src)) {
                var res = tar.receiver(src.requestParams)
                _resConfig.complete = true;
                _resConfig.results = res;
            }
            return _resConfig;
        },
        filter: function (src) { //过滤规则
            return true;
        }
    }
}