import React, { useState } from 'react';

// Hooks : 값(변경되는값들..)을 넣어주기위한 문법 : const [변수명, 함수명] = useState(초기값);
// 함수명은 변수명의 setter함수명이다.  setXxx()...

let param1Sw = 0;

const Comp2 = () => {

  const [param1, setParam1] = useState("아톰");
  
  const myFunc = () => {
    if(param1Sw === 0) {
      setParam1("안녕하세요");
      param1Sw = 1;
    }
    else {
      setParam1("아톰");
      param1Sw = 0;
    }
  }

  const [count, setCount] = useState(100);

  // count 값을 1씩 증가하는 함수
  const onIncrease = () => {
    setCount(count + 1);
  }

  // count 값을 1씩 감수하는 함수
  const onDecrease = () => {
    setCount(count - 1);
  }

  // text상자의 내용을 변경하면 값을 바꿔주기위한 state
  const [param2, setParam2] = useState('');
  const [paramV, setParamV] = useState('');

  // 텍스트박스의 값을 변경하면 param2변수의 값을 변경시켜서 화면에 출력하는 함수
  const textInput = (e) => {
    console.log(e.target);
    console.log(e.target.name, e.target.value);

    const { name, value } = e.target;   // 구조분해(구조분할)

    setParamV(name);
    setParam2(value);
  }

  // 버튼을 누르면 색을 변경시켜주는 state
  const [textColor, setTextColor] = useState('red');

  return (
    <div className='comp2'>
      <h3>Comp2</h3>
      <hr/>
      <div>
        {param1} &nbsp;&nbsp;
        <button onClick={myFunc}>버튼</button>
      </div>

      <hr/>
      <div>count : {count}</div>
      <div>
        <button onClick={onIncrease}>증가</button> &nbsp;
        <button onClick={onDecrease}>감소</button>
      </div>
      <hr/>

      <div>입력변수 : {paramV}</div>
      <div>입력값 : {param2}</div>
      <input type="text" name="param2" onChange={textInput} />
      <hr/>

      {/* CSS 적용하기 */}
      <p style={{backgroundColor:textColor, fontSize:'15pt', color:'#fff'}}>안녕하세요</p>
      <div>
        <button onClick={() => setTextColor('blue')}>파랑</button>
        <button onClick={() => setTextColor('green')}>녹색</button>
        <button onClick={() => setTextColor('red')}>빨강</button>
      </div>
    </div>
  );
};

export default Comp2;