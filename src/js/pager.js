// pagination helper
// ======================================================/

export default function Pager(opts) {
  this.data = opts.data;
  this.perPage = opts.perPage;
  this.currentPage = 1;
}

Pager.prototype = {
  getTotalPages: function () {
    // ret num
    return Math.ceil(this.data.length / this.perPage);
  },
  getCurrentOffset: function () {
    // ret num
    return (this.currentPage - 1) * this.perPage;
  },
  page: function (num) {
    if (this.isValidPage(num)) {
      this.currentPage = num;

      let start = this.getCurrentOffset();
      // let end = start + this.perPage;
      let end = (start + Number(this.perPage));

      return this.data.slice(start, end);
    } else {
      // default page
      this.currentPage = 1;
      return this.data.slice(0, this.perPage);
    }
  },
  hasNext: function () {
    // ret boolean
    return this.currentPage < this.getTotalPages();
  },
  hasPrev: function () {
    // ret boolean
    return this.currentPage !== 1;
  },
  prev: function () {
    // ret num
    if (this.hasPrev()) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = this.getTotalPages();
    }
    return this.currentPage;
  },
  next: function () {
    // ret num
    if (this.hasNext()) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    // console.log(this.currentPage);
    return this.currentPage;
  },
  isValidPage: function (num) {
    // ret boolean
    return num > 0 && num <= this.getTotalPages();
  }
};