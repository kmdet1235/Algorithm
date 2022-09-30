// 1번문제. 없는 정수 사이의 합
// 0부터 9까지 숫자 중 일부가 들어있는 정수배열이 매개변수로 주어지고, 정수배열 내에 없는 숫자들의 합을 구하는 문제

function solution(arr1) {
  let answer = 45; // 0~9까지의 합이 45
  for (let i = 0; i < arr1.length; i++) {
    answer -= arr1[i]; // 45에서 배열속에 있는 숫자를 빼면 없는 숫자들의 합이 나옴
  }
  return answer;
}
let arr1 = [1, 3, 5, 9, 2, 4, 8, 0];
console.log(solution(arr1));
