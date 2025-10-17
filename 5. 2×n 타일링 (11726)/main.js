// https://www.acmicpc.net/problem/11726

const input = Number(require('fs').readFileSync("baekjoon_js/algo/5. 2×n 타일링 (11726)/data1.txt").toString().trim());

// 2xn 크기 타일.
// 결과 1×2, 2×1 타일로 채우는 방법의 수 % 10007 출력

a = [0, 1, 2];
a = a.map(v => BigInt(v));

for (let i = 3; i < input + 1; i++) {
  a.push(BigInt(a[i - 1] + a[i - 2]));
}
console.log(String(a[input] % BigInt(10007)));