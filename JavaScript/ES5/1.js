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

var f1JS = function (a) {
  return a * a;
};
console.log(f1JS);

var f2JS = add;
console.log(f2JS);

function f3JS(f) {
  return f();
}

f3JS(function () {
  return 10;
});

console.log(
  f3JS(function () {
    return 10;
  })
);

/* add_maker */

function add_makerJS(a) {
  //1. 이 함수가 클로저임 function (b) { return a + b;};
  return function (b) {
    return a + b;
  };
}

// 클로저개념과 일급함수개념
var addJS10 = add_makerJS(10);

console.log(addJS10(20));

var addJS5 = add_makerJS(5);
var addJS15 = add_makerJS(15);

console.log(addJS5(10));
console.log(addJS15(10));

function f4JS(f1, f2, f3) {
  return f3(f1() + f2());
}

f4JS(
  function () {
    return 2;
  },
  function () {
    return 1;
  },
  function (a) {
    return a * a;
  }
);

console.log(
  f4JS(
    function () {
      return 2;
    },
    function () {
      return 1;
    },
    function (a) {
      return a * a;
    }
  )
);
