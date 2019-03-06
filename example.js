strategyPattern = {

};
strategyCalculat = function(){

}

function strategy(){
    this.pattern = function(){

    }

}
strategy.prototype.pattern


strategy = {
    matchStrategy: function(key,patObj,fn){  
        if(patObj instanceof Object && patObj.hasOwnProperty(key)){
            fn(patObj[key])
        }
    }
}