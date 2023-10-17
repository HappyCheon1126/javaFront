// test11.js
// 날짜함수 연습
'use strict';

// 오늘날짜... Date()
const today = new Date();
const year = today.getFullYear(); // 연도 4자리
const month = today.getMonth();   // 월(기존월보다 -1)
const date = today.getDate();     // 일
const hour = today.getHours();    // 시
const minute = today.getMinutes();// 분
const second = today.getSeconds();// 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

console.log("today : ", today);
console.log("year : ", year);
console.log("month : ", month + 1);
console.log("date : ", date);
console.log("hour : ", hour);
console.log("minute : ", minute);
console.log("second : ", second);
console.log("yymmdd : ", yymmdd);

let weekStr = today.getDay(); // 요일
let week = ['일','월','화','수','목','금','토'];
console.log("요일 : ", weekStr);  // 일:0, 월:1, 화:2, 수:3, 목:4, 금:5, 토:6
console.log("요일 : ", week[weekStr]+'요일');

// 해당월의 마지막 일자
let lastDate = new Date(2023, 10, 0);
console.log("lastDate :", lastDate.getDate());

function dateChec() {
  let yy = document.getElementById("yy").value;
  let mm = document.getElementById("mm").value;

  let strDate = new Date(yy, mm, 0);

  demo.innerHTML = `${yy}년 ${mm}월 의 마지막 일자는? <font color='red'><b>${strDate.getDate()}</b></font> 입니다.`;
}