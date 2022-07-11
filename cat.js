(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#090909").s().p("AgBAmQgRAAgKgLQgKgKAAgQQAAgSALgKQALgLASABQAjABACAnQgEAjgjAAIgBAAg");
	this.shape.setTransform(93.9,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090909").s().p("AgCAmQgRgBgKgKQgJgLAAgQQABgSALgKQALgLASACQAjACABAnQgEAigjAAIgCAAg");
	this.shape_1.setTransform(3.9,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,97.8,7.7), null);


// stage content:
(lib.cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(144.4,81.7,1,1,0,0,0,48.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[144.4,81.7,146.3,85.5,146.3,90.1,146.3,97.9,140.7,103.4,135.3,108.8,127.7,108.9]}},20).to({guide:{path:[127.7,109,127.5,109.1,127.3,109.1,119.5,109.1,113.9,103.5,108.3,98,108.3,90.1,108.3,84.8,110.9,80.5]}},20).to({guide:{path:[110.9,80.5,112.1,78.5,113.9,76.7,119.3,71.4,127,71.2,127.1,71.2,127.3,71.2,127.3,71.2,127.3,71.2,135.2,71.3,140.7,76.7,143,79,144.3,81.7]}},20).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A4D00").s().p("AjLBVQgtgLgdghQgcgfgKgvQgFgYAAgFQABgRASgDQATgDADAPQACAIABATQAOA2AfAXQAgAWA9gBQAzgBAdgaQAcgYALg1IADgaQACgOAOAAQAQgBAEAPQACAIAAATQAMA1AdAZQAeAYA2ABQA6AAAfgXQAegXAOg1QAAgUACgIQAEgPASAFQAYAGgJAtQgNA4gyAnQgzAog4gKQhHAJgsgzQgSgWgQABQgNABgTAVQgpAthDAAQgdAAgigJg");
	this.shape.setTransform(127.5,157.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AjSDTQhZhYAAh8QABh6BYhXQBYhXB7AAQB7AABYBYQBYBXAAB6QAAB7hXBXQhXBXh8ABIgCAAQh6AAhYhXg");
	this.shape_1.setTransform(172.6,89.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AjPDXQhYhWgEh8QgDh5BXhZQBWhZB8gDQB6gDBaBWQBaBVADB7QACB8hWBZQhXBZh9ACIgFAAQh3AAhXhTg");
	this.shape_2.setTransform(82.6,89.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D48300").s().p("ADUC6IgPgLQidh9j6hLQgJgDgEgDQgFgEgCgIQBPhQBegrQBMgjA8AXQA8AXAjBOQAzBxAGCSQgHAGgGAAIgGgCg");
	this.shape_3.setTransform(197.7,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D48300").s().p("AivhLQAmhVA/gWQA+gWBTAqQBZAsBHBIQgTAYgoALQgsAJgVAHQhjAphBAjQhWAvhAA3QgDACgIACIgMADQAEiVAzh0g");
	this.shape_4.setTransform(57.5,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDABF").s().p("AoDOcQoKijiomwQhnkJA0j0QAyjvDGjWIBPhTQAxgzBGgrQA1ggBSgmQBygyBdgXQAXAIAfgHIA0gNQGKhKGNBXIAVAEQAMABAKgGQDuBAC2CGIAUAPQAMAJAJAEQAEASAPARIAcAbQDtDgAuEtQA7F+jtEzQiCCoi8BpQirBgjgAsQjDAmi5AAQkHAAj0hMg");
	this.shape_5.setTransform(127.5,109.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.5,105,255,209.8);
// library properties:
lib.properties = {
	id: '09A639C3C3E68E41A0AA42BAFDDB5E7B',
	width: 255,
	height: 210,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['09A639C3C3E68E41A0AA42BAFDDB5E7B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;