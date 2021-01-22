// Old style
var setGlobal = function () {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unable to locate global object");
};

var myGlobal = setGlobal();
myGlobal.setTimeout = (() => console.log("Hello world"), 100);

//  New style
globalThis.setTimeout = (() => console.log("Hello world"), 100);
