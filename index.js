// http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
var getDescendantProp = function (obj, desc) {
    var arr = desc.split(".");

    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
};

var setDescendantProp = function (obj, desc, value) {
  var recurse = function (obj, arr, value) {
    if (arr.length == 0) return value;
    var key = arr.shift();

    if (obj === undefined) obj = {};

    obj[key] = recurse(obj[key], arr, value);
    return obj;
  };

  return recurse(obj, desc.split("."), value);
};
