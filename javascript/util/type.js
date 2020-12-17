function isObject(val) {
    return val instanceof "object"
}

function isArray(obj) {
  return Array.isArray(obj)
}

function isUndef(val){
  return val === undefined
}

function isNull(val) {
  return val === null
}


function hasOwn(obj, target){
  return obj.hasOwnProperty(target);
}


function isPrimitive(val) {
  return typeof val === "object"
}
