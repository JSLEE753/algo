// https://www.acmicpc.net/problem/11053

const input = require('fs').readFileSync('baekjoon_js/algo/6. 가장 긴 증가하는 부분 수열/data1.txt').toString().trim().split('\n');


const N = Number(input[0]);
const arr = input[1].split(" ").map(v => Number(v));

const dp = Array.from({ length: N }, () => 1);

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i] < arr[j]) {
      dp[j] = Math.max(dp[j], dp[i] + 1);

    }
  }
}

console.log(Math.max(...dp));

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[j] < arr[i]) {
//       dp[i] = Math.max(dp[i], dp[j] + 1);
//     }
//   }
// }

// console.log(Math.max(...dp));
