import Pager from "../pager.js";

// temp item data
let items = [];
let num = 0;
for (let i = 0, l = 42; i < l; i++) {
  num += 1;
  items.push(num);
};

const pg = new Pager({
  perPage: 10,
  data: items
});

test('page switcher', () => {
  // ok
  // expect(pg.page(2)).toBe(true); 
  // expect(pg.page(0)).toBe(false); 
  expect(pg.page(1)).toEqual(expect.any(Array));
  expect(pg.page(1)).toHaveLength(pg.perPage);
  expect(pg.page(pg.getTotalPages())).toBeTruthy();

  expect(pg.currentPage).toBeLessThanOrEqual(pg.getTotalPages());
});

test('page switcher should default on invalid page', () => {
  let defaultPage = pg.data.slice(0, pg.perPage); 
  
  expect(pg.page(0)).toEqual(defaultPage);
  expect(pg.page(1)).toEqual(defaultPage);
  expect(pg.page(9999)).toEqual(defaultPage);

  expect(pg.page(2)).not.toEqual(defaultPage);
});

test('getCurrentOffset', () => {
  pg.currentPage = 1;
  expect(pg.getCurrentOffset()).toBe(0); 

  pg.currentPage = 2;
  expect(pg.getCurrentOffset()).not.toBe(0); 
});

test('hasPrev', () => {
  pg.currentPage = pg.getTotalPages();
  expect(pg.hasPrev()).toBeTruthy(); 

  pg.currentPage = 1;
  expect(pg.hasPrev()).toBeFalsy(); 
});

test('hasNext', () => {
  pg.currentPage = 1;
  expect(pg.hasNext()).toBeTruthy(); 

  pg.currentPage = pg.getTotalPages();
  expect(pg.hasNext()).toBeFalsy(); 
});

test('prev', () => {
  expect(pg.prev()).toBeTruthy();

  pg.currentPage = 1;
  expect(pg.prev()).toBe(pg.getTotalPages());

  pg.currentPage = pg.getTotalPages();
  expect(pg.prev()).toBe(pg.getTotalPages() - 1);
});

test('next', () => {
  expect(pg.next()).toBeTruthy();

  pg.currentPage = 1;
  expect(pg.next()).toBe(2);

  pg.currentPage = pg.getTotalPages();
  expect(pg.next()).toBe(1);
});

test('isValidPage', () => {
  expect(pg.isValidPage(1)).toBeTruthy();
  expect(pg.isValidPage(pg.getTotalPages())).toBeTruthy();
  
  expect(pg.isValidPage(999)).toBeFalsy();
  expect(pg.isValidPage(0)).toBeFalsy();
});