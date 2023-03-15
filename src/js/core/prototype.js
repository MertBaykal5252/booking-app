Element.prototype.on = function (name, action) {
  this.addEventListener(name, action, false);
};

Element.prototype.off = function (name, action) {
  this.removeEventListener(name, action, false);
};

Element.prototype.get = function(selector){
    return this.querySelector(selector);
}

Element.prototype.getAll = function(selector){
    return this.querySelectorAll(selector);
}