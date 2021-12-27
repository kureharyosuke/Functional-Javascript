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
// return
// function addTS5(obj: obj2Type, b: number): obj2Type {
// 순수 함수됨.
