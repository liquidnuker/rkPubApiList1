// ret array of unique key: val
// "arr": [
// { 
//   "cat": "cat2"
// },
// { 
//   "cat": "cat2" 
// ...
const arr_extractUnique = function (arr, cat) {
  let o = {};
  let temp = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    if (!o[arr[i][cat]]) {
      o[arr[i][cat]] = true;
      temp.push(arr[i][cat]);
      // temp.push(arr[i].Cat);
    }
  }
  return temp;
};

export {arr_extractUnique};