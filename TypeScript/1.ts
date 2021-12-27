// 순수 함수
function addTS(a: number, b: number): number {
  return a + b;
}
console.log(addTS(1, 2));
console.log(addTS(1, 3));
console.log(addTS(1, 4));

// 순수하지 않은 함수
var c: number = 10;
function addTS2(a: number, b: number): number {
  return a + b + c;
}

console.log(addTS2(1, 2));
console.log(addTS2(1, 3));
console.log(addTS2(1, 4));
c = 20;
console.log(addTS2(1, 2));
console.log(addTS2(1, 3));
console.log(addTS2(1, 4));

// 부수효과 있는 함수
var c = 20;
function addTS3(a: number, b: number): number {
  c = b;
  return a + b;
}

console.log("c:", c);
console.log(addTS3(1, 2));
console.log("c:", c);
console.log(addTS3(1, 3));
console.log("c:", c);
console.log(addTS3(1, 4));

type obj1Type = { val: number };

// 순수하지 않은 함수
let objTS1: obj1Type = { val: 10 };
function addTS4(objTS1: obj1Type, b: number): number {
  //A function whose declared type is neither 'void' nor 'any' must return a value.
  return (objTS1.val += b);
}

// function addTS4(objTS1: obj1Type, b: number): void {
//   //A function whose declared type is neither 'void' nor 'any' must return a value.
//   objTS1.val += b;
// }

console.log(objTS1.val);
addTS4(objTS1, 10);
console.log(objTS1.val);

type obj2Type = { val: number };

// 순수 함수
let objTS2: obj2Type = { val: 10 };
function addTS5(obj: obj2Type, b: number): obj2Type {
  return { val: obj.val + b };
}

console.log(objTS2.val);
addTS5(objTS2, 10);
console.log(objTS2.val);

// function addTS4(objTS1: obj1Type, b: number): void {
// return 사용하지 않고 변경되니까, void 또는 any 사용해야하고, 순수하지 않은 함수됨.
// function addTS4(objTS1: obj1Type, b: number): number {
// return 을 사용하게 되면, number 로 반환되고, 순수하지 않은 함수가 됨.
// function addTS5(obj: obj2Type, b: number): obj2Type {
// 순수 함수됨.

/* 일급 함수 */

let f1TS = function (a) {
  return a * a;
};
console.log(f1TS);

var f2TS: Function = addTS;
console.log(f2TS);

function f3TS(f: Function): number {
  return f();
}

f3TS(function () {
  return 10;
});

/* add_maker */

function add_makerTS(a: number): Function {
  //1. 이 함수가 클로저임 function (b) { return a + b;};
  return function (b: number): number {
    return a + b;
  };
}

// 클로저개념과 일급함수개념
let addTS10: Function = add_makerTS(10);

console.log(addTS10(20));

let addTS20: Function = add_makerTS(20);
let addTS15: Function = add_makerTS(15);

console.log(addTS20(10));
console.log(addTS15(10));

function f4TS(f1: Function, f2: Function, f3: Function): Function {
  return f3(f1() + f2());
}

// 순수한 함수
f4TS(
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
  f4TS(
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
