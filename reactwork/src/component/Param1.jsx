import React from 'react';
import { useParams } from 'react-router-dom';

const Param1 = () => {

  const { mid } = useParams();

  return (
    <div className='param1'>
      <h2>이곳은 Param1 입니다.</h2>
      <h3>요청 아이디 : {mid}</h3>
    </div>
  );
};

export default Param1;