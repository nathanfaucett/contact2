var vec2 = require("vec2"),
    createPool = require("create_pool");


module.exports = Contact2;


function Contact2() {
    this.normal = vec2.create(0, 1);
    this.point = vec2.create(0, 0);
    this.depth = 0;
}
createPool(Contact2);

Contact2.create = function() {
    return Contact2.getPooled();
};

Contact2.prototype.destroy = function() {
    return Contact2.release(this);
};

Contact2.prototype.destructor = function() {
    vec2.set(this.normal, 0, 1);
    vec2.set(this.point, 0, 0);
    this.depth = 0;
};
