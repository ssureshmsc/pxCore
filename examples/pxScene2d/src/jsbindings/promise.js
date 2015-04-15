var root = scene.root;

var o = scene.create({t:"rect",fillColor:0xffffffff,w:300,h:300,parent:root,cx:150,cy:150,c:[
  {t:"rect",fillColor:0xff0000ff,w:100,h:100},
  {t:"rect",fillColor:0x00ff00ff,w:100,h:100,x:100,y:100,cx:50,cy:50,rx:1,rz:0},
  {t:"rect",fillColor:0x0000ffff,w:100,h:100,x:200,y:200},
]})

var promise = o.animateToP({r:360},5,scene.PX_LINEAR,scene.PX_END);
promise.then(function(v){console.log("promise completed",v);})
  .then(function(v){console.log("next promise completed", v); });
console.log(promise);
console.log(promise.description());
promise.resolve("blah");
o.children[1].animateTo({r:-360},1,scene.PX_LINEAR,scene.PX_LOOP);

