// https://www.acmicpc.net/problem/9251

const inputs = require('fs').readFileSync('baekjoon_js/algo/7. LCS (9251)/data1.txt').toString().trim().split(/\r?\n/);

const str1 = inputs[0].split('');
const str2 = inputs[1].split('');

const dp = Array.from({ length: str2.length + 1 }, () => Array.from({ length: str1.length + 1 }, () => 0));

for (let i = 1; i < str2.length + 1; i++) {
  for (let j = 1; j < str1.length + 1; j++) {
    if (str2[i - 1] === str1[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    }
    else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);

    }
  }
}

console.log(Math.max(...dp[str2.length]));