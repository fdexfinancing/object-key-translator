
function translate(collection, dict) {

  let is_object = Object.prototype.toString.call(collection) === '[object Object]';
  let is_array = Object.prototype.toString.call(collection) === '[object Array]';

  if (is_object && !is_array) {
    let new_obj = {};

    Object.keys(collection).forEach(key => {
      let t = translate(collection[key], dict);
      new_obj[dict[key]] = t;
    });

    return new_obj;
  } else if (is_array) {
    let arr = [];

    collection.forEach(item => {
      let t = translate(item, dict);
      arr.push(t);
    });

    return arr;
  }

  return collection;
}

module.exports = translate;
