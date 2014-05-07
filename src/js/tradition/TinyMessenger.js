var TinyMessenger = function(){
    this._callbacks = {};
}
TinyMessenger.prototype.on = function(customEvent, callback){
    var pattern = /(.[^:]+):(\w+)/gi;
    customEvent.replace(pattern,function(all,dom,domEv){
            $(dom).on(domEv,function(){
                callback.apply(this,arguments)
            })
    })
    this._callbacks[customEvent] || (this._callbacks[customEvent] = []);
    this._callbacks[customEvent].push(callback);
    return this;
};
TinyMessenger.prototype.trigger = function(){
    var args = Array.prototype.slice.call(arguments,0),
        customEvent = args.shift(),
        list;
    if(!(list = this._callbacks[customEvent])) return this;
    for(var i = 0; i < list.length; i++){
        list[i].apply(this, args);
    }
    return this;
};
TinyMessenger.prototype.off = function(customEvent,callback){
    if(!(this._callbacks[customEvent])) return this;
    this._callbacks[customEvent].splice(this._callbacks[customEvent].indexOf(callback),1);
    return this;
};
TinyMessenger.prototype.offEvent = function (customEvent) {
    if(!(this._callbacks[customEvent])) return this;
    delete this._callbacks[customEvent];
    return this;
};
window.TM = new TinyMessenger();
