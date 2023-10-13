/* test.js */

// 작업의 계속 유무 체크
function ynCheck() {
  yn = confirm("작업을 계속 하시겠습니까?");
  if(yn) {
    alert("작업을 계속합니다.");
  }
  else {
    alert("작업을 중단합니다.");
  }
}
