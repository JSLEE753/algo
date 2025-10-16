// https://www.acmicpc.net/problem/1463

// n길이의 1차원배열 생성. 
// 100일 경우 : 
// [Inf,Inf,Inf,....,0]
// 99번째는 -1로 이동가능 : arr[99] = arr[100] + 1
// 50번째도 /2로 이동 가능 : arr[50] = arr[100] + 1

// 99번째에서는, 아래와 같이 이동가능
//  33번째로 /3로 이동가능 : arr[33] = arr[99] + 1
//  98번째로 -1로 이동가능 : arr[98] = arr[99] + 1 

// 50번째에서는, 아래와 같이 이동가능
// 25번째로 /2로 이동 가능 : arr[25] = arr[50] + 1
// 49번째로 -1로 이동 가능 : arr[49] = arr[50] + 1

// 주의사항으로, arr[k] !== -1일 경우, min(이전값,새로운값)


let n = Number(require('fs').readFileSync("C:/Users/admin/Desktop/javaprac/baekjoon_js/algo/2. 1로 만들기 (1463)/data2.txt").toString().trim());

const arr = Array.from({ length: n + 1 }, () => Infinity);
arr[n] = 0;

for (let i = n; i > 1; i--) {
  // 3배수일경우
  if (i % 3 === 0) {
    arr[i / 3] = Math.min(arr[i / 3], arr[i] + 1);
  }

  // 2의 배수일경우
  if (i % 2 === 0) {
    arr[i / 2] = Math.min(arr[i / 2], arr[i] + 1);
  }

  // 둘다 아닌경우
  arr[i - 1] = Math.min(arr[i - 1], arr[i] + 1);
}

console.log(arr[1]);

