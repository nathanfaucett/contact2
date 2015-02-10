var vec2 = require("vec2"),
    createPool = require("create_pool");


module.exports = Contact2;


function Contact2() {
    this.normal = vec2.create();
    this.point = vec2.create();
    this.depth = 0;
}
createPool(Contact2);

Contact2.create = function() {
    return Contact2.getPooled();
};

Contact2.prototype.destroy = function() {
    return Contact2.release(this);
};
