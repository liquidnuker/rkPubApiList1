(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ret array with val/s found
// "arr": [
// {
//   "key": "val",
//   ...
// }...
var arr_filter = function arr_filter(arr, key, val) {
  var af = arr.filter(function (el) {
    return el[key] === val;
  });
  return af;
};

exports.arr_filter = arr_filter;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ret array of unique key: val
// "arr": [
// { 
//   "cat": "cat2"
// },
// { 
//   "cat": "cat2" 
// ...
var arr_extractUnique = function arr_extractUnique(arr, cat) {
  var o = {};
  var temp = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (!o[arr[i][cat]]) {
      o[arr[i][cat]] = true;
      temp.push(arr[i][cat]);
      // temp.push(arr[i].Cat);
    }
  }
  return temp;
};

exports.arr_extractUnique = arr_extractUnique;

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ret array asc order
// "arr": [
// {
//   "item": "Name",
//   ...
// },...

var arr_sortValue = function arr_sortValue(item, arr) {
  arr.sort(function (a, b) {
    var itemToSort = item;
    var tempA = a[itemToSort].toUpperCase();
    var tempB = b[itemToSort].toUpperCase();
    if (tempA < tempB) {
      return -1;
    }
    if (tempA > tempB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return arr;
};

exports.arr_sortValue = arr_sortValue;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search_fuse = undefined;

var _fuseMin = __webpack_require__(143);

var _fuseMin2 = _interopRequireDefault(_fuseMin);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ret array
// data: array
// value: item to search
// searchKeys: array of keys

// "data": [
// {
//   "searchKeys1": "ValueA",
//   "searchKeys2": "ValueB",
//   ...
var search_fuse = function search_fuse(opts) {
  var fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: opts.searchKeys
  };

  var fuse = new _fuseMin2.default(opts.data, fuseOptions);
  return fuse.search(opts.value);
};

exports.search_fuse = search_fuse;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _stringify = __webpack_require__(145);

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty = __webpack_require__(54);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = __webpack_require__(58);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (e, t) {
  "object" == ( false ? undefined : (0, _typeof3.default)(exports)) && "object" == ( false ? undefined : (0, _typeof3.default)(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(undefined, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }var r = {};return t.m = e, t.c = r, t.i = function (e) {
      return e;
    }, t.d = function (e, r, n) {
      t.o(e, r) || (0, _defineProperty2.default)(e, r, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(r, "a", r), r;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 8);
  }([function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    };
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, _defineProperty2.default)(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        i = r(5),
        a = r(7),
        s = r(4),
        c = function () {
      function e(t, r) {
        var o = r.location,
            i = void 0 === o ? 0 : o,
            a = r.distance,
            c = void 0 === a ? 100 : a,
            h = r.threshold,
            l = void 0 === h ? .6 : h,
            u = r.maxPatternLength,
            f = void 0 === u ? 32 : u,
            d = r.isCaseSensitive,
            v = void 0 !== d && d,
            p = r.tokenSeparator,
            g = void 0 === p ? / +/g : p,
            y = r.findAllMatches,
            m = void 0 !== y && y,
            k = r.minMatchCharLength,
            x = void 0 === k ? 1 : k;n(this, e), this.options = { location: i, distance: c, threshold: l, maxPatternLength: f, isCaseSensitive: v, tokenSeparator: g, findAllMatches: m, minMatchCharLength: x }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= f && (this.patternAlphabet = s(this.pattern));
      }return o(e, [{ key: "search", value: function value(e) {
          if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return { isMatch: !0, score: 0, matchedIndices: [[0, e.length - 1]] };var t = this.options,
              r = t.maxPatternLength,
              n = t.tokenSeparator;if (this.pattern.length > r) return i(e, this.pattern, n);var o = this.options,
              s = o.location,
              c = o.distance,
              h = o.threshold,
              l = o.findAllMatches,
              u = o.minMatchCharLength;return a(e, this.pattern, this.patternAlphabet, { location: s, distance: c, threshold: h, findAllMatches: l, minMatchCharLength: u });
        } }]), e;
    }();e.exports = c;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        o = function e(t, r, o) {
      if (r) {
        var i = r.indexOf("."),
            a = r,
            s = null;-1 !== i && (a = r.slice(0, i), s = r.slice(i + 1));var c = t[a];if (null !== c && void 0 !== c) if (s || "string" != typeof c && "number" != typeof c) {
          if (n(c)) for (var h = 0, l = c.length; h < l; h += 1) {
            e(c[h], s, o);
          } else s && e(c, s, o);
        } else o.push(c.toString());
      } else o.push(t);return o;
    };e.exports = function (e, t) {
      return o(e, t, []);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function () {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = [], n = -1, o = -1, i = 0, a = e.length; i < a; i += 1) {
        var s = e[i];s && -1 === n ? n = i : s || -1 === n || (o = i - 1, o - n + 1 >= t && r.push([n, o]), n = -1);
      }return e[i - 1] && i - n >= t && r.push([n, i - 1]), r;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      for (var t = {}, r = e.length, n = 0; n < r; n += 1) {
        t[e.charAt(n)] = 0;
      }for (var o = 0; o < r; o += 1) {
        t[e.charAt(o)] |= 1 << r - o - 1;
      }return t;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
          n = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").replace(r, "|")),
          o = e.match(n),
          i = !!o,
          a = [];if (i) for (var s = 0, c = o.length; s < c; s += 1) {
        var h = o[s];a.push([e.indexOf(h), h.length - 1]);
      }return { score: i ? .5 : 1, isMatch: i, matchedIndices: a };
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      var r = t.errors,
          n = void 0 === r ? 0 : r,
          o = t.currentLocation,
          i = void 0 === o ? 0 : o,
          a = t.expectedLocation,
          s = void 0 === a ? 0 : a,
          c = t.distance,
          h = void 0 === c ? 100 : c,
          l = n / e.length,
          u = Math.abs(s - i);return h ? l + u / h : u ? 1 : l;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(6),
        o = r(3);e.exports = function (e, t, r, i) {
      for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e.length, m = u, k = e.indexOf(t, g), x = t.length, S = [], M = 0; M < y; M += 1) {
        S[M] = 0;
      }if (-1 !== k) {
        var b = n(t, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });if (m = Math.min(b, m), -1 !== (k = e.lastIndexOf(t, g + x))) {
          var _ = n(t, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });m = Math.min(_, m);
        }
      }k = -1;for (var L = [], w = 1, C = x + y, A = 1 << x - 1, I = 0; I < x; I += 1) {
        for (var O = 0, F = C; O < F;) {
          n(t, { errors: I, currentLocation: g + F, expectedLocation: g, distance: h }) <= m ? O = F : C = F, F = Math.floor((C - O) / 2 + O);
        }C = F;var P = Math.max(1, g - F + 1),
            j = d ? y : Math.min(g + F, y) + x,
            z = Array(j + 2);z[j + 1] = (1 << I) - 1;for (var T = j; T >= P; T -= 1) {
          var E = T - 1,
              K = r[e.charAt(E)];if (K && (S[E] = 1), z[T] = (z[T + 1] << 1 | 1) & K, 0 !== I && (z[T] |= (L[T + 1] | L[T]) << 1 | 1 | L[T + 1]), z[T] & A && (w = n(t, { errors: I, currentLocation: E, expectedLocation: g, distance: h })) <= m) {
            if (m = w, (k = E) <= g) break;P = Math.max(1, 2 * g - k);
          }
        }if (n(t, { errors: I + 1, currentLocation: g, expectedLocation: g, distance: h }) > m) break;L = z;
      }return { isMatch: k >= 0, score: 0 === w ? .001 : w, matchedIndices: o(S, p) };
    };
  }, function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, _defineProperty2.default)(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        i = r(1),
        a = r(2),
        s = r(0),
        c = function () {
      function e(t, r) {
        var o = r.location,
            i = void 0 === o ? 0 : o,
            s = r.distance,
            c = void 0 === s ? 100 : s,
            h = r.threshold,
            l = void 0 === h ? .6 : h,
            u = r.maxPatternLength,
            f = void 0 === u ? 32 : u,
            d = r.caseSensitive,
            v = void 0 !== d && d,
            p = r.tokenSeparator,
            g = void 0 === p ? / +/g : p,
            y = r.findAllMatches,
            m = void 0 !== y && y,
            k = r.minMatchCharLength,
            x = void 0 === k ? 1 : k,
            S = r.id,
            M = void 0 === S ? null : S,
            b = r.keys,
            _ = void 0 === b ? [] : b,
            L = r.shouldSort,
            w = void 0 === L || L,
            C = r.getFn,
            A = void 0 === C ? a : C,
            I = r.sortFn,
            O = void 0 === I ? function (e, t) {
          return e.score - t.score;
        } : I,
            F = r.tokenize,
            P = void 0 !== F && F,
            j = r.matchAllTokens,
            z = void 0 !== j && j,
            T = r.includeMatches,
            E = void 0 !== T && T,
            K = r.includeScore,
            $ = void 0 !== K && K,
            J = r.verbose,
            N = void 0 !== J && J;n(this, e), this.options = { location: i, distance: c, threshold: l, maxPatternLength: f, isCaseSensitive: v, tokenSeparator: g, findAllMatches: m, minMatchCharLength: x, id: M, keys: _, includeMatches: E, includeScore: $, shouldSort: w, getFn: A, sortFn: O, verbose: N, tokenize: P, matchAllTokens: z }, this.setCollection(t);
      }return o(e, [{ key: "setCollection", value: function value(e) {
          return this.list = e, e;
        } }, { key: "search", value: function value(e) {
          this._log('---------\nSearch pattern: "' + e + '"');var t = this._prepareSearchers(e),
              r = t.tokenSearchers,
              n = t.fullSearcher,
              o = this._search(r, n),
              i = o.weights,
              a = o.results;return this._computeScore(i, a), this.options.shouldSort && this._sort(a), this._format(a);
        } }, { key: "_prepareSearchers", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              t = [];if (this.options.tokenize) for (var r = e.split(this.options.tokenSeparator), n = 0, o = r.length; n < o; n += 1) {
            t.push(new i(r[n], this.options));
          }return { tokenSearchers: t, fullSearcher: new i(e, this.options) };
        } }, { key: "_search", value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = arguments[1],
              r = this.list,
              n = {},
              o = [];if ("string" == typeof r[0]) {
            for (var i = 0, a = r.length; i < a; i += 1) {
              this._analyze({ key: "", value: r[i], record: i, index: i }, { resultMap: n, results: o, tokenSearchers: e, fullSearcher: t });
            }return { weights: null, results: o };
          }for (var s = {}, c = 0, h = r.length; c < h; c += 1) {
            for (var l = r[c], u = 0, f = this.options.keys.length; u < f; u += 1) {
              var d = this.options.keys[u];if ("string" != typeof d) {
                if (s[d.name] = { weight: 1 - d.weight || 1 }, d.weight <= 0 || d.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");d = d.name;
              } else s[d] = { weight: 1 };this._analyze({ key: d, value: this.options.getFn(l, d), record: l, index: c }, { resultMap: n, results: o, tokenSearchers: e, fullSearcher: t });
            }
          }return { weights: s, results: o };
        } }, { key: "_analyze", value: function value(e, t) {
          var r = e.key,
              n = e.arrayIndex,
              o = void 0 === n ? -1 : n,
              i = e.value,
              a = e.record,
              c = e.index,
              h = t.tokenSearchers,
              l = void 0 === h ? [] : h,
              u = t.fullSearcher,
              f = void 0 === u ? [] : u,
              d = t.resultMap,
              v = void 0 === d ? {} : d,
              p = t.results,
              g = void 0 === p ? [] : p;if (void 0 !== i && null !== i) {
            var y = !1,
                m = -1,
                k = 0;if ("string" == typeof i) {
              this._log("\nKey: " + ("" === r ? "-" : r));var x = f.search(i);if (this._log('Full text: "' + i + '", score: ' + x.score), this.options.tokenize) {
                for (var S = i.split(this.options.tokenSeparator), M = [], b = 0; b < l.length; b += 1) {
                  var _ = l[b];this._log('\nPattern: "' + _.pattern + '"');for (var L = !1, w = 0; w < S.length; w += 1) {
                    var C = S[w],
                        A = _.search(C),
                        I = {};A.isMatch ? (I[C] = A.score, y = !0, L = !0, M.push(A.score)) : (I[C] = 1, this.options.matchAllTokens || M.push(1)), this._log('Token: "' + C + '", score: ' + I[C]);
                  }L && (k += 1);
                }m = M[0];for (var O = M.length, F = 1; F < O; F += 1) {
                  m += M[F];
                }m /= O, this._log("Token score average:", m);
              }var P = x.score;m > -1 && (P = (P + m) / 2), this._log("Score average:", P);var j = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;if (this._log("\nCheck Matches: " + j), (y || x.isMatch) && j) {
                var z = v[c];z ? z.output.push({ key: r, arrayIndex: o, value: i, score: P, matchedIndices: x.matchedIndices }) : (v[c] = { item: a, output: [{ key: r, arrayIndex: o, value: i, score: P, matchedIndices: x.matchedIndices }] }, g.push(v[c]));
              }
            } else if (s(i)) for (var T = 0, E = i.length; T < E; T += 1) {
              this._analyze({ key: r, arrayIndex: T, value: i[T], record: a, index: c }, { resultMap: v, results: g, tokenSearchers: l, fullSearcher: f });
            }
          }
        } }, { key: "_computeScore", value: function value(e, t) {
          this._log("\n\nComputing score:\n");for (var r = 0, n = t.length; r < n; r += 1) {
            for (var o = t[r].output, i = o.length, a = 0, s = 1, c = 0; c < i; c += 1) {
              var h = e ? e[o[c].key].weight : 1,
                  l = 1 === h ? o[c].score : o[c].score || .001,
                  u = l * h;1 !== h ? s = Math.min(s, u) : (o[c].nScore = u, a += u);
            }t[r].score = 1 === s ? a / i : s, this._log(t[r]);
          }
        } }, { key: "_sort", value: function value(e) {
          this._log("\n\nSorting...."), e.sort(this.options.sortFn);
        } }, { key: "_format", value: function value(e) {
          var t = [];this._log("\n\nOutput:\n\n", (0, _stringify2.default)(e));var r = [];this.options.includeMatches && r.push(function (e, t) {
            var r = e.output;t.matches = [];for (var n = 0, o = r.length; n < o; n += 1) {
              var i = r[n];if (0 !== i.matchedIndices.length) {
                var a = { indices: i.matchedIndices, value: i.value };i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
              }
            }
          }), this.options.includeScore && r.push(function (e, t) {
            t.score = e.score;
          });for (var n = 0, o = e.length; n < o; n += 1) {
            var i = e[n];if (this.options.id && (i.item = this.options.getFn(i.item, this.options.id)[0]), r.length) {
              for (var a = { item: i.item }, s = 0, c = r.length; s < c; s += 1) {
                r[s](i, a);
              }t.push(a);
            } else t.push(i.item);
          }return t;
        } }, { key: "_log", value: function value() {
          if (this.options.verbose) {
            var e;(e = console).log.apply(e, arguments);
          }
        } }]), e;
    }();e.exports = c;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(144)(module)))

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pager;
// pagination helper
// ======================================================/

function Pager(opts) {
  this.data = opts.data;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function getTotalPages() {
    // ret num
    return Math.ceil(this.data.length / this.perPage);
  },
  getCurrentOffset: function getCurrentOffset() {
    // ret num
    return (this.currentPage - 1) * this.perPage;
  },
  page: function page(num) {
    if (this.isValidPage(num)) {
      this.currentPage = num;

      var start = this.getCurrentOffset();
      // let end = start + this.perPage;
      var end = start + Number(this.perPage);

      return this.data.slice(start, end);
    } else {
      // default page
      this.currentPage = 1;
      return this.data.slice(0, this.perPage);
    }
  },
  hasNext: function hasNext() {
    // ret boolean
    return this.currentPage < this.getTotalPages();
  },
  hasPrev: function hasPrev() {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function prev() {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function next() {
    // ret num
    if (this.hasNext()) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    // console.log(this.currentPage);
    return this.currentPage;
  },
  isValidPage: function isValidPage(num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var store = {

  // from child components
  fc: {
    // vcSearch.vue
    searchKeyword: ""
  }
};

exports.store = store;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortIcon = function (_React$Component) {
  (0, _inherits3.default)(SortIcon, _React$Component);

  function SortIcon(props) {
    (0, _classCallCheck3.default)(this, SortIcon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SortIcon.__proto__ || (0, _getPrototypeOf2.default)(SortIcon)).call(this, props));

    _this.state = {};

    // binders    
    return _this;
  }
  // hooks  
  // methods

  (0, _createClass3.default)(SortIcon, [{
    key: "render",
    value: function render() {
      if (this.props.pr_asc) {
        return (
          // up
          React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            React.createElement("path", { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" })
          )
        );
      } else {
        return (
          // down
          React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            React.createElement("path", { d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" })
          )
        );
      }
    }
  }]);
  return SortIcon;
}(React.Component);

var SortAPI = function (_React$Component2) {
  (0, _inherits3.default)(SortAPI, _React$Component2);

  function SortAPI(props) {
    (0, _classCallCheck3.default)(this, SortAPI);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (SortAPI.__proto__ || (0, _getPrototypeOf2.default)(SortAPI)).call(this, props));

    _this2.state = {
      sortAsc: true
    };
    // binders    
    return _this2;
  }
  // hooks  
  // methods


  (0, _createClass3.default)(SortAPI, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          sortAsc: !prevState.sortAsc
        };
      });

      this.props.pr_val_sortTable('API', this.state.sortAsc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { className: "btn btn1-01 btn_sort", onClick: function onClick() {
              _this3.toggle();
            } },
          "API",
          React.createElement(SortIcon, { pr_asc: this.state.sortAsc })
        )
      );
    }
  }]);
  return SortAPI;
}(React.Component);

var SortCategory = function (_React$Component3) {
  (0, _inherits3.default)(SortCategory, _React$Component3);

  function SortCategory(props) {
    (0, _classCallCheck3.default)(this, SortCategory);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (SortCategory.__proto__ || (0, _getPrototypeOf2.default)(SortCategory)).call(this, props));

    _this4.state = {
      sortAsc: true
    };
    // binders    
    return _this4;
  }
  // hooks  
  // methods


  (0, _createClass3.default)(SortCategory, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          sortAsc: !prevState.sortAsc
        };
      });

      this.props.pr_val_sortTable('Category', this.state.sortAsc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { className: "btn btn1-01 btn_sort", onClick: function onClick() {
              _this5.toggle();
            } },
          "Category",
          React.createElement(SortIcon, { pr_asc: this.state.sortAsc })
        )
      );
    }
  }]);
  return SortCategory;
}(React.Component);

var ApiList_table = function (_React$Component4) {
  (0, _inherits3.default)(ApiList_table, _React$Component4);

  function ApiList_table(props) {
    (0, _classCallCheck3.default)(this, ApiList_table);

    var _this6 = (0, _possibleConstructorReturn3.default)(this, (ApiList_table.__proto__ || (0, _getPrototypeOf2.default)(ApiList_table)).call(this, props));

    _this6.state = {};

    // binders    
    return _this6;
  }

  // lifecycle hooks  
  // methods

  (0, _createClass3.default)(ApiList_table, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      return React.createElement(
        "table",
        { className: "col-xs-12 apilist_table" },
        React.createElement(
          "tbody",
          { "aria-live": "assertive", "aria-atomic": "true", "aria-describedby": "api_status" },
          React.createElement(
            "tr",
            { className: "row" },
            React.createElement(
              "td",
              { className: "col-xs-6 col-sm-7" },
              React.createElement(SortAPI, {
                pr_val_sortTable: this.props.pr_val_sortTable })
            ),
            React.createElement(
              "td",
              { className: "col-xs-6 col-sm-5" },
              React.createElement(SortCategory, {
                pr_val_sortTable: this.props.pr_val_sortTable })
            )
          ),
          this.props.pr_items.map(function (i) {
            return React.createElement(
              "tr",
              { className: "row" },
              React.createElement(
                "td",
                { className: "col-xs-12 col-sm-7" },
                React.createElement(
                  "p",
                  { className: "apiname" },
                  i.API
                ),
                React.createElement(
                  "summary",
                  null,
                  React.createElement(
                    "p",
                    { className: "apidesc" },
                    i.Description
                  )
                ),
                React.createElement(
                  "a",
                  { className: "apilink", href: i.Link },
                  i.Link
                )
              ),
              React.createElement(
                "td",
                { className: "col-xs-12 col-sm-2" },
                React.createElement(
                  "a",
                  { onClick: function onClick() {
                      _this7.props.pr_val_filterCategory(i.Category);
                    } },
                  i.Category
                )
              ),
              React.createElement(
                "td",
                { className: "col-xs-12 col-sm-2" },
                React.createElement(
                  "p",
                  null,
                  i.Auth ? i.Auth : 'null'
                )
              ),
              React.createElement(
                "td",
                { className: "col-xs-12 col-sm-1 https" },
                i.HTTPS ? 'true' : 'false'
              )
            );
          })
        )
      );
    }
  }]);
  return ApiList_table;
}(React.Component);

exports.default = ApiList_table;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryList = function (_React$Component) {
  (0, _inherits3.default)(CategoryList, _React$Component);

  function CategoryList() {
    (0, _classCallCheck3.default)(this, CategoryList);
    return (0, _possibleConstructorReturn3.default)(this, (CategoryList.__proto__ || (0, _getPrototypeOf2.default)(CategoryList)).apply(this, arguments));
  }

  (0, _createClass3.default)(CategoryList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "nav",
        { className: "apilist_categories", role: "navigation" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            { tabIndex: "0", onClick: function onClick() {
                _this2.props.pr_val_filterCategory("All");
              } },
            React.createElement(
              "a",
              null,
              "All Items:"
            ),
            React.createElement(
              "span",
              { className: "apilist_categories_count" },
              this.props.pr_apiTotalCount
            )
          ),
          this.props.pr_categoryTypes.map(function (i, index) {
            return React.createElement(
              "li",
              { tabIndex: "0", key: index + 1, onClick: function onClick() {
                  _this2.props.pr_val_filterCategory(i.catName);
                } },
              React.createElement(
                "a",
                null,
                i.catName
              ),
              " ",
              React.createElement(
                "span",
                { className: "apilist_categories_count" },
                i.catLength
              )
            );
          })
        )
      );
    }
  }]);
  return CategoryList;
}(React.Component);

exports.default = CategoryList;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthFilter = function (_React$Component) {
  (0, _inherits3.default)(AuthFilter, _React$Component);

  function AuthFilter() {
    (0, _classCallCheck3.default)(this, AuthFilter);
    return (0, _possibleConstructorReturn3.default)(this, (AuthFilter.__proto__ || (0, _getPrototypeOf2.default)(AuthFilter)).apply(this, arguments));
  }

  (0, _createClass3.default)(AuthFilter, [{
    key: "render",

    // methods

    value: function render() {
      var _this2 = this;

      return React.createElement(
        "ul",
        { className: "authfilter" },
        this.props.pr_items.map(function (i, index) {
          return React.createElement(
            "li",
            null,
            React.createElement("input", { type: "checkbox", value: i.authName, checked: i.checked,
              onChange: function onChange() {
                _this2.props.pr_val_toggleAuthType(index);
              } }),
            React.createElement(
              "label",
              { tabIndex: "0" },
              i.authName ? i.authName : 'null'
            )
          );
        })
      );
    }
  }]);
  return AuthFilter;
}(React.Component);

exports.default = AuthFilter;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HttpsToggle = function (_React$Component) {
  (0, _inherits3.default)(HttpsToggle, _React$Component);

  function HttpsToggle(props) {
    (0, _classCallCheck3.default)(this, HttpsToggle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HttpsToggle.__proto__ || (0, _getPrototypeOf2.default)(HttpsToggle)).call(this, props));

    _this.state = {};
    // binders    
    return _this;
  }
  // hooks

  // methods

  (0, _createClass3.default)(HttpsToggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "authfilter_https--toggle" },
        React.createElement("input", { type: "checkbox", id: "checkbox", checked: this.props.pr_https,
          onChange: function onChange() {
            _this2.props.pr_val_toggleHttps(_this2.props.pr_https);
          } }),
        React.createElement(
          "label",
          { tabIndex: "0", htmlFor: "checkbox" },
          "HTTPS only"
        )
      );
    }
  }]);
  return HttpsToggle;
}(React.Component);

exports.default = HttpsToggle;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextButton = function (_React$Component) {
  (0, _inherits3.default)(NextButton, _React$Component);

  function NextButton(props) {
    (0, _classCallCheck3.default)(this, NextButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NextButton.__proto__ || (0, _getPrototypeOf2.default)(NextButton)).call(this, props));

    _this.state = {};
    // binders    
    return _this;
  }
  // hooks  
  // methods

  (0, _createClass3.default)(NextButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "button",
        { className: "btn btn1-01 btn_next", onClick: function onClick() {
            _this2.props.pr_next();
          } },
        "Next",
        React.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })
        )
      );
    }
  }]);
  return NextButton;
}(React.Component);

var PrevButton = function (_React$Component2) {
  (0, _inherits3.default)(PrevButton, _React$Component2);

  function PrevButton(props) {
    (0, _classCallCheck3.default)(this, PrevButton);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (PrevButton.__proto__ || (0, _getPrototypeOf2.default)(PrevButton)).call(this, props));

    _this3.state = {};
    // binders    
    return _this3;
  }
  // hooks    
  // methods

  (0, _createClass3.default)(PrevButton, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "button",
        { className: "btn btn1-01 btn_prev", onClick: function onClick() {
            _this4.props.pr_prev();
          } },
        React.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })
        ),
        "Prev"
      );
    }
  }]);
  return PrevButton;
}(React.Component);

var PageSelector = function (_React$Component3) {
  (0, _inherits3.default)(PageSelector, _React$Component3);

  function PageSelector(props) {
    (0, _classCallCheck3.default)(this, PageSelector);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (PageSelector.__proto__ || (0, _getPrototypeOf2.default)(PageSelector)).call(this, props));

    _this5.state = {};
    // binders  
    _this5.handleChange = _this5.handleChange.bind(_this5);
    return _this5;
  }
  // hooks
  // methods


  (0, _createClass3.default)(PageSelector, [{
    key: "createOptions",
    value: function createOptions() {
      var _this6 = this;

      var items = [];

      var _loop = function _loop(i) {
        items.push(React.createElement(
          "option",
          { onClick: function onClick() {
              _this6.props.pr_val_showPage(i);
            }, key: i, value: i },
          i
        ));
      };

      for (var i = 1; i <= this.props.pr_totalPages; i++) {
        _loop(i);
      }
      return items;
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.props.pr_val_showPage(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { className: "pg_holder" },
        React.createElement(PrevButton, {
          pr_prev: this.props.pr_prev }),
        React.createElement(
          "p",
          null,
          "\xA0Page\xA0"
        ),
        React.createElement(
          "select",
          { className: "pg_perpage", value: this.props.pr_currentPage,
            onChange: this.handleChange },
          this.createOptions()
        ),
        React.createElement(
          "p",
          null,
          "\xA0of\xA0",
          this.props.pr_totalPages,
          "\xA0"
        ),
        React.createElement(NextButton, {
          pr_next: this.props.pr_next })
      );
    }
  }]);
  return PageSelector;
}(React.Component);

exports.default = PageSelector;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemsPerPage = function (_React$Component) {
  (0, _inherits3.default)(ItemsPerPage, _React$Component);

  function ItemsPerPage(props) {
    (0, _classCallCheck3.default)(this, ItemsPerPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ItemsPerPage.__proto__ || (0, _getPrototypeOf2.default)(ItemsPerPage)).call(this, props));

    _this.state = {};

    // binders    
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  // hooks

  // methods


  (0, _createClass3.default)(ItemsPerPage, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.pr_val_setPageItems(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "span",
        { "class": "pg_holder" },
        React.createElement(
          "p",
          null,
          "Items per page:\xA0"
        ),
        React.createElement(
          "select",
          { className: "pg_select",
            value: this.props.pr_perPage, onChange: this.handleChange },
          this.props.pr_perPageItems.map(function (i) {
            return React.createElement(
              "option",
              { onClick: function onClick() {
                  _this2.props.pr_val_setPageItems(i);
                }, key: i, value: i },
              i
            );
          })
        )
      );
    }
  }]);
  return ItemsPerPage;
}(React.Component);

exports.default = ItemsPerPage;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$Component) {
  (0, _inherits3.default)(Search, _React$Component);

  function Search(props) {
    (0, _classCallCheck3.default)(this, Search);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

    _this.state = {
      value: ""
    };

    // binders
    _this.handleChange = _this.handleChange.bind(_this);
    _this.keyPress = _this.keyPress.bind(_this);
    return _this;
  }
  // hooks

  // methods


  (0, _createClass3.default)(Search, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "keyPress",
    value: function keyPress(event) {
      if (event.keyCode == 13) {
        this.setState({
          value: event.target.value
        });

        this.props.pr_val_search(this.state.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          { className: "apilist_search" },
          React.createElement(
            "label",
            { "for": "api_search" },
            "Search ",
            this.props.pr_currentCategory,
            ":\xA0"
          ),
          React.createElement("input", { type: "search", name: "api_search", id: "api_search", placeholder: "Enter keyword/s...",
            value: this.state.value,
            onChange: this.handleChange,
            onKeyDown: this.keyPress }),
          React.createElement(
            "button",
            { className: "btn btn1-01", "data-message": "Search the api listing",
              onClick: function onClick() {
                _this2.props.pr_val_search(_this2.state.value);
              } },
            "Search"
          )
        )
      );
    }
  }]);
  return Search;
}(React.Component);

exports.default = Search;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(26);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(52);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(53);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(104);

var _inherits3 = _interopRequireDefault(_inherits2);

var _axios = __webpack_require__(112);

var _axios2 = _interopRequireDefault(_axios);

var _arr_filter = __webpack_require__(139);

var _arr_extractUnique = __webpack_require__(140);

var _arr_sortValue = __webpack_require__(141);

var _search_fuse = __webpack_require__(142);

var _pager = __webpack_require__(147);

var _pager2 = _interopRequireDefault(_pager);

var _store = __webpack_require__(148);

var _ApiList_table = __webpack_require__(149);

var _ApiList_table2 = _interopRequireDefault(_ApiList_table);

var _CategoryList = __webpack_require__(150);

var _CategoryList2 = _interopRequireDefault(_CategoryList);

var _AuthFilter = __webpack_require__(151);

var _AuthFilter2 = _interopRequireDefault(_AuthFilter);

var _HttpsToggle = __webpack_require__(152);

var _HttpsToggle2 = _interopRequireDefault(_HttpsToggle);

var _PageSelector = __webpack_require__(153);

var _PageSelector2 = _interopRequireDefault(_PageSelector);

var _ItemsPerPage = __webpack_require__(154);

var _ItemsPerPage2 = _interopRequireDefault(_ItemsPerPage);

var _Search = __webpack_require__(155);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rkpi = function (_React$Component) {
  (0, _inherits3.default)(Rkpi, _React$Component);

  function Rkpi(props) {
    (0, _classCallCheck3.default)(this, Rkpi);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Rkpi.__proto__ || (0, _getPrototypeOf2.default)(Rkpi)).call(this, props));

    _this.API_URL = "https://raw.githubusercontent.com/liquidnuker/public-apis/json/json/entries.json";
    _this.BACKUP_URL = "./entries_offline.json";

    _this.state = {
      apiListCache: [], // default unfiltered items
      apiTotalCount: "",
      apiListFiltered: [], // filtered items
      apiList: [], // displayed/paginated items

      categoryTypes: [],
      currentCategory: "All",
      authTypes: [],
      authTypeSelected: [], // checkbox
      https: "",

      // paginator
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: true,
      perPage: 20,
      perPageItems: [10, 20, 40, 60, 100],

      // messages
      status: {
        search: "status.search"
      }
    };

    // binders
    _this.filterCategory = _this.filterCategory.bind(_this);
    _this.toggleAuthType = _this.toggleAuthType.bind(_this);
    _this.toggleHttps = _this.toggleHttps.bind(_this);
    _this.showPage = _this.showPage.bind(_this);
    _this.prev = _this.prev.bind(_this);
    _this.next = _this.next.bind(_this);
    _this.setPageItems = _this.setPageItems.bind(_this);
    _this.search = _this.search.bind(_this);
    _this.sortTable = _this.sortTable.bind(_this);
    return _this;
  }

  // lifecycle hooks


  (0, _createClass3.default)(Rkpi, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.getApiData(this.API_URL);
      this.getApiData(this.BACKUP_URL);
    }

    // methods

  }, {
    key: "getApiData",
    value: function getApiData(url) {
      var _this2 = this;

      _axios2.default.get(url).then(function (response) {
        _this2.setState({
          apiTotalCount: response.data.count,
          apiListCache: response.data.entries,
          apiListFiltered: response.data.entries
        });
        _this2.activatePager(_this2.state.apiListCache);
      }).then(function () {
        _this2.addFiltersList(_this2.state.apiListCache);
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js

        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    }
  }, {
    key: "activatePager",
    value: function activatePager(data) {
      var _this3 = this;

      this.pager = null;
      this.pager = new _pager2.default({
        data: data,
        perPage: this.state.perPage
      });

      this.setState(function (prevState) {
        return {
          apiList: _this3.pager.page(1),
          currentPage: _this3.pager.currentPage,
          totalPages: _this3.pager.getTotalPages(),
          pagerButtons: true
        };
      });
    }
  }, {
    key: "addFiltersList",
    value: function addFiltersList(arr) {
      var _this4 = this;

      // for authTypes
      var authTemp = (0, _arr_extractUnique.arr_extractUnique)(arr, "Auth");
      var authTemp2 = [];

      for (var i in authTemp) {
        authTemp2.push({
          authName: authTemp[i],
          checked: true
        });
      }

      this.setState(function (prevState) {
        return {
          authTypes: authTemp2
        };
      });

      authTemp = null;
      authTemp2 = null;

      this.toggleAuthTypeCheckbox(true);

      // for categoryTypes
      var temp = (0, _arr_extractUnique.arr_extractUnique)(arr, "Category");
      var temp2 = [];
      // filter to get length of each item then push
      temp.map(function (i) {
        var l = (0, _arr_filter.arr_filter)(_this4.state.apiListCache, "Category", i);
        temp2.push({
          catName: i,
          catLength: l.length
        });
      });

      this.setState(function (prevState) {
        return {
          categoryTypes: temp2
        };
      });

      temp = null;
      temp2 = null;
    }
  }, {
    key: "toggleAuthTypeCheckbox",
    value: function toggleAuthTypeCheckbox(checked) {
      var authTypes = this.state.authTypes;
      var authTypeSelected = this.state.authTypeSelected;

      if (checked) {
        authTypeSelected = [];
        for (var i in authTypes) {
          authTypeSelected.push(authTypes[i].authName);
        }
      } else {
        authTypeSelected = [];
      }

      this.setState(function (prevState) {
        return {
          authTypeSelected: authTypeSelected,
          // uncheck https checkbox when showing all items
          https: false
        };
      });
    }
  }, {
    key: "toggleHttps",
    value: function toggleHttps(checked) {
      this.state.https = !checked;
      this.filterAuthType();
    }
  }, {
    key: "filterCategory",
    value: function filterCategory(category) {
      this.state.currentCategory = category;
      this.filterAuthType();
    }
  }, {
    key: "toggleAuthType",
    value: function toggleAuthType(index) {
      var authTypes = this.state.authTypes;
      var selectedItems = this.state.authTypeSelected;

      if (authTypes[index].checked) {
        var indexToSplice = selectedItems.indexOf(authTypes[index].authName);
        selectedItems.splice(indexToSplice, 1);
        authTypes[index].checked = false;
      } else {
        selectedItems.push(authTypes[index].authName);
        authTypes[index].checked = true;
      }

      this.setState(function (prevState) {
        return {
          authTypes: authTypes, // for checked attr
          authTypeSelected: selectedItems
        };
      });

      this.filterAuthType();
    }
  }, {
    key: "setCategoryTemp",
    value: function setCategoryTemp() {
      if (this.state.currentCategory !== "All") {
        return (0, _arr_filter.arr_filter)(this.state.apiListCache, "Category", this.state.currentCategory);
      } else {
        // to filter authTypes from default items
        return this.state.apiListCache;
      }
    }
  }, {
    key: "setAuthTemp",
    value: function setAuthTemp(categoryTemp) {
      var authTemp = [];
      this.state.authTypeSelected.map(function (i) {
        // get items of each authTypeSelected
        var t2 = (0, _arr_filter.arr_filter)(categoryTemp, "Auth", i);
        authTemp = authTemp.concat(t2);
        t2 = null;
      });
      return authTemp;
    }
  }, {
    key: "setHttpsCheckbox",
    value: function setHttpsCheckbox(authTemp) {
      if (this.state.https) {
        return (0, _arr_filter.arr_filter)(authTemp, "HTTPS", this.state.https);
      } else {
        return authTemp;
      }
    }
  }, {
    key: "filterAuthType",
    value: function filterAuthType() {
      var apiListFiltered = this.state.apiListFiltered;
      // this.status.search = "";

      var categoryTemp = this.setCategoryTemp();

      // authType checkbox
      var authTemp = this.setAuthTemp(categoryTemp);

      // HTTPS checkbox
      apiListFiltered = this.setHttpsCheckbox(authTemp);

      authTemp = null;
      categoryTemp = null;

      this.setState(function (prevState) {
        return {
          apiListFiltered: apiListFiltered
        };
      });

      this.activatePager(apiListFiltered);
    }
  }, {
    key: "showPage",
    value: function showPage(num) {
      var apiList = this.pager.page(num);
      this.setState(function (prevState) {
        return {
          apiList: apiList,
          currentPage: num
        };
      });
    }
  }, {
    key: "prev",
    value: function prev() {
      var currentPage = this.state.currentPage;
      var apiList = this.state.apiList;

      currentPage = this.pager.prev();
      apiList = this.pager.page(currentPage);

      this.setState(function (prevState) {
        return {
          apiList: apiList,
          currentPage: currentPage
        };
      });
    }
  }, {
    key: "next",
    value: function next() {
      var currentPage = this.state.currentPage;
      var apiList = this.state.apiList;

      currentPage = this.pager.next();
      apiList = this.pager.page(currentPage);

      this.setState(function (prevState) {
        return {
          apiList: apiList,
          currentPage: currentPage
        };
      });
    }
  }, {
    key: "setPageItems",
    value: function setPageItems(perPage) {
      this.state.perPage = perPage;
      this.activatePager(this.state.apiListFiltered);
    }
  }, {
    key: "search",
    value: function search(keyword) {
      var res = (0, _search_fuse.search_fuse)({
        data: this.state.apiListFiltered,
        value: keyword,
        searchKeys: ["API", "Link"]
      });

      if (res.length === 0) {
        console.log("no results");
      } else {
        console.log("found " + res.length + " items");
        this.activatePager(res);
        res = null;
      }
    }
  }, {
    key: "sortTable",
    value: function sortTable(sortBy, order) {
      var apiListFiltered = this.state.apiListFiltered;
      var sorted = (0, _arr_sortValue.arr_sortValue)(sortBy, apiListFiltered);

      if (order) {
        apiListFiltered = sorted;
      } else {
        apiListFiltered = sorted.reverse();
      }

      sorted = null;

      this.activatePager(apiListFiltered);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "main",
          { className: "columns is-gapless is-centered" },
          React.createElement(
            "div",
            { className: "column is-10-desktop" },
            React.createElement(
              "div",
              { className: "row apilist" },
              React.createElement(
                "div",
                { className: "col-sm-3" },
                React.createElement(_CategoryList2.default, {
                  pr_categoryTypes: this.state.categoryTypes,
                  pr_apiTotalCount: this.state.apiTotalCount,
                  pr_val_filterCategory: this.filterCategory })
              ),
              React.createElement(
                "div",
                { className: "col-sm-9" },
                React.createElement(
                  "div",
                  { className: "row col-xs-12 apilist_rightside" },
                  React.createElement(
                    "div",
                    { className: "row col-xs-12 apilist_filtersearch" },
                    React.createElement(
                      "div",
                      { className: "col-sm-3" },
                      React.createElement(_AuthFilter2.default, {
                        pr_items: this.state.authTypes,
                        pr_val_toggleAuthType: this.toggleAuthType }),
                      React.createElement(_HttpsToggle2.default, {
                        pr_https: this.state.https,
                        pr_val_toggleHttps: this.toggleHttps })
                    ),
                    React.createElement(
                      "div",
                      { className: "col-sm-9" },
                      React.createElement(_Search2.default, {
                        pr_currentCategory: this.state.currentCategory,
                        pr_val_search: this.search })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "row col-xs-12 apilist_pagecontrols" },
                    React.createElement(_PageSelector2.default, {
                      pr_currentPage: this.state.currentPage,
                      pr_totalPages: this.state.totalPages,
                      pr_prev: this.prev,
                      pr_next: this.next,
                      pr_val_showPage: this.showPage }),
                    React.createElement(_ItemsPerPage2.default, {
                      pr_perPage: this.state.perPage,
                      pr_perPageItems: this.state.perPageItems,
                      pr_val_setPageItems: this.setPageItems })
                  ),
                  React.createElement(
                    "div",
                    { className: "row col-xs-12 apilist_main" },
                    React.createElement(_ApiList_table2.default, {
                      pr_items: this.state.apiList,
                      pr_val_filterCategory: this.filterCategory,
                      pr_val_sortTable: this.sortTable })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Rkpi;
}(React.Component);

exports.default = Rkpi;

/***/ })

}]);