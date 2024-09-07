//library1.js에서 필요한 데이터를 가져온다.
import {greet, sumNum, greet2, sumNum2} from './library1.js';
console.log(`${greet} 홍길동`);
console.log(`두수의 합산 결과 : ${sumNum(12, 6)}`);

console.log(`${greet2} 홍길동`);
console.log(`두수의 합산 결과 : ${sumNum2(7, 3)}`);

//library2.js에서 필요한 데이터를 가져온다.
import {hero1, hero2} from './library2.js';
console.log(hero1); //{name: '초보만세', device: '목검', level: 1}
console.log(hero1.name); //"초보만세"
console.log(hero1.device); //"목검"
console.log(hero1.level); //1
console.log(hero2); //['얼음마법사', '아이스지팡이', 34]

//library2.js에서 모든 식별자로 가져온다.
import * as everyThing from './library2.js'
console.log(everyThing); //Module {Symbol(Symbol.toStringTag): 'Module'}
console.log(everyThing.hero1); //{name: '초보만세', device: '목검', level: 1}
console.log(everyThing.hero1.name); //"초보만세"
console.log(everyThing.hero2); //['얼음마법사', '아이스지팡이', 34]

//library3.js에서 기본 모듈로 보낸 식별자로 가져와서 진행
// import sumNum3 from './library3.js';
// console.log(sumNum3(1, 2));

import result3 from './library3.js';
console.log(result3);
console.log(result3.sumNum3(3, 4));
console.log(result3.multiNum(2, 5));
console.log(result3.marvelHero);