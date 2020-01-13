var Observer = function(message) {
    this.message = message;
}
Observer.prototype.update = function(data) {
    console.log(this.message, data)
}