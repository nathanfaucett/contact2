var tape = require("tape"),
    vec2 = require("vec2"),
    Contact2 = require("..");


tape("Contact2", function(assert) {
    assert.deepEqual(Contact2.create(), {
        normal: vec2.create(0, 1),
        point: vec2.create(0, 0),
        depth: 0,
        data: null
    });
    assert.end();
});
