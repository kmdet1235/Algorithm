// 두번째 문제. 이상한 문자 만들기2
// 문자열 s는 한개 이상의 단어로 구성되어 있으며, 각 단어마다 공백으로 구분되어 있음.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수 만들기
// 프로그래머스 응용 버전

function solution(s) {
  let answer = "";
  let arr = s.split(" ").join(""); // 먼저 빈칸을 제외한 모든 문자열을 기준으로 홀짝을 카운트 하기 때문에 join함수를 써서 다 붙여줌
  let arr2 = s.split(" "); // 나중에 띄어쓰기를 넣을때 카운팅하기 위한 배열
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      answer = answer + arr[i].toUpperCase(); // 짝수번째를 대문자로
    } else {
      answer = answer + arr[i].toLowerCase(); // 홀수번째를 소문자로
    }
  }
  let sum = 0; // sum값을 통해 단어의 길이만큼 띄워주기 위해서 만든 변수. 
  for (let j = 0; j < arr2.length; j++) {
    if (j < arr2.length - 1) {
      result += answer.substr(sum, arr2[j].length) + " "; // sum값이 단어의 길이만큼 누적되어 쌓이면서 단어마다 띄어쓰기를 넣어주게됨
      sum = sum + arr2[j].length; 
    } else {
      result += answer.substr(sum, arr2[j].length); // 마지막 등호 앞에 띄어쓰기는 안들어가도록 else구문 사용
    }
  }
  return result;
}
let s = "hang hae ninety nine";
console.log(solution(s));
