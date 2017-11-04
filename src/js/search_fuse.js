import Fuse from "../js/vendor/fuse.min.js";

// ret array
// data: array
// value: item to search
// searchKeys: array of keys

// "data": [
// {
//   "searchKeys1": "ValueA",
//   "searchKeys2": "ValueB",
//   ...
const search_fuse = function (opts) {
  let fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: opts.searchKeys
  };

  let fuse = new Fuse(opts.data, fuseOptions);
  return fuse.search(opts.value);
};

export {search_fuse};