var vec2 = require("vec2"),
    createPool = require("create_pool");


var Contact2Prototype;


module.exports = Contact2;


function Contact2() {
    this.normal = vec2.create(0, 1);
    this.point = vec2.create(0, 0);
    this.depth = 0;
    this.data = null;
}
createPool(Contact2);
Contact2Prototype = Contact2.prototype;

Contact2.create = function() {
    return Contact2.getPooled();
};

Contact2Prototype.destroy = function() {
    return Contact2.release(this);
};

Contact2Prototype.destructor = function() {
    vec2.set(this.normal, 0, 1);
    vec2.set(this.point, 0, 0);
    this.depth = 0;
    this.data = null;
    return this;
};
