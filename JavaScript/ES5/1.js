// 순수 함수
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));
console.log(add(1, 3));
console.log(add(1, 4));

// 순수하지 않은 함수
var c = 10;
function add2(a, b) {
  return a + b + c;
}

console.log(add2(1, 2));
console.log(add2(1, 3));
console.log(add2(1, 4));
c = 20;
console.log(add2(1, 2));
console.log(add2(1, 3));
console.log(add2(1, 4));

// 부수효과 있는 함수
var c = 20;
function add3(a, b) {
  c = b;
  return a + b;
}

console.log("c:", c);
console.log(add3(1, 2));
console.log("c:", c);
console.log(add3(1, 3));
console.log("c:", c);
console.log(add3(1, 4));

// 순수하지 않은 함수
var obj1 = { val: 10 };
function add4(obj, b) {
  obj.val += b;
}

console.log(obj1.val);
add4(obj1, 10);
console.log(obj1.val);

// 순수 함수
var obj2 = { val: 10 };
function add5(obj, b) {
  return { val: obj.val + b };
}

console.log(obj2.val);
add5(obj2, 10);
console.log(obj2.val);

/* 일급 함수 */
