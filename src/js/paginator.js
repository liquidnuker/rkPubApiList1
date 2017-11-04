import Paginate from "./vendor/Paginate.js";

const pg = {
  init: function(opts) {
    this.data = opts.data;
    this.pager = opts.pager;
    this.apiList = opts.apiList;
    this.currentPage = opts.currentPage;
    this.totalPages= opts.totalPages;

    this.start();
  },
  start: function() {
    console.log(this.totalPages);
  }
};

export {pg};