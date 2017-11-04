// ret array with val/s found
// "arr": [
// {
//   "key": "val",
//   ...
// }...
const arr_filter = function (arr, key, val) {
  let af = arr.filter(function (el) {
    return el[key] === val;
  });
  return af;
};

export {arr_filter};