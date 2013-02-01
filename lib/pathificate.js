module.exports = function(o, options) {
  options = options || {};
  var result = []
    , context = {}
    ;

  context.path = "";

  pathificate(o, options, context, result);
  return result;
};

function pathificate(obj, options, context, result) {
  var name
    , value
    , prevPath
    ;

  for (name in obj) {
    value = obj[name];
    if (Object.hasOwnProperty.call(obj, name)) {
      if (Object.prototype.toString.call(value) === "[object Object]") {
        if (options.includeObjects) {
          result.push(context.path + name);
        }
        prevPath = context.path;
        context.path = [context.path, name, "."].join("");
        pathificate(obj[name], options, context, result);
        context.path = prevPath;
      } else {
        result.push(context.path + name);
      }
    } 
  }  
}
