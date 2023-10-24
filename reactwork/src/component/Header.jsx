import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      {/* <h2>이곳은 Header입니다.</h2> */}
      {/* 
      <a href="http://www.naver.com">Home</a>
      <a href="#">Comp1</a>
      <a href="#">Comp2</a>
      <a href="#">Comp3</a>
       */}
      {/* react에서는 a태그 대신에 router를 사용한다. router에는 href대신에 Link태그를 사용한다. */}
      <Link to = "/">Home</Link>
      <Link to = "/abc">Comp1</Link>
      <Link to = "/Comp2">Comp2</Link>
      <Link to = "/Comp3">Comp3</Link>
    </div>
  );
}

export default Header;