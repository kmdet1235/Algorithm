// 세번째 문제. 같은 단어는 싫어
// 배열 arr와 정수 n이 주어지는데, 배열 arr에서 중복되는 단어를 전부 제거해야함. 
// 그 후에 정수 n에 위치한 문자에 따라 단어들을 오름차순 해야함.

function solution(arr, n) {
  let answer = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { // 첫단어부터 맨 마지막 단어까지 하나씩 순서대로 비교하며 중복된 것을 찾기위해 사용했음
      if (arr[i] == arr[j]) {
        answer = answer + arr.splice(i, 1); // 중복된 단어를 찾으면 answer이라는 배열에 따로 중복된 단어만 들어가도록 새로운 배열을 만들어줌
      }
    }
    if (answer !== arr[i]) {
      result.push(arr[i]); // 중복된 단어를 추출한 다음, 다시 원래 주어진 배열과 비교해서 중복된 단어를 제외한 배열을 새로 만들어줌
    }
  }
  result.sort(function (a, b) { // sort를 사용해서 n번째 있는 단어를 기준으로 오름차순 배열을 하게만들어줌
    var a1 = a[n];
    var b1 = b[n];
    if (a1 === b1) {
      return (a > b) - (a < b);
    } else {
      return (a1 > b1) - (a1 < b1);
    }
  });
  return result;
}
let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
let n = 2;
console.log(solution(arr, n));
