var Observer = function(callback) {
    this.callback = callback;
}
Observer.prototype.update = function(data) {
    this.callback(data)
}