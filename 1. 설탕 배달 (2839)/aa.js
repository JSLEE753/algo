/*
https://www.acmicpc.net/problem/2839
*/
const n = Number(require('fs').readFileSync('C:/Users/admin/Desktop/javaprac/baekjoon_js/data1.txt').toString().trim());

let quot = Math.floor(n / 5);
let rest = n % 5; // 0 1 2 3 4

while (rest % 3 !== 0) {
  quot -= 1;
  rest += 5;
}

if (quot < 0) {
  console.log(-1);
}
else {
  console.log(quot + rest / 3);
}
