// https://www.acmicpc.net/problem/1003

const input = require("fs").readFileSync("C:/Users/admin/Desktop/javaprac/baekjoon_js/algo/4. 피보나치 함수/data2.txt").toString().trim().split("\n").map(v => Number(v));

const T = input[0];
const Ns = input.slice(1);
const result = [[1, 0], [0, 1]];

for (let i = 2; i < 41; i++) {
  result.push([result[i - 1][0] + result[i - 2][0], result[i - 1][1] + result[i - 2][1]]);
}

for (const n of Ns) {
  console.log(result[n][0], result[n][1]);
}


