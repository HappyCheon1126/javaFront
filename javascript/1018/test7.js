// test7.js
// 정규식 연습
'use strict';

function regexCheck() {
  // 정규표현식변수를 먼저 만들어 놓고 수행한다.
  const regex1 = /atom/gm;   // 'atom'이라는 문자열이 포함되어 있으면 'true', 없으면 'false'반환
  const regex2 = /kbs|mbc|sbs|cjs/g; // mbc또는 kbs 또는 sbs 또는 cjb 문자열을 포함하고 있느냐?
  const regex3 = /홍길(동|순)/g;    // 홍길동 또는 홍길순을 포함하고 있느냐?
  const regex4 = /[a-z]/g;   // 영문 소문자를 포함하고 있느냐?
  const regex5 = /[^a-z]/g;   // 영문 소문자만 포함하고 있느냐?
  const regex6 = /[A-Z]/g;    // 영문 대문자를 포함하고 있느냐?
  const regex7 = /[^A-Z]/g;   // 영문 대문자만 포함하고 있느냐?
  const regex8 = /[0-9]/g;    // 숫자를 포함하고 있느냐?
  const regex9 = /[^0-9]/g;   // 숫자만 포함하고 있느냐?
  const regex10 = /[가-힣]/g; // 한글을 포함하고 있느냐?
  const regex11 = /[^가-힣]/g;// 한글만 포함하고 있느냐?
  const regex12 = /[a-zA-Z0-9]/g;  // 영문자와 숫자를 포함하고 있느냐?
  const regex13 = /[^a-zA-Z0-9]/g;  // 영문자와 숫자만 포함하고 있느냐?
  const regex14 = /[^a-zA-Z0-9_]/g;  // 아이디는 영문자 숫자 밑줄만 포함하느냐?

  const regex21 = /\./g  // '.'을 포함하고 있느냐?
  const regex22 = /\d/g  // 숫자을 포함하고 있느냐?
  const regex23 = /\D/g  // 숫자을 포함하고 있지 않느냐?
  const regex24 = /\w/g  // 영문자/숫자/_ 포함하고 있느냐?
  const regex25 = /\W/g  // 영문자/숫자/_ 포함하고 있지 않느냐?
  const regex26 = /\s/g  // 문장안에 공백(탭포함)을 포함하고 있느냐?

  const regex31 = /홍길자?/g  // ?앞의 글자가 0개나 1개 포함 유무?
  const regex32 = /홍길자+/g  // +앞의 글자가 1개이상 포함 유무?
  const regex33 = /홍길자*/g  // *앞의 글자가 0개이상 포함 유무?


  let content = document.getElementById("content").value.trim();

  if(content == "") alert("문자열을 입력하세요!");
  // else if(!content.match(regex1)) alert("본문에 atom문자열을 포함하고 있지 않습니다.")
  // else if(!content.match(regex2)) alert("mbc또는 kbs 또는 sbs 또는 cjb 문자열을 포함하고있지 않습니다.");
  //else if(!content.match(regex3)) alert("홍길동 또는 홍길순을 포함하고 있지 않습니다.");
  // else if(!regex4.test(content)) alert("영문 소문자를 포함하고 있지 않다.");
  // else if(regex5.test(content)) alert("영문 소문자만 포함하고 있지 않습니다.");
  // else if(!regex6.test(content)) alert("영문 대문자를 포함하고 있지 않다.");
  // else if(regex7.test(content)) alert("영문 대문자만 포함하고 있지 않다.");
  // else if(!regex8.test(content)) alert("숫자를 포함하고 있지 않다.");
  // else if(regex9.test(content)) alert("숫자만 포함하고 있지 않다.");
  // else if(!regex10.test(content)) alert("한글을 포함하고 있지 않다.");
  // else if(regex11.test(content)) alert("한글만 포함하고 있지 않다.");
  // else if(!regex12.test(content)) alert("영문자나 숫자를 포함하고 있지 않다.");
  // else if(regex13.test(content)) alert("영문자나 숫자만을 포함하고 있지 않다.");
  // else if(regex14.test(content)) alert("영문자나 숫자나 밑줄만을 포함하고 있지 않다.");
  // else if(!regex21.test(content)) alert("'.'을 포함하고 있지 않다.");
  // else if(!regex22.test(content)) alert("숫자을 포함하고 있지 않다.");
  // else if(regex23.test(content)) alert("숫자만을 포함하고 있지 않다.");
  // else if(!regex24.test(content)) alert("영문자와 숫자를 포함하고 있지 않다.");
  // else if(regex25.test(content)) alert("영문자나 숫자만을 포함하고 있지 않다.");
  // else if(!regex26.test(content)) alert("공백을 포함하고 있지 않다.");
  // else if(regex26.test(content)) alert("공백이 포함되어 있습니다.");
  // else if(regex31.test(content)) alert("'홍길' 또는 '홍길?'가 포함되어 있습니다.");
  // else if(regex32.test(content)) alert("'홍길자' 또는 '홍길자자~~'가 포함되어 있습니다.");
  else if(regex33.test(content)) alert(" '홍길' 또는 '홍길자' 또는 '홍길자자~~'가 포함되어 있습니다.");


  else alert("정상적으로 통과 되셨습니다.");
}