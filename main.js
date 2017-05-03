'use sctrict';

console.log(`
========================================== CASE 1: STRING ==========================================
`);

let sctringExpression1 = 'Lorem ipsum dolor sit amet';
let sctringExpression2 = 'consectetur adipisicing elit';
let sctringExpression3 = 'Reiciendis consectetur quam';
let sctringExpression4 = 'distinctio explicabo commodi';
let sctringExpression5 = 'aspernatur nam et tempora voluptate';
let sctringExpression6 = 'hic dicta, omnis perspiciatis eius';

console.time('string');

switch (sctringExpression4) {
  case 'Lorem ipsum dolor sit amet':          console.log('1'); console.timeEnd('string'); break;
  case 'consectetur adipisicing elit':        console.log('2'); console.timeEnd('string'); break;
  case 'Reiciendis consectetur quam':         console.log('3'); console.timeEnd('string'); break;
  case 'distinctio explicabo commodi':        console.log('4'); console.timeEnd('string'); break;
  case 'aspernatur nam et tempora voluptate': console.log('5'); console.timeEnd('string'); break;
  case 'hic dicta, omnis perspiciatis eius':  console.log('6'); console.timeEnd('string'); break;

  default: console.log('default'); console.timeEnd('string');
}


console.log(`
========================================== CASE 2: CONST ==========================================
`);

const constExpression1 = 'Lorem ipsum dolor sit amet';
const constExpression2 = 'consectetur adipisicing elit';
const constExpression3 = 'Reiciendis consectetur quam';
const constExpression4 = 'distinctio explicabo commodi';
const constExpression5 = 'aspernatur nam et tempora voluptate';
const constExpression6 = 'hic dicta, omnis perspiciatis eius';

console.time('const');

switch (constExpression4) {
  case constExpression1: console.log('1'); console.timeEnd('const'); break;
  case constExpression2: console.log('2'); console.timeEnd('const'); break;
  case constExpression3: console.log('3'); console.timeEnd('const'); break;
  case constExpression4: console.log('4'); console.timeEnd('const'); break;
  case constExpression5: console.log('5'); console.timeEnd('const'); break;
  case constExpression6: console.log('6'); console.timeEnd('const'); break;

  default: console.log('default'); console.timeEnd('const');
}
