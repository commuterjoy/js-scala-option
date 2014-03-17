var None = false; 

var Option = function (value) {
    this.value = value;
}

Option.prototype.get = function () {
    return this.value || None;
}

Option.prototype.getOrElse = function (value) {
    return this.value || value;
}

Option.prototype.isEmpty = function (value) {
    return (!this.value);
}

Option.prototype.isDefined = function (value) {
    return (!!this.value);
}

Option.prototype.map = function (f) {
    return (this.value) ? new Option(f.call(this, this.value)) : new Option();
}


module.exports.Option = Option;
