// https://www.acmicpc.net/problem/9095

const input = require('fs').readFileSync('C:/Users/admin/Desktop/javaprac/baekjoon_js/algo/3. 1, 2, 3 더하기 (9095)/data1.txt').toString().trim().split('\n').map(v => Number(v));



const T = input[0];
const nums = input.slice(1);

const result = Array.from({ length: 11 }, () => 1);
result[2] = 2;
result[3] = 4;

for (let i = 4; i < result.length; i++) {
  result[i] = result[i - 1] + result[i - 2] + result[i - 3];
}

for (const n of nums) {
  console.log(result[n]);
}

