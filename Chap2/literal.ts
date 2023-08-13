// 'literal' 변수는 "tom", "linda", "jeff", "sue" 중 하나의 값을 가져야 함
let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "sue"; // "sue"로 값을 변경 가능
// literal = "john"; // 오류! "john"은 허용되지 않는 값
console.log(literal); // "sue" 출력
